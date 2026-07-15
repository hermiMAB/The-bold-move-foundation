"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [whatWeDoDropdownOpen, setWhatWeDoDropdownOpen] = useState(false);

  const handleToggle = () => setNavbarOpen(!navbarOpen);
  const closeNavbar = () => {
    setNavbarOpen(false);
    setAboutDropdownOpen(false);
    setWhatWeDoDropdownOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top shadow">
      <div className="container-fluid px-4 px-md-5">
        <Link href="/" className="navbar-brand d-flex align-items-center fw-bold text-decoration-none" onClick={closeNavbar}>
          <img src="/images/bmf-logo.webp" alt="The Bold Move Foundation" width="50" className="me-3" />
          <div className="d-flex flex-column lh-1">
            <span className="fs-4 brand-name" style={{ color: "#F4CE6B", fontWeight: 700 }}>The Bold Move Foundation</span>
            <span className="brand-tagline text-white" style={{ fontSize: "0.72rem", fontWeight: 400, letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "2px" }}>Start Small, Move Bold</span>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="mainNavbarCollapse"
          aria-expanded={navbarOpen}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`} id="mainNavbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link href="/" className={`nav-link px-3 ${isActive("/") ? "active" : ""}`} onClick={closeNavbar}>
                Home
              </Link>
            </li>
            
            <li
              className={`nav-item dropdown ${aboutDropdownOpen ? "show" : ""}`}
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <a
                className="nav-link dropdown-toggle px-3"
                href="#"
                role="button"
                aria-expanded={aboutDropdownOpen}
                onClick={(e) => {
                  e.preventDefault();
                  setAboutDropdownOpen(!aboutDropdownOpen);
                }}
              >
                About Us
              </a>
              <ul className={`dropdown-menu dropdown-menu-dark border-secondary ${aboutDropdownOpen ? "show" : ""}`}>
                <li>
                  <Link href="/about" className="dropdown-item py-2" onClick={closeNavbar}>
                    About Us Overview
                  </Link>
                </li>
                <li>
                  <Link href="/about#board" className="dropdown-item py-2" onClick={closeNavbar}>
                    Our Board
                  </Link>
                </li>
                <li>
                  <Link href="/about#partners" className="dropdown-item py-2" onClick={closeNavbar}>
                    Our Partners
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className={`nav-item dropdown ${whatWeDoDropdownOpen ? "show" : ""}`}
              onMouseEnter={() => setWhatWeDoDropdownOpen(true)}
              onMouseLeave={() => setWhatWeDoDropdownOpen(false)}
            >
              <a
                className="nav-link dropdown-toggle px-3"
                href="#"
                role="button"
                aria-expanded={whatWeDoDropdownOpen}
                onClick={(e) => {
                  e.preventDefault();
                  setWhatWeDoDropdownOpen(!whatWeDoDropdownOpen);
                }}
              >
                What We Do
              </a>
              <ul className={`dropdown-menu dropdown-menu-dark border-secondary ${whatWeDoDropdownOpen ? "show" : ""}`}>
                <li>
                  <Link href="/focus-areas" className="dropdown-item py-2" onClick={closeNavbar}>
                    Our Focus Areas
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-serve" className="dropdown-item py-2" onClick={closeNavbar}>
                    Who We Serve
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/programs" className={`nav-link px-3 ${isActive("/programs") ? "active" : ""}`} onClick={closeNavbar}>
                Programs
              </Link>
            </li>
            
            <li className="nav-item">
              <Link href="/partner" className={`nav-link px-3 ${isActive("/partner") ? "active" : ""}`} onClick={closeNavbar}>
                Partner With Us
              </Link>
            </li>

            <li className="nav-item ms-lg-2">
              <Link href="/contact" className="btn btn-custom btn-sm px-3 py-2 mt-2 mt-lg-0 d-inline-block" onClick={closeNavbar}>
                Support Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
