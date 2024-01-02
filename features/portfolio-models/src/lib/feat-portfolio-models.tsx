import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import { Model as Tulip } from './models/Tulip';

/* eslint-disable-next-line */
export interface FeatPortfolioModelsProps {}

const RotatingTulip = () => {
  const mesh = useRef<Group>();
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta;
      mesh.current.rotation.x += delta / 10;
    }
  });
  return <Tulip ref={mesh as any} />;
};

export function FeatPortfolioModels(props: FeatPortfolioModelsProps) {
  return (
    <div>
      <Canvas style={{ height: '100vh' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <RotatingTulip />
      </Canvas>
    </div>
  );
}

export default FeatPortfolioModels;
