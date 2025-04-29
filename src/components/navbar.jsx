import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary container fixed-top nav-color">
      <div className="container-fluid">
        <a className="navbar-brand ps-4 pt-3 pb-3" href="">
          <img width={80} src="/assets/nav-logo.avif" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="d-flex flex-column flex-lg-row justify-content-between w-100 align-items-start align-items-lg-center">
            <div className="navbar-nav mt-3 d-flex gap-3">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                My Story
              </a>
              <a className="nav-link" href="#">
                Financial Coaching
              </a>
              <a className="nav-link" href="#">
                Resources
              </a>
              <a className="nav-link" href="#">
                Testimonials
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
            </div>
            <div className="navbar-name text-end mt-3 mt-lg-0 me-5 pe-5">
              <h3 className="text-white josefin-sans-light mb-0">
                Kathy Cuevas
              </h3>
              <h4
                classname="fs-2"
                className="text-white josefin-sans-light mb-2"
              >
                Financial Coach
              </h4>
              <div className="d-flex gap-2 social-icons">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
