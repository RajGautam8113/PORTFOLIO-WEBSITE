"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { SectionId } from "./portfolio-data"

type SectionContextType = {
  activeSection: SectionId
  setActiveSection: (id: SectionId) => void
  scrollToSection: (id: SectionId) => void
}

const SectionContext = createContext<SectionContextType | undefined>(undefined)

export function SectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>("home")

  const scrollToSection = useCallback((id: SectionId) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection, scrollToSection }}>
      {children}
    </SectionContext.Provider>
  )
}

export function useSection() {
  const ctx = useContext(SectionContext)
  if (!ctx) throw new Error("useSection must be used within SectionProvider")
  return ctx
}
