import styles from '../styles/Portfolio.module.css';

const Portfolio = () => {
  return (
    <section className={`${styles.portfolio} section`} id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Projects</h2>
          </div>
        </div>

        <div className="row portfolio__elements">
          <div className="portfolio-item padd-15 mix app">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src="images/projects/ayush-s3-optimized.webp" alt="" />
                <center>
                  <a target="_blank" href="https://github.com/ayushhh321/Optimized-Static-Hosting.git" className="btn hire-me" style={{ marginRight: '0px', marginTop: '10px', marginBottom: '10px' }}>
                    <i className="fa-solid fa-code"></i>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/posts/ayushhh321_optimizedabrstaticabrwebsiteabrhostingabrusingabraws-activity-7212711621779984384-0toY?utm_source=share&utm_medium=member_desktop" className="btn hire-me" style={{ marginRight: '0px' }}>
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </center>
              </div>
            </div>
          </div>

          <div className="portfolio-item padd-15 mix app">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src="images/projects/ayush-nodejs-deploy.webp" alt="" />
                <center>
                  <a target="_blank" href="https://github.com/ayushhh321/Pearl-Ayushg.git" className="btn hire-me" style={{ marginRight: '0px', marginTop: '10px', marginBottom: '10px' }}>
                    <i className="fa-solid fa-code"></i>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/posts/ayushhh321_connections-aws-alb-activity-7210692434358398978--ttT?utm_source=share&utm_medium=member_desktop" className="btn hire-me" style={{ marginRight: '0px' }}>
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </center>
              </div>
            </div>
          </div>

          <div className="portfolio-item padd-15 mix app">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src="images/projects/ayush-nextjs-deploy.webp" alt="" />
                <center>
                  <a target="_blank" href="https://github.com/ayushhh321/Nestjs-Deploy-On-EC2.git" className="btn hire-me" style={{ marginRight: '0px', marginTop: '10px', marginBottom: '10px' }}>
                    <i className="fa-solid fa-code"></i>
                  </a>
                </center>
              </div>
            </div>
          </div>

          <div className="portfolio-item padd-15 mix app">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src="images/projects/ayush-linux-banner.webp" alt="" />
                <center>
                  <a target="_blank" href="https://github.com/ayushhh321/Learning-linux.git" className="btn hire-me" style={{ marginRight: '0px', marginTop: '10px', marginBottom: '10px' }}>
                    <i className="fa-solid fa-code"></i>
                  </a>
                </center>
              </div>
            </div>
          </div>

          <div className="portfolio-item padd-15 mix web">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src="images/projects/ayush-portfolio.webp" alt="" />
                <center>
                  <a target="_blank" href="https://github.com/ayushhh321/Portfolio-Ayush.git" className="btn hire-me" style={{ marginRight: '0px', marginTop: '10px', marginBottom: '10px' }}>
                    <i className="fa-solid fa-code"></i>
                  </a>
                  <a target="_blank" href="https://guptaayush.me" className="btn hire-me" style={{ marginRight: '0px' }}>
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </center>
              </div>
            </div>
          </div>

          <div className="portfolio-item padd-15 mix app">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src="images/projects/ayush-iac-arch.webp" alt="" />
                <center>
                  <a target="_blank" href="https://github.com/ayushhh321/IaC.git" className="btn hire-me" style={{ marginRight: '0px', marginTop: '10px', marginBottom: '10px' }}>
                    <i className="fa-solid fa-code"></i>
                  </a>
                </center>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
