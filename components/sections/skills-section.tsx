"use client"

import { motion } from "framer-motion"
import { Code2, Layers, Database, Wrench, BarChart3 } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { SKILLS } from "@/lib/portfolio-data"

const ICONS = [Code2, Layers, Database, Wrench, BarChart3]

export function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      label="02 / Skills"
      planet="Mars"
      title="Tools that power my missions."
      subtitle="A pragmatic stack across software engineering, AI/ML, data, and DevOps — chosen for shipping real, measurable outcomes."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group, idx) => {
          const Icon = ICONS[idx % ICONS.length]
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition hover:border-amber-300/30 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-amber-300">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-foreground/80">
                  {group.category}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-foreground/85 transition group-hover:border-white/20"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
