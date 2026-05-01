"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

type Moon = {
  radius: number
  distance: number
  speed: number
  offset: number
  tilt: number
  color: string
}

const MOONS: Moon[] = [
  { radius: 0.18, distance: 5.5, speed: 0.4, offset: 0, tilt: 0.2, color: "#cfd8dc" },
  { radius: 0.12, distance: 7.0, speed: 0.25, offset: 1.7, tilt: -0.35, color: "#90a4ae" },
  { radius: 0.22, distance: 8.5, speed: 0.18, offset: 3.0, tilt: 0.5, color: "#b0bec5" },
]

export function OrbitingMoons() {
  const groupRef = useRef<THREE.Group>(null)
  const moonRefs = useRef<(THREE.Mesh | null)[]>([])

  const moonData = useMemo(() => MOONS, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    moonData.forEach((m, i) => {
      const mesh = moonRefs.current[i]
      if (!mesh) return
      const angle = t * m.speed + m.offset
      mesh.position.x = Math.cos(angle) * m.distance
      mesh.position.z = Math.sin(angle) * m.distance
      mesh.position.y = Math.sin(angle * 0.5) * m.tilt
      mesh.rotation.y += 0.02
    })
  })

  return (
    <group ref={groupRef} position={[2.5, 0, 0]}>
      {moonData.map((m, i) => (
        <mesh
          key={i}
          ref={(el) => {
            moonRefs.current[i] = el
          }}
        >
          <icosahedronGeometry args={[m.radius, 2]} />
          <meshStandardMaterial color={m.color} roughness={0.95} metalness={0.05} />
        </mesh>
      ))}
    </group>
  )
}
