"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, ChevronDown, MapPin, Calendar } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { EXPERIENCE } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function ExperienceSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <SectionWrapper
      id="experience"
      label="03 / Experience"
      planet="Jupiter"
      title="Real ships, real impact."
      subtitle="Click any role to expand the full mission log."
    >
      <div className="space-y-4">
        {EXPERIENCE.map((exp, idx) => {
          const open = openIdx === idx
          return (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md"
            >
              <button
                onClick={() => setOpenIdx(open ? null : idx)}
                aria-expanded={open}
                className="flex w-full items-start gap-4 p-5 text-left transition hover:bg-white/[0.04]"
              >
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-amber-300">
                  <Briefcase className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-medium text-foreground md:text-lg">{exp.role}</h3>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-foreground/55">
                      {exp.period}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground/70">
                    <span className="font-medium text-foreground/85">{exp.company}</span>
                    <span className="inline-flex items-center gap-1 text-xs">
                      <MapPin className="h-3 w-3" /> {exp.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs">
                      <Calendar className="h-3 w-3" /> {exp.period}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    "mt-2 h-4 w-4 shrink-0 text-foreground/60 transition-transform",
                    open && "rotate-180",
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 border-t border-white/10 px-5 py-5 pl-16">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-300" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
