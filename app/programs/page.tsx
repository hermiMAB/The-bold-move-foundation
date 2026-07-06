export default function Programs() {
  return (
    <main>
      {/* Hero */}
      <section className="programs-hero">
        <div className="container text-center">
          <h1>Our Programs</h1>
          <p className="lead mx-auto text-light" style={{ maxWidth: "800px", color: "#e0e0e0" }}>
            Empowering youth, women, and persons with disabilities across Kenya with practical, job-ready training programs.
          </p>
        </div>
      </section>

      {/* Main Programs Section */}
      <section className="py-5" style={{ backgroundColor: "#181818" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              
              {/* Jasiri Digital Program */}
              <div className="program-card text-light mb-5">
                <div className="row align-items-center g-4">
                  <div className="col-md-2 text-center text-md-start">
                    <i aria-hidden="true" className="bi bi-laptop program-icon"></i>
                  </div>
                  <div className="col-md-10">
                    <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                      <h2 className="text-warning mb-0 fw-bold">Jasiri Digital</h2>
                      <span className="cohort-badge">Cohort 1</span>
                      <span className="badge bg-warning text-dark px-3 py-2">Active — Enrolling Now</span>
                    </div>
                    
                    <p className="lead mb-4">
                      Jasiri Digital is our flagship digital skills training program, designed to make technology accessible, relevant, and easy to apply in everyday life, learning, employment, and entrepreneurship.
                    </p>
                    
                    <p style={{ color: "#d0d0d0", lineHeight: "1.8" }}>
                      This program is tailored particularly for participants in underserved communities with limited prior digital exposure. We equip our participants with practical, job-ready skills in computer literacy, internet use, digital communication, productivity tools, online safety, social media for business, mobile money and digital financial services, and the effective use of artificial intelligence (AI) tools.
                    </p>

                    {/* Cohort Details */}
                    <div className="bg-dark p-4 rounded-3 border border-secondary mt-4 mb-4">
                      <h4 className="text-warning fw-bold h5 mb-3"><i className="bi bi-info-circle-fill me-2"></i>Cohort 1 Information</h4>
                      <div className="row g-3 text-light">
                        <div className="col-md-4">
                          <strong><i className="bi bi-calendar-event text-warning me-2"></i>Start Date:</strong> 3rd Aug 2026
                        </div>
                        <div className="col-md-4">
                          <strong><i className="bi bi-geo-alt text-warning me-2"></i>Location:</strong> Virtual (Google Meet)
                        </div>
                        <div className="col-md-4">
                          <strong><i className="bi bi-people text-warning me-2"></i>Status:</strong> Open for applications
                        </div>
                      </div>
                    </div>

                    {/* Required Action Buttons */}
                    <div className="d-flex flex-wrap gap-3 btn-action-group mt-4">
                      <a href="https://forms.gle/RzoNXhTxoDGVHHx59" target="_blank" rel="noopener noreferrer" className="btn btn-custom px-4">Apply Here</a>
                      <a href="https://forms.gle/yhDybf6Wd1Y8CDzN7" target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning px-4">Refer a Candidate</a>
                      <a href="https://forms.gle/SFHoMCbURpXT5nZf9" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light px-4">Partner With This Cohort</a>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
