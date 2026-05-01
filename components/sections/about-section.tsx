"use client"

import { Languages, Target, Compass } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { PROFILE, LEADERSHIP } from "@/lib/portfolio-data"

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      label="01 / About"
      planet="Moon"
      title="A builder, a coordinator, a project-driven engineer."
      subtitle={PROFILE.summary}
    >
      <div className="grid gap-5 md:grid-cols-12">
        <div className="md:col-span-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
          <div className="mb-4 flex items-center gap-2 text-foreground">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">
              <Target className="h-4 w-4 text-amber-300" />
            </span>
            <h3 className="text-lg font-medium">Career Target</h3>
          </div>
          <p className="text-sm leading-relaxed text-foreground/75">{PROFILE.target}</p>
          <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] font-mono uppercase tracking-widest text-foreground/60">
            <span className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Google</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Microsoft</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Siemens</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-3 py-2">BMW</span>
          </div>
        </div>

        <div className="md:col-span-7 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
          <div className="mb-4 flex items-center gap-2 text-foreground">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">
              <Compass className="h-4 w-4 text-sky-300" />
            </span>
            <h3 className="text-lg font-medium">Leadership &amp; Activities</h3>
          </div>
          <ul className="space-y-3">
            {LEADERSHIP.map((l) => (
              <li
                key={l.role}
                className="rounded-lg border border-white/5 bg-white/[0.02] p-3 transition hover:border-white/15 hover:bg-white/[0.05]"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-medium text-foreground">{l.role}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/55">
                    {l.org}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-foreground/65">{l.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
          <div className="mb-4 flex items-center gap-2 text-foreground">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">
              <Languages className="h-4 w-4 text-emerald-300" />
            </span>
            <h3 className="text-lg font-medium">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {PROFILE.languages.map((l) => (
              <span
                key={l.name}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-foreground/85"
              >
                {l.name}
                <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  {l.level}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
