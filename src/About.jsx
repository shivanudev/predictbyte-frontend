import React from "react";

export default function About() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* --------------------main--------------------------- */}

      <section className="our-story">
        <div className="our-story-container">
          {/* <!-- Left Section --> */}
          <div className="our-story-left">
            <br></br><br></br><br></br>
            <p className="our-story-subtitle">OUR STORY</p>
            <h2 className="our-story-title">
              Your Vision Our Expertise Your Success Get Noticed Generate <br />
              <span>Leads Dominate.</span>
            </h2>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team discussion"
              className="our-story-main-img"
            />
          </div>

          {/* <!-- Right Section --> */}
          <div className="our-story-right">
            {/* <!-- Top images --> */}
            <div className="our-story-top-images">
              <div className="our-story-card">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Tech Blog"
                />
                <span className="tag left">Tech Blog</span>
              </div>
              <div className="our-story-card">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                  alt="Trends"
                />
                <span className="tag left">Tech Blog</span>
              </div>
            </div>

            {/* <!-- Paragraph --> */}
            <p className="our-story-text">
              PredictByte InfoSoft, the leading Ed-Tech force, strives to
              revolutionize IT and empower professionals. We bridge the
              industry-education gap, our practical, high-quality training
              programs in data science, full-stack development, and more are
              designed for proficiency. Our internationally acclaimed training
              distinguishes us with excellent instruction and reasonable
              accessibility, and it is offered in the USA, UAE, Oman, Singapore,
              and other locations. PredictByte InfoSoft provides agile training,
              preparing learners for corporate success. Our commitment extends
              to job placement support for both recent graduates and seasoned
              professionals
            </p>

            {/* <!-- Stats --> */}
            <div className="our-story-stats">
              <div>
                <h3>300+</h3>
                <p>Completed Projects</p>
              </div>
              <div>
                <h3>100k</h3>
                <p>Satisfied Customers</p>
              </div>
              <div>
                <h3>7+</h3>
                <p>Years of Mastery</p>
              </div>
            </div>

            {/* <!-- Team + Button --> */}
          </div>
        </div>
      </section>

      {/* -----------------second----------------------- */}

      <section className="our-story">
        <div className="container">
          <div className="text-section">
            <p className="subheading">OUR STORY</p>
            <h1 className="heading">
              Your Gateway{" "}
              <span className="highlight">To Online Excellence</span> Dream Big
              In Pixels.
            </h1>
            <p className="description">
              Get video lessons of high quality from our industry-expert
              trainers who instruct/guide you along your journey. Our online
              programming courses provide real-time guidance from mentors
              on-line connectivity. Get special access to Live Webinars where
              you can connect with relevant course topics with teachers. Get
              business ready with our skill-specific training courses and easily
              land your dream work. Study the contents of the course at your own
              pace. If you are an experienced programmer, in only a couple of
              days you can complete the courses.
            </p>
          </div>
          <div className="image-section">
            <div className="image-box">
              <img
                src="https://www.4cornerresources.com/wp-content/uploads/2020/11/Job-interview-with-two-interviewers-scaled.jpeg"
                alt="Team Working"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------choose section----------------------- */}

      <div className="container-fluid py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container text-center">
          {/* Heading */}

          <h2 class="trusted-headline ms-5">
            Why Choose PredictByte InfoSoft for Gen AI Services?
          </h2>

          <p className="text-muted mb-5">
            We are at the forefront of innovation, providing Generative AI
            solutions that transform businesses and drive growth with a
            dedication to excellence and a thorough understanding of AI
            technologies.
          </p>

          {/* Features Grid */}
          <div className="row text-start g-4">
            <div className="col-md-6 d-flex">
              <i className="bi bi-award fs-1 text-primary me-3"></i>
              <div>
                <h5 className="fw-bold" style={{ color: "#000" }}>
                  Advanced AI Expertise
                </h5>
                <p className="text-muted">
                  Our team specializes in building AI solutions that are not
                  only innovative but also compliant with ethical standards.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-gear-wide-connected fs-1 text-warning me-3"></i>
              <div>
                <h5 className="fw-bold" style={{ color: "#000" }}>
                  Seamless Integration
                </h5>
                <p className="text-muted">
                  We ensure that our Gen AI solutions integrate smoothly with
                  your existing systems and processes.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-lightbulb fs-1 text-danger me-3"></i>
              <div>
                <h5 className="fw-bold" style={{ color: "#000" }}>
                  Scalable Solutions
                </h5>
                <p className="text-muted">
                  Whether you're a startup or an enterprise, our services are
                  designed to grow with your business needs.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-box-seam fs-1 text-warning me-3"></i>
              <div>
                <h5 className="fw-bold" style={{ color: "#000" }}>
                  Proven Track Record
                </h5>
                <p className="text-muted">
                  With years of experience in cutting-edge technology, AppSquadz
                  is a trusted partner in delivering AI-driven results.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-headset fs-1 text-warning me-3"></i>
              <div>
                <h5 className="fw-bold" style={{ color: "#000" }}>
                  Comprehensive Support
                </h5>
                <p className="text-muted">
                  Our experts deliver end-to-end support, from ideation to
                  post-deployment optimization.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-cpu fs-1 text-primary me-3"></i>
              <div>
                <h5 className="fw-bold" style={{ color: "#000" }}>
                  Innovative Approach
                </h5>
                <p className="text-muted">
                  The expert team constantly pushes boundaries to explore new
                  possibilities with AI and develop the best solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------second------------------- */}

      <h2
        className="section-title py-5"
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        Thoughtful Our <span>Team</span>
        <center>
          <p className="m-3" style={{ fontFamily: "Oswald, sans-serif" }}>
            Our team is a passionate group of innovators dedicated to turning
            ideas into impactful digital experiences.
          </p>
        </center>
      </h2>

      <div className="container" style={{ backgroundColor: "#fff" }}>
        <div className="row " style={{ backgroundColor: "#fff" }}>
          <div className="col-sm-6 col-lg-3 my-auto">
            <div className="box shadow-sm p-4">
              <div className="image-wrapper mb-3">
                <img
                  className="img-fluid"
                  src="Untitled design (25).png"
                  alt="..."
                />
              </div>
              <div className="box-desc">
                <h5>Nikhil Tarar</h5>
                <p>Snr. Data Scientist</p>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/predictbyte.infosoft?igsh=OXoxcnJjdGtnd244">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/predictbyte-infosoft/?viewAsMember=true">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 my-auto">
            <div className="box shadow-sm p-4">
              <div className="image-wrapper mb-3">
                <img
                  className="img-fluid"
                  src="Untitled design (23).png"
                  alt="..."
                />
              </div>
              <div className="box-desc">
                <h5>Uttam Singh</h5>
                <p>AI Engineer</p>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/predictbyte.infosoft?igsh=OXoxcnJjdGtnd244">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/predictbyte-infosoft/?viewAsMember=true">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 my-auto">
            <div className="box shadow-sm p-4">
              <div className="image-wrapper mb-3">
                <img
                  className="img-fluid"
                  src="Untitled design (21).png"
                  alt="..."
                />
              </div>
              <div className="box-desc">
                <h5>Ashu Khare</h5>
                <p>Marketing Head</p>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/predictbyte.infosoft?igsh=OXoxcnJjdGtnd244">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/predictbyte-infosoft/?viewAsMember=true">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 my-auto">
            <div className="box shadow-sm p-4">
              <div className="image-wrapper mb-3">
                <img className="img-fluid" src="shub.jpg" alt="..." />
              </div>
              <div className="box-desc">
                <h5>Shubham</h5>
                <p>Backend Developer</p>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/predictbyte.infosoft?igsh=OXoxcnJjdGtnd244">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/predictbyte-infosoft/?viewAsMember=true">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3 my-auto">
            <div className="box shadow-sm p-4">
              <div className="image-wrapper mb-3">
                <img
                  className="img-fluid"
                  src="Untitled design (19).png"
                  alt="..."
                />
              </div>
              <div className="box-desc">
                <h5>Shivani</h5>
                <p>JR. Frontend Developer</p>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/predictbyte.infosoft?igsh=OXoxcnJjdGtnd244">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/predictbyte-infosoft/?viewAsMember=true">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 my-auto">
            <div className="box shadow-sm p-4">
              <div className="image-wrapper mb-3">
                <img
                  className="img-fluid"
                  src="Untitled design (20).png"
                  alt="..."
                />
              </div>
              <div className="box-desc">
                <h5>Rishabh Sinha</h5>
                <p>Frontend Developer And UI Expert</p>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/predictbyte.infosoft?igsh=OXoxcnJjdGtnd244">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/predictbyte-infosoft/?viewAsMember=true">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 my-auto">
            <div className="box shadow-sm p-4">
              <div className="image-wrapper mb-3">
                <img
                  className="img-fluid"
                  src="Untitled design (24).png"
                  alt="..."
                />
              </div>
              <div className="box-desc">
                <h5>Mohit </h5>
                <p>Software Developer</p>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/predictbyte.infosoft?igsh=OXoxcnJjdGtnd244">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/predictbyte-infosoft/?viewAsMember=true">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 my-auto">
            <div className="box shadow-sm p-4">
              <div className="image-wrapper mb-3">
                <img
                  className="img-fluid"
                  src="Untitled design (22).png"
                  alt="..."
                />
              </div>
              <div className="box-desc">
                <h5>Abhishek</h5>
                <p>Legal Advisor </p>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/predictbyte.infosoft?igsh=OXoxcnJjdGtnd244">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/predictbyte-infosoft/?viewAsMember=true">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
