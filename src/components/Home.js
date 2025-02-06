import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <section className={`${styles.home} active section`} id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">Namaste, My Name is <span style={{ color: '#ec1839' }}>Ayush Gupta</span></h3>
            <br />
            <h2 className="my-profession">Talk to me about <span style={{ color: '#ec1839' }}>DevOps/Cloud/SRE</span></h2>
            <br />
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'white' }}>
              Welcome to my tech exploration journey! 🚀 <br /><br />
              I’m exploring the world of Cloud and DevOps, focusing on AWS, Linux commands, Docker, Terraform, CI/CD, and Kubernetes.
              I love turning ideas into real projects and learning through hands-on practice. <br /><br />
              If you’re as passionate about tech and learning as I am, let’s connect! 🤝 We can share ideas, grow together, and make this
              journey even more exciting. ✨
              <br />
            </p>
            <a href="https://drive.google.com/file/d/1hK0t0G0MynJjgyRzIyeVGvQ3fmvKevG0/view" className="btn" target="_blank" rel="noopener noreferrer">View CV</a>
          </div>
          <div className="home-img padd-15">
            <Image src="/images/portfolio/ayush-bg-final.webp" alt="Ayush Gupta" width={376} height={376} style={{ borderRadius: '50%', marginTop: '60px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;