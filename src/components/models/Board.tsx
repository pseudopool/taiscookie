"use client";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense } from "react";
import Loading from "../loading";
import { MoonLoader } from "react-spinners";

type Props = {
  children: ReactNode;
};

const Board = ({ children }: Props) => {
  return (
    <div
      style={{
        height: "60vh",
        maxHeight: "1200px",
      }}
    >
      <Suspense
        fallback={
          <div className="w-full h-full flex justify-center items-center">
            <MoonLoader size={40} />
          </div>
        }
      >
        <Canvas>
          <OrbitControls autoRotate autoRotateSpeed={50} />
          <ambientLight intensity={5} />
          <group>{children}</group>
          <PerspectiveCamera makeDefault position={[20, 90, 80]} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Board;
