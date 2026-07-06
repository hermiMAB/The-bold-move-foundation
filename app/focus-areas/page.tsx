export default function FocusAreas() {
  return (
    <main>
      {/* Hero */}
      <section className="focus-hero">
        <div className="focus-hero-content">
          <h1>Our Focus Areas</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="focus-section">
        <div className="container">
          <p className="lead text-center mx-auto" style={{ maxWidth: "800px", color: "#e0e0e0", marginBottom: "2rem" }}>
            The BMF's programmes are built around six interconnected pillars — each designed to address a specific barrier that keeps youth, women, and persons with disabilities from achieving economic independence. Our training is practical, market-relevant, and delivered with mentorship at its core.
          </p>

          <div className="focus-note text-light mx-auto mb-5" style={{ maxWidth: "800px" }}>
            <i aria-hidden="true" className="bi bi-info-circle-fill text-warning me-2"></i>
            Our programmes are now <strong>Active — Enrolling Now</strong>. We are committed to transparency, high-quality delivery, and tangible outcomes for our participants.
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="focus-card text-light">
                <i aria-hidden="true" className="bi bi-lightbulb-fill"></i>
                <h2 className="card-title text-warning h4">Entrepreneurial Skills Training</h2>
                <p>Many Kenyans have the drive to start a business but lack the foundational skills to turn ideas into sustainable ventures. Our entrepreneurship training equips participants with business planning, market research, idea validation, financial management, and startup fundamentals — giving them the tools to launch, grow, and sustain income-generating enterprises. We pair classroom learning with real-world mentorship from experienced entrepreneurs.</p>
                <span className="badge bg-warning text-dark mt-3">Active — Enrolling Now</span>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="focus-card text-light">
                <i aria-hidden="true" className="bi bi-briefcase-fill"></i>
                <h2 className="card-title text-warning h4">Employability & Career Development</h2>
                <p>A gap between formal education and workplace readiness keeps many qualified young people unemployed. Our employability programme bridges that gap through training in CV writing, interview preparation, professional communication, and workplace conduct. We connect participants with internship opportunities, career mentors, and employer networks — making the transition from training to employment as direct as possible.</p>
                <span className="badge bg-warning text-dark mt-3">Active — Enrolling Now</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="focus-card text-light">
                <i aria-hidden="true" className="bi bi-laptop-fill"></i>
                <h2 className="card-title text-warning h4">Digital Skills</h2>
                <p>Digital competence is no longer optional—it is a prerequisite for participation in Kenya’s modern economy. Our digital skills programme equips participants with practical, job-ready skills in computer literacy, internet use, digital communication, productivity tools, online safety, social media for business, mobile money and digital financial services, and the effective use of artificial intelligence (AI) tools. We make technology accessible, relevant, and easy to apply in everyday life, learning, employment, and entrepreneurship, particularly for participants in underserved communities with limited prior exposure.</p>
                <span className="badge bg-warning text-dark mt-3">Active — Enrolling Now</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="focus-card text-light">
                <i aria-hidden="true" className="bi bi-bank"></i>
                <h2 className="card-title text-warning h4">Financial Literacy & Independence</h2>
                <p>Without financial knowledge, income is rarely enough. Our financial literacy programme trains participants in personal budgeting, savings discipline, understanding credit, accessing financial products, and planning for long-term financial security. For entrepreneurs, we extend this to business financial management and investor readiness — building the money confidence that sustainable independence requires.</p>
                <span className="badge bg-warning text-dark mt-3">Active — Enrolling Now</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="focus-card text-light">
                <i aria-hidden="true" className="bi bi-book-fill"></i>
                <h2 className="card-title text-warning h4">Access to Quality Education</h2>
                <p>Education is the foundation of every bold move. We work to bridge the education gap for underserved communities by connecting participants to learning resources, scholarship opportunities, structured educational pathways, and digital learning platforms. Whether supporting a young person completing secondary school or a woman re-entering education after a gap, we believe equitable access to quality learning changes life trajectories.</p>
                <span className="badge bg-warning text-dark mt-3">Active — Enrolling Now</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="focus-card text-light">
                <i aria-hidden="true" className="bi bi-person-hearts"></i>
                <h2 className="card-title text-warning h4">Mentorship</h2>
                <p>Mentorship is the bridge between training and long-term success. We pair participants with experienced professionals, entrepreneurs, and leaders who offer guidance, industry insights, and career support. Through structured mentorship, we help youth, women, and persons with disabilities build the confidence, networks, and accountability required to navigate challenges, make bold career choices, and sustain their economic independence.</p>
                <span className="badge bg-warning text-dark mt-3">Active — Enrolling Now</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
