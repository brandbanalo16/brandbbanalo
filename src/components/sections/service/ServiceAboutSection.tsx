"use client";

import Link from "next/link";
import React from "react";

interface ServiceAboutSectionProps {
  data?: {
    label: string;
    title: string;
    description: string;
    image: string;
    links: { label: string; url: string; }[];
  };
}

export default function ServiceAboutSection({ data }: ServiceAboutSectionProps) {
  const label = data?.label || "About Us";
  const title = data?.title || "Meet The Digital Media\nPowerhouse For Your Brand";
  const description = data?.description || "Fueled by innovation and ideas, we are one of India’s largest media planning and digital experience management firms. Offering end-to-end digital solutions to clients across international markets, we work with both new and established businesses to help them grow.";
  const image = data?.image || "/assets/img/about/about-2.webp";
  const links = data?.links || [
    { label: "Find Out More", url: "/about" },
    { label: "Get in Touch", url: "/contact" }
  ];

  return (
    <section className="service-about-section" style={{ backgroundColor: "#f5f5f5", paddingTop: "80px", paddingBottom: "40px" }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-content">
              <h6 style={{ color: "#666", fontWeight: "600", marginBottom: "10px", fontSize: "16px" }}>{label}</h6>
              <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "20px", lineHeight: "1.3", color: "#222" }}>
                {title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              <div style={{ width: "60px", height: "4px", backgroundColor: "#000", marginBottom: "30px" }}></div>
              <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.6", marginBottom: "40px", paddingRight: "20px" }}>
                {description}
              </p>
              <div className="d-flex gap-3 flex-wrap">
                {links.map((link, index) => (
                  <Link 
                    key={index}
                    href={link.url} 
                    style={{ 
                      backgroundColor: "#4a2a85", 
                      color: "white", 
                      padding: "14px 32px", 
                      borderRadius: "30px", 
                      fontWeight: "600",
                      textDecoration: "none",
                      fontSize: "15px"
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image" style={{ width: "100%", height: "100%", position: "relative" }}>
              <img 
                src={image} 
                alt={title} 
                style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }} 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/eeeeee/999999?text=About+Image';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
