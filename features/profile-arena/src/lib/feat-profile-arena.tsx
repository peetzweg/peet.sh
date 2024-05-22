import { Circle, useTexture } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const SCALE = 0.25;
const Scene = () => {
  const [cyan, magenta, yellow] = useTexture([
    '/set2/1.png',
    '/set2/2.png',
    '/set2/3.png',
  ]);

  const cyanRef = useRef(null);
  const magentaRef = useRef(null);
  const yellowRef = useRef(null);
  useFrame((state, delta) => {
    if (cyanRef.current && magentaRef.current && yellowRef.current) {
      cyanRef.current.rotation.z += delta * SCALE;
      magentaRef.current.rotation.z -= delta * SCALE * 2;
      yellowRef.current.rotation.z += delta * SCALE * 4;
    }
  });

  return (
    <>
      <ambientLight intensity={1} />

      <Circle position={[0, 0, 0.001]} ref={cyanRef} args={[undefined, 90]}>
        <meshStandardMaterial map={cyan} transparent={true} />
      </Circle>

      <Circle
        position={[0, 0, 0]}
        rotation={[0, 0, 2]}
        ref={magentaRef}
        args={[undefined, 90]}
      >
        <meshStandardMaterial map={magenta} transparent={true} />
      </Circle>

      <Circle
        position={[0, 0, -0.001]}
        rotation={[0, 0, 1]}
        ref={yellowRef}
        args={[undefined, 90]}
      >
        <meshStandardMaterial map={yellow} transparent={true} />
      </Circle>
    </>
  );
};

export function FeatProfileArena() {
  return (
    <div className="flex w-screen h-screen flex-row justify-between flex-wrap">
      <div className="fixed top-2 left-4">◠◠</div>

      <div className="w-full flex flex-col justify-center items-center">
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Canvas
            className="w-screen h-screen absolute top-0 left-0 -z-10"
            style={{
              position: 'absolute',
            }}
            camera={{ fov: 90, near: 0.1, far: 10, position: [0, 0, 1.5] }}
          >
            <Scene />
          </Canvas>

          <div>
            <br />
          </div>

          <div>
            <div className="grid grid-cols-3 gap-4">
              <div className="justify-end flex">
                <div>peet.sh /</div>
              </div>

              <div className="flex flex-col">
                <a className="underline" href={'/software'}>
                  software
                </a>
                <a className="underline" href={'/client-work'}>
                  client-work
                </a>
                <a className="underline" href={'/hardware'}>
                  hardware
                </a>
                <a className="underline" href={'/posts'}>
                  posts
                </a>
                <div>profiles /</div>
              </div>

              <div className="grid grid-rows-8">
                <div>
                  <br />
                </div>
                <div>
                  <br />
                </div>
                <div>
                  <br />
                </div>
                <div>
                  <br />
                </div>

                <a href={'https://github.com/peetzweg'} className="underline">
                  github
                </a>
                <a className="underline" href={'https://twitter.com/peetzweg'}>
                  twitter
                </a>
                <a
                  className="underline"
                  href={'https://www.linkedin.com/in/peetzweg/'}
                >
                  linkedin
                </a>
                <a
                  className="underline"
                  href={'https://www.strava.com/athletes/18353420'}
                >
                  strava
                </a>
                <a
                  className="underline"
                  href={
                    'https://www.goodreads.com/user/show/150027885-peetzweg'
                  }
                >
                  goodreads
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>scroll for playground</div>
            <div>↓</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatProfileArena;
