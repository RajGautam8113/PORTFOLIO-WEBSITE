"use client"

import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { PROFILE } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const cards = [
    {
      icon: Mail,
      label: "Email",
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: PROFILE.phone,
      href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: PROFILE.location,
      href: undefined,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "raj-gautam-dev",
      href: PROFILE.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "RajGautam8113",
      href: PROFILE.github,
    },
  ]

  return (
    <SectionWrapper
      id="contact"
      label="07 / Contact"
      planet="The Sun"
      title="Let's build something stellar."
      subtitle="Whether it's a project, a role, or a wild idea — open the comms channel."
    >
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-7 grid gap-3 sm:grid-cols-2">
          {cards.map((c) => {
            const Icon = c.icon
            const Wrapper = c.href ? "a" : "div"
            const props = c.href ? { href: c.href, target: "_blank", rel: "noopener noreferrer" } : {}
            return (
              <Wrapper
                key={c.label}
                {...(props as object)}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition hover:border-amber-300/30 hover:bg-white/[0.06]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-amber-300">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/55">
                    {c.label}
                  </div>
                  <div className="truncate text-sm text-foreground/90">{c.value}</div>
                </div>
              </Wrapper>
            )
          })}
        </div>

        <div className="md:col-span-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
          <h3 className="text-lg font-medium text-foreground">Quick message</h3>
          <p className="mt-1 text-sm text-foreground/70">
            Send me an email directly — I usually respond within 24 hours.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-5 w-full bg-amber-300 text-black hover:bg-amber-200"
          >
            <a href={`mailto:${PROFILE.email}?subject=Let's%20connect`}>
              <Send className="mr-2 h-4 w-4" />
              Email Raj
            </a>
          </Button>
          <div className="mt-4 flex items-center justify-center gap-2 text-foreground/60">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-foreground/50 md:flex-row">
        <span className="font-mono uppercase tracking-widest">© {new Date().getFullYear()} Raj Kamal Gautam</span>
        <span className="font-mono uppercase tracking-widest">Built in space • Next.js + R3F</span>
      </footer>
    </SectionWrapper>
  )
}
