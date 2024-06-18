import { useGLTF } from "@react-three/drei";

const Lemon = (props) => {
  const { nodes, materials } = useGLTF("/models/lemon/lemon.gltf");
  return (
    <group {...props}>
      <group scale={0.08}>
        <mesh
          geometry={nodes.Lemon_Lemon_0.geometry}
          material={materials.Lemon}
          scale={100}
        />
      </group>
    </group>
  );
};

export default Lemon;

useGLTF.preload("/models/lemon/lemon.gltf");
