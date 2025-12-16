import React from "react";
import { Link } from "react-router-dom";

export default function Automation() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* --------------------FIRST--------------------- */}

      <section className="ai-partner-section text-white py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Text Section */}
            <div className="col-lg-6">
              <br></br><br></br><br></br>
              <p className="text-uppercase small text-muted mb-2">
                Our Service
              </p>
              <h1 className="fw-bold display-6 mb-4" style={{ color: "#000" }}>
                SMART AUTOMATION <br /> POWERED BY AI
              </h1>
              <p className="text-secondary mb-4">
                Simplify operations, boost efficiency, and let AI handle
                repetitive tasks — so your team can focus on innovation and
                growth.
              </p>

              {/* Statistics + List */}
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="stat-card text-center">
                    <div className="circle">
                      <div className="progress-text">98%</div>
                    </div>
                    <p className="mt-2 small text-muted">Statistics</p>
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="service-card">Global Automation</div>
                  <div className="service-card">Simulated Success</div>
                  <div className="service-card">Threat Detection</div>
                  <div className="service-card">Device Automation</div>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="col-lg-6 text-center">
              <img
                src="https://thumbs.dreamstime.com/b/intelligent-ai-powered-mini-robot-wheeled-mobility-363591951.jpg"
                alt="AI Robot"
                className="img-fluid rounded-4 shadow-lg ai-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------second portion------------------ */}

      <section className="about-section text-white py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT TEXT SECTION */}
            <div className="col-lg-6">
              <p className="text-uppercase small text-muted mb-2">About Us</p>
              <h1 className="fw-bold display-5 mb-4" style={{ color: "#000" }}>
                THINK SMART
                <br /> AUTOMATE EVERYTHING
              </h1>
              <p className="text-secondary mb-4 pe-lg-5">
                From decision-making to workflow optimization, our AI automation
                tools bring precision, speed, and intelligence to every part of
                your business.
              </p>

              {/* Progress Bars */}
              <div className="progress-card p-4 mt-4">
                <div className="mb-3">
                  <p className="small mb-1">AI-Powered</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="small mb-1">Automation</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "47%" }}
                      aria-valuenow="47"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      47%
                    </div>
                  </div>
                </div>

                <div>
                  <p className="small mb-1">Robotic Process</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "92%" }}
                      aria-valuenow="92"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      92%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="col-lg-6 text-center">
              <p className="text-secondary mb-4">
                Empower your business with AI-driven automation that learns,
                evolves, and executes — transforming routine tasks into
                intelligent operations.
              </p>

              <img
                src="https://framerusercontent.com/images/oJ4OnkIakQqHwNMgIDKD5AoA.webp?width=1790&height=1010"
                alt="AI Working"
                className="img-fluid rounded-4 shadow-lg about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------MIDD---------------- */}

      {/* CTA Section */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#f5f9ff" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="fw-bold">
                <span
                  style={{
                    borderLeft: "4px solid #ff6600",
                    paddingLeft: "10px",
                  }}
                >
                  Embrace the Future of Innovation
                </span>
                <br />
                with Generative AI. Consult Now!
              </h2>
              <p className="text-muted mt-3">
                Explore how our Generative AI services can drive innovation and
                growth for your organization.
              </p>
            </div>

            {/* Right Content */}
            <div className="col-lg-4 text-lg-end text-center">
              <div className="d-flex flex-column align-items-lg-end align-items-center">
                {/* Phone Section */}
                <div className="mb-2 d-flex align-items-center justify-content-lg-end justify-content-center">
                  <i className="fa-solid fa-phone-waveform me-2 fs-5 text-primary"></i>
                  <div className="text-lg-end text-center">
                    <p className="mb-0 fw-semibold">Reach Out Now</p>
                    <a
                      href="tel:+918303138791"
                      className="fw-bold text-primary text-decoration-none"
                    >
                      +91-7302227370
                    </a>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-3">
                  <Link to="/contact">
                    <button className="btn btn-primary mt-3">
                      Contact Us <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------THIRD---------------- */}

      {/* FAQS section */}

      <div className="container py-5" style={{ backgroundColor: "#fff" }}>
        <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>
        <div className="row g-4">
          <div className="col-sm-6">
            <div className="d-flex align-items-start">
              <div
                className="icon-box bg-light text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
              <div>
                <h5 className="fw-bold">
                  What is Gen AI, and how does it benefit businesses?
                </h5>
                <p className="text-muted">
                  Generative AI is an AI system that creates content, designs
                  and provides insights. It helps businesses automate their
                  workflows, enhance creativity, and improve decision-making.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="d-flex align-items-start">
              <div
                className="icon-box bg-light text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
              <div>
                <h5 className="fw-bold">
                  What industries can benefit from Generative AI?
                </h5>
                <p className="text-muted">
                  Generative AI benefits almost every industry, including media,
                  education, gaming, finance, healthcare, and retail. It
                  enhances innovation and efficiency with advanced technology.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="d-flex align-items-start">
              <div
                className="icon-box bg-light text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
              <div>
                <h5 className="fw-bold">
                  How long does it take to develop a custom AI solution?
                </h5>
                <p className="text-muted">
                  Development timelines vary based on complexity and unique
                  requirements. However, our streamlined process ensures timely
                  delivery without compromising quality.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="d-flex align-items-start">
              <div
                className="icon-box bg-light text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
              <div>
                <h5 className="fw-bold">
                  How is Gen AI different from other types of AI?
                </h5>
                <p className="text-muted">
                  Generative Artificial Intelligence differs from traditional AI
                  in its potential to create new and original content rather
                  than merely analyzing data or making predictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
