"use client";

import React, { useState } from "react";
import Link from "next/link";

interface AccordionItem {
  title: string;
  desc1: string;
  desc2: string;
  image?: string;
}

interface ServiceHorizontalAccordionProps {
  data?: AccordionItem[];
}

const defaultAccordionData: AccordionItem[] = [
  {
    title: "SEO Strategy & Analytics",
    desc1: "Comprehensive SEO strategies tailored to your firm.",
    desc2: "Stay ahead with deep analytics and reporting."
  },
  {
    title: "Keyword Research Services",
    desc1: "Unlock the potential of high-impact keywords to drive organic traffic.",
    desc2: "Stay ahead with continuous keyword optimization."
  },
  {
    title: "SEO Audit Services",
    desc1: "In-depth technical and content audits.",
    desc2: "Identify and resolve hidden SEO issues."
  },
  {
    title: "On-Page SEO Services",
    desc1: "Optimize individual pages for higher rankings.",
    desc2: "Keyword placement, meta tags, and internal linking."
  },
  {
    title: "Off-Page SEO Services",
    desc1: "Build authority with high-quality backlinks.",
    desc2: "Increase domain trust and referral traffic."
  }
];

export default function ServiceHorizontalAccordion({ data }: ServiceHorizontalAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const items = data || defaultAccordionData;

  return (
    <section 
      className="service-accordion-section" 
      style={{ 
        backgroundColor: "#f5f6f8", 
        paddingTop: "60px", 
        paddingBottom: "80px",
        overflowX: "hidden" 
      }}
    >
      <div className="container">
        <h6 
          style={{ 
            color: "#3b286d", 
            fontWeight: "700", 
            marginBottom: "40px", 
            letterSpacing: "2px", 
            textTransform: "uppercase",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          OUR SERVICES <span style={{ width: "40px", height: "1px", backgroundColor: "#3b286d", display: "inline-block" }}></span>
        </h6>

        <style dangerouslySetInnerHTML={{__html: `
          .accordion-item-custom {
            background-color: #ffffff;
            border-radius: 24px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.03);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            height: 70px;
            width: 100%;
          }
          @media (min-width: 992px) {
            .accordion-item-custom {
              height: 600px;
              width: 70px;
              flex-grow: 0;
            }
          }
          .accordion-item-custom.active {
            cursor: default;
            height: 500px;
          }
          @media (min-width: 992px) {
            .accordion-item-custom.active {
              height: 600px;
              flex-grow: 1;
              max-width: 450px;
              width: auto;
            }
          }
          
          .accordion-active-content {
            opacity: 0;
            padding: 40px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 0;
            left: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
          }
          @media (min-width: 992px) {
            .accordion-active-content {
              width: 450px; /* fixed width internal container */
            }
          }
          .accordion-item-custom.active .accordion-active-content {
            opacity: 1;
            transition-delay: 0.2s;
            pointer-events: auto;
          }

          .accordion-inactive-desktop {
            opacity: 1;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            transition: opacity 0.2s ease;
            pointer-events: auto;
          }
          .accordion-item-custom.active .accordion-inactive-desktop {
            opacity: 0;
            pointer-events: none;
          }
          
          .accordion-inactive-mobile {
            opacity: 1;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            align-items: center;
            padding: 0 24px;
            transition: opacity 0.2s ease;
            pointer-events: auto;
          }
          .accordion-item-custom.active .accordion-inactive-mobile {
            opacity: 0;
            pointer-events: none;
          }
        `}} />

        <div className="d-flex flex-column flex-lg-row gap-3" style={{ minHeight: "600px", justifyContent: "center" }}>
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            const itemNumber = (index + 1).toString().padStart(2, "0");
            
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`accordion-item-custom ${isActive ? 'active' : ''}`}
              >
                {/* Active Content Container */}
                <div className="accordion-active-content">
                  <div style={{ position: "absolute", top: "30px", right: "30px", color: "#b9b9cc", fontWeight: "600" }}>
                    {itemNumber}
                  </div>
                  
                  <div className="text-center mb-4 mt-2" style={{ height: "180px", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                    <img 
                      src={item.image || `/assets/img/icon/seo-illustration.webp`} 
                      alt={item.title} 
                      style={{ maxHeight: "160px", objectFit: "contain" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/200x160/f0e6ff/4a2a85?text=Illustration';
                      }}
                    />
                  </div>

                  <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#2d205a", margin: 0 }}>
                        {item.title}
                      </h3>
                    </div>
                    
                    <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" }}>
                      {item.desc1}
                      <br /><br />
                      {item.desc2}
                    </p>

                    <div className="mt-auto">
                      <Link 
                        href="/contact" 
                        style={{ 
                          backgroundColor: "#3b286d", 
                          color: "white", 
                          padding: "12px 24px", 
                          borderRadius: "30px", 
                          fontWeight: "600",
                          textDecoration: "none",
                          fontSize: "14px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px"
                        }}
                      >
                        Get in Touch <i className="fa-solid fa-chevron-right" style={{ fontSize: "12px" }}></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Inactive Content - Vertical text on desktop */}
                <div className="accordion-inactive-desktop d-none d-lg-flex">
                  <span 
                    style={{ 
                      transform: "rotate(-90deg)", 
                      whiteSpace: "nowrap", 
                      fontWeight: "700", 
                      color: "#3b286d",
                      fontSize: "16px",
                      letterSpacing: "0.5px"
                    }}
                  >
                    {item.title}
                  </span>
                </div>

                {/* Mobile inactive text (when stacked) */}
                <div className="accordion-inactive-mobile d-flex d-lg-none">
                  <span 
                    style={{ 
                      fontWeight: "700", 
                      color: "#3b286d",
                      fontSize: "16px",
                    }}
                  >
                    {itemNumber}. {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
