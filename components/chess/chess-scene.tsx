"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Color,
  Group,
  LatheGeometry,
  RepeatWrapping,
  SRGBColorSpace,
  TextureLoader,
  Vector2,
  Vector3,
} from "three";

const CLOSE = new Vector3(0.55, 0.42, 1.35);
const MID = new Vector3(2.8, 4.2, 6.2);
const FAR = new Vector3(0.2, 9.4, 11.2);
const LOOK = new Vector3(0, 0.15, 0);

function easeInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

function squarePos(file: number, rank: number, y = 0.22): [number, number, number] {
  return [file - 3.5, y, 3.5 - rank];
}

function CameraRig() {
  useFrame(({ camera, clock }) => {
    const t = clock.elapsedTime;
    if (t < 0.85) {
      const u = easeInOut(clamp01(t / 0.85));
      camera.position.lerpVectors(CLOSE, CLOSE, 1);
      camera.position.y = CLOSE.y + u * 0.08;
    } else if (t < 4.4) {
      const u = easeInOut(clamp01((t - 0.85) / 3.55));
      camera.position.lerpVectors(CLOSE, MID, u);
    } else {
      const u = easeInOut(clamp01((t - 4.4) / 2.8));
      camera.position.lerpVectors(MID, FAR, u);
    }
    camera.lookAt(LOOK);
  });
  return null;
}

function useBoardTextures() {
  const [dark, light] = useLoader(TextureLoader, [
    "/chess/wood-dark.jpg",
    "/chess/ivory-gold.jpg",
  ]);

  useEffect(() => {
    for (const tex of [dark, light]) {
      tex.colorSpace = SRGBColorSpace;
      tex.wrapS = RepeatWrapping;
      tex.wrapT = RepeatWrapping;
      tex.anisotropy = 8;
    }
  }, [dark, light]);

  return { dark, light };
}

function Board() {
  const { dark, light } = useBoardTextures();
  const squares = useMemo(() => {
    const list: { x: number; z: number; dark: boolean; key: string }[] = [];
    for (let rank = 0; rank < 8; rank++) {
      for (let file = 0; file < 8; file++) {
        list.push({
          x: file - 3.5,
          z: 3.5 - rank,
          dark: (file + rank) % 2 === 0,
          key: `${file}-${rank}`,
        });
      }
    }
    return list;
  }, []);

  return (
    <group>
      <mesh position={[0, -0.16, 0]} receiveShadow castShadow>
        <boxGeometry args={[8.7, 0.28, 8.7]} />
        <meshStandardMaterial color="#120f0c" metalness={0.45} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.0, 0]} receiveShadow>
        <boxGeometry args={[8.38, 0.05, 8.38]} />
        <meshStandardMaterial color="#c4a068" metalness={0.82} roughness={0.28} />
      </mesh>
      {squares.map((sq) => (
        <mesh key={sq.key} position={[sq.x, 0.08, sq.z]} receiveShadow castShadow>
          <boxGeometry args={[0.96, 0.1, 0.96]} />
          <meshStandardMaterial
            map={sq.dark ? dark : light}
            roughness={sq.dark ? 0.62 : 0.38}
            metalness={sq.dark ? 0.08 : 0.22}
          />
        </mesh>
      ))}
    </group>
  );
}

function lathe(points: [number, number][], segments = 20) {
  return new LatheGeometry(
    points.map(([x, y]) => new Vector2(x, y)),
    segments,
  );
}

function PieceMaterial({ tone }: { tone: "gold" | "ink" }) {
  const gold = tone === "gold";
  return (
    <meshStandardMaterial
      color={gold ? "#e4c990" : "#16151a"}
      metalness={gold ? 0.72 : 0.38}
      roughness={gold ? 0.22 : 0.48}
      envMapIntensity={1.2}
    />
  );
}

function Pawn({ tone }: { tone: "gold" | "ink" }) {
  const geo = useMemo(
    () =>
      lathe([
        [0, 0],
        [0.16, 0],
        [0.16, 0.05],
        [0.11, 0.07],
        [0.1, 0.22],
        [0.13, 0.26],
        [0.07, 0.3],
        [0.09, 0.38],
        [0, 0.38],
      ]),
    [],
  );
  return (
    <mesh geometry={geo} castShadow>
      <PieceMaterial tone={tone} />
    </mesh>
  );
}

