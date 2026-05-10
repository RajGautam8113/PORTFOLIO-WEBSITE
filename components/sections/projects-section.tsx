"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, Github, Sparkles } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { PROJECTS } from "@/lib/portfolio-data"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function ProjectsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const open = openIdx !== null
  const project = openIdx !== null ? PROJECTS[openIdx] : null

  return (
    <SectionWrapper
      id="projects"
      label="04 / Projects"
      planet="Saturn"
      title="Missions I've led from launchpad to orbit."
      subtitle="Click any card to open the full case study."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:border-amber-300/30"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
                <Sparkles className="h-3 w-3 text-amber-300" />
                {p.role}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/55">
                {p.period}
              </span>
            </div>

            <h3 className="text-xl font-medium text-foreground md:text-2xl">{p.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">{p.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.slice(0, 6).map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/10 bg-black/20 px-2 py-0.5 text-[11px] font-medium text-foreground/80"
                >
                  {s}
                </span>
              ))}
              {p.stack.length > 6 && (
                <span className="rounded-md border border-white/10 bg-black/20 px-2 py-0.5 text-[11px] font-medium text-foreground/60">
                  +{p.stack.length - 6}
                </span>
              )}
            </div>

            {/* Live Demo + GitHub + Case Study buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {p.demo && (
                
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-amber-300/40 bg-amber-300/10 px-3 py-1.5 text-xs font-medium text-amber-300 transition hover:bg-amber-300/20"
                >
                  <ExternalLink className="h-3 w-3" />
                  Live Demo
                </a>
              )}
              {p.github && (
                
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/80 transition hover:bg-white/10"
                >
                  <Github className="h-3 w-3" />
                  GitHub
                </a>
              )}
              <button
                onClick={() => setOpenIdx(idx)}
                className="ml-auto inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-foreground/50 transition hover:text-foreground"
              >
                Case Study
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <span aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full border border-amber-300/10" />
            <span aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full border border-amber-300/5" />
          </motion.div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-2xl border-white/10 bg-background/95 backdrop-blur-xl">
          {project && (
            <>
              <DialogHeader>
                <div className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
                  {project.role} • {project.period}
                </div>
                <DialogTitle className="text-2xl font-semibold text-foreground">{project.name}</DialogTitle>
                <DialogDescription className="text-base text-foreground/75">{project.tagline}</DialogDescription>
              </DialogHeader>

              <div className="mt-2 space-y-5">
                <div>
                  <h4 className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">Highlights</h4>
                  <ul className="space-y-2">
                    {project.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-300" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-foreground/80">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-300 transition hover:bg-amber-300/20">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-white/10">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  )
}