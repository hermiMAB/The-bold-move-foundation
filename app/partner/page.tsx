import Link from "next/link";

export default function Partner() {
  return (
    <main>
      {/* Hero */}
      <section className="partner-hero">
        <h1>Partner With Us</h1>
        <p className="lead" style={{ maxWidth: "750px", color: "#e0e0e0" }}>
          The BMF believes that the most lasting change happens through collaboration. We are actively building a network of strategic partners — organisations and individuals who share our commitment to equitable opportunity, skills development, and economic inclusion in Kenya.
        </p>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-5" style={{ backgroundColor: "#181818" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ color: "#F4CE6B" }}>Partnership Opportunities</h2>
          <p className="text-center lead mb-5 mx-auto" style={{ maxWidth: "700px", color: "#e0e0e0" }}>
            Whether you are a corporate, an NGO, a government agency, an educational institution, or an individual supporter, there is a meaningful role for you in The BMF's work.
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="partner-card text-light">
                <i aria-hidden="true" className="bi bi-building partner-icon"></i>
                <h3>Corporate Partners</h3>
                <p className="text-start mb-0" style={{ color: "#d0d0d0" }}>
                  Align your CSR mandate with measurable community impact. Partner with The BMF to fund skills training, sponsor programme cohorts, provide mentors from your organisation, or open employment pathways for our graduates. We work with partners to design programmes that meet both community needs and corporate objectives.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="partner-card text-light">
                <i aria-hidden="true" className="bi bi-globe partner-icon"></i>
                <h3>NGOs & Development Organisations</h3>
                <p className="text-start mb-0" style={{ color: "#d0d0d0" }}>
                  We welcome co-implementation partnerships with organisations that share our focus on youth, women, and disability inclusion. Whether through joint programming, shared resources, or referral networks, collaboration with fellow NGOs expands our collective reach and impact.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="partner-card text-light">
                <i aria-hidden="true" className="bi bi-bank partner-icon"></i>
                <h3>Government & Public Institutions</h3>
                <p className="text-start mb-0" style={{ color: "#d0d0d0" }}>
                  The BMF seeks to complement and strengthen government-led skills development and empowerment initiatives. We are open to partnerships with county governments, national agencies, and public institutions working on youth employment, women's empowerment, and disability inclusion.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="partner-card text-light">
                <i aria-hidden="true" className="bi bi-mortarboard-fill partner-icon"></i>
                <h3>Educational Institutions</h3>
                <p className="text-start mb-0" style={{ color: "#d0d0d0" }}>
                  Universities, colleges, and training institutes can partner with The BMF to create pathways from learning to economic participation — through curriculum support, internship pipelines, joint research, and access to our mentorship networks.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="partner-card text-light">
                <i aria-hidden="true" className="bi bi-person-heart partner-icon"></i>
                <h3>Individual Supporters & Mentors</h3>
                <p className="text-start mb-0" style={{ color: "#d0d0d0" }}>
                  If you have expertise, experience, or time to invest, we welcome individual supporters as mentors, programme facilitators, and advocates. Your direct engagement with participants creates impact that resources alone cannot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 cta-section text-center">
        <div className="container text-light">
          <h2 className="fw-bold mb-3" style={{ color: "#F4CE6B" }}>Ready to Make a Bold Move Together?</h2>
          <p className="lead mx-auto mb-5" style={{ maxWidth: "650px", color: "#e0e0e0" }}>
            Tell us about your organisation and how you'd like to partner. We'll get back to you within 3 business days.
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 mb-5">
            <div>
              <i aria-hidden="true" className="bi bi-telephone-fill fs-3 mb-2 text-warning d-block"></i>
              <span className="fs-5">+254 715 045 051</span><br />
              <span className="fs-5">+254 719 641 539</span>
            </div>
          </div>
          <Link href="/contact" className="btn btn-custom btn-lg px-5 py-3">Contact Us Today</Link>
        </div>
      </section>
    </main>
  );
}
