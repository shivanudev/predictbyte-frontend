import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const updateMeta = () => {
    document.title = "HTML Website Templates | template website | html code";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "HTML website templates designed for fast, responsive, and SEO-friendly...");
    }
  };
  return (
    <nav className="custom-navbar navbar navbar-expand-lg">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src="pbl.png" alt="Logo" className="logo me-2" />
          <span className="fw-bold text-dark">PredictByte</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="bi bi-house-door-fill"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="bi bi-info-circle-fill"></i> About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-tools"></i> Services
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/dev">Web Development</Link></li>
                <li><Link className="dropdown-item" to="/digital">Digital Marketing</Link></li>
                <li><Link className="dropdown-item" to="/automation">AI Automation</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="productDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-box-seam"></i> Product
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/adaura">AdAura</Link></li>
                <li><Link className="dropdown-item" to="/enroll">Learning Management</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link g-5">
                <i className="bi bi-telephone-fill"></i> Contact
              </Link>
            </li>
            
          
          </ul>

          <Link to="/contact">
            <button className="btn btn-glow ms-lg-3 mt-5">Enquiry Now!</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
