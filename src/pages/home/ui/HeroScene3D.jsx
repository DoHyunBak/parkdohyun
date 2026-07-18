import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField() {
  const pointsRef = useRef(null);
  const positions = useMemo(() => {
    const values = new Float32Array(420 * 3);

    for (let index = 0; index < 420; index += 1) {
      const radius = 3.2 + ((index * 47) % 100) / 34;
      const angle = index * 2.399963;
      const height = ((index * 73) % 200) / 28 - 3.55;
      values[index * 3] = Math.cos(angle) * radius;
      values[index * 3 + 1] = height;
      values[index * 3 + 2] = Math.sin(angle) * radius;
    }

    return values;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.018;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.09) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.48}
        depthWrite={false}
      />
    </points>
  );
}

function Satellite({ position, scale = 1 }) {
  return (
    <mesh position={position} scale={scale}>
      <octahedronGeometry args={[0.12, 0]} />
      <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.18} />
    </mesh>
  );
}

function DeveloperCore() {
  const groupRef = useRef(null);
  const coreRef = useRef(null);
  const wireRef = useRef(null);
  const reduceMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const edges = useMemo(
    () => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.82, 2), 13),
    [],
  );

  useEffect(() => () => edges.dispose(), [edges]);

  useFrame((state, delta) => {
    if (!groupRef.current || !coreRef.current || !wireRef.current) return;

    const targetX = reduceMotion ? -0.08 : state.pointer.y * 0.32 - 0.08;
    const targetY = reduceMotion ? 0.4 : state.pointer.x * 0.52 + 0.4;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.045);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.045);

    if (!reduceMotion) {
      coreRef.current.rotation.x += delta * 0.14;
      coreRef.current.rotation.y += delta * 0.22;
      wireRef.current.rotation.y -= delta * 0.055;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.08;
    }
  });

  return (
    <group ref={groupRef} rotation={[-0.08, 0.4, 0.08]}>
      <mesh ref={coreRef} castShadow>
        <torusKnotGeometry args={[1.08, 0.3, 220, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#d8d8d4"
          metalness={0.92}
          roughness={0.17}
          clearcoat={1}
          clearcoatRoughness={0.12}
          envMapIntensity={1.3}
        />
      </mesh>

      <mesh scale={1.012}>
        <torusKnotGeometry args={[1.08, 0.3, 220, 32, 2, 3]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <lineSegments ref={wireRef} geometry={edges}>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.25} />
      </lineSegments>

      <mesh rotation={[Math.PI / 2.8, 0.2, 0]}>
        <torusGeometry args={[2.16, 0.012, 8, 220]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.42} />
      </mesh>
      <mesh rotation={[0.25, Math.PI / 2.2, 0.6]}>
        <torusGeometry args={[2.55, 0.008, 8, 220]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.18} />
      </mesh>

      <Satellite position={[2.05, 0.52, 0.35]} />
      <Satellite position={[-1.45, -1.62, 0.55]} scale={0.75} />
      <Satellite position={[0.15, 2.1, -0.25]} scale={0.55} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <fog attach="fog" args={["#050505", 6.2, 11]} />
      <ambientLight intensity={0.48} />
      <directionalLight position={[4, 5, 6]} intensity={3.2} color="#ffffff" />
      <pointLight position={[-4, -1, 3]} intensity={38} distance={8} color="#ffffff" />
      <pointLight position={[1, -4, -2]} intensity={24} distance={7} color="#8f8f8f" />
      <DeveloperCore />
      <ParticleField />
    </>
  );
}

export default function HeroScene3D() {
  return (
    <Canvas
      className="home-3d-canvas"
      camera={{ position: [0, 0, 6.6], fov: 42, near: 0.1, far: 30 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.outputColorSpace = THREE.SRGBColorSpace;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.08;
      }}
    >
      <Scene />
    </Canvas>
  );
}
