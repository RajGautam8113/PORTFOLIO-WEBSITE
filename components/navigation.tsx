"use client"

import { useEffect, useState } from "react"
import { Menu, X, Rocket } from "lucide-react"
import { useSection } from "@/lib/section-context"
import { SECTIONS } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const { activeSection, scrollToSection } = useSection()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = (id: (typeof SECTIONS)[number]["id"]) => {
    scrollToSection(id)
    setOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-background/40 border-b border-white/10"
          : "backdrop-blur-md bg-background/20 border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <button
          onClick={() => handleClick("home")}
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          aria-label="Go to home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">
            <Rocket className="h-4 w-4 text-amber-300" />
          </span>
          <span className="font-mono text-sm tracking-widest text-foreground/90">RAJ.GAUTAM</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((s) => {
            const isActive = activeSection === s.id
            return (
              <li key={s.id}>
                <button
                  onClick={() => handleClick(s.id)}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors",
                    isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground/90",
                  )}
                >
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/20"
                    />
                  )}
                  <span className="relative">{s.label}</span>
                </button>
              </li>
            )
          })}
        </ul>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-background/85 backdrop-blur-xl">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {SECTIONS.map((s) => {
              const isActive = activeSection === s.id
              return (
                <li key={s.id}>
                  <button
                    onClick={() => handleClick(s.id)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                      isActive
                        ? "bg-white/10 text-foreground"
                        : "text-foreground/70 hover:bg-white/5 hover:text-foreground",
                    )}
                  >
                    <span className="uppercase tracking-wider">{s.label}</span>
                    <span className="font-mono text-[10px] text-foreground/50">{s.planet}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
