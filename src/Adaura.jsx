import React from "react";
import { Link } from "react-router-dom";

export default function Adaura() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* ----------------------starting--------------------- */}

      <div className="container-fluid py-5 bg-light">
        <div
          className="row align-items-center"
          style={{
            background: "linear-gradient(135deg, #f8fbff, #eaf3ff)",
          }}
        >
          {/* Left Content */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="fw-bold display-5" id="inno">
              <br></br><br></br>
              AdAura – Cross-Platform Ad Detection & Analytics<br></br>
              <span className="text-primary">
                (Powered by PredictByte Infosoft)
              </span>{" "}
            </h1>
<br></br><br></br>
            <p className="text-muted mt-3">
              AdAura empowers brands to gain a 360° view of their advertising
              impact. With our AI-driven system, we detect and analyze ads
              across Digital platforms, Linear TV, and OTT streaming services.
              This unified intelligence helps brands understand where, when, and
              how their ads appear — ensuring complete transparency, stronger
              audience targeting, and higher ROI.
            </p>

            {/* <!-- Features --> */}
            <div class="features">
              <div class="feature">🌐 Video Streaming Platform</div>
              <div class="feature">🔄 Two-Way Streaming</div>
              <div class="feature">🔐 DRM Encryption</div>
            </div>

            <Link to="/contact">
              {" "}
              <button className="btn btn-primary btn-lg mt-2">
                Contact Us →
              </button>
            </Link>
          </div>
<br></br><br></br>
          {/* Right Illustration */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src="https://i.postimg.cc/c4zqpfcq/about-banner-1.png"
              alt="AI Robot"
              className="img-fluid mx-auto d-block"
            />
          </div>
        </div>
      </div>
      {/* ----------------next card portion--------------- */}

      <h1
        className="fw-bold text-center"
        id="redefine"
        style={{
          fontSize: "clamp(28px, 4vw, 48px)", // auto adjusts with screen size
          lineHeight: "1.3",
          color: "#000",
        }}
      >
        Seamless <span style={{ color: "blue" }}>AWS Integration</span> for
        Business
      </h1>

      {/* Services Section */}
      <div className="container my-5">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-sm-3">
            <div className="service-card p-4 h-100 rounded shadow-sm">
              <h5 className="fw-bold">Generative AI Consulting</h5>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-sm-3">
            <div className="service-card p-4 h-100 rounded shadow-sm">
              <h5 className="fw-bold">Custom AI Model Development</h5>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-sm-3">
            <div className="service-card p-4 h-100  rounded shadow-sm">
              <h5 className="fw-bold">Fast Channel</h5>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-sm-3">
            <div className="service-card p-4 h-100  rounded shadow-sm">
              <h5 className="fw-bold">Optimized Pricing</h5>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-sm-3">
            <div className="service-card p-4 h-100 rounded shadow-sm">
              <h5 className="fw-bold">
                Data Insights and Predictive Analytics
              </h5>
            </div>
          </div>
          {/* Card 6 */}
          <div className="col-sm-3">
            <div className="service-card p-4 h-100  rounded shadow-sm">
              <h5 className="fw-bold">Digital marketing</h5>
            </div>
          </div>
          {/* Card 7 */}
          <div className="col-sm-3">
            <div className="service-card p-4 h-100  rounded shadow-sm">
              <h5 className="fw-bold">Web Development</h5>
            </div>
          </div>
          {/* Card 8 */}
          <div className="col-sm-3">
            <div className="service-card p-4 h-100  rounded shadow-sm">
              <h5 className="fw-bold">Data Science</h5>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------next card portion--------------- */}
      {/* First Heading */}
      <h1
        className="fw-bold text-center"
        id="redefine"
        style={{
          fontSize: "clamp(30px, 4vw, 50px)", // responsive font size
          lineHeight: "1.3",
          color: "#000",
        }}
      >
        What you’ll get with <span style={{ color: "blue" }}>VideoCrypt</span>
      </h1>

      {/* <!-- Services Section --> */}
      {/* <!-- Services Section --> */}
      <div className="container my-5">
        <div className="row g-4">
          {/* <!-- Card 1 --> */}
          <div className="container my-5">
            <div className="row justify-content-center align-items-center g-4">
              {/* Card 1 */}
              <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                <div className="service-box text-center">
                  <div className="icon fs-1">📡</div>
                  <h5>Live Streaming</h5>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                <div className="service-box text-center">
                  <div className="icon fs-1">🎬</div>
                  <h5>Video On Demand</h5>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                <div className="service-box text-center">
                  <div className="icon fs-1">⚡</div>
                  <h5>Ultra Low Latency</h5>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                <div className="service-box text-center">
                  <div className="icon fs-1">🔐</div>
                  <h5>Multi-DRM Solution</h5>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                <div className="service-box text-center">
                  <div className="icon fs-1">📺</div>
                  <h5>Content Delivery Network</h5>
                </div>
              </div>

              {/* Card 6 */}
              <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                <div className="service-box text-center">
                  <div className="icon fs-1">🎙️</div>
                  <h5>Speech-to-Text</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------360------------------------ */}

      <h1 className="fw-bold display-5 text-center mb-5" id="redefine">
        360 Degree Multi-DRM Security
      </h1>

      <div className="container">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="security-card">
              <div className="icon bg-green">📡</div>
              <h5>Video Security</h5>
              <p>
                Protect multimedia content from hackers with top-of-the-line
                security measures like Multi-DRM.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="security-card">
              <div className="icon bg-yellow">🎬</div>
              <h5>Dynamic Watermarking</h5>
              <p>
                Prevent unlicensed users from downloading and capturing premium
                content with dynamic watermarking.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="security-card">
              <div className="icon bg-blue">⚡</div>
              <h5>Anti-Capture</h5>
              <p>
                Secure digital media content from unauthorized capture or screen
                recording with robust security.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="security-card">
              <div className="icon bg-cyan">👤</div>
              <h5>Multi-login Protection</h5>
              <p>
                Keep content secured by giving access only to premium members
                and prohibiting unwanted users at the same time.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="security-card">
              <div className="icon bg-pink">📺</div>
              <h5>Secure Offline Playback</h5>
              <p>
                Enable users to download and watch videos offline, protected by
                Google Widevine for Android and Fairplay streaming for iOS.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------text portion---------------- */}

      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <h3 className="fw-bold">
              Achievements of <span className="text-orange">VideoCrypt</span>
            </h3>
            <p>
              VideoCrypt has become a leader in secure video streaming,
              partnering with numerous global clients. With its advanced DRM and
              encryption, it provides exceptional security, making it the
              preferred choice for video streaming solutions.
            </p>

            <ul className="achievements-list">
              <li>4 Billion+ Live Learning Minutes</li>
              <li>50 Million+ VOD Minutes</li>
              <li>10+ Years of Digital Security Experience</li>
              <li>1000+ Happy Customers</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-12 col-lg-6 text-center">
            <img
              src="https://www.dacast.com/wp-content/uploads/2021/02/kaltura-professional-video-hosting-platform.png"
              alt="VideoCrypt TV"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
