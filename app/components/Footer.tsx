import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-4">
            <h2 className="h5 fw-bold mb-3 text-warning">The Bold Move Foundation</h2>
            <p className="mb-4">A Kenyan non-profit equipping youth, women, and persons with disabilities with education, entrepreneurial, digital, financial, and employability skills to build lasting economic independence.</p>
            <img src="/images/bmf-logo.webp" alt="The Bold Move Foundation Logo" width="90" />
          </div>
          <div className="col-md-4">
            <h2 className="h5 fw-bold mb-3 text-warning">Quick Links</h2>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link href="/focus-areas" className="text-light text-decoration-none">Our Focus Areas</Link></li>
              <li className="mb-2"><Link href="/programs" className="text-light text-decoration-none">Programs</Link></li>
              <li className="mb-2"><Link href="/who-we-serve" className="text-light text-decoration-none">Who We Serve</Link></li>
              <li className="mb-2"><Link href="/partner" className="text-light text-decoration-none">Partner With Us</Link></li>
              <li className="mb-2"><Link href="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2 className="h5 fw-bold mb-3 text-warning">Get in Touch</h2>
            <p className="mb-2"><i aria-hidden="true" className="bi bi-geo-alt-fill me-2"></i>P.O. Box 62000-00200, Nairobi, Kenya</p>
            <p className="mb-2"><i aria-hidden="true" className="bi bi-telephone-fill me-2"></i>+254 715 045 051</p>
            <p className="mb-3"><i aria-hidden="true" className="bi bi-telephone-fill me-2"></i>+254 719 641 539</p>
            <div className="d-flex gap-2 flex-wrap">
              <Link href="/contact" className="btn btn-custom btn-sm">Support Our Cause</Link>
              <Link href="/partner" className="btn btn-outline-warning btn-sm">Partner With Us</Link>
            </div>
            <div className="mt-3 d-flex gap-3">
              <a href="https://www.facebook.com/people/The-Bold-Move-Foundation-The-BMF/61588023223602/" target="_blank" rel="noopener noreferrer" className="text-warning fs-4" aria-label="Follow us on Facebook"><i aria-hidden="true" className="bi bi-facebook"></i></a>
              <a href="https://www.linkedin.com/company/the-bold-move-foundation-the-bmf" target="_blank" rel="noopener noreferrer" className="text-warning fs-4" aria-label="Follow us on LinkedIn"><i aria-hidden="true" className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <div className="text-center">
          <p className="mb-0">© 2026 The Bold Move Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
