import Link from "next/link";

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
        </div>
      </section>

      {/* Page Intro */}
      <section className="py-5" style={{ backgroundColor: "#181818" }}>
        <div className="container text-center" style={{ maxWidth: "900px" }}>
          <p className="lead mb-4" style={{ color: "#e0e0e0" }}>
            The BMF is a Kenyan registered non profit organization dedicated to supporting the youth(18-35 yrs), women, and people with disabilities to take bold steps in their self-development and empowerment. Through research, education, mentorship, and hands-on training in entrepreneurial, employable, digital, and financial skills, we equip participants with the knowledge, confidence, and tools to succeed in business, careers, and life. By building these essential skills, we create lasting change in their lives and communities.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-5" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container">
          <h2 className="fw-bold mb-5 text-center text-md-start" style={{ color: "#F4CE6B" }}>The Challenge</h2>
          <div className="row align-items-center">
            <div className="col-md-2 text-center mb-4 mb-md-0">
              <i aria-hidden="true" className="bi bi-exclamation-triangle-fill" style={{ fontSize: "4rem", color: "#F4CE6B" }}></i>
            </div>
            <div className="col-md-10">
              <p style={{ color: "#e0e0e0", fontSize: "1.1rem", lineHeight: "1.7" }}>
                In Kenya, youth unemployment, gender-based economic exclusion, and the systemic marginalization of persons with disabilities remain persistent barriers to shared prosperity. Many young people finish school or training without the practical, market-relevant skills employers and markets demand. Women face structural obstacles in accessing finance, business networks, and leadership opportunities. Persons with disabilities are routinely excluded from mainstream economic programmes. The BMF exists because ambition alone is not enough — access, skills, and support make the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5" style={{ backgroundColor: "#181818" }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="mission-vision-card text-light">
                <i aria-hidden="true" className="bi bi-bullseye" style={{ fontSize: "2.5rem", color: "#F4CE6B", display: "block", marginBottom: "1rem" }}></i>
                <h3 style={{ color: "#F4CE6B", marginBottom: "1rem" }}>Our Mission</h3>
                <p>To create equitable opportunity by expanding access to education, research, mentorship, and practical, market-driven training in employable and entrepreneurial skills that enable underserved communities (youth, women and people with disabilities) to make bold moves toward lasting economic independence.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mission-vision-card text-light">
                <i aria-hidden="true" className="bi bi-eye-fill" style={{ fontSize: "2.5rem", color: "#F4CE6B", display: "block", marginBottom: "1rem" }}></i>
                <h3 style={{ color: "#F4CE6B", marginBottom: "1rem" }}>Our Vision</h3>
                <p>An inclusive economy where systemic barriers to education, employment, and entrepreneurship are dismantled, enabling youth, women, and persons with disabilities to fully participate and prosper.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-5" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container">
          <h2 className="fw-bold mb-5 text-center" style={{ color: "#F4CE6B" }}>Our Approach</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="approach-card text-light">
                <i aria-hidden="true" className="bi bi-search" style={{ fontSize: "2.5rem", color: "#F4CE6B", display: "block", marginBottom: "1rem" }}></i>
                <h3 className="mb-3 text-warning h5">Research-Backed</h3>
                <p className="small">Our programmes are informed by evidence on what works for skills development and economic inclusion in the Kenyan context.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="approach-card text-light">
                <i aria-hidden="true" className="bi bi-tools" style={{ fontSize: "2.5rem", color: "#F4CE6B", display: "block", marginBottom: "1rem" }}></i>
                <h3 className="mb-3 text-warning h5">Hands-On & Practical</h3>
                <p className="small">We prioritise learning by doing. Our training is market-driven, directly applicable to real employment and business environments.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="approach-card text-light">
                <i aria-hidden="true" className="bi bi-person-check-fill" style={{ fontSize: "2.5rem", color: "#F4CE6B", display: "block", marginBottom: "1rem" }}></i>
                <h3 className="mb-3 text-warning h5">Mentorship-Led</h3>
                <p className="small">Participants are connected with experienced mentors who provide guidance, networks, and accountability beyond the classroom.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="approach-card text-light">
                <i aria-hidden="true" className="bi bi-house-heart-fill" style={{ fontSize: "2.5rem", color: "#F4CE6B", display: "block", marginBottom: "1rem" }}></i>
                <h3 className="mb-3 text-warning h5">Community-Rooted</h3>
                <p className="small">We work from within communities, not from above them — partnering with local organisations and structures to ensure relevance and reach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5" style={{ backgroundColor: "#181818" }}>
        <div className="container">
          <h2 className="fw-bold mb-5 text-center" style={{ color: "#F4CE6B" }}>Our Core Values</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6">
              <div className="value-item">
                <i aria-hidden="true" className="bi bi-lightning-fill" style={{ fontSize: "1.5rem", color: "#F4CE6B", marginRight: "1rem" }}></i>
                <div>
                  <strong className="text-warning">Bold Action</strong>
                  <span className="text-light d-block mt-1">We take courageous steps even in uncertain conditions, and we inspire others to do the same.</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="value-item">
                <i aria-hidden="true" className="bi bi-balance-scale" style={{ fontSize: "1.5rem", color: "#F4CE6B", marginRight: "1rem" }}></i>
                <div>
                  <strong className="text-warning">Equity</strong>
                  <span className="text-light d-block mt-1">We are committed to fairness and inclusion, ensuring those most marginalised are centred in everything we do.</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="value-item">
                <i aria-hidden="true" className="bi bi-shield-check" style={{ fontSize: "1.5rem", color: "#F4CE6B", marginRight: "1rem" }}></i>
                <div>
                  <strong className="text-warning">Integrity</strong>
                  <span className="text-light d-block mt-1">We operate with transparency, accountability, and honesty in all our relationships and programmes.</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="value-item">
                <i aria-hidden="true" className="bi bi-people-fill" style={{ fontSize: "1.5rem", color: "#F4CE6B", marginRight: "1rem" }}></i>
                <div>
                  <strong className="text-warning">Collaboration</strong>
                  <span className="text-light d-block mt-1">We believe lasting change is built through partnership, not in isolation.</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="value-item">
                <i aria-hidden="true" className="bi bi-star-fill" style={{ fontSize: "1.5rem", color: "#F4CE6B", marginRight: "1rem" }}></i>
                <div>
                  <strong className="text-warning">Excellence</strong>
                  <span className="text-light d-block mt-1">We hold ourselves to high standards in programme quality, impact measurement, and participant outcomes.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-5" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container">
          <h2 className="fw-bold mb-4 text-center" style={{ color: "#F4CE6B" }}>Our Team</h2>
          <p className="text-center mx-auto mb-5 text-light" style={{ maxWidth: "800px" }}>
            The BMF is led by a committed founding team with deep roots in community development, training, and youth empowerment in Kenya. Their combined experience drives the organisation's vision and daily operations.
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6">
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
            <div className="col-md-6">
              <div className="team-card text-light p-4">
                <img src="/images/damaris.jpg" alt="Dr. Damaris Felistus Mulwa" className="team-photo mb-3" />
                <h3 style={{ color: "#F4CE6B" }}>Dr. Damaris Felistus Mulwa, PhD</h3>
                <p className="text-warning fw-bold small mb-3">Co-Founder & Program Lead</p>
                <div className="small text-start">
                  <p className="mb-3">
                    Dr. Damaris Felistus Mulwa is the co-founding director of the Bold Move Foundation. Besides, she is the program lead of the Bold Move Foundation (BMF), a Kenyan NGO that equips women, youth, and persons with disabilities in underserved Kenyan counties with education, digital, financial, entrepreneurial, and employable skills.
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
          </div>
        </div>
      </section>

      {/* Our Board */}
      <section id="board" className="py-5" style={{ backgroundColor: "#181818" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-5" style={{ color: "#F4CE6B" }}>Our Board</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="team-card text-light p-4">
                <img src="/images/damaris.jpg" alt="Dr. Damaris Felistus Mulwa" className="team-photo mb-3" />
                <h3 style={{ color: "#F4CE6B" }}>Dr. Damaris Felistus Mulwa, PhD</h3>
                <p className="text-warning fw-bold small mb-3">Chairperson of the Board</p>
                <div className="small text-start">
                  <p className="mb-0">
                    Dr. Damaris Felistus Mulwa is the Chairperson of the Board and co-founding director of the Bold Move Foundation. She is a Lecturer in the Department of Statistics and Actuarial Sciences at Jomo Kenyatta University of Agriculture and Technology, Kenya. She holds a PhD in Mathematics from Sokoine University of Agriculture, Tanzania.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-card text-light p-4">
                <img src="/images/millicent.jpg" alt="Millicent Willy" className="team-photo mb-3" />
                <h3 style={{ color: "#F4CE6B" }}>Millicent Willy, CPA-K</h3>
                <p className="text-warning fw-bold small mb-3">Treasurer of the Board</p>
                <div className="small text-start">
                  <p className="mb-0">
                    Millicent is the Treasurer of the Board and Co-Founder of the Bold Move Foundation. She is a finance and development professional with over a decade of experience across the private sector and nonprofit development space, specializing in grants management, donor compliance, and financial strategy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-card text-light p-4">
                <img src="/images/imelda.png" alt="Imelda Ochari" className="team-photo mb-3" />
                <h3 style={{ color: "#F4CE6B" }}>Imelda Ochari</h3>
                <p className="text-warning fw-bold small mb-3">Board Member & MEAL Specialist</p>
                <div className="small text-start">
                  <p className="mb-3">
                    Imelda Ochari is a Research, Monitoring, Evaluation, and Learning (MEAL) Specialist with 20 years of experience in Health Systems Strengthening, focusing on Primary Healthcare (PHC) research and improvement across Africa and Asia. Her expertise spans impact measurement, data visualization, digital health solutions, and policy analysis, with a strong commitment to gender integration and inclusive data systems that advance health equity.
                  </p>
                  <p className="mb-3">
                    She has successfully led large-scale PHC and Community-Based Surveillance (CBS) studies in Kenya, Tanzania, Nigeria, and Indonesia, conducting systems assessments at public health centers and sub-national levels, identifying gaps, and providing actionable recommendations for strengthening surveillance and response capacity. She has developed detailed M&E strategies aligned with project objectives and resources, leveraging digital tools for real-time monitoring and decision-making.
                  </p>
                  <p className="mb-3">
                    Her experience includes designing and implementing digital data collection platforms, mentoring national staff on documenting lessons from CBS expansion, and facilitating capacity-building workshops for national surveillance teams. She excels in translating research findings into policy and practice, contributing to evidence-based reforms, digital innovations, and sustainable improvements in healthcare delivery, particularly for marginalized populations.
                  </p>
                  <p className="mb-0">
                    Imelda is pursuing a PhD in Health Systems Management at Kenya Methodist University. She holds a Master's Degree in Community Health and Development from Great Lakes University of Kisumu, Kenya, and a Bachelor's Degree in Biomedical Sciences and Technology from Maseno University, Kenya.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-card text-light p-4">
                <img src="/images/reuben.jpg" alt="Reuben Manyiza" className="team-photo mb-3" />
                <h3 style={{ color: "#F4CE6B" }}>Reuben Manyiza</h3>
                <p className="text-warning fw-bold small mb-3">Board Member & Finance Operations Expert</p>
                <div className="small text-start">
                  <p className="mb-3">
                    Reuben Manyiza is a Global Process Expert with more than 15 years of comprehensive experience in finance and accounting. Serving as a key strategic partner to finance operations, he bridges the gap between financial governance and operational agility.
                  </p>
                  <p className="mb-3">
                    A certified Lean Office Green Belt, Reuben is an expert in organizational design, waste elimination, and continuous improvement. Throughout his career, he has successfully spearheaded cross-functional initiatives aimed at stripping away systemic inefficiencies, optimizing global workflows, and maximizing bottom-line productivity with a Leading Multinational in the Testing Verification and Certification Industry (TIC).
                  </p>
                  <p className="mb-3">
                    Known for a data-driven approach and a collaborative leadership style, Reuben transforms complex finance operations into streamlined, high-performing engines that support long-term Organization's strategy.
                  </p>
                  <p className="mb-0">
                    He holds a Bachelor's degree from Kenyatta University and is a CPA-K. He is currently pursuing a Master's degree at Strathmore University and is a holder of a Green Belt in Lean Office.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-card text-light p-4">
                <img src="/images/jane.png" alt="Prof Jane Catherine Ngila" className="team-photo mb-3" />
                <h3 style={{ color: "#F4CE6B" }}>Prof Jane Catherine Ngila</h3>
                <p className="text-warning fw-bold small mb-3">Board Member & STEM Education Expert</p>
                <div className="small text-start">
                  <p className="mb-3">
                    Prof. Jane Catherine Ngila is currently the Executive Director of the African Foundation for Women and Youth in Education, Science, Technology and Innovation (ESTI). The vision of AFoWYESTI is to promote access to quality education, alleviate poverty, and offer mentorship programmes for women and youth in STEM.
                  </p>
                  <p className="mb-3">
                    She is the immediate former Interim Executive Director of the African Academy of Sciences (AAS). She is a former member of the UN 10-Member Group for technology facilitation mechanism on STI for SDGs; UNESCO International Consultative Group of Experts for Women in Science; Council Member of United Nations University; Member of International Organization for Chemical Sciences in Development (IOCD); and a Council Member of United Nations University. She is a Fellow of TWAS, AAS, and ASSAf. She received the 2025 IUPAC Distinguished Women in Chemistry Award, the 2021 L'Oréal-UNESCO FWIS representing Africa and the Middle East, the 2017 African Union-Kwame Nkrumah Women Scientific Awards, and the 2016 South Africa Distinguished Women in Science Awards.
                  </p>
                  <p className="mb-0">
                    She has previously held the following teaching and management positions: Deputy Vice Chancellor of Riara University for Academic Affairs; Deputy Director of the Institute of Oil and Gas, Kenya Pipeline Company; Professor and Head of Applied Chemistry at University of Johannesburg; and Senior Lecturer/Lecturer at University of KwaZulu-Natal, University of Botswana, and Kenyatta University.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section id="partners" className="py-5" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{ color: "#F4CE6B" }}>Our Partners</h2>
          <p className="lead mx-auto text-light mb-4" style={{ maxWidth: "800px" }}>
            We believe that the most lasting change happens through collaboration. We work closely with corporate partners, development organizations, county governments, and educational institutions across Kenya.
          </p>
          <Link href="/partner" className="btn btn-custom px-4 py-2">View Partnership Opportunities</Link>
        </div>
      </section>
    </main>
  );
}
