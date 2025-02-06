import Image from 'next/image';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={`${styles.about} section`} id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>Available for Full-Time and Freelance Opportunities</h3>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>Website: <span><a href="https://guptaayush.me" target="_blank" rel="noopener noreferrer">guptaayush.me</a></span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Email: <span>ayushguptab6@gmail.com</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Current Degree: <span>B.Tech in Computer Science</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Freelance: <span>Available</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Contact No.: <span>+91 7324829593</span></p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <a href="https://drive.google.com/file/d/1hK0t0G0MynJjgyRzIyeVGvQ3fmvKevG0/view" className="btn" target="_blank" rel="noopener noreferrer">View CV</a>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <div className="row">
                  <Image src="/images/portfolio/ayush-bg-final-re.webp" alt="Profile Picture" width={200} height={200} className={styles.profileImage} />
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: '60px' }}>
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="timeline shadow-dark">
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">2021 - 2025</h3>
                    <h4 className="timeline-title">B.Tech in Computer Science</h4>
                    <p className="timeline-text">Vellore Institute of Technology, Bhopal | CGPA: 8.33</p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">2020 - 2021</h3>
                    <h4 className="timeline-title">Senior Secondary Education</h4>
                    <p className="timeline-text">Don Bosco High School, Bihar | Percentage: 71%</p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">2018 - 2019</h3>
                    <h4 className="timeline-title">Secondary School Education</h4>
                    <p className="timeline-text">D.A.V Public School, Bihar | Percentage: 81.16%</p>
                  </div>
                </div>
              </div>
              <div className="experience padd-15">
                <h3 className="title">Milestone</h3>
                <div className="timeline shadow-dark">
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">2024</h3>
                    <h4 className="timeline-title">Embarked on Cloud and DevOps Journey</h4>
                    <p className="timeline-text">Initiated hands-on projects, secured a DevOps internship, and actively preparing for placements.</p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">2023</h3>
                    <h4 className="timeline-title">Deep Dive into Cloud and DevOps</h4>
                    <p className="timeline-text">Achieved AWS Certified Cloud Practitioner (970/1000) and completed NPTEL Cloud Computing course (Elite+Silver).</p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">2021 - 2022</h3>
                    <h4 className="timeline-title">Developed Skills in DSA and Gained Internship Experience</h4>
                    <p className="timeline-text">Secured my first paid internship, gaining industry-level experience.</p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">2021</h3>
                    <h4 className="timeline-title">Exploring Engineering Foundations</h4>
                    <p className="timeline-text">Started with C++, full-stack development, and the MERN stack.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
