"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Color, Group, Vector3 } from "three";
import {
  Board,
  King,
  Knight,
  Pawn,
  Queen,
  clamp01,
  easeInOut,
  squarePos,
} from "@/components/chess/chess-scene";

const LOOK = new Vector3(0.15, 0.12, 0.1);
const CYCLE = 10;

function pingPong(t: number) {
  if (t < 1.6) return 0;
  if (t < 3.8) return easeInOut(clamp01((t - 1.6) / 2.2));
  if (t < 5.6) return 1;
  if (t < 7.8) return 1 - easeInOut(clamp01((t - 5.6) / 2.2));
  return 0;
}

function PlateCamera() {
  useFrame(({ camera, clock }) => {
    const t = clock.elapsedTime;
    camera.position.set(
      4.55 + Math.sin(t * 0.18) * 0.14,
      3.05 + Math.sin(t * 0.14) * 0.06,
      5.35 + Math.cos(t * 0.16) * 0.1,
    );
    camera.lookAt(LOOK);
  });
  return null;
}

function LoopingKnight() {
  const ref = useRef<Group>(null);
  const from = useMemo(() => new Vector3(...squarePos(6, 0)), []);
  const to = useMemo(() => new Vector3(...squarePos(5, 2)), []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const u = pingPong(clock.elapsedTime % CYCLE);
    ref.current.position.x = from.x + (to.x - from.x) * u;
    ref.current.position.z = from.z + (to.z - from.z) * u;
    ref.current.position.y = from.y + Math.sin(u * Math.PI) * 0.85;
    ref.current.rotation.y = -0.35 + u * 0.7;
  });

  return (
    <group ref={ref} position={from.toArray()}>
      <Knight tone="gold" />
    </group>
  );
}

function Lights() {
  return (
    <>
      <color attach="background" args={["#07080c"]} />
      <fog attach="fog" args={[new Color("#07080c"), 8, 18]} />
      <ambientLight intensity={0.16} />
      <spotLight
        position={[5.2, 8.2, 3.6]}
        angle={0.38}
        penumbra={0.75}
        intensity={42}
        color="#f3d7a1"
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
      />
      <spotLight position={[-5.5, 3.2, -2.4]} angle={0.5} intensity={14} color="#8ea2ff" />
      <pointLight position={[0.2, 2.2, 0.4]} intensity={4.5} color="#e9bb6c" />
    </>
  );
}

export function ChessPlateScene() {
  return (
    <Canvas
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      dpr={[1, 1.25]}
      shadows
      camera={{ position: [4.55, 3.05, 5.35], fov: 28, near: 0.1, far: 40 }}
    >
      <Lights />
      <PlateCamera />
      <Board />
      <group position={squarePos(4, 0)}>
        <King tone="gold" />
      </group>
      <group position={squarePos(3, 0)}>
        <Queen tone="gold" />
      </group>
      <group position={squarePos(4, 1)}>
        <Pawn tone="gold" />
      </group>
      <group position={squarePos(4, 7)}>
        <King tone="ink" />
      </group>
      <group position={squarePos(4, 6)}>
        <Pawn tone="ink" />
      </group>
      <LoopingKnight />
    </Canvas>
  );
}
