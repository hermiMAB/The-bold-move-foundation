export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
      </section>

      {/* Main Section */}
      <section className="py-5" style={{ backgroundColor: "#181818" }}>
        <div className="container">
          {/* Partnership Inquiry Note & General Contact */}
          <div className="partnership-inquiry mb-5 text-light mx-auto" style={{ maxWidth: "800px", textAlign: "center" }}>
            <h2 style={{ color: "#F4CE6B" }} className="mb-3 h4">Get in Touch / Partner With Us</h2>
            <p style={{ color: "#e0e0e0", fontSize: "1.1rem" }} className="mb-0">
              We are actively seeking partnerships with organisations and individuals who share our commitment to equitable opportunity in Kenya. Whether you have an inquiry or would like to partner with us, please contact us directly.
            </p>
          </div>

          {/* Contact Details Cards */}
          <div className="row g-4 justify-content-center mt-5">
            <div className="col-md-6 col-lg-3">
              <div className="contact-card">
                <i aria-hidden="true" className="bi bi-geo-alt-fill contact-icon"></i>
                <h3 className="text-warning h5">Our Address</h3>
                <p className="contact-detail">
                  P.O. Box 62000-00200<br />Nairobi, Kenya
                </p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="contact-card">
                <i aria-hidden="true" className="bi bi-telephone-fill contact-icon"></i>
                <h3 className="text-warning h5">Call Us</h3>
                <p className="contact-detail">
                  <a href="tel:+254715045051">+254 715 045 051</a><br />
                  <a href="tel:+254719641539">+254 719 641 539</a>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="contact-card">
                <i aria-hidden="true" className="bi bi-share-fill contact-icon"></i>
                <h3 className="text-warning h5">Follow Us</h3>
                <div className="contact-detail mt-3 fs-3 d-flex justify-content-center gap-3">
                  <a href="https://www.facebook.com/people/The-Bold-Move-Foundation-The-BMF/61588023223602/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook"><i aria-hidden="true" className="bi bi-facebook"></i></a>
                  <a href="https://www.linkedin.com/company/the-bold-move-foundation-the-bmf" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn"><i aria-hidden="true" className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
