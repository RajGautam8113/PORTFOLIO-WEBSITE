"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PROFILE } from "@/lib/portfolio-data"
import { useSection } from "@/lib/section-context"

const ROLES = [
  "Software Engineer",
  "AI/ML Developer",
  "Aspiring Project Manager",
]

export function HeroSection() {
  const { scrollToSection } = useSection()
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 py-24 md:px-8"
    >
      <div className="grid gap-10 md:grid-cols-12 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:col-span-7"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-orange-300 bg-clip-text text-transparent">
              Raj Kamal Gautam
            </span>
          </h1>

          {/* Typing animation */}
          <div className="mt-4 h-8 font-mono text-lg text-amber-300 md:text-xl">
            {displayed}
            <span className="animate-pulse">|</span>
          </div>

          <p className="mt-3 max-w-xl text-pretty text-base leading-relaxed text-foreground/75 md:text-lg">
            I build scalable web &amp; AI/ML applications, lead cross-functional teams, and ship
            measurable outcomes — from forensic AI systems to crop intelligence platforms.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/60">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {PROFILE.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" /> {PROFILE.email}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-amber-300 text-black hover:bg-amber-200"
            >
              Explore Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-white/20 bg-white/5 text-foreground hover:bg-white/10"
            >
              Contact Me
            </Button>

            {/* Resume Download Button */}
            <a href="/resume.pdf" download="Raj_Kamal_Gautam_Resume.pdf">
              <Button
                size="lg"
                variant="outline"
                className="border-amber-300/40 bg-amber-300/10 text-amber-300 hover:bg-amber-300/20 gap-2"
              >
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </a>

            <div className="ml-auto flex items-center gap-2">
              
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground/80 transition hover:bg-white/10 hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground/80 transition hover:bg-white/10 hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-5"
        >
          <div className="relative ml-auto max-w-sm rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md">
            <div className="absolute -top-2 left-5 rounded-full border border-white/15 bg-background/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              orbit log
            </div>
            <ul className="space-y-3 font-mono text-xs text-foreground/75">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
                <span>
                  <span className="text-foreground">Data Analytics Intern</span> @ Pratinik Infotech • May 2026
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" />
                <span>
                  <span className="text-foreground">B.Tech CSE</span> @ Shri Ram Institute • CGPA 7.04
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>
                  <span className="text-foreground">SDE Intern</span> @ Acrostic IT Solutions • Jan–Nov 2024
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="text-foreground">Cybersecurity Intern</span> @ Cisco • Apr–Jun 2024
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
                <span>
                  <span className="text-foreground">Project Lead</span> • AI Forensic Analyzer &amp; Crop Intelligence
                </span>
              </li>
            </ul>
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] uppercase tracking-widest text-foreground/50">
              <span>Targeting</span>
              <span className="font-mono">Project Manager Role</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-foreground"
        aria-label="Scroll to about"
      >
        <span className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </span>
      </motion.button>
    </section>
  )
}