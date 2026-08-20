"use client";

import React from "react";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  gradient: string;
  illustration?: string;
}

interface ServiceFeaturesGridProps {
  data?: FeatureCard[];
}

const defaultFeatures: FeatureCard[] = [
  {
    id: "01",
    title: "12+ Years\nOf Expertise",
    description: "Mastering Design,\nDevelopment, And Technology\nIntegration.",
    gradient: "linear-gradient(135deg, #3b286d 0%, #a5615d 100%)"
  },
  {
    id: "02",
    title: "Full-Funnel\nStrategy",
    description: "From Acquisition To\nRetention, We Cover Every\nTouchpoint.",
    gradient: "linear-gradient(135deg, #ffffff 40%, #edc6c8 100%)",
    illustration: "/assets/img/icon/bulb-illustration.webp"
  },
  {
    id: "03",
    title: "Tailored\nSolutions",
    description: "Custom Solutions For\nShopify Ecommerce, B2B Solutions,\nAnd More",
    gradient: "linear-gradient(135deg, #ffffff 50%, #edc6c8 100%)",
    illustration: "/assets/img/icon/magnifying-glass.webp"
  },
  {
    id: "04",
    title: "Innovation-\nDriven",
    description: "Constantly Evolving To Leverage\nThe Latest In Low-Code/No-Code And\nAdvanced Frameworks.",
    gradient: "linear-gradient(135deg, #3b286d 0%, #a5615d 100%)"
  }
];

export default function ServiceFeaturesGrid({ data }: ServiceFeaturesGridProps) {
  const features = data || defaultFeatures;

  return (
    <section className="service-features-grid" style={{ backgroundColor: "#f5f5f5", paddingTop: "0px", paddingBottom: "80px" }}>
      <div className="container">
        {/* First Row */}
        <div className="row g-4 mb-4">
          {features.slice(0, 2).map((feature, index) => (
            <div key={feature.id} className={index === 0 ? "col-lg-4" : "col-lg-8"}>
              <div 
                className="feature-card h-100 position-relative" 
                style={{
                  background: feature.gradient,
                  borderRadius: "24px",
                  padding: "40px",
                  color: index === 0 ? "white" : "#222",
                  minHeight: "300px",
                  display: "flex",
                  flexDirection: index === 0 ? "column" : "row",
                  justifyContent: index === 0 ? "center" : "flex-start",
                  alignItems: index === 0 ? "flex-start" : "center"
                }}
              >
                <div 
                  className="position-absolute" 
                  style={{ top: "30px", right: "30px", fontSize: "18px", fontWeight: "600", opacity: index === 0 ? 0.9 : 0.7 }}
                >
                  {feature.id}
                </div>
                
                {index === 0 ? (
                  <>
                    <h3 style={{ fontSize: "40px", fontWeight: "700", marginBottom: "20px", lineHeight: "1.2", color: "white" }}>
                      {feature.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < feature.title.split('\n').length - 1 && <br />}</React.Fragment>)}
                    </h3>
                    <p style={{ fontSize: "16px", fontWeight: "500", opacity: 0.9, lineHeight: "1.5", margin: 0 }}>
                      {feature.description.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < feature.description.split('\n').length - 1 && <br />}</React.Fragment>)}
                    </p>
                  </>
                ) : (
                  <div className="row w-100 align-items-center">
                    <div className="col-md-7">
                      <h3 style={{ fontSize: "40px", fontWeight: "700", marginBottom: "20px", lineHeight: "1.2", color: "#333" }}>
                        {feature.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < feature.title.split('\n').length - 1 && <br />}</React.Fragment>)}
                      </h3>
                      <p style={{ fontSize: "16px", fontWeight: "500", color: "#555", lineHeight: "1.5", margin: 0, maxWidth: "280px" }}>
                        {feature.description.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < feature.description.split('\n').length - 1 && <br />}</React.Fragment>)}
                      </p>
                    </div>
                    {feature.illustration && (
                      <div className="col-md-5 text-end text-md-center mt-4 mt-md-0 d-flex justify-content-end align-items-end">
                        <img 
                          src={feature.illustration} 
                          alt={feature.title} 
                          style={{ maxHeight: "200px", objectFit: "contain", mixBlendMode: "multiply" }} 
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://placehold.co/200x200/edc6c8/555555?text=Illustration';
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="row g-4">
          {features.slice(2, 4).map((feature, index) => (
            <div key={feature.id} className={index === 0 ? "col-lg-8" : "col-lg-4"}>
              <div 
                className="feature-card h-100 position-relative" 
                style={{
                  background: feature.gradient,
                  borderRadius: "24px",
                  padding: "40px",
                  color: index === 1 ? "white" : "#222",
                  minHeight: "300px",
                  display: "flex",
                  flexDirection: index === 1 ? "column" : "row",
                  justifyContent: index === 1 ? "center" : "flex-start",
                  alignItems: index === 1 ? "flex-start" : "center"
                }}
              >
                <div 
                  className="position-absolute" 
                  style={{ top: "30px", right: "30px", fontSize: "18px", fontWeight: "600", opacity: index === 1 ? 0.9 : 0.7 }}
                >
                  {feature.id}
                </div>

                {index === 1 ? (
                  <>
                    <h3 style={{ fontSize: "40px", fontWeight: "700", marginBottom: "20px", lineHeight: "1.2", color: "white" }}>
                      {feature.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < feature.title.split('\n').length - 1 && <br />}</React.Fragment>)}
                    </h3>
                    <p style={{ fontSize: "16px", fontWeight: "500", opacity: 0.9, lineHeight: "1.5", margin: 0 }}>
                      {feature.description.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < feature.description.split('\n').length - 1 && <br />}</React.Fragment>)}
                    </p>
                  </>
                ) : (
                  <div className="row w-100 align-items-center">
                    <div className="col-md-7">
                      <h3 style={{ fontSize: "40px", fontWeight: "700", marginBottom: "20px", lineHeight: "1.2", color: "#333" }}>
                        {feature.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < feature.title.split('\n').length - 1 && <br />}</React.Fragment>)}
                      </h3>
                      <p style={{ fontSize: "16px", fontWeight: "500", color: "#555", lineHeight: "1.5", margin: 0, maxWidth: "280px" }}>
                        {feature.description.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < feature.description.split('\n').length - 1 && <br />}</React.Fragment>)}
                      </p>
                    </div>
                    {feature.illustration && (
                      <div className="col-md-5 text-end text-md-center mt-4 mt-md-0 d-flex justify-content-end align-items-end">
                        <img 
                          src={feature.illustration} 
                          alt={feature.title} 
                          style={{ maxHeight: "200px", objectFit: "contain", mixBlendMode: "multiply" }}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://placehold.co/200x200/ffffff/555555?text=Illustration';
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
