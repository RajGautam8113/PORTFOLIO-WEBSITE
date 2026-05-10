"use client"
import { motion } from "framer-motion"
import { Code2, Layers, Database, Wrench, BarChart3 } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { SKILLS } from "@/lib/portfolio-data"

const ICONS = [Code2, Layers, Database, Wrench, BarChart3]

const SKILL_LEVELS: Record<string, number> = {
  // Languages
  Python: 90, JavaScript: 75, Java: 65, "C++": 65, SQL: 80,
  // Frameworks
  Flask: 85, FastAPI: 75, TensorFlow: 70, PyTorch: 72, "Scikit-learn": 78, OpenCV: 68, spaCy: 72,
  // Databases
  MySQL: 80, SQLite3: 75,
  // DevOps
  Docker: 72, Git: 85, GitHub: 85, GitLab: 70, Ngrok: 65,
  // Analytics
  "Power BI": 75, "Excel (Advanced)": 78,
}

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
              <ul className="space-y-3">
                {group.items.map((item) => {
                  const level = SKILL_LEVELS[item] ?? 70
                  return (
                    <li key={item}>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-xs font-medium text-foreground/85">{item}</span>
                        <span className="font-mono text-[10px] text-foreground/50">{level}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                          className="h-1.5 rounded-full bg-gradient-to-r from-amber-300 to-orange-400"
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}