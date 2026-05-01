"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GraduationCap, ArrowUpRight } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { EDUCATION } from "@/lib/portfolio-data"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function EducationSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const open = openIdx !== null
  const item = openIdx !== null ? EDUCATION[openIdx] : null

  return (
    <SectionWrapper
      id="education"
      label="05 / Education"
      planet="Neptune"
      title="The trajectory so far."
      subtitle="Click any card to expand the full record."
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-sky-400/40 via-white/15 to-transparent md:left-1/2" />

        <div className="space-y-6">
          {EDUCATION.map((edu, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`relative flex flex-col md:grid md:grid-cols-2 md:gap-8 ${
                  isLeft ? "md:[&>*:first-child]:order-1" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Dot marker */}
                <span className="absolute left-5 top-6 z-10 -translate-x-1/2 md:left-1/2">
                  <span className="block h-3 w-3 rounded-full border-2 border-sky-300 bg-background" />
                </span>

                <button
                  type="button"
                  onClick={() => setOpenIdx(idx)}
                  className="group ml-12 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left backdrop-blur-md transition hover:-translate-y-0.5 hover:border-sky-300/30 md:ml-0"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sky-300">
                      <GraduationCap className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-foreground md:text-lg">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{edu.school}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="rounded-md border border-white/10 bg-black/20 px-2 py-0.5 font-mono text-[11px] tracking-wider text-foreground/80">
                      {edu.score}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-foreground/55 transition group-hover:text-foreground">
                      Details <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </button>

                <div className="hidden md:block" />
              </motion.div>
            )
          })}
        </div>
      </div>

      <Dialog open={open} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-xl border-white/10 bg-background/95 backdrop-blur-xl">
          {item && (
            <>
              <DialogHeader>
                <div className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
                  {item.period} • {item.score}
                </div>
                <DialogTitle className="text-2xl font-semibold text-foreground">{item.degree}</DialogTitle>
                <DialogDescription className="text-base text-foreground/75">{item.school}</DialogDescription>
              </DialogHeader>

              <div className="mt-2 space-y-3">
                <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">
                  Highlights
                </h4>
                <ul className="space-y-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-300" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  )
}
