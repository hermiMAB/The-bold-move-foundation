export default function Team() {
  return (
    <main>
      <section className="bg-dark pt-5 pb-5">
        <div className="container text-center" style={{ paddingTop: "80px", paddingBottom: "40px" }}>
          <h1 style={{ color: "#F4CE6B", fontSize: "3.5rem", marginBottom: "1rem" }}>
            Our Team
          </h1>
          <p className="lead text-light mb-5 mx-auto" style={{ maxWidth: "800px" }}>
            Meet the dedicated leadership and technical team behind The Bold Move Foundation, committed to driving sustainable community empowerment and digital inclusion.
          </p>

          <div className="row g-4 justify-content-center">
            {/* Dr. Damaris Felistus Mulwa */}
            <div className="col-lg-4 col-md-6">
              <div className="team-card text-light p-4">
                <img src="/images/damaris.jpg" alt="Dr. Damaris Felistus Mulwa" className="team-photo mb-3" />
                <h3 style={{ color: "#F4CE6B" }}>Dr. Damaris Felistus Mulwa, PhD</h3>
                <p className="text-warning fw-bold small mb-3">Co-Founder & Program Lead</p>
                <div className="small text-start">
                  <p className="mb-3">
                    Dr. Damaris Felistus Mulwa is the Chairperson of the Board and co-founding director of the Bold Move Foundation. Besides, she is the program lead of the Bold Move Foundation (BMF), a Kenyan NGO that equips women, youth, and persons with disabilities in underserved Kenyan counties with education, digital, financial, entrepreneurial, and employable skills.
                  </p>
                  <p className="mb-3">
                    Through training, mentorship, and pathways to work, the Bold Move Foundation aims to reduce unemployment and poverty and build economic resilience in the communities we serve.
                  </p>
                  <p className="mb-0">
                    Dr. Damaris is a Lecturer in the Department of Statistics and Actuarial Sciences at Jomo Kenyatta University of Agriculture and Technology, Kenya. She holds a PhD in Mathematics from Sokoine University of Agriculture, Tanzania, an MSc in Applied Statistics from Jomo Kenyatta University of Agriculture and Technology, Kenya, and a Bachelor of Science in Mathematics (First class honors) from the Jomo Kenyatta University of Agriculture and Technology, Kenya. She has over ten years experience in university teaching, research and mentorship.
                  </p>
                </div>
              </div>
            </div>

            {/* Millicent Willy */}
            <div className="col-lg-4 col-md-6">
              <div className="team-card text-light p-4">
                <img src="/images/millicent.jpg" alt="Millicent Willy" className="team-photo mb-3" />
                <h3 style={{ color: "#F4CE6B" }}>Millicent Willy, CPA-K</h3>
                <p className="text-warning fw-bold small mb-3">Co-Founder & Executive Director</p>
                <div className="small text-start">
                  <p className="mb-3">
                    Millicent is a finance and development professional with over a decade of experience across the private sector and nonprofit development space. Her career spans corporate finance, grants management, donor compliance, financial strategy, and organisational strengthening, with experience managing multi-million-dollar grant portfolios across Africa.
                  </p>
                  <p className="mb-3">
                    She is the Co-Founder and Executive Director of The Bold Move Foundation, where she leads the organization's mission to equip youth, women, and persons with disabilities with the digital and entrepreneurial skills, mentorship, and market access needed to build lasting economic resilience.
                  </p>
                  <p className="mb-3">
                    Her work is driven by a strong conviction in women's and youth's economic potential.
                  </p>
                  <p className="mb-3">
                    Millicent holds a Bachelor of Commerce in Finance, is a Certified Public Accountant (CPA-K), and is currently pursuing an MSc in Development Finance at KCA University.
                  </p>
                  <p className="mb-3">
                    She is also an International Labour Organization (ILO) Certified Digital Skills Trainer, a credential she brings directly into BMF's programming, including the design and delivery of the Foundation's digital skills cohorts.
                  </p>
                  <p className="mb-3">
                    Alongside her work at BMF, Millicent is the Founder and Managing Director of ImpactFlow Advisory, a grant-finance consultancy that supports NGOs in capacity building for finance and operations.
                  </p>
                  <p className="mb-0">
                    Across both organizations, she is focused on building programs and partnerships that start where the need is greatest and connect directly to real, sustainable impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Hermela Amha Genanaw */}
            <div className="col-lg-4 col-md-6">
              <div className="team-card text-light p-4">
                <img src="/images/hermela.jpg" alt="Hermela Amha Genanaw" className="team-photo mb-3" />
                <h3 style={{ color: "#F4CE6B" }}>Hermela Amha Genanaw</h3>
                <p className="text-warning fw-bold small mb-3">Website Administrator</p>
                <div className="small text-start">
                  <p className="mb-3">
                    Hermela Amha Genanaw is the Website Administrator for The Bold Move Foundation, where she manages and maintains the Foundation's website to ensure it remains current, accessible, and engaging. She oversees website updates, content publishing, performance monitoring, and the overall user experience, helping the Foundation effectively communicate its mission and programs to audiences around the world.
                  </p>
                  <p className="mb-0">
                    Hermela is currently pursuing a degree in Computational Systems at Zayed University. She has a strong interest in web development, digital technologies, and creating impactful online experiences that support nonprofit organizations and community initiatives.
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


