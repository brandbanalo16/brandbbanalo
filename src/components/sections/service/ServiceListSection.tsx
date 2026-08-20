"use client";

import Link from "next/link";
import servicesData from "@/data/Industry.json";

const services = servicesData.services.map((s, index) => ({
  id: s.id,
  key: s.key,
  title: s.listTitle || s.name,
  href: `/services/${s.key}`,
  contentFirst: index % 2 === 0,
  description: s.heroDescription,
}));

export default function ServiceListSection() {
  return (
    <section className="service-section fix section-padding">
      <div className="container">
        <div className="section-title-area bor-bottom margin-top-40" />
        <div className="service-wrapper">
          <ul className="style-border">
            {services.map((service) => (
              <li className="service-list" key={service.id}>
                {service.contentFirst ? (
                  <>
                    <div className="content">
                      <h4 className="wow fadeInUp">
                        {service.id}
                        <Link href={service.href}>
                          <i
                            className="bi bi-arrow-up-right"
                            style={{ fontSize: "28px" }}
                          ></i>
                        </Link>
                      </h4>
                      <h3
                        className="wow img-custom-anim-left"
                        style={{ fontSize: "80px" }}
                      >
                        <Link href={service.href}>{service.title}</Link>
                      </h3>
                    </div>
                    <p
                      className="wow img-custom-anim-right"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.4s"
                    >
                      {service.description}
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      className="wow img-custom-anim-left"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.3s"
                    >
                      {service.description}
                    </p>
                    <div className="content">
                      <h4 className="wow fadeInUp">{service.id}</h4>
                      <h3
                        className="wow img-custom-anim-right"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.4s"
                        style={{ fontSize: "80px" }}
                      >
                        <Link href={service.href}>{service.title}</Link>
                      </h3>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