function King({ tone }: { tone: "gold" | "ink" }) {
  const body = useMemo(
    () =>
      lathe([
        [0, 0],
        [0.2, 0],
        [0.2, 0.06],
        [0.13, 0.09],
        [0.12, 0.38],
        [0.16, 0.44],
        [0.08, 0.5],
        [0.1, 0.58],
        [0, 0.58],
      ]),
    [],
  );
  return (
    <group>
      <mesh geometry={body} castShadow>
        <PieceMaterial tone={tone} />
      </mesh>
      <mesh position={[0, 0.66, 0]} castShadow>
        <boxGeometry args={[0.045, 0.16, 0.045]} />
        <PieceMaterial tone={tone} />
      </mesh>
      <mesh position={[0, 0.64, 0]} castShadow>
        <boxGeometry args={[0.14, 0.04, 0.04]} />
        <PieceMaterial tone={tone} />
      </mesh>
    </group>
  );
}

function Queen({ tone }: { tone: "gold" | "ink" }) {
  const body = useMemo(
    () =>
      lathe([
        [0, 0],
        [0.2, 0],
        [0.2, 0.06],
        [0.13, 0.09],
        [0.12, 0.36],
        [0.17, 0.42],
        [0.08, 0.48],
        [0.1, 0.54],
        [0, 0.54],
      ]),
    [],
  );
  return (
    <group>
      <mesh geometry={body} castShadow>
        <PieceMaterial tone={tone} />
      </mesh>
      <mesh position={[0, 0.62, 0]} castShadow>
        <sphereGeometry args={[0.055, 16, 12]} />
        <PieceMaterial tone={tone} />
      </mesh>
    </group>
  );
}

function Knight({ tone }: { tone: "gold" | "ink" }) {
  return (
    <group>
      <mesh castShadow>
        <cylinderGeometry args={[0.17, 0.19, 0.07, 16]} />
        <PieceMaterial tone={tone} />
      </mesh>
      <mesh position={[0, 0.18, 0]} castShadow>
        <cylinderGeometry args={[0.09, 0.13, 0.28, 12]} />
        <PieceMaterial tone={tone} />
      </mesh>
      <mesh position={[0.04, 0.38, 0.02]} rotation={[0.15, 0.4, 0.15]} castShadow>
        <boxGeometry args={[0.12, 0.22, 0.2]} />
        <PieceMaterial tone={tone} />
      </mesh>
      <mesh position={[0.1, 0.48, 0.08]} rotation={[0.4, 0.2, 0]} castShadow>
        <boxGeometry args={[0.08, 0.1, 0.16]} />
        <PieceMaterial tone={tone} />
      </mesh>
    </group>
  );
}

function MovingKnight() {
  const ref = useRef<Group>(null);
  const from = useMemo(() => new Vector3(...squarePos(6, 0)), []);
  const to = useMemo(() => new Vector3(...squarePos(5, 2)), []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const u = easeInOut(clamp01((clock.elapsedTime - 2.15) / 1.85));
    ref.current.position.x = from.x + (to.x - from.x) * u;
    ref.current.position.z = from.z + (to.z - from.z) * u;
    ref.current.position.y = from.y + Math.sin(u * Math.PI) * 1.35;
    ref.current.rotation.y = -0.4 + u * 0.9;
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
      <fog attach="fog" args={[new Color("#07080c"), 9, 22]} />
      <ambientLight intensity={0.18} />
      <spotLight
        position={[5, 9, 4]}
        angle={0.42}
        penumbra={0.7}
        intensity={55}
        color="#f3d7a1"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight position={[-6, 4, -3]} angle={0.5} intensity={18} color="#8ea2ff" />
      <pointLight position={[0, 2.5, 0]} intensity={6} color="#e9bb6c" />
    </>
  );
}

export function ChessScene() {
  return (
    <Canvas
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      dpr={[1, 1.4]}
      shadows
      camera={{ position: CLOSE.toArray(), fov: 32, near: 0.1, far: 40 }}
    >
      <Lights />
      <CameraRig />
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
      <group position={squarePos(3, 7)}>
        <Queen tone="ink" />
      </group>
      <MovingKnight />
    </Canvas>
  );
}


