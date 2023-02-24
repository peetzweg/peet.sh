import { Environment, Float, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export interface FeatProfileArenaProps {}

const Scene = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls
        makeDefault
        autoRotate
        enableDamping
        rotateSpeed={1}
        autoRotateSpeed={4}
        enableZoom={false}
      />

      <Float floatIntensity={1} speed={1} floatingRange={[-0.05, 0.05]}>
        <mesh
          scale={0.7}
          castShadow
          position={[0, 0, 0]}
          rotation={[0, 0, 0.5]}
        >
          <meshStandardMaterial color="#C8A86E" metalness={0} roughness={1} />

          <sphereGeometry args={[1, 128, 128]} />
        </mesh>
      </Float>

      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
    </>
  );
};

export function FeatProfileArena(props: FeatProfileArenaProps) {
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
            camera={{ fov: 90, near: 0.1, far: 10, position: [0.5, 0.5, 1] }}
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
