"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { PLANETS } from "@/lib/planets"
import type { SectionId } from "@/lib/portfolio-data"

type Props = {
  activeSection: SectionId
}

// Smoothly interpolates planet properties when active section changes.
export function AnimatedPlanet({ activeSection }: Props) {
  const groupRef = useRef<THREE.Group>(null)
  const planetRef = useRef<THREE.Mesh>(null)
  const atmosphereRef = useRef<THREE.Mesh>(null)
  const ringsRef = useRef<THREE.Mesh>(null)

  const target = PLANETS[activeSection]

  // Reusable color objects
  const targetColor = useMemo(() => new THREE.Color(), [])
  const targetEmissive = useMemo(() => new THREE.Color(), [])
  const targetAtmosphere = useMemo(() => new THREE.Color(), [])
  const targetRing = useMemo(() => new THREE.Color(), [])

  // Mutable current state for smooth interpolation
  const stateRef = useRef({
    radius: target.radius,
    emissiveIntensity: target.emissiveIntensity,
    atmosphereOpacity: target.atmosphereOpacity,
    rotationSpeed: target.rotationSpeed,
    ringInner: target.ringInner,
    ringOuter: target.ringOuter,
    ringOpacity: target.hasRings ? 0.85 : 0,
  })

  useFrame((_, delta) => {
    if (!planetRef.current || !atmosphereRef.current || !groupRef.current) return

    const lerp = Math.min(delta * 2.2, 1)

    // Interpolate scalar values
    stateRef.current.radius = THREE.MathUtils.lerp(stateRef.current.radius, target.radius, lerp)
    stateRef.current.emissiveIntensity = THREE.MathUtils.lerp(
      stateRef.current.emissiveIntensity,
      target.emissiveIntensity,
      lerp,
    )
    stateRef.current.atmosphereOpacity = THREE.MathUtils.lerp(
      stateRef.current.atmosphereOpacity,
      target.atmosphereOpacity,
      lerp,
    )
    stateRef.current.rotationSpeed = THREE.MathUtils.lerp(
      stateRef.current.rotationSpeed,
      target.rotationSpeed,
      lerp,
    )
    stateRef.current.ringInner = THREE.MathUtils.lerp(stateRef.current.ringInner, target.ringInner || 2.0, lerp)
    stateRef.current.ringOuter = THREE.MathUtils.lerp(stateRef.current.ringOuter, target.ringOuter || 2.4, lerp)
    stateRef.current.ringOpacity = THREE.MathUtils.lerp(
      stateRef.current.ringOpacity,
      target.hasRings ? 0.85 : 0,
      lerp,
    )

    // Apply scale instead of regenerating geometry
    const baseScale = stateRef.current.radius
    planetRef.current.scale.setScalar(baseScale)
    atmosphereRef.current.scale.setScalar(baseScale * 1.08)

    // Interpolate colors
    const planetMat = planetRef.current.material as THREE.MeshStandardMaterial
    targetColor.set(target.color)
    targetEmissive.set(target.emissive)
    planetMat.color.lerp(targetColor, lerp)
    planetMat.emissive.lerp(targetEmissive, lerp)
    planetMat.emissiveIntensity = stateRef.current.emissiveIntensity
    planetMat.roughness = THREE.MathUtils.lerp(planetMat.roughness, target.roughness, lerp)
    planetMat.metalness = THREE.MathUtils.lerp(planetMat.metalness, target.metalness, lerp)

    // Atmosphere
    const atmMat = atmosphereRef.current.material as THREE.MeshBasicMaterial
    targetAtmosphere.set(target.atmosphereColor)
    atmMat.color.lerp(targetAtmosphere, lerp)
    atmMat.opacity = stateRef.current.atmosphereOpacity

    // Rings
    if (ringsRef.current) {
      const ringMat = ringsRef.current.material as THREE.MeshBasicMaterial
      targetRing.set(target.ringColor)
      ringMat.color.lerp(targetRing, lerp)
      ringMat.opacity = stateRef.current.ringOpacity
      ringsRef.current.visible = stateRef.current.ringOpacity > 0.02

      // Recreate ring geometry when sizes change significantly
      const currentInner = (ringsRef.current.geometry as THREE.RingGeometry).parameters.innerRadius
      const currentOuter = (ringsRef.current.geometry as THREE.RingGeometry).parameters.outerRadius
      if (
        Math.abs(currentInner - stateRef.current.ringInner) > 0.05 ||
        Math.abs(currentOuter - stateRef.current.ringOuter) > 0.05
      ) {
        ringsRef.current.geometry.dispose()
        ringsRef.current.geometry = new THREE.RingGeometry(
          stateRef.current.ringInner,
          stateRef.current.ringOuter,
          96,
          1,
        )
      }
    }

    // Rotate planet & group
    planetRef.current.rotation.y += stateRef.current.rotationSpeed * delta
    groupRef.current.rotation.y += delta * 0.05
    // Gentle floating
    groupRef.current.position.y = Math.sin(performance.now() * 0.0004) * 0.15
  })

  return (
    <group ref={groupRef} position={[2.5, 0, 0]}>
      {/* Planet */}
      <mesh ref={planetRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1, 6]} />
        <meshStandardMaterial
          color={target.color}
          emissive={target.emissive}
          emissiveIntensity={target.emissiveIntensity}
          roughness={target.roughness}
          metalness={target.metalness}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial
          color={target.atmosphereColor}
          transparent
          opacity={target.atmosphereOpacity}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Rings */}
      <mesh ref={ringsRef} rotation={[Math.PI / 2.4, 0, 0]} visible={target.hasRings}>
        <ringGeometry args={[target.ringInner || 2.0, target.ringOuter || 2.4, 96, 1]} />
        <meshBasicMaterial
          color={target.ringColor}
          transparent
          opacity={target.hasRings ? 0.85 : 0}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}
