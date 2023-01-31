export interface FeatProfileArenaProps {}

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
