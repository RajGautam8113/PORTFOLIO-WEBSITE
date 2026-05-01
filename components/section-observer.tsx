"use client"

import { useEffect } from "react"
import { useSection } from "@/lib/section-context"
import { SECTIONS, type SectionId } from "@/lib/portfolio-data"

// Watches sections and updates the active section (which controls planet) as user scrolls.
export function SectionObserver() {
  const { setActiveSection } = useSection()

  useEffect(() => {
    const elements: { id: SectionId; el: HTMLElement }[] = SECTIONS.map((s) => ({
      id: s.id,
      el: document.getElementById(s.id) as HTMLElement,
    })).filter((s) => s.el)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with highest intersection ratio that's visible
        let best: { id: SectionId; ratio: number } | null = null
        for (const e of entries) {
          if (e.isIntersecting) {
            const id = (e.target as HTMLElement).id as SectionId
            if (!best || e.intersectionRatio > best.ratio) {
              best = { id, ratio: e.intersectionRatio }
            }
          }
        }
        if (best) setActiveSection(best.id)
      },
      {
        // Trigger when section is roughly centered in viewport
        rootMargin: "-35% 0px -35% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    )

    elements.forEach(({ el }) => observer.observe(el))
    return () => observer.disconnect()
  }, [setActiveSection])

  return null
}
