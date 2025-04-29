import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ContactSection from "./components/contact-section";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="main">
        <div
          id="page1"
          className="container px-0 d-flex flex-column flex-lg-row justify-content-between align-items-center"
        >
          <div className="left-side w-100 w-lg-75">
            <h1 className="main-heading text-white">
              Financial Freedom Pathway
            </h1>
            <h3 className="sub-heading text-white">
              EMPOWERING WOMEN TO <br /> MASTER THEIR MONEY
            </h3>
            <p className="mt-5 text-white main-paragraph">
              I'm passionate about helping women by walking alongside you to
              achieve financial success and secure your future. Whether you're
              working on budgeting, debt management, credit, retirement
              planning, or investing, I'm here to guide you every step of the
              way. Schedule a free consultation to discuss your unique
              situation, get answers to your questions, and create a
              personalized plan to reach your financial goals. Let's take the
              first step toward a brighter, more confident future!
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start me-0 me-lg-5 mt-4 mb-5">
              <button className="rounded-pill px-5 py-2 fw-bold fs-4 text-black get-started-btn mt-4 mb-4 me-0 me-lg-5">
                Get Started Now
              </button>
            </div>
          </div>
          <div className="right-side mt-4 mt-lg-0 text-center text-lg-start">
            <img
              src="/assets/logo.avif"
              alt=""
              className="responsive-logo"
              width={450}
            />
          </div>
        </div>

        <div id="page2" className="mt-2 container">
          <div className="d-flex justify-content-center">
            <img
              src="/assets/image.avif"
              alt=""
              className="responsive-img"
              width={1030}
            />
          </div>
        </div>
      </div>
      <ContactSection />
      <div id="page3" className="container">
        <div className="connect-section">
          <div className="connect-left">
            <h1>Let's Connect</h1>
            <span className="text-white">
              <i className="fas fa-envelope me-2"></i>
              <a className="email" href="mailto:FFPathway@gmail">
                FFPathway@gmail.com
              </a>
            </span>
            <br />
            <span className="text-white">
              <i className="fas fa-phone me-2"></i> Phone: 714-414-2300
            </span>
            <br />
            <div className="text-white mt-3 mb-2">
              <i className="fas fa-envelope me-2"></i>
              <a
                className="email fs-3 fw-bold text-warning"
                href="mailto:FFPathway@gmail"
              >
                Talk to Me
              </a>
            </div>
            <div className="d-flex gap-2 connect-social-icons">
              <a href="#">
                <img
                  width={30}
                  src="/assets/icons/facebook.avif"
                  alt="Facebook"
                />
              </a>
              <a href="#">
                <img
                  width={30}
                  src="/assets/icons/linkedin.avif"
                  alt="LinkedIn"
                />
              </a>
              <a href="#">
                <img
                  width={30}
                  src="/assets/icons/youtube.avif"
                  alt="YouTube"
                />
              </a>
              <a href="#">
                <img
                  width={30}
                  src="/assets/icons/instagram.avif"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
          <div className="connect-right col-md-5 text-white">
            <div className="mb-4 mt-5">
              <h2 className="email-heading">Email List</h2>
            </div>
            <form aria-label="Subscriptions">
              <fieldset>
                <div className="mb-2">
                  <label htmlFor="firstName" className="form-label">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    aria-required="true"
                    className="form-control border-0 border-bottom bg-transparent text-white rounded-0"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="lastName" className="form-label">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    aria-required="true"
                    className="form-control border-0 border-bottom bg-transparent text-white rounded-0"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    className="form-control border-0 border-bottom bg-transparent text-white rounded-0"
                  />
                </div>
                <div className="mb-5">
                  <button
                    type="submit"
                    className="subscribe-btn rounded-pill py-2 fs-5"
                  >
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
