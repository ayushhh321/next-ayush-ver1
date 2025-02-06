import styles from '../styles/TechStack.module.css';

const TechStack = () => {
  return ( <section className={`${styles.techstack} section`} id="techstack">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Tech Stack</h2>
          </div>
        </div>
        <div className="row">
          <div className="section-title padd-15">
            <h2>Programming Languages</h2>
          </div>
        </div>
        <div className="row techstack__elements">
          {/* Programming Languages */}
          <div className="techstack-item padd-15 mix web">
            <div className="techstack-item-inner shadow-dark" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div className="techstack-img">
                <img style={{ height: '60px', width: '60px' }} src="https://cdn.iconscout.com/icon/free/png-512/free-c-57-1175191.png?f=webp&w=256" alt="C" />
              </div>
              <div className="techstack-name" style={{ marginTop: '10px', fontSize: '14px', color: 'red', fontFamily: "'Times New Roman', Times, serif", textAlign: 'center' }}>
                C
              </div>
            </div>
          </div>

          <div className="techstack-item padd-15 mix web">
            <div className="techstack-item-inner shadow-dark" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div className="techstack-img">
                <img style={{ height: '60px', width: '60px' }} src="https://cdn.iconscout.com/icon/free/png-512/free-c-4-226082.png?f=webp&w=256" alt="C++" />
              </div>
              <div className="techstack-name" style={{ marginTop: '10px', fontSize: '14px', color: 'red', fontFamily: "'Times New Roman', Times, serif", textAlign: 'center' }}>
                C++
              </div>
            </div>
          </div>

          {/* Add more tech stack items here */}
        </div>

        {/* Cloud & DevOps Stack */}
        <div className="row">
          <div className="section-title padd-15">
            <h2>Cloud & DevOps Stack</h2>
          </div>
        </div>
        <div className="row techstack__elements">
          <div className="techstack-item padd-15 mix app">
            <div className="techstack-item-inner shadow-dark" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div className="techstack-img">
                <img style={{ height: '60px', width: '60px' }} src="https://cdn.iconscout.com/icon/free/png-512/free-python-2-226051.png?f=webp&w=256" alt="Python" />
              </div>
              <div className="techstack-name" style={{ marginTop: '10px', fontSize: '14px', color: 'red', fontFamily: "'Times New Roman', Times, serif", textAlign: 'center' }}>
                Python
              </div>
            </div>
          </div>

          {/* Add more Cloud & DevOps items here */}
        </div>

        {/* AWS Services */}
        <div className="row">
          <div className="section-title padd-15">
            <h2>AWS Services</h2>
          </div>
        </div>
        <div className="row techstack__elements">
          <div className="techstack-item padd-15 mix app">
            <div className="techstack-item-inner shadow-dark" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div className="techstack-img">
                <img style={{ height: '60px', width: '60px' }} src="https://icon.icepanel.io/AWS/svg/Compute/EC2.svg" alt="AWS EC2" />
              </div>
              <div className="techstack-name" style={{ marginTop: '10px', fontSize: '14px', color: 'red', fontFamily: 'system-ui', textAlign: 'center' }}>
                AWS EC2
              </div>
            </div>
          </div>

          {/* Add more AWS services here */}
        </div>

        {/* Version Control */}
        <div className="row">
          <div className="section-title padd-15">
            <h2>Version Control</h2>
          </div>
        </div>
        <div className="row techstack__elements">
          <div className="techstack-item padd-15 mix app">
            <div className="techstack-item-inner shadow-dark">
              <div className="techstack-img tooltip">
                <img style={{ height: '60px', width: '60px', padding: '-50%' }} src="https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=webp&w=256" alt="Git" />
                <div className="techstack-name" style={{ marginTop: '10px', fontSize: '14px', color: 'red', fontFamily: 'system-ui', textAlign: 'center' }}>
                  Git
                </div>
              </div>
            </div>
          </div>

          <div className="techstack-item padd-15 mix app">
            <div className="techstack-item-inner shadow-dark">
              <div className="techstack-img tooltip">
                <img style={{ height: '60px', width: '60px', padding: '-50%' }} src="https://cdn.iconscout.com/icon/free/png-512/free-github-159-721954.png?f=webp&w=256" alt="Github" />
                <div className="techstack-name" style={{ marginTop: '10px', fontSize: '14px', color: 'red', fontFamily: 'system-ui', textAlign: 'center' }}>
                  GitHub
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Web/App Dev */}
        <div className="row">
          <div className="section-title padd-15">
            <h2>Web/App Dev</h2>
          </div>
        </div>
        <div className="row techstack__elements">
          <div className="techstack-item padd-15 mix web">
            <div className="techstack-item-inner shadow-dark" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div className="techstack-img">
                <img style={{ height: '60px', width: '60px' }} src="https://cdn.iconscout.com/icon/free/png-512/free-html5-42-1175210.png?f=webp&w=256" alt="HTML5" />
              </div>
              <div className="techstack-name" style={{ marginTop: '10px', fontSize: '14px', color: 'red', fontFamily: 'system-ui', textAlign: 'center' }}>
                HTML5
              </div>
            </div>
          </div>

          <div className="techstack-item padd-15 mix web">
            <div className="techstack-item-inner shadow-dark" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div className="techstack-img">
                <img style={{ height: '60px', width: '60px' }} src="https://cdn.iconscout.com/icon/free/png-512/free-css3-8-1175200.png?f=webp&w=256" alt="CSS3" />
              </div>
              <div className="techstack-name" style={{ marginTop: '10px', fontSize: '14px', color: 'red', fontFamily: 'system-ui', textAlign: 'center' }}>
                CSS3
              </div>
            </div>
          </div>
        </div>

        {/* Designing Section */}
        <div className="row">
          <div className="section-title padd-15">
            <h2>Designing</h2>
          </div>
        </div>
        <div className="row techstack__elements">
          <div className="techstack-item padd-15 mix app">
            <div className="techstack-item-inner shadow-dark" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div className="techstack-img">
                <img style={{ height: '60px', width: '60px' }} src="https://cdn.iconscout.com/icon/free/png-512/free-figma-3521426-2944870.png?f=webp&w=256" alt="Figma" />
              </div>
              <div className="techstack-name" style={{ marginTop: '10px', fontSize: '14px', color: 'red', fontFamily: 'system-ui', textAlign: 'center' }}>
                Figma
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;