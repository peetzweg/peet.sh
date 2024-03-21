import { useSpring, animated } from '@react-spring/three';
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Group } from 'three';
/* eslint-disable-next-line */
export interface FeatPortfolioThreeProps {}

const AMOUNT = 80;
const WIDTH = 0.5;
const GAP = 0.005;

const Curtain = () => {
  const [active, setActive] = useState(0);
  // const { scale } = useSpring({ scale: active ? 1.5 : 0 });
  // const rotation = useSpringValue(0, {
  //   config: {
  //     mass: 2,
  //     friction: 5,
  //     tension: 80,
  //   },
  // });

  const { spring } = useSpring({
    spring: true,
    // config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });

  const scale = spring.to([0, 1], [1, 5]);
  const rotation = spring.to([0, 1], [0, 1.5]);
  const color = spring.to([0, 1], ['#6246ea', '#e45858']);

  const groupRef = useRef<Group>(null);
  useFrame(({ pointer }) => {
    if (groupRef.current) {
      const pointerX = pointer.x;
      if (pointerX > 0) {
        console.log('start');
        setActive(1);
      } else {
        console.log('stop');
        setActive(0);
      }

      // groupRef.current.children.forEach((mesh, index) => {
      //   if (pointer.x > 0) {
      //     mesh.rotation.y = 1.5;
      //   } else {
      //     mesh.rotation.y = 0;
      //   }
      // });
    }
  });

  return (
    <group ref={groupRef}>
      {Array(AMOUNT)
        .fill(true)
        .map((_, i) => (
          <animated.mesh
            key={i}
            position={[i * (WIDTH + GAP) - (AMOUNT * WIDTH + GAP) / 2, 0, 0]}
            rotation-y={rotation}
            castShadow
          >
            <boxGeometry args={[WIDTH, 50, GAP]} />
            <meshBasicMaterial color="#ddd" />
          </animated.mesh>
        ))}
    </group>
  );
};

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

export function FeatPortfolioThree(props: FeatPortfolioThreeProps) {
  const [clicked, setClicked] = useState(false);

  const springs = useSpring({
    color: clicked ? '#569AFF' : '#ff6d6d',
  });
  const handleClick = () => {
    console.log('clicked');
    setClicked((s) => !s);
  };

  return (
    <div className="">
      <Canvas style={{ height: '100vh' }}>
        <ambientLight intensity={0.8} />
        <pointLight intensity={1} position={[0, 6, 0]} />

        {/* <OrbitControls /> */}

        <mesh onClick={handleClick}>
          <sphereGeometry args={[1.5, 64, 32]} />
          <AnimatedMeshDistortMaterial
            speed={3}
            distort={0.5}
            color={springs.color}
          />
        </mesh>

        {/* <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshBasicMaterial color="black" />
        </mesh> */}

        {/* <mesh position={[0, 0, -3]}>
          <circleGeometry args={[10, 90]} />
          <meshBasicMaterial color="deeppink" />
        </mesh> */}

        {/* <mesh position={[0, 0, -4]}>
          <boxGeometry args={[50, 50, GAP]} />
          <meshBasicMaterial color="black" />
        </mesh> */}
        {/* <Curtain /> */}
      </Canvas>
    </div>
  );
}

export default FeatPortfolioThree;
