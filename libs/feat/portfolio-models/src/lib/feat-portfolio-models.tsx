import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import styles from './feat-portfolio-models.module.css';
import { Model as Tulip } from './models/Tulip';
import { Group, BoxGeometry, MeshStandardMaterial } from 'three';

/* eslint-disable-next-line */
export interface FeatPortfolioModelsProps {}

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

const RotatingTulip = () => {
  const mesh = useRef<Group>();
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta;
      mesh.current.rotation.x += delta / 10;
    }
  });
  return <Tulip ref={mesh as any} scale={4} />;
};

export function FeatPortfolioModels(props: FeatPortfolioModelsProps) {
  return (
    <div className={styles['container']}>
      <Canvas style={{ height: '100vh' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <RotatingTulip />
      </Canvas>
    </div>
  );
}

export default FeatPortfolioModels;
