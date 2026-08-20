 "use client";

import Link from "next/link";
import servicesData from "@/data/Industry.json";
import { getMergedServiceForIndustry } from "@/lib/industryData";

type ServiceDetailsMainSectionProps = {
  initialServiceId?: string;
  initialIndustryId?: string;
};

export default function ServiceDetailsMainSection({ initialServiceId, initialIndustryId }: ServiceDetailsMainSectionProps) {
  const service =
    servicesData.services.find((s) => s.id === (initialServiceId ?? "001")) ??
    servicesData.services[0];
  const industry =
    servicesData.industries.find((i) => i.id === (initialIndustryId ?? "ind-001")) ??
    servicesData.industries[0];

  const merged =
    getMergedServiceForIndustry({
      serviceId: service.id,
      industryId: industry.id,
    }) ?? service;

  const highlights = (merged as { highlights?: string[] }).highlights ?? [
    "Conversion-focused structure with clear CTAs",
    "Mobile-first experience and fast performance",
    "SEO-ready pages and analytics tracking",
  ];

  const whatWeDoItems = merged.sections?.length
    ? merged.sections
    : service.sections ?? [];

  const leftIcons = [
    "fa-solid fa-bolt",
    "fa-solid fa-shield-halved",
    "fa-solid fa-arrow-up-right-dots",
  ];

  const rightIcons = [
    "fa-solid fa-code",
    "fa-solid fa-network-wired",
    "fa-solid fa-chart-line",
  ];

  const leftCards = highlights.map((item, index) => ({
    title: item,
    description: "",
    icon: leftIcons[index] ?? "fa-solid fa-circle-check",
  }));

  const rightCardPoints = (whatWeDoItems[1]?.body ?? "")
    .split(",")
    .map((text) => text.trim())
    .filter(Boolean)
    .slice(0, 3);

  const rightCards = rightCardPoints.length
    ? rightCardPoints.map((point, index) => ({
        title: point,
        description: "",
        icon: rightIcons[index] ?? "fa-solid fa-circle-check",
      }))
    : whatWeDoItems.slice(1).map((item, index) => ({
        title: item.heading,
        description: item.body,
        icon: rightIcons[index] ?? "fa-solid fa-circle-check",
      }));

  const aboutSummary =
    (merged as { agencySummary?: string }).agencySummary ??
    service.agencySummary ??
    industry.description;

  const aboutImage =
    (merged as { image?: string }).image ?? service.image ?? industry.image;

  const recommendedServices = servicesData.services.filter((svc) =>
    industry.recommendedServiceIds.includes(svc.id)
  );

  return (
    <>
      <section className="service-details-section section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5 align-items-center">
              <div className="col-12 col-lg-7">
                <div className="service-details-content">
                  <h2>{merged.heroTitle}</h2>
                  <p className="mb-4">{merged.heroDescription}</p>

                  <h4 className="mb-3">What We Deliver for {industry.name}</h4>
                  <ul className="details-list">
                    {highlights.map((item) => (
                      <li key={item}>
                        <i className="fa-solid fa-circle-check" /> {item}
                      </li>
                    ))}
                  </ul>

                  <div className="d-flex flex-wrap gap-2 mt-4">
                    <Link className="theme-btn" href="/contact">
                      Get a Free Consultation
                    </Link>
                    <Link className="theme-btn style-2" href="/services">
                      Explore Services
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div
                  style={{
                    borderRadius: 20,
                    border: "1px solid rgba(0,0,0,0.08)",
                    minHeight: 330,
                    overflow: "hidden",
                  }}
                >
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    style={{ width: "100%", height: "100%", minHeight: 330, objectFit: "cover" }} 
                  />
                </div>
              </div>
            </div>

            <div className="row g-4 mt-5">
              <div className="col-12">
                <div className="section-title text-center mb-5">
                  <span className="sub-title">What Do</span>
                  <h2>How we help {industry.name}</h2>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="feature-column">
                  <h3 className="feature-column-title">{whatWeDoItems[0]?.heading ?? "What We Deliver"}</h3>
                  <div className="row g-3 mt-4 justify-content-center">
                    {leftCards.map((card, index) => (
                      <div key={`left-${index}`} className="col-12">
                        <div
                          className="single-service-items h-100"
                          style={{
                            borderRadius: 24,
                            padding: 32,
                            boxShadow: "0 24px 60px rgba(18, 38, 70, 0.08)",
                            background: "#ffffff",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              width: 64,
                              height: 64,
                              borderRadius: 20,
                              background: "#f6f0ff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginBottom: 20,
                            }}
                          >
                            <i className={card.icon} style={{ fontSize: 24, color: "#5f3dc4" }} />
                          </div>
                          <div className="content">
                            <h4>{card.title}</h4>
                            {card.description && <p>{card.description}</p>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="feature-column">
                  <h3 className="feature-column-title">{whatWeDoItems[1]?.heading ?? "What We Provide"}</h3>
                  <div className="row g-3 mt-4 justify-content-center">
                    {rightCards.map((card, index) => (
                      <div key={`right-${index}`} className="col-12">
                        <div
                          className="single-service-items h-100"
                          style={{
                            borderRadius: 24,
                            padding: 32,
                            boxShadow: "0 24px 60px rgba(18, 38, 70, 0.08)",
                            background: "#ffffff",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              width: 64,
                              height: 64,
                              borderRadius: 20,
                              background: "#f6f0ff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginBottom: 20,
                            }}
                          >
                            <i className={card.icon} style={{ fontSize: 24, color: "#5f3dc4" }} />
                          </div>
                          <div className="content">
                            <h4>{card.title}</h4>
                            {card.description && <p>{card.description}</p>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-5 align-items-center mt-5">
              <div className="col-12 col-lg-6">
                <div className="about-image">
                  <img
                    src={aboutImage}
                    alt={`About ${service.name}`}
                    style={{ width: "100%", borderRadius: 20, objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="about-content">
                  <div className="section-title mb-4">
                    <span className="sub-title">About this service</span>
                    <h2>About {service.name} for {industry.name}</h2>
                  </div>
                  <p>{aboutSummary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

