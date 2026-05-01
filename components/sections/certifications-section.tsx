"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, ArrowUpRight } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { CERTIFICATIONS } from "@/lib/portfolio-data"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function CertificationsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const open = openIdx !== null
  const cert = openIdx !== null ? CERTIFICATIONS[openIdx] : null

  return (
    <SectionWrapper
      id="certifications"
      label="06 / Certifications"
      planet="Venus"
      title="Stamps from the journey."
      subtitle="Tap any badge to learn what it covers."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATIONS.map((c, idx) => (
          <motion.button
            key={c.name}
            type="button"
            onClick={() => setOpenIdx(idx)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.5, delay: idx * 0.07 }}
            whileHover={{ y: -3 }}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left backdrop-blur-md transition hover:border-amber-300/30"
          >
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-amber-300">
              <Award className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-medium leading-snug text-foreground">{c.name}</h3>
            <p className="mt-1 text-xs text-foreground/60">{c.issuer}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-foreground/50 transition group-hover:text-foreground/85">
              View <ArrowUpRight className="h-3 w-3" />
            </span>
          </motion.button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-lg border-white/10 bg-background/95 backdrop-blur-xl">
          {cert && (
            <>
              <DialogHeader>
                <div className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
                  Issued by {cert.issuer}
                </div>
                <DialogTitle className="text-xl font-semibold text-foreground">{cert.name}</DialogTitle>
                <DialogDescription className="text-base text-foreground/75">{cert.detail}</DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  )
}
