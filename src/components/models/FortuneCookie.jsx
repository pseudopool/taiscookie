import React from "react";
import { useGLTF } from "@react-three/drei";

const FortuneCookie = (props) => {
  const { nodes, materials } = useGLTF(
    "/models/fortune_cookie/fortune_cookie.gltf"
  );

  return (
    <group {...props} dispose={null}>
      <group scale={0.8}>
        <mesh
          geometry={nodes.Model_material0_0.geometry}
          material={materials.material0}
          scale={100}
        />
      </group>
    </group>
  );
};

export default FortuneCookie;

useGLTF.preload("/models/fortune_cookie/fortune_cookie.gltf");
