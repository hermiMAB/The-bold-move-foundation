export default function Team() {
  return (
    <main>
      <section className="bg-dark pt-5 pb-5">
        <div className="container text-center" style={{ paddingTop: "80px", paddingBottom: "40px" }}>
          <h1 style={{ color: "#F4CE6B", fontSize: "3.5rem", marginBottom: "3rem" }}>
            Our Team
          </h1>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="team-card p-4">
                <h4>Damaris Felistus Mulwa</h4>
                <p className="text-warning fw-medium">Chairperson</p>
                <p>Leading the foundation with a vision for sustainable community empowerment and development.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="team-card p-4">
                <h4>Millicent Kalulu Willy</h4>
                <p className="text-warning fw-medium">Treasurer</p>
                <p>Oversees financial transparency, grants management, and economic empowerment initiatives.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="team-card p-4">
                <h4>Mark Makio Willie</h4>
                <p className="text-warning fw-medium">Secretary</p>
                <p>Manages communications, documentation, coordination, and program implementation.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="team-card p-4">
                <h4>Joseph Kithokoo Mulwa</h4>
                <p className="text-warning fw-medium">Member</p>
                <p>Supports program delivery and community collaboration for social impact.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="team-card p-4">
                <h4>Geoffrey Onkundi Barini</h4>
                <p className="text-warning fw-medium">Member</p>
                <p>Contributes to strategic planning, project execution, and stakeholder engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
