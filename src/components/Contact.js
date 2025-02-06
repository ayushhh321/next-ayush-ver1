import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section className={`${styles.contact} section`} id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row">
          <section className="contact section" id="contact">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h2>Contact Me</h2>
                </div>
              </div>
              <h3 className="contact-title padd-15">Let's Get Connected...</h3>
              <h4 className="contact-sub-title padd-15" style={{ fontSize: '20px' }}>
                Choose any of your Favourite Platform
              </h4>
              <div className="row">
                {/* Contact Info Item Start */}
                <div className="contact-info-item padd-15">
                  <a target="_blank" rel="noopener noreferrer" href="https://x.com/hypo_sucks">
                    <div className="icon">
                      <i className="fa fa-brands fa-twitter"></i>
                    </div>
                    <h4>Twitter</h4>
                  </a>
                </div>
                {/* Contact Info Item End */}

                {/* Contact Info Item Start */}
                <div className="contact-info-item padd-15">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ayushgupta-333bg/">
                    <div className="icon">
                      <i className="fa fa-brands fa-linkedin"></i>
                    </div>
                    <h4>LinkedIn</h4>
                  </a>
                </div>
                {/* Contact Info Item End */}

                {/* Contact Info Item Start */}
                <div className="contact-info-item padd-15">
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/ayushhh321">
                    <div className="icon">
                      <i className="fa fa-brands fa-github"></i>
                    </div>
                    <h4>GitHub</h4>
                  </a>
                </div>
                {/* Contact Info Item End */}

                {/* Contact Info Item Start */}
                <div className="contact-info-item padd-15">
                  <a target="_blank" rel="noopener noreferrer" href="https://cal.com/ayush-gupta-3qikly">
                    <div className="icon">
                      <i className="fa fa-solid fa-handshake"></i>
                    </div>
                    <h4>Book a Meet</h4>
                  </a>
                </div>
                {/* Contact Info Item End */}
              </div>

              <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
              <h4 className="contact-sub-title padd-15">Will Collaborate Soon</h4>

              {/* Contact Form */}
              <div className="row">
                <div className="contact-form padd-15">
                  <form action="https://formspree.io/f/xjkbbqqv" method="post">
                    <div className="row">
                      <div className="form-item col-6 padd-15">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-item col-6 padd-15">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-item col-12 padd-15">
                        <div className="form-group">
                          <textarea
                            name="message"
                            required
                            className="form-control"
                            placeholder="Share your Kind words here :)"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-item col-12 padd-15">
                        <button type="submit" className="btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* Contact Section End */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
