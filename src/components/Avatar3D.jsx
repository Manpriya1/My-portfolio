import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const AvatarModel = () => {
  const { scene } = useGLTF("public/manpriya_avatar.glb"); 
  return (
    <primitive
      object={scene}
      scale={2.5}
      position={[0, -1.5, 0]}
    />
  );
};

const Avatar3D = () => {
  return (
    <div style={{ height: "400px", width: "400px", margin: "0 auto" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight color="#00FF41" intensity={2} position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <AvatarModel />
        </Suspense>
        <OrbitControls enableZoom={false} enableRotate={false} /> {/* No rotation */}
      </Canvas>
    </div>
  );
};

export default Avatar3D;
