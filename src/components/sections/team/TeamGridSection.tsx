const teamMembers = [
  { img: "manish.webp", name: "Manish Pandey", role: "Digital Marketing Manager" },
  { img: "himanshu.webp", name: "Himanshu", role: "Social Media Team Leader" },
  { img: "yash.webp", name: "Yash Mishra", role: "Performance Marketing Executive" },
  { img: "amit.webp", name: "Amit Kumar", role: "Sales" },
  { img: "geet.webp", name: "Geet Kaur", role: "Social Media Manager" },
  { img: "kajal.webp", name: "Kajal", role: "Graphic Designer" },
  { img: "sanjana.webp", name: "Sanjana", role: "Graphic Designer" },
  { img: "Navjot.webp", name: "Navjot Singh", role: "Content Creator" },
  { img: "akansha.webp", name: "Akansha Verma", role: "Web Developer" },
  { img: "dhruv.webp", name: "Dhruv Prajapati", role: "Web Developer" },
];

export default function TeamGridSection() {
  return (
    <section className="fix section-padding" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: "32px" }}>
          <span className="team-section-subtitle">
            We Have
          </span>
          <h2 className="team-section-title">
            Well Experience Team Member
          </h2>
        </div>
        <div className="row g-0 team-grid-container">
          {teamMembers.map((member) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-6"
              key={`${member.img}-${member.name}`}
            >
              <div className="team-member-card">
                <div className="team-img-wrapper">
                  <img
                    src={`/assets/img/team/${member.img}`}
                    alt={member.name}
                  />
                </div>
                <div>
                  <h3 className="team-member-name">
                    {member.name}
                  </h3>
                  <p className="team-member-role">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .team-section-subtitle {
            font-size: 16px;
            color: black;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 8px;
          }
          .team-section-title {
            color: #ff751f;
            margin: 0;
            font-size: 42px;
            line-height: 1.1;
          }
          .team-grid-container {
            border-top: 1px solid #ececec;
            border-left: 1px solid #ececec;
          }
          .team-member-card {
            min-height: 235px;
            padding: 28px 16px 20px;
            border-right: 1px solid #ececec;
            border-bottom: 1px solid #ececec;
            text-align: center;
            background: #fff;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .team-img-wrapper {
            width: 100%;
            max-width: 200px;
            aspect-ratio: 1/1;
            margin: 0 auto 14px;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .team-img-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .team-member-name {
            font-size: 20px;
            margin-bottom: 4px;
            font-weight: 500;
            color: #1d1d1d;
          }
          .team-member-role {
            margin: 0;
            color: #777777;
            font-size: 13px;
            line-height: 1.4;
          }

          /* Mobile Responsive Adjustments */
          @media (max-width: 767px) {
            .team-section-title {
              font-size: 28px;
            }
            .team-member-card {
              padding: 20px 10px 15px;
              min-height: auto;
            }
            .team-img-wrapper {
              max-width: 120px;
              margin-bottom: 12px;
            }
            .team-member-name {
              font-size: 16px;
            }
            .team-member-role {
              font-size: 12px;
            }
          }
          
          /* Extra small devices */
          @media (max-width: 400px) {
            .team-img-wrapper {
              max-width: 100px;
            }
            .team-member-name {
              font-size: 15px;
            }
            .team-member-role {
              font-size: 11px;
            }
            .team-member-card {
              padding: 15px 5px 10px;
            }
          }
        `
      }} />
    </section>
  );
}

