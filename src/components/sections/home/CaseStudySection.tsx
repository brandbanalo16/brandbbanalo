"use client";

import React, { useState, useEffect } from 'react';
import caseStudiesData from '../../../data/caseStudies.json';

interface Keyword {
  name: string;
  ranking: string;
  engine: string;
}

interface CaseStudy {
  id: number;
  image: string;
  logoImage: string;
  companyName: string;
  title: string;
  url: string;
  keywords: Keyword[];
  whatWeOffered: string;
  whatWeDo: string;
}

export default function CaseStudySection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const currentStudy: CaseStudy = caseStudiesData[currentIndex] as unknown as CaseStudy;

  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudiesData.length);
        setFade(true);
    }, 300);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudiesData.length) % caseStudiesData.length);
        setFade(true);
    }, 300);
  };
  
  // Transition style
  const transitionStyle = {
      transition: 'opacity 0.3s ease-in-out',
      opacity: fade ? 1 : 0
  };

  return (
    <section className="caseStudy-feature-section section-padding" style={{ backgroundColor: '#fcfcfc', position: 'relative', overflow: 'hidden' }}>
      {/* Background shape placeholders */}
      <div className="d-none d-lg-block" style={{ position: 'absolute', top: '10%', left: '-10%', width: '40%', height: '80%', backgroundColor: '#f0f4f2', borderTopRightRadius: '50%', borderBottomRightRadius: '50%', zIndex: 0 }}></div>
      
      <style jsx>{`
        .caseStudy-feature-section {
          padding: clamp(60px, 10vw, 120px) 0;
        }
        .accordion-item {
          transition: all 0.3s ease;
          margin-bottom: 1rem !important;
        }
        .accordion-item:hover {
          border-color: #36509a !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .table-responsive {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .table {
          min-width: 500px;
        }
        @media (max-width: 991px) {
          .showcase-wrapper {
            padding-right: 0 !important;
          }
          .image-container {
            padding-right: 0 !important;
            margin-bottom: 2rem !important;
          }
          .floating-logo-box {
            display: none !important;
          }
        }
        @media (max-width: 575px) {
          .action-buttons-wrap {
            flex-direction: column;
            align-items: stretch !important;
          }
          .action-buttons-wrap button, 
          .action-buttons-wrap .nav-controls {
            width: 100%;
          }
          .nav-controls button {
            flex: 1;
          }
          .result-badge {
            font-size: 12px !important;
            padding: 6px 16px !important;
          }
        }
      `}</style>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center" style={transitionStyle}>
          {/* Left Column - Showcase Images */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="showcase-wrapper pe-lg-5">
              <div className="image-container position-relative mb-5">
                 {/* Main Mockup Image */}
                 <div className="main-image shadow-sm rounded bg-white p-2" style={{ border: '1px solid #f0f0f0' }}>
                    <img 
                      src={currentStudy.image} 
                      alt="Performance Dashboard" 
                      className="img-fluid rounded" 
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
                    />
                 </div>
                 
                  {/* Floating Logo Box */}
                  <div className="floating-logo-box bg-white shadow p-3 d-none d-sm-flex" style={{ 
                     position: 'absolute', 
                     top: '50%', 
                     right: '-20px', 
                     transform: 'translateY(-20%)',
                     width: '180px',
                     height: '160px',
                     flexDirection: 'column',
                     justifyContent: 'center', 
                     alignItems: 'center',
                     border: '1px dashed #7a7a7a',
                     borderRadius: '4px'
                   }}>
                     <div className="d-flex align-items-center mb-2" style={{ height: '80px' }}>
                        <img 
                           src={currentStudy.logoImage} 
                           alt={currentStudy.companyName}
                           style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        />
                     </div>
                     <p className="mb-0 text-muted" style={{ fontSize: '14px', fontWeight: 500, textAlign: 'center' }}>{currentStudy.companyName}</p>
                  </div>
                  {/* Mobile Logo Box (Visible only on very small screens) */}
                  <div className="d-flex d-sm-none bg-white shadow p-3 mt-3 justify-content-center align-items-center" style={{ border: '1px dashed #7a7a7a', borderRadius: '4px' }}>
                    <img 
                       src={currentStudy.logoImage} 
                       alt={currentStudy.companyName}
                       style={{ height: '40px', objectFit: 'contain', marginRight: '10px' }}
                    />
                    <p className="mb-0 text-muted" style={{ fontSize: '14px', fontWeight: 500 }}>{currentStudy.companyName}</p>
                  </div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons-wrap d-flex align-items-center mt-5 pt-3" style={{ gap: '15px', flexWrap: 'wrap' }}>
                 <button suppressHydrationWarning className="theme-btn" style={{ backgroundColor: '#361b66', padding: '12px 30px', borderRadius: '4px', border: 'none', color: '#fff', fontWeight: 600 }}>
                    Get Same Result
                 </button>
                 <div className="nav-controls d-flex" style={{ gap: '10px' }}>
                    <button suppressHydrationWarning onClick={handlePrev} className="btn text-dark font-weight-bold shadow-sm" style={{ backgroundColor: '#f4f4f4', border: '1px solid #ddd', padding: '10px 20px', borderRadius: '4px' }}>
                       &lt; Prev
                    </button>
                    <button suppressHydrationWarning onClick={handleNext} className="btn text-dark font-weight-bold shadow-sm" style={{ backgroundColor: '#f4f4f4', border: '1px solid #ddd', padding: '10px 20px', borderRadius: '4px' }}>
                       Next &gt;
                    </button>
                 </div>
              </div>
              
              <div className="mt-4">
                 <p className="mb-0" style={{ fontWeight: 600, color: '#555' }}>
                    &gt; What You Need? <a href="#" style={{ color: '#003366', textDecoration: 'none', fontWeight: 700 }}>Meet Our Experts.</a>
                 </p>
              </div>

            </div>
          </div>

          {/* Right Column - Results Accordion */}
          <div className="col-lg-6 ps-lg-4">
             {/* Badge */}
             <div className="result-badge d-inline-flex align-items-center mb-3 px-4 py-2 text-white" style={{ backgroundColor: '#2e265c', borderRadius: '30px', fontWeight: 600, fontSize: 'clamp(12px, 2vw, 14px)' }}>
                <span className="me-2" style={{ display: 'flex' }}>
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                     <line x1="9" y1="3" x2="9" y2="21"></line>
                   </svg>
                </span>
                Result
             </div>
             
             {/* Title */}
             <h2 className="mb-5" style={{ color: '#182b4a', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 36px)', lineHeight: '1.2' }}>
                {currentStudy.title}
             </h2>

             {/* Accordion */}
             <div className="custom-accordion">
                {/* Item 1 */}
                <div className="accordion-item bg-white mb-3" style={{ border: '1px solid #36509a', borderRadius: '4px' }}>
                   <button 
                      suppressHydrationWarning
                      onClick={() => toggleAccordion(1)}
                      className="w-100 text-start d-flex align-items-center justify-content-between p-3"
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                   >
                      <div className="d-flex align-items-center">
                         <span className="bg-danger text-white d-flex align-items-center justify-content-center me-3" style={{ width: '28px', height: '28px', borderRadius: '4px', fontWeight: 600, fontSize: '14px' }}>
                            1
                         </span>
                         <span style={{ color: '#132145', fontWeight: 700, fontSize: '16px' }}>Proven Results with Top Page Rankings</span>
                      </div>
                      <span className="text-muted" style={{ fontWeight: 'bold' }}>{activeAccordion === 1 ? '˄' : '˅'}</span>
                   </button>
                   
                   {activeAccordion === 1 && (
                      <div className="accordion-content p-4" style={{ backgroundColor: '#f2f8fc' }}>
                         <a href={currentStudy.url} target="_blank" rel="noopener noreferrer" className="d-block mb-3" style={{ color: '#0b6bd3', fontWeight: 600, textDecoration: 'none' }}>
                            {currentStudy.url}
                         </a>
                         
                         <div className="table-responsive bg-white rounded shadow-sm">
                            <table className="table mb-0 table-hover table-borderless" style={{ border: '1px solid #e9ecef' }}>
                               <thead style={{ backgroundColor: '#fef5d8' }}>
                                  <tr>
                                     <th className="py-2 px-3 border-bottom" style={{ fontWeight: 700, color: '#333' }}>Keywords</th>
                                     <th className="py-2 px-3 border-bottom text-center" style={{ fontWeight: 700, color: '#333' }}>Ranking</th>
                                     <th className="py-2 px-3 border-bottom border-start" style={{ fontWeight: 700, color: '#333', backgroundColor: '#faeef2' }}>Search Engine</th>
                                  </tr>
                               </thead>
                               <tbody style={{ fontSize: '14px', color: '#444' }}>
                                  {currentStudy.keywords.map((kw: Keyword, index: number) => (
                                     <tr key={index} style={{ borderBottom: index < currentStudy.keywords.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                                        <td className="py-2 px-3">{kw.name}</td>
                                        <td className="py-2 px-3 text-center">{kw.ranking}</td>
                                        <td className="py-2 px-3 font-weight-bold border-start" style={{ color: '#0d6efd' }}>{kw.engine}</td>
                                     </tr>
                                  ))}
                               </tbody>
                            </table>
                         </div>
                      </div>
                   )}
                </div>

                {/* Item 2 */}
                <div className="accordion-item bg-white mb-3" style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}>
                   <button 
                      suppressHydrationWarning
                      onClick={() => toggleAccordion(2)}
                      className="w-100 text-start d-flex align-items-center justify-content-between p-3"
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                   >
                      <div className="d-flex align-items-center">
                         <span className="text-white d-flex align-items-center justify-content-center me-3" style={{ backgroundColor: '#132145', width: '28px', height: '28px', borderRadius: '4px', fontWeight: 600, fontSize: '14px' }}>
                            2
                         </span>
                         <span style={{ color: '#132145', fontWeight: 700, fontSize: '16px' }}>What We Offered</span>
                      </div>
                      <span className="text-muted" style={{ fontWeight: 'bold' }}>{activeAccordion === 2 ? '˄' : '˅'}</span>
                   </button>
                   
                   {activeAccordion === 2 && (
                      <div className="accordion-content p-4" style={{ backgroundColor: '#f8f9fa' }}>
                         <p className="mb-0 text-muted">{currentStudy.whatWeOffered}</p>
                      </div>
                   )}
                </div>

                {/* Item 3 */}
                <div className="accordion-item bg-white mb-3" style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}>
                   <button 
                      suppressHydrationWarning
                      onClick={() => toggleAccordion(3)}
                      className="w-100 text-start d-flex align-items-center justify-content-between p-3"
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                   >
                      <div className="d-flex align-items-center">
                         <span className="text-white d-flex align-items-center justify-content-center me-3" style={{ backgroundColor: '#132145', width: '28px', height: '28px', borderRadius: '4px', fontWeight: 600, fontSize: '14px' }}>
                            3
                         </span>
                         <span style={{ color: '#132145', fontWeight: 700, fontSize: '16px' }}>What We Do</span>
                      </div>
                      <span className="text-muted" style={{ fontWeight: 'bold' }}>{activeAccordion === 3 ? '˄' : '˅'}</span>
                   </button>
                   
                   {activeAccordion === 3 && (
                      <div className="accordion-content p-4" style={{ backgroundColor: '#f8f9fa' }}>
                         <p className="mb-0 text-muted">{currentStudy.whatWeDo}</p>
                      </div>
                   )}
                </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
}


