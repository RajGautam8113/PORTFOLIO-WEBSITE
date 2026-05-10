"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
} from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { PROFILE } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = `Hi Raj,%0A%0AMy name is ${encodeURIComponent(name)}.%0A%0A${encodeURIComponent(message)}%0A%0AReply to: ${encodeURIComponent(email)}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

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
  ];

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/35 outline-none transition focus:border-amber-300/50 focus:bg-white/[0.07]";

  return (
    <SectionWrapper
      id="contact"
      label="07 / Contact"
      planet="The Sun"
      title="Let's build something stellar."
      subtitle="Whether it's a project, a role, or a wild idea — open the comms channel."
    >
      <div className="grid gap-6 md:grid-cols-12">
        {/* Contact Cards */}
        <div className="md:col-span-5 grid gap-3 sm:grid-cols-2 md:grid-cols-1 content-start">
          {cards.map((c) => {
            const Icon = c.icon;
            const Wrapper = c.href ? "a" : "div";
            const props = c.href
              ? { href: c.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
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
                  <div className="truncate text-sm text-foreground/90">
                    {c.value}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
          <h3 className="text-lg font-medium text-foreground">
            Send a message
          </h3>
          <p className="mt-1 text-sm text-foreground/60">
            Fill the form — it'll open your email client ready to send.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Raj Kamal"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                Subject
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Let's connect!"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Hi Raj, I wanted to reach out about..."
                className={inputClass + " resize-none"}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={status === "sending"}
              className="w-full bg-amber-300 text-black hover:bg-amber-200 disabled:opacity-60"
            >
              {status === "sent" ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Opening your email client...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>

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
        <span className="font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} Raj Kamal Gautam
        </span>
        <span className="font-mono uppercase tracking-widest">
          Built in space • Next.js + R3F
        </span>
      </footer>
    </SectionWrapper>
  );
}
