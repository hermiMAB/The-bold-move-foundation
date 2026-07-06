import Link from "next/link";

export default function WhoWeServe() {
  return (
    <main>
      {/* Hero */}
      <section className="serve-hero">
        <h1>Who We Serve</h1>
        <p className="lead" style={{ maxWidth: "700px", color: "#e0e0e0" }}>
          The BMF targets three groups that are consistently underserved by mainstream economic development programmes in Kenya. Our work is designed around their specific realities, challenges, and strengths.
        </p>
      </section>

      {/* Youth Section */}
      <section className="py-5" style={{ backgroundColor: "#181818" }}>
        <div className="container">
          <div className="serve-card">
            <div className="row align-items-center text-center text-lg-start">
              <div className="col-lg-2 mb-4 mb-lg-0">
                <i aria-hidden="true" className="bi bi-people-fill serve-icon"></i>
              </div>
              <div className="col-lg-10 text-light">
                <h2 style={{ color: "#F4CE6B", fontWeight: 700 }} className="mb-2 h4">Youth (18–35 Years)</h2>
                <div className="stat-badge">Over 75% of Kenya's population is under 35</div>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#e0e0e0" }}>
                  Kenya is one of the youngest countries in the world, with over 75% of the population under 35. Yet youth unemployment and underemployment remain among the country's most pressing challenges. Young people often finish school or vocational training without the practical, market-linked skills that employers actually need — and without the networks or mentorship to bridge the gap. The BMF works with young people aged 18–35 to build the skills, confidence, and connections that turn potential into opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women Section */}
      <section className="py-5" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container">
          <div className="serve-card">
            <div className="row align-items-center text-center text-lg-start flex-lg-row-reverse">
              <div className="col-lg-2 mb-4 mb-lg-0 text-lg-end">
                <i aria-hidden="true" className="bi bi-gender-female serve-icon"></i>
              </div>
              <div className="col-lg-10 text-light">
                <h2 style={{ color: "#F4CE6B", fontWeight: 700 }} className="mb-2 h4">Women</h2>
                <div className="stat-badge">Investing in women produces the highest economic returns</div>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#e0e0e0" }}>
                  Women in Kenya face structural barriers to economic participation: unequal access to finance, under-representation in technical and entrepreneurial fields, and social expectations that limit their mobility and ambition. Yet evidence consistently shows that investing in women produces the highest returns for families, communities, and economies. The BMF's programmes are designed to be gender-responsive — addressing not just skills gaps but the confidence, networks, and support systems that enable women to take bold economic steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persons with Disabilities Section */}
      <section className="py-5" style={{ backgroundColor: "#181818" }}>
        <div className="container">
          <div className="serve-card">
            <div className="row align-items-center text-center text-lg-start">
              <div className="col-lg-2 mb-4 mb-lg-0">
                <i aria-hidden="true" className="bi bi-universal-access serve-icon"></i>
              </div>
              <div className="col-lg-10 text-light">
                <h2 style={{ color: "#F4CE6B", fontWeight: 700 }} className="mb-2 h4">Persons with Disabilities</h2>
                <div className="stat-badge">An estimated 4.6% of Kenyans live with a disability</div>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#e0e0e0" }}>
                  An estimated 4.6% of Kenyans live with a disability, yet persons with disabilities remain disproportionately excluded from education, employment, and entrepreneurship opportunities. Physical, informational, and attitudinal barriers persist across institutions and workplaces. The BMF is committed to inclusive programme design — ensuring our training venues, materials, and delivery methods are accessible, and that persons with disabilities are not an afterthought but central participants in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-5 cta-banner text-center text-light">
        <div className="container">
          <h2 className="fw-bold mb-3 h4" style={{ color: "#F4CE6B" }}>Ready to Make a Difference?</h2>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: "700px", color: "#e0e0e0" }}>
            Whether you are a partner, donor, or supporter, you can help us expand access to skills and opportunity for Kenya's most underserved communities.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/partner" className="btn btn-custom btn-lg">Partner With Us</Link>
            <Link href="/contact" className="btn btn-outline-warning btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
