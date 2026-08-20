"use client";

import Link from "next/link";
import type { SyntheticEvent } from "react";
import CaseStudyDetailsContentSection from "./CaseStudyDetailsContentSection";
import CaseStudyDetailsSidebarSection from "./CaseStudyDetailsSidebarSection";
import CaseStudyImageSlider from "./CaseStudyImageSlider";

const fallbackCaseStudyImage = "/assets/img/case-study/1.webp";

function handleCaseStudyImageError(event: SyntheticEvent<HTMLImageElement, Event>) {
  const target = event.currentTarget;
  if (!target.dataset.fallback) {
    target.dataset.fallback = "true";
    target.src = fallbackCaseStudyImage;
  }
}

interface CaseStudy {
  id: number;
  slug: string;
  img: string;
  date: string;
  title: string;
  description: string;
  service: string;
  href: string;
  category: string;
  images?: string[];
}

interface CaseStudyDetailsMainSectionProps {
  caseStudy?: CaseStudy;
  prevCaseStudy?: CaseStudy | null;
  nextCaseStudy?: CaseStudy | null;
}

export default function CaseStudyDetailsMainSection({
  caseStudy,
  prevCaseStudy,
  nextCaseStudy,
}: CaseStudyDetailsMainSectionProps) {
  // Default caseStudy for static page
  const displayCaseStudy = caseStudy || {
    id: 0,
    slug: "",
    img: "1.webp",
    date: "MARCH 26, 2025",
    title: "Case Study",
    description: "Case Study Description",
    service: "web-development",
    href: "/case-study/details",
    category: "Web Development",
  };

  const defaultServiceImage: Record<string, string> = {
    "web-development": "Web Site.png",
    "search-engine-optimization": "SEO.png",
    "lead-generation": "Lead Generation.png",
    "social-media": "Social media.png",
    "branding": "Brand Design.png",
  };

  const serviceMainImage = defaultServiceImage[displayCaseStudy.service];
  const mainImageSrc = serviceMainImage
    ? `/assets/img/case-study/${serviceMainImage}`
    : displayCaseStudy.img?.startsWith("/assets/img/")
    ? displayCaseStudy.img
    : `/assets/img/case-study/${displayCaseStudy.img}`;

  return (
    <section className="case-study-details-section section-padding" style={{ background: '#fcfcfe' }}>
      <div className="container">
        <div className="case-study-details-wrapper">
          <div className="details-image mb-5" style={{ 
            borderRadius: '30px', 
            overflow: 'hidden', 
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.03)'
          }}>
            <img
              src={mainImageSrc}
              alt={displayCaseStudy.title}
              onError={handleCaseStudyImageError}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <div className="case-study-details-items">
            <div className="row g-5">
              <div className="col-xl-8">
                <CaseStudyDetailsContentSection caseStudy={displayCaseStudy} />
              </div>
              <div className="col-xl-4 col-lg-5">
                <CaseStudyDetailsSidebarSection caseStudy={displayCaseStudy} />
              </div>
            </div>
          </div>

          {/* Image Slider Section - After Content */}
          {displayCaseStudy.images && displayCaseStudy.images.length > 0 && (
            <div className="gallery-slider-section mt-5 pt-5">
              <div className="section-title mb-4">
                <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#1a1a1a' }}>Project Gallery</h3>
              </div>
              <CaseStudyImageSlider 
                images={displayCaseStudy.images}
                caseStudyTitle={displayCaseStudy.title}
              />
            </div>
          )}

          {/* Navigation Section */}
          <div className="slider-button d-flex align-items-center justify-content-between mt-5 p-4" style={{ 
            background: '#ffffff', 
            borderRadius: '20px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid #f0f0f0'
          }}>
            <div className="prev-nav" style={{ flex: 1 }}>
              {prevCaseStudy ? (
                <Link href={prevCaseStudy.href} className="d-flex align-items-center gap-3 text-decoration-none group">
                  <div className="nav-icon d-center" style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '12px', 
                    background: '#f8f7ff', 
                    color: '#3b286d',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fas fa-chevron-left" />
                  </div>
                  <div className="nav-text d-none d-sm-block">
                    <span style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>Previous Project</span>
                    <span className="fw-bold" style={{ color: '#1a1a1a', fontSize: '15px' }}>{prevCaseStudy.title}</span>
                  </div>
                </Link>
              ) : (
                <div className="d-flex align-items-center gap-3 opacity-50">
                  <div className="nav-icon d-center" style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#f5f5f5', color: '#999' }}>
                    <i className="fas fa-chevron-left" />
                  </div>
                  <span style={{ fontSize: '14px', color: '#999' }}>First Project</span>
                </div>
              )}
            </div>

            <div className="all-work d-none d-md-block">
               <Link href="/case-study" className="d-center" style={{ width: '40px', height: '40px', color: '#3b286d' }}>
                 <i className="fas fa-th-large" style={{ fontSize: '20px' }} />
               </Link>
            </div>

            <div className="next-nav" style={{ flex: 1, textAlign: 'right' }}>
              {nextCaseStudy ? (
                <Link href={nextCaseStudy.href} className="d-flex align-items-center justify-content-end gap-3 text-decoration-none">
                  <div className="nav-text d-none d-sm-block">
                    <span style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>Next Project</span>
                    <span className="fw-bold" style={{ color: '#1a1a1a', fontSize: '15px' }}>{nextCaseStudy.title}</span>
                  </div>
                  <div className="nav-icon d-center" style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '12px', 
                    background: '#f8f7ff', 
                    color: '#3b286d',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fas fa-chevron-right" />
                  </div>
                </Link>
              ) : (
                <div className="d-flex align-items-center justify-content-end gap-3 opacity-50">
                  <span style={{ fontSize: '14px', color: '#999' }}>Last Project</span>
                  <div className="nav-icon d-center" style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#f5f5f5', color: '#999' }}>
                    <i className="fas fa-chevron-right" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

