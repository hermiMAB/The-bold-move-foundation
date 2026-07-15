import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NonProfit",
            "name": "The Bold Move Foundation",
            "url": "https://www.theboldmovefoundation.org",
            "description": "The Bold Move Foundation empowers youth, women, and persons with disabilities through education and digital skills training.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Kenya"
            },
            "sameAs": []
          })
        }}
      />
      {/* Hero */}
      <section className="hero">
        <div className="hero-content text-center px-4">
          <h1>Equipping Kenya's Youth, Women & People with Disabilities to Make Bold Moves</h1>
          <p className="lead">Through hands-on training in digital and entrepreneurial skills, mentorship, and pathways to decent work, BMF reduces unemployment and poverty and builds economic resilience in the underserved communities we serve.</p>
          <div className="btn-group-custom">
            <Link href="/partner" className="btn btn-custom btn-lg px-4 py-2 mb-2">Partner With Us</Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-5" style={{ backgroundColor: "#181818" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#F4CE6B" }}>Who We Serve</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card card-custom text-center h-100 p-4">
                <i aria-hidden="true" className="bi bi-people-fill icon-large"></i>
                <h3 className="fw-bold mb-3">Youth (18–35 Years)</h3>
                <p>We equip young Kenyans with the skills, confidence, and networks to enter the workforce, start businesses, and break the cycle of unemployment.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-custom text-center h-100 p-4">
                <i aria-hidden="true" className="bi bi-heart-fill icon-large"></i>
                <h3 className="fw-bold mb-3">Women</h3>
                <p>We create pathways for women to access education, build financial independence, and participate fully in Kenya's economy — on their own terms.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-custom text-center h-100 p-4">
                <i aria-hidden="true" className="bi bi-universal-access icon-large"></i>
                <h3 className="fw-bold mb-3">Persons with Disabilities</h3>
                <p>We design inclusive, accessible programs that remove barriers and open economic doors for persons with disabilities across Kenya.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why The BMF? */}
      <section className="py-5" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{ color: "#F4CE6B" }}>Why The BMF?</h2>
          <p className="lead" style={{ maxWidth: "800px", margin: "0 auto", color: "#e0e0e0" }}>
            In Kenya, millions of talented young people, women, and persons with disabilities remain locked out of economic opportunity — not for lack of ambition, but for lack of access: to skills, to mentors, to practical training that connects to real jobs and real markets. The BMF was founded to close that gap. Through research-backed, market-driven programs, we give underserved communities the tools to take bold steps toward independence.
          </p>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-5" style={{ backgroundColor: "#181818" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-5" style={{ color: "#F4CE6B" }}>Our Core Focus Areas</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-md-4 col-lg-2">
              <Link href="/focus-areas" className="text-decoration-none">
                <div className="card card-custom focus-area-card py-4 h-100">
                  <i aria-hidden="true" className="bi bi-lightbulb-fill card-icon"></i>
                  <h3 className="card-title mb-0 h6">Entrepreneurial Skills Training</h3>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <Link href="/focus-areas" className="text-decoration-none">
                <div className="card card-custom focus-area-card py-4 h-100">
                  <i aria-hidden="true" className="bi bi-briefcase-fill card-icon"></i>
                  <h3 className="card-title mb-0 h6">Employability & Career Development</h3>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <Link href="/focus-areas" className="text-decoration-none">
                <div className="card card-custom focus-area-card py-4 h-100">
                  <i aria-hidden="true" className="bi bi-laptop-fill card-icon"></i>
                  <h3 className="card-title mb-0 h6">Digital Skills</h3>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <Link href="/focus-areas" className="text-decoration-none">
                <div className="card card-custom focus-area-card py-4 h-100">
                  <i aria-hidden="true" className="bi bi-bank card-icon"></i>
                  <h3 className="card-title mb-0 h6">Financial Literacy & Independence</h3>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <Link href="/focus-areas" className="text-decoration-none">
                <div className="card card-custom focus-area-card py-4 h-100">
                  <i aria-hidden="true" className="bi bi-book-fill card-icon"></i>
                  <h3 className="card-title mb-0 h6">Access to Quality Education</h3>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <Link href="/focus-areas" className="text-decoration-none">
                <div className="card card-custom focus-area-card py-4 h-100">
                  <i aria-hidden="true" className="bi bi-person-hearts card-icon"></i>
                  <h3 className="card-title mb-0 h6">Mentorship</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Banner */}
      <section className="py-5 partner-banner">
        <div className="container text-center">
          <h2 className="fw-bold mb-3" style={{ color: "#F4CE6B" }}>Let's Build Something Meaningful Together</h2>
          <p className="lead text-white mb-4" style={{ maxWidth: "800px", margin: "0 auto" }}>
            We are actively seeking partnerships with corporates, NGOs, government agencies, educational institutions, and individual donors who share our commitment to equitable opportunity in Kenya.
          </p>
          <Link href="/contact" className="btn btn-custom btn-lg">Get in Touch</Link>
        </div>
      </section>
    </main>
  );
}
