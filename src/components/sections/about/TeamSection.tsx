import Link from "next/link";

export default function TeamSection() {
  const team = [
    { img: "01.webp", name: "Shikhon Islam", role: "Web Developer", delay: ".2s" },
    { img: "02.webp", name: "Thomas tatum", role: "Marketing Leader", delay: ".4s" },
    { img: "03.webp", name: "Hazel Gerber", role: "UX - UI Designer", delay: ".6s" },
    { img: "04.webp", name: "Landon Legend", role: "Digital Product", delay: ".8s" },
  ];

  return (
    <section className="team-sectopn fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">our team</h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Our Special Team
          </h2>
        </div>
        <div className="row">
          {team.map((member) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={member.delay}
              key={member.name}
            >
              <div className="team-card-items">
                <div className="thumb">
                  <img
                    src={`/assets/img/team/${member.img}`}
                    alt={member.name}
                  />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/team/details">{member.name}</Link>
                  </h3>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

