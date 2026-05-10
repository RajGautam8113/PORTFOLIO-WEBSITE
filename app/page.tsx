"use client";

import dynamic from "next/dynamic";
import { SectionProvider } from "@/lib/section-context";
import { Navigation } from "@/components/navigation";
import { SectionObserver } from "@/components/section-observer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationSection } from "@/components/sections/education-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";

// Load 3D scene only on the client to avoid SSR issues with WebGL
const SpaceScene = dynamic(
  () => import("@/components/space/space-scene").then((m) => m.SpaceScene),
  {
    ssr: false,
    loading: () => <div className="fixed inset-0 -z-10 bg-[#05060d]" />,
  },
);

export default function HomePage() {
  return (
    <SectionProvider>
      <SpaceScene />
      <Navigation />
      <SectionObserver />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </SectionProvider>
  );
}
