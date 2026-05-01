"use client"

import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { Suspense } from "react"
import { AnimatedPlanet } from "./animated-planet"
import { OrbitingMoons } from "./orbiting-moons"
import { useSection } from "@/lib/section-context"
import { PLANETS } from "@/lib/planets"

export function SpaceScene() {
  const { activeSection } = useSection()
  const planet = PLANETS[activeSection]

  return (
    <div className="fixed inset-0 -z-10 bg-background">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0.5, 9], fov: 55 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#05060d"]} />
        <fog attach="fog" args={["#05060d", 18, 36]} />

        {/* Lights */}
        <ambientLight intensity={0.25} />
        <directionalLight position={[8, 6, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -4, -6]} intensity={0.6} color="#3b82f6" />
        <pointLight position={[10, 4, -6]} intensity={0.5} color="#f59e0b" />

        {/* Sun extra glow when contact section active */}
        {planet.isStar && <pointLight position={[2.5, 0, 0]} intensity={3.5} color="#ffb347" distance={20} />}

        <Suspense fallback={null}>
          <Stars radius={120} depth={60} count={6000} factor={4} saturation={0.2} fade speed={0.6} />
          <AnimatedPlanet activeSection={activeSection} />
          <OrbitingMoons />
        </Suspense>
      </Canvas>

      {/* Soft vignette overlay for readability */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, transparent 0%, transparent 40%, rgba(5,6,13,0.55) 80%, rgba(5,6,13,0.85) 100%)",
        }}
      />
    </div>
  )
}
