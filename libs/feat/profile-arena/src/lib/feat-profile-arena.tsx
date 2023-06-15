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
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ position: 'fixed', top: 16, left: 16 }}>◠◠</div>

      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          fontWeight: '600',
          lineHeight: 1.7,
        }}
      >
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
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -1,
              height: '100vh',
              width: '100vw',
            }}
            camera={{ fov: 90, near: 0.1, far: 10, position: [0, 0, 1.5] }}
          >
            <Scene />
          </Canvas>
          <div></div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>peet.sh /</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <br />
                <a href={'/software'}>
                  <div>software</div>
                </a>
                <a href={'/client-work'}>
                  <div>client-work</div>
                </a>
                <a href={'/hardware'}>
                  <div>hardware</div>
                </a>
                <div>profiles /</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <br />

                <br />

                <br />

                <br />
                <a href={'https://github.com/peetzweg'}>
                  <div>github</div>
                </a>
                <a href={'https://twitter.com/peetzweg'}>
                  <div>twitter</div>
                </a>
                <a href={'https://www.linkedin.com/in/peetzweg/'}>
                  <div>linkedin</div>
                </a>
                <a href={'https://www.strava.com/athletes/18353420'}>
                  <div>strava</div>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 16,
            }}
          >
            <div>scroll for old website</div>
            <div>↓</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatProfileArena;
