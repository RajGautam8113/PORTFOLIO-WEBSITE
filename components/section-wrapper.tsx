"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type Props = {
  id: string
  label: string
  planet: string
  title: ReactNode
  subtitle?: ReactNode
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, label, planet, title, subtitle, children, className }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 py-24 md:px-8 md:py-32",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-8 max-w-2xl"
      >
        <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/60">
          <span className="h-px w-8 bg-gradient-to-r from-amber-300/0 via-amber-300/60 to-amber-300/0" />
          <span>{label}</span>
          <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-foreground/70">
            {planet}
          </span>
        </div>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/70 md:text-lg">{subtitle}</p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  )
}
