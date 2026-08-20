"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import digitalIndustries from "@/data/DigitalIndustry.json";
import DigitalIndustryDetails from "./DigitalIndustryDetails";

const DigitalIndustryMain = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const handleCardClick = (industry) => {
    setSelectedIndustry(industry);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedIndustry(null);
  };

  if (selectedIndustry) {
    return (
      <DigitalIndustryDetails
        industry={selectedIndustry}
        onBack={handleBack}
      />
    );
  }

  return (
    <section className="digital-industry-section py-5 px-3" style={{ background: '#f8f9fa', position: 'relative' }}>
      {/* Decorative background shapes */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden pointer-events-none" style={{ opacity: 0.03 }}>
        <div className="position-absolute" style={{ top: '10%', left: '5%', width: '300px', height: '300px', background: '#3b286d', borderRadius: '50%', filter: 'blur(100px)' }}></div>
        <div className="position-absolute" style={{ bottom: '10%', right: '5%', width: '400px', height: '400px', background: '#ff6b35', borderRadius: '50%', filter: 'blur(150px)' }}></div>
      </div>

      <div className="container-fluid px-lg-5">
        <div className="row justify-content-center text-center mb-5 pb-3">
          <div className="col-lg-10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="d-inline-block px-4 py-2 rounded-pill mb-3"
              style={{ background: 'rgba(59, 40, 109, 0.05)', color: '#3b286d', fontSize: '14px', fontWeight: 800, letterSpacing: '2px', border: '1px solid rgba(59, 40, 109, 0.1)' }}
            >
              INDUSTRIAL SPECIALIZATION
            </motion.span>
            <h2 className="display-4 fw-black mb-4" style={{ color: '#132145', fontFamily: 'var(--font-sora)', letterSpacing: '-1px' }}>
              Strategic Solutions for <span style={{ color: '#3b286d' }}>Business Solution</span>
            </h2>
            <p className="mx-auto" style={{ maxWidth: '700px', color: '#666', fontSize: '18px', lineHeight: 1.6, fontFamily: 'var(--font-manrope)' }}>
              We engineering growth for high-impact sectors using data-led precision and creative authority.
            </p>
          </div>
        </div>

        {/* 4 Column Grid = 3 Rows for 12 items */}
        <div className="row g-4 px-xl-4">
          {digitalIndustries.map((industry, index) => (
            <div key={industry.id} className="col-xl-3 col-lg-4 col-md-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => handleCardClick(industry)}
                className="industry-premium-card h-100 rounded-5 overflow-hidden position-relative"
                style={{
                  cursor: 'pointer',
                  background: '#fff',
                  border: '1px solid #eee',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                }}
              >
                {/* Image Wrap */}
                <div className="image-wrap position-relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-100 h-100 object-fit-cover"
                    style={{ transition: 'transform 1.5s ease' }}
                  />
                  <div className="overlay-gradient position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4" style={{ background: 'linear-gradient(0deg, rgba(19,33,69,0.9) 0%, rgba(19,33,69,0) 60%)' }}>
                    <div className="d-flex align-items-center justify-content-between text-white">
                      <span className="small fw-bold opacity-75">GO TO STRATEGY</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>

                  {/* Floating ID */}
                  <div className="position-absolute top-0 end-0 m-3 bg-white rounded-3 px-2 py-1 shadow-sm border border-light">
                    <span className="fw-black" style={{ color: '#3b286d', fontSize: '12px' }}>{(index + 1).toString().padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-body p-4 p-xl-5">
                  <h3 className="h5 fw-black mb-3" style={{ color: '#132145', fontFamily: 'var(--font-sora)', minHeight: '3rem' }}>
                    {industry.name}
                  </h3>
                  <p className="small text-muted mb-4 line-clamp-2" style={{ fontFamily: 'var(--font-manrope)', lineHeight: 1.5 }}>
                    {industry.description}
                  </p>

                  <div className="d-flex align-items-center gap-2">
                    <div className="progress flex-grow-1" style={{ height: '4px', background: '#f0f0f0' }}>
                      <div className="progress-bar" style={{ width: '40%', background: '#3b286d' }}></div>
                    </div>
                    <span className="fw-bold" style={{ fontSize: '10px', color: '#3b286d' }}>ROI FOCUSED</span>
                  </div>
                </div>

                <style jsx>{`
                  .industry-premium-card:hover {
                    transform: translateY(-15px) scale(1.02);
                    box-shadow: 0 40px 70px rgba(59, 40, 109, 0.15) !important;
                    border-color: #3b286d30 !important;
                  }
                  .industry-premium-card:hover img {
                    transform: scale(1.15);
                  }
                  .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                  }
                  .fw-black { font-weight: 900; }
                `}</style>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalIndustryMain;
