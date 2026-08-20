"use client";

import { motion } from "framer-motion";

const DigitalIndustryDetails = ({ industry, onBack }) => {
  if (!industry) return null;

  return (
    <article className="digital-industry-details bg-white min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(59,40,109,0.03) 0%, transparent 50%), radial-gradient(circle at bottom left, rgba(255,107,53,0.02) 0%, transparent 40%)' }} />
      
      {/* Header / Nav */}
      <nav className="container pt-5 position-relative z-1">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="btn d-flex align-items-center gap-2 px-3 py-2 rounded-3 border bg-white shadow-sm hover-move-left"
          style={{ color: '#3b286d', fontWeight: 800, fontSize: '13px', letterSpacing: '0.5px' }}
        >
          <i className="fa-solid fa-chevron-left small"></i>
          ALL INDUSTRIES
        </motion.button>
      </nav>

      <div className="container py-5 py-lg-7 position-relative z-1">
        {/* Hero Row */}
        <div className="row align-items-center g-5 mb-7">
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="d-flex align-items-center gap-3 mb-4">
                 <div style={{ width: '40px', height: '2px', background: '#3b286d' }}></div>
                 <span className="fw-black text-uppercase tracking-widest" style={{ color: '#3b286d', fontSize: '12px' }}>Strategic Sector Analysis</span>
              </div>
              
              <h1 className="display-3 fw-black mb-4" style={{ color: '#132145', fontFamily: 'var(--font-sora)', lineHeight: 1 }}>
                Pioneering <span className="text-gradient">Growth</span> for <br/>
                <span style={{ color: '#3b286d' }}>{industry.name}</span>
              </h1>
              
              <p className="lead text-muted mb-5 ps-4 border-start border-3" style={{ borderLeftColor: '#3b286d30 !important', fontFamily: 'var(--font-manrope)', fontWeight: 500 }}>
                {industry.description}
              </p>

              <div className="d-flex flex-wrap gap-4 align-items-center">
                 <a
                    href="/contact"
                    className="btn btn-dark rounded-pill px-5 py-3 fw-black tracking-wider shadow-lg"
                    style={{ background: '#132145', fontSize: '14px' }}
                  >
                    GENERATE CUSTOM STRATEGY
                  </a>
                  <div className="d-flex -space-x-3">
                     {[1,2,3].map(i => (
                        <div key={i} className="rounded-circle border border-2 border-white shadow-sm" style={{ width: '40px', height: '40px', background: '#eee', marginLeft: i > 1 ? '-10px' : '0' }}>
                           <img src={`/assets/img/team/${i}.webp`} className="w-100 h-100 object-fit-cover rounded-circle" alt="Expert" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Expert&background=3b286d&color=fff'; }} />
                        </div>
                     ))}
                     <span className="ms-3 small fw-bold text-muted my-auto">Experts ready to scale</span>
                  </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="position-relative"
            >
              <div className="rounded-5 overflow-hidden shadow-2xl border border-8 border-white">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="position-absolute top-100 start-0 translate-middle-y bg-white p-4 rounded-4 shadow-xl border border-light d-none d-md-block" style={{ width: '220px', marginLeft: '-30px' }}>
                 <div className="text-primary fw-black h2 mb-1" style={{ color: '#3b286d' }}>98%</div>
                 <div className="small fw-bold text-muted">Client Retention in {industry.name} Sector</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* The 3-Row Card Structure requested by user */}
        <div className="row mt-5 pt-5 g-4">
           <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-black" style={{ color: '#132145' }}>Implementation Roadmap</h2>
              <p className="text-muted">A data-led execution framework built for market dominance.</p>
           </div>

           {/* Row 1: Core Content as Cards */}
           <div className="col-12">
              <div className="row g-4">
                 <div className="col-lg-4">
                    <div className="roadmap-card h-100 p-5 rounded-5 border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #3b286d 0%, #132145 100%)', color: '#fff' }}>
                       <span className="h1 fw-black opacity-20 d-block mb-3">01</span>
                       <h3 className="h4 fw-bold mb-3">Foundational Authority</h3>
                       <p className="small opacity-75">Establishing your brand as the primary source of truth in the {industry.name} space through technical SEO and content architecture.</p>
                    </div>
                 </div>
                 <div className="col-lg-8">
                    <div className="roadmap-card h-100 p-5 rounded-5 bg-light border-0 shadow-sm">
                       <h3 className="h4 fw-bold mb-4" style={{ color: '#132145' }}>Strategic Insight</h3>
                       <div className="row g-3">
                          {industry.keywords.slice(0, 4).map((kw, i) => (
                             <div key={i} className="col-md-6">
                                <div className="d-flex align-items-center gap-3 p-3 bg-white rounded-4 shadow-xs border border-light">
                                   <i className="fa-solid fa-magnifying-glass small text-primary" style={{ color: '#3b286d' }}></i>
                                   <span className="small fw-bold">{kw}</span>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Row 2: Content Breakdown */}
           <div className="col-12">
              <div className="roadmap-card p-5 rounded-5 bg-white border border-light shadow-sm overflow-hidden position-relative">
                 <div className="row align-items-center position-relative z-1">
                    <div className="col-lg-7">
                       <h3 className="h3 fw-black mb-4" style={{ color: '#132145' }}>Strategic Implementation</h3>
                       <div className="prose text-muted mb-0" style={{ lineHeight: 1.8, fontSize: '15px' }}>
                          {industry.content}
                       </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                       <div className="p-4 rounded-5 bg-primary bg-opacity-10 text-center border border-primary border-opacity-10">
                          <i className="fa-solid fa-bolt-lightning display-4 mb-4" style={{ color: '#3b286d' }}></i>
                          <h4 className="h5 fw-bold mb-2">Instant Scale</h4>
                          <p className="small text-muted mb-0">Our rapid-deployment framework ensures your strategy goes live in weeks, not months.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Row 3: Final ROI Cards */}
           <div className="col-12">
              <div className="row g-4">
                 {[
                   { t: "Tactical Blueprint", d: "Precise execution roadmaps optimized for niche audiences.", i: "fa-chess" },
                   { t: "Market Penetration", d: "Aggressive search and social strategies to win market share.", i: "fa-dart-single" },
                   { t: "Conversion Mastery", d: "High-performance landing pages designed for bulk leads.", i: "fa-bullseye" }
                 ].map((card, i) => (
                    <div key={i} className="col-lg-4">
                       <div className="roadmap-card h-100 p-4 p-xl-5 rounded-5 bg-white border border-light shadow-sm text-center transition-all hover-lift">
                          <div className="mx-auto rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px', background: '#f8f7ff', color: '#3b286d' }}>
                             <i className={`fa-solid ${card.i} fs-4`}></i>
                          </div>
                          <h4 className="h5 fw-bold mb-2" style={{ color: '#132145' }}>{card.t}</h4>
                          <p className="small text-muted mb-0">{card.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Footer Cta */}
        <div className="text-center mt-7 pt-5">
           <button onClick={onBack} className="btn btn-link text-decoration-none fw-black text-uppercase small text-muted hover-primary transition-all">
              <i className="fa-solid fa-arrow-left me-3"></i>
              EXPLORE OTHER SECTORS
           </button>
        </div>
      </div>

      <style jsx>{`
        .text-gradient { background: linear-gradient(90deg, #3b286d, #ff6b35); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .fw-black { font-weight: 900; }
        .hover-move-left:hover i { transform: translateX(-4px); }
        .hover-lift:hover { transform: translateY(-10px); border-color: #3b286d30 !important; box-shadow: 0 20px 40px rgba(59,40,109,0.1) !important; }
        .hover-primary:hover { color: #3b286d !important; transform: translateX(-5px); }
        .shadow-2xl { box-shadow: 0 40px 100px -20px rgba(19,33,69,0.3); }
        .shadow-xl { box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); }
        .mb-7 { margin-bottom: 5rem; }
        .mt-7 { margin-top: 5rem; }
      `}</style>
    </article>
  );
};

export default DigitalIndustryDetails;
