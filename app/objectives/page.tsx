export default function Objectives() {
  return (
    <main>
      <section className="bg-dark pt-5 pb-5">
        <div className="container text-center" style={{ paddingTop: "80px", paddingBottom: "40px" }}>
          <h1 style={{ color: "#F4CE6B", fontSize: "3.5rem", marginBottom: "3.5rem", fontWeight: 700 }}>
            Our Objectives & Programs
          </h1>
          <div className="row g-4">
            {/* Main Objective (exact from minutes) */}
            <div className="col-12 mb-5">
              <p className="lead text-white" style={{ maxWidth: "900px", margin: "0 auto 2rem", lineHeight: "1.8" }}>
                <strong>Main Objective:</strong><br />
                To alleviate poverty; promote education, healthcare, computer literacy, financial support, and humanitarian assistance; and empower youths, women, and persons living with disabilities.
              </p>
            </div>

            {/* 1. Poverty Alleviation (exact wording) */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-custom">
                <div className="card-body text-center">
                  <img src="/images/Poverty Alleviation.webp" alt="Poverty Alleviation" className="card-icon" />
                  <h4 className="card-title">Poverty Alleviation</h4>
                  <p className="card-text">
                    To eradicate poverty by supporting sustainable livelihoods, income-generating activities, and financial inclusion initiatives within communities.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Education (exact) */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-custom">
                <div className="card-body text-center">
                  <img src="/images/education.jpg" alt="Education" className="card-icon" />
                  <h4 className="card-title">Education</h4>
                  <p className="card-text">
                    To promote access to quality education through scholarships, mentorship, skills development, and learning support programs for vulnerable groups.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Healthcare & Wellbeing (exact) */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-custom">
                <div className="card-body text-center">
                  <img src="/images/health care.webp" alt="Healthcare" className="card-icon" />
                  <h4 className="card-title">Healthcare & Wellbeing</h4>
                  <p className="card-text">
                    To enhance community healthcare and wellbeing by supporting preventive health education, access to basic medical services, and health awareness campaigns.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Digital Literacy (exact) */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-custom">
                <div className="card-body text-center">
                  <img src="/images/digital litracy.jpg" alt="Digital Literacy" className="card-icon" />
                  <h4 className="card-title">Digital Literacy</h4>
                  <p className="card-text">
                    To promote computer and digital literacy by providing ICT training, access to technology, and digital skills development for youths, women, and persons living with disabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Financial & Economic Empowerment (exact) */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-custom">
                <div className="card-body text-center">
                  <img src="/images/finance.webp" alt="Financial Empowerment" className="card-icon" />
                  <h4 className="card-title">Financial & Economic Empowerment</h4>
                  <p className="card-text">
                    To provide financial support and economic empowerment through grants, savings initiatives, entrepreneurship training, and support for small and micro-enterprises.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Humanitarian Assistance (exact) */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-custom">
                <div className="card-body text-center">
                  <img src="/images/humanitarian.png" alt="Humanitarian Assistance" className="card-icon" />
                  <h4 className="card-title">Humanitarian Assistance</h4>
                  <p className="card-text">
                    To offer humanitarian assistance to vulnerable individuals, refugees and communities during emergencies, disasters, and periods of crisis.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Empowerment (exact) */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-custom">
                <div className="card-body text-center">
                  <img src="/images/empowerement.png" alt="Empowerment" className="card-icon" />
                  <h4 className="card-title">Empowerment</h4>
                  <p className="card-text">
                    To empower youths, women, and persons living with disabilities through leadership development, advocacy, capacity building, and inclusion in social and economic activities.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. Partnerships & Collaboration (exact) */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-custom">
                <div className="card-body text-center">
                  <img src="/images/partnership.jpg" alt="Partnerships" className="card-icon" />
                  <h4 className="card-title">Partnerships & Collaboration</h4>
                  <p className="card-text">
                    To collaborate with government agencies, development partners, and community organizations in implementing programs that advance social welfare and inclusive development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
