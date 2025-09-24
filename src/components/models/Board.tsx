"use client";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";

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
			className="w-full"
		>
			<Canvas>
				<OrbitControls autoRotate autoRotateSpeed={20} />
				<ambientLight intensity={5} />
				<group>{children}</group>
				<PerspectiveCamera makeDefault position={[20, 90, 80]} />
			</Canvas>
		</div>
	);
};

export default Board;
