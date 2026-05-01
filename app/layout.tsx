import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Raj Kamal Gautam — Software Engineer & AI/ML Developer",
  description:
    "3D portfolio of Raj Kamal Gautam — B.Tech CSE student, software engineer, AI/ML developer, and aspiring Project Manager. Explore projects, skills, and experience across an interactive universe.",
  keywords: [
    "Raj Kamal Gautam",
    "Portfolio",
    "Software Engineer",
    "AI/ML Developer",
    "Project Manager",
    "Python",
    "Flask",
    "Three.js",
    "Next.js",
  ],
  authors: [{ name: "Raj Kamal Gautam" }],
  creator: "Raj Kamal Gautam",
  generator: "v0.app",
  openGraph: {
    title: "Raj Kamal Gautam — 3D Portfolio",
    description:
      "Explore an interactive 3D universe portfolio of Raj Kamal Gautam: projects, experience, education, and certifications.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#05060d",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark bg-background`}>
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
