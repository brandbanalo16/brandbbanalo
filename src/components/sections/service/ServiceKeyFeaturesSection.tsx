"use client";

import React from "react";

interface FeatureItem {
  title: string;
  desc: string;
}

interface ServiceKeyFeaturesSectionProps {
  data?: {
    label: string;
    title: string;
    features: FeatureItem[];
    mockupImage: string;
  };
}

export default function ServiceKeyFeaturesSection({ data }: ServiceKeyFeaturesSectionProps) {
  const label = data?.label || "OUR CAPABILITIES";
  const title = data?.title || "Key Features";
  const features = data?.features || [
    { title: "Mobile First", desc: "Ensuring a seamless experience across all mobile devices and screen sizes." },
    { title: "SEO Optimized", desc: "Built-in SEO best practices to help your site rank higher from day one." },
    { title: "Scalable Code", desc: "Clean, modular code that grows with your business requirements." },
    { title: "Secure Architecture", desc: "Enterprise-grade security measures to protect your data and users." },
    { title: "Custom Integration", desc: "Connecting your site with your favorite CRM, ERP, and marketing tools." },
    { title: "Fast Loading", desc: "Optimized assets and server-side rendering for lightning-fast speeds." }
  ];
  const mockupImage = data?.mockupImage || "https://raw.githubusercontent.com/techuntold/macbook-mockup/master/macbook.png";

  return (
    <section className="service-key-features-section" style={{ backgroundColor: "#ffffff", padding: "100px 0" }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <div className="features-content">
              <h6 
                className="wow fadeInUp" 
                data-wow-delay=".3s"
                style={{ color: "#4a2a85", fontWeight: "700", marginBottom: "15px", letterSpacing: "2px", textTransform: "uppercase", fontSize: "14px" }}
              >
                {label}
              </h6>
              <h2 
                className="wow fadeInUp" 
                data-wow-delay=".5s"
                style={{ fontSize: "42px", fontWeight: "800", color: "#222", marginBottom: "40px", lineHeight: "1.2" }}
              >
                {title}
              </h2>
              
              <div className="row g-4">
                {features.map((feature, index) => (
                  <div key={index} className="col-md-6 wow fadeInUp" data-wow-delay={`${0.3 + index * 0.1}s`}>
                    <div className="feature-item p-4" style={{ backgroundColor: "#fafafa", borderRadius: "20px", height: "100%", border: "1px solid #f0f0f0" }}>
                      <div className="icon-box mb-3" style={{ width: "40px", height: "40px", backgroundColor: "#f0e6ff", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <i className="fa-solid fa-check" style={{ color: "#4a2a85", fontSize: "18px" }}></i>
                      </div>
                      <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#222", marginBottom: "12px" }}>{feature.title}</h4>
                      <p style={{ fontSize: "15px", color: "#666", lineHeight: "1.6", margin: 0 }}>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-5">
            <div className="mockup-container wow fadeInRight" data-wow-delay=".5s" style={{ position: "relative" }}>
              <div 
                className="mockup-bg" 
                style={{ 
                  position: "absolute", 
                  top: "50%", 
                  left: "50%", 
                  transform: "translate(-50%, -50%)", 
                  width: "120%", 
                  height: "120%", 
                  background: "radial-gradient(circle, rgba(74,42,133,0.05) 0%, rgba(255,255,255,0) 70%)",
                  zIndex: -1
                }}
              ></div>
              <img 
                src={mockupImage} 
                alt="Feature Showcase" 
                style={{ width: "100%", height: "auto", filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.1))" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/eeeeee/999999?text=Device+Mockup';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
