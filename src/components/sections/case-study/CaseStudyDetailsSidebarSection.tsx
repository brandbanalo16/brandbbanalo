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
}

interface CaseStudyDetailsSidebarSectionProps {
  caseStudy?: CaseStudy;
}

export default function CaseStudyDetailsSidebarSection({
  caseStudy,
}: CaseStudyDetailsSidebarSectionProps) {
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

  return (
    <div className="case-study-information sticky-style" style={{ 
      background: '#ffffff', 
      padding: '35px', 
      borderRadius: '24px', 
      boxShadow: '0 15px 40px rgba(0,0,0,0.04)',
      border: '1px solid #f0f0f0'
    }}>
      <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#1a1a1a', marginBottom: '30px', borderBottom: '2px solid #f8f7ff', paddingBottom: '15px' }}>
        Project Info
      </h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
        <li className="mb-4 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <i className="fas fa-tag" style={{ color: '#3b286d', width: '20px' }} />
            <span style={{ fontWeight: '600', color: '#666', fontSize: '14px' }}>Category:</span>
          </div>
          <span style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '14px' }}>{displayCaseStudy.category}</span>
        </li>
        <li className="mb-4 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <i className="fas fa-cog" style={{ color: '#3b286d', width: '20px' }} />
            <span style={{ fontWeight: '600', color: '#666', fontSize: '14px' }}>Service:</span>
          </div>
          <span style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '14px', textTransform: 'capitalize' }}>{displayCaseStudy.service.replace("-", " ")}</span>
        </li>
        <li className="mb-4 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <i className="fas fa-calendar-alt" style={{ color: '#3b286d', width: '20px' }} />
            <span style={{ fontWeight: '600', color: '#666', fontSize: '14px' }}>Date:</span>
          </div>
          <span style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '14px' }}>{displayCaseStudy.date}</span>
        </li>
        <li className="mb-4 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <i className="fas fa-fingerprint" style={{ color: '#3b286d', width: '20px' }} />
            <span style={{ fontWeight: '600', color: '#666', fontSize: '14px' }}>Project ID:</span>
          </div>
          <span style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '14px' }}>#{displayCaseStudy.id}</span>
        </li>
      </ul>

      <div className="share-project mb-4">
        <p style={{ fontWeight: '600', color: '#666', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Share Project</p>
        <div className="social-icon d-flex align-items-center gap-2">
          {['facebook-f', 'twitter', 'linkedin-in', 'pinterest-p'].map((icon) => (
            <a key={icon} href="#" style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '10px', 
              background: '#f8f7ff', 
              color: '#3b286d', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}>
              <i className={`fab fa-${icon}`} />
            </a>
          ))}
        </div>
      </div>

      <div className="cta-sidebar mt-4" style={{ 
        background: 'linear-gradient(135deg, #3b286d 0%, #2d205a 100%)', 
        padding: '25px', 
        borderRadius: '16px',
        color: '#fff',
        textAlign: 'center'
      }}>
        <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#fff' }}>Need a similar project?</h4>
        <p style={{ fontSize: '13px', opacity: 0.8, marginBottom: '20px' }}>Let's discuss how we can help your brand grow.</p>
        <a href="/contact" style={{ 
          display: 'block', 
          background: '#ff6b00', 
          color: '#fff', 
          padding: '12px', 
          borderRadius: '8px', 
          fontWeight: '700', 
          textDecoration: 'none',
          fontSize: '14px'
        }}>
          Get a Free Quote
        </a>
      </div>
    </div>
  );
}

