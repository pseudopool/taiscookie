import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { Euler, Mesh } from "three";

const FortuneCookie = (props: GroupProps) => {
  const { nodes, materials } = useGLTF(
    "/models/fortune_cookie/fortune_cookie.gltf"
  );
  const [rotation, setRotation] = useState(new Euler(0, 0, 0));

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const xRotation = (clientY / windowHeight - 0.5) * Math.PI * 2; // Rotate up to 360 degrees
      const yRotation = (clientX / windowWidth - 0.5) * Math.PI * 2; // Rotate up to 360 degrees

      setRotation(new Euler(xRotation, yRotation, 0));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <group {...props} dispose={null}>
      <group scale={0.8} rotation={rotation}>
        <mesh
          geometry={(nodes.Model_material0_0 as Mesh).geometry}
          material={materials.material0}
          scale={100}
        />
      </group>
    </group>
  );
};

export default FortuneCookie;

useGLTF.preload("/models/fortune_cookie/fortune_cookie.gltf");
