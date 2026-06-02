"use client";

import { useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTrailTexture } from "@react-three/drei";
import * as THREE from "three";
import "./PixelTrail.css";

const GooeyFilter = () => (
  <svg style={{ display: "none" }}>
    <defs>
      <filter id="gooeyCodepen">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

const Scene = ({
  gridSize = 20,
  trailSize = 10,
  maxAge = 100,
  interpolate = true,
  color = "#0b7f86",
}: any) => {
  const groupRef = useRef<THREE.Group>(null);
  const { width, height } = useThree((state) => state.size);

  const hexToRGB = (hex: string) => {
    let c = hex.replace("#", "");
    if (c.length === 3) c = c.split("").map((x) => x + x).join("");
    const n = parseInt(c, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };

  const rgbColor = hexToRGB(color);
  const particleColor = new THREE.Color(rgbColor[0] / 255, rgbColor[1] / 255, rgbColor[2] / 255);

  // Create grid of particles
  const particlesRef = useRef<any[]>([]);
  const positionsRef = useRef<Float32Array | null>(null);

  useEffect(() => {
    if (!groupRef.current) return;

    const cols = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);
    const particles = [];

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        particles.push({
          x: i * gridSize - width / 2,
          y: j * gridSize - height / 2,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          age: Math.random() * maxAge,
        });
      }
    }
    particlesRef.current = particles;
  }, [width, height, gridSize, maxAge]);

  useFrame(({ mouse, viewport }) => {
    if (!groupRef.current || particlesRef.current.length === 0) return;

    const particles = particlesRef.current;
    const mx = (mouse.x * viewport.width) / 2;
    const my = (mouse.y * viewport.height) / 2;

    particles.forEach((p) => {
      const dx = mx - p.x;
      const dy = my - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = trailSize * 2;

      if (dist < maxDist) {
        const force = (1 - dist / maxDist) * 0.5;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      p.x += p.vx * 0.95;
      p.y += p.vy * 0.95;
      p.vx *= 0.98;
      p.vy *= 0.98;

      p.age = (p.age + 1) % maxAge;

      const index = particles.indexOf(p) * 3;
      if (positionsRef.current) {
        positionsRef.current[index] = p.x;
        positionsRef.current[index + 1] = p.y;
        positionsRef.current[index + 2] = Math.sin(p.age / maxAge * Math.PI) * 2;
      }
    });

    if (positionsRef.current) {
      (groupRef.current as any).children[0].geometry.attributes.position.needsUpdate = true;
    }
  });

  const points = particlesRef.current.length;
  const positions = new Float32Array(points * 3);

  particlesRef.current.forEach((p, i) => {
    positions[i * 3] = p.x;
    positions[i * 3 + 1] = p.y;
    positions[i * 3 + 2] = 0;
  });

  positionsRef.current = positions;

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={trailSize / 10}
          color={particleColor}
          transparent={true}
          opacity={0.8}
          sizeAttenuation={true}
        />
      </points>
    </group>
  );
};

export default function PixelTrail({
  className = "",
  gridSize = 20,
  trailSize = 10,
  maxAge = 100,
  interpolate = true,
  color = "#0b7f86",
  canvasProps = {},
  glProps = {},
  gooeyFilter = true,
}: any) {
  return (
    <div
      className={`pixel-trail-container ${className}`}
      style={{
        width: "100%",
        height: "100%",
        ...(gooeyFilter && { filter: "url(#gooeyCodepen)" }),
      }}
    >
      <GooeyFilter />
      <Canvas
        {...canvasProps}
        gl={{ antialias: false, alpha: true, ...glProps }}
        orthographic
        camera={{ position: [0, 0, 100], zoom: 1 }}
      >
        <Suspense fallback={null}>
          <Scene
            gridSize={gridSize}
            trailSize={trailSize}
            maxAge={maxAge}
            interpolate={interpolate}
            color={color}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
