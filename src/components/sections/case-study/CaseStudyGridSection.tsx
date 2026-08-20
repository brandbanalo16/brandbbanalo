"use client";

import Link from "next/link";
import { useState, type SyntheticEvent } from "react";
import caseStudyData from "@/data/caseStudyData.json";

const { services, caseStudies } = caseStudyData;

const fallbackCaseStudyImage = "/assets/img/case-study/1.webp";

function handleCaseStudyImageError(event: SyntheticEvent<HTMLImageElement, Event>) {
  const target = event.currentTarget;
  if (!target.dataset.fallback) {
    target.dataset.fallback = "true";
    target.src = fallbackCaseStudyImage;
  }
}

export default function CaseStudyGridSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCaseStudies =
    activeTab === "all"
      ? caseStudies
      : caseStudies.filter((caseStudy) => caseStudy.service === activeTab);

  return (
    <section className="case-study-section-2 fix section-padding">
      <div className="container">
        {/* Tab Navigation */}
        <div className="case-study-tabs mb-5 wow fadeInUp" data-wow-delay=".3s">
          <div className="tab-buttons-wrapper">
            <div className="tab-buttons d-flex gap-3 flex-wrap justify-content-center">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`tab-button ${
                    activeTab === service.id ? "active" : ""
                  }`}
                  style={{
                    padding: "10px 20px",
                    border: activeTab === service.id ? "2px solid" : "1px solid #ddd",
                    borderColor: activeTab === service.id ? "var(--theme-color, #ff6b35)" : "#ddd",
                    backgroundColor: activeTab === service.id ? "var(--theme-color, #ff6b35)" : "transparent",
                    color: activeTab === service.id ? "white" : "#333",
                    cursor: "pointer",
                    borderRadius: "5px",
                    fontWeight: activeTab === service.id ? "600" : "400",
                    transition: "all 0.3s ease",
                  }}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid - 3 Columns */}
        <div className="case-study-grid-wrapper">
          <div className="row g-4">
            {filteredCaseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.1 * (index + 1)}s`}
              >
                <div className="case-study-box-items-2 theme-color-1 h-100">
                  <div className="thumb">
                    <img
                      src={
                        caseStudy.img?.startsWith("/assets/img/")
                          ? caseStudy.img
                          : `/assets/img/case-study/${caseStudy.img}`
                      }
                      alt={caseStudy.imageName || caseStudy.title}
                      onError={handleCaseStudyImageError}
                    />
                    <Link href={caseStudy.href} className="icon">
                      <img src="/assets/img/icon/12.svg" alt="icon" />
                    </Link>
                  </div>
                  <div className="content">
                    <p>{caseStudy.date}</p>
                    <h3>
                      <Link href={caseStudy.href}>{caseStudy.title}</Link>
                    </h3>
                    {caseStudy.imageName && (
                      <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
                        {caseStudy.imageName}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Case Studies Message */}
        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted">No case studies found for this service.</p>
          </div>
        )}
      </div>
    </section>
  );
}

