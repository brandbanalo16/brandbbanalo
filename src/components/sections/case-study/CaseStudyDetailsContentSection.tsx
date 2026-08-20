import caseStudyContent from "@/data/caseStudyContent.json";

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

interface CaseStudyDetailsContentSectionProps {
  caseStudy?: CaseStudy;
}

export default function CaseStudyDetailsContentSection({
  caseStudy,
}: CaseStudyDetailsContentSectionProps) {
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

  // Get content from JSON based on service type
  const content = caseStudyContent.serviceContent[displayCaseStudy.service as keyof typeof caseStudyContent.serviceContent] || caseStudyContent.serviceContent["web-development"];

  return (
    <div className="details-content">
      <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a1a', marginBottom: '15px' }}>{displayCaseStudy.title}</h2>
      <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', marginBottom: '40px' }}>{displayCaseStudy.description}</p>
      
      <div className="content-block mb-5">
        <h3 className="d-flex align-items-center gap-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b286d', marginBottom: '20px' }}>
          <i className="fas fa-search-plus" style={{ fontSize: '20px', opacity: 0.7 }} />
          Case Study Overview
        </h3>
        <p style={{ fontSize: '16px', color: '#444', lineHeight: '1.8' }}>
          {content.overview}
        </p>
      </div>

      <div className="content-block mb-5">
        <h3 className="d-flex align-items-center gap-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b286d', marginBottom: '20px' }}>
          <i className="fas fa-bullseye" style={{ fontSize: '20px', opacity: 0.7 }} />
          Challenges &amp; Objectives
        </h3>
        <p style={{ fontSize: '16px', color: '#444', lineHeight: '1.8' }}>
          {content.challenges}
        </p>
      </div>

      <div className="content-block mb-5">
        <h3 className="d-flex align-items-center gap-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b286d', marginBottom: '20px' }}>
          <i className="fas fa-lightbulb" style={{ fontSize: '20px', opacity: 0.7 }} />
          Our Solution &amp; Strategy
        </h3>
        <p style={{ fontSize: '16px', color: '#444', lineHeight: '1.8' }}>
          {content.solution}
        </p>
      </div>

      <div className="content-block mb-5">
        <h3 className="d-flex align-items-center gap-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b286d', marginBottom: '20px' }}>
          <i className="fas fa-star" style={{ fontSize: '20px', opacity: 0.7 }} />
          Key Features Implemented
        </h3>
        <div className="row g-3">
          {content.keyFeatures.map((feature, index) => (
            <div key={index} className="col-md-6">
              <div className="feature-item d-flex align-items-start gap-2" style={{ 
                background: '#fff', 
                padding: '15px 20px', 
                borderRadius: '12px', 
                border: '1px solid #f0f0f0',
                height: '100%'
              }}>
                <i className="fas fa-check-circle" style={{ color: '#3b286d', marginTop: '4px', fontSize: '14px' }} />
                <span style={{ fontSize: '15px', color: '#444', fontWeight: '500' }}>{feature}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="content-block mb-5">
        <h3 className="d-flex align-items-center gap-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b286d', marginBottom: '20px' }}>
          <i className="fas fa-chart-line" style={{ fontSize: '20px', opacity: 0.7 }} />
          Results &amp; Impact
        </h3>
        <p style={{ fontSize: '16px', color: '#444', lineHeight: '1.8' }}>
          {content.results}
        </p>
      </div>

      <div className="content-block mb-5">
        <h3 className="d-flex align-items-center gap-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b286d', marginBottom: '20px' }}>
          <i className="fas fa-award" style={{ fontSize: '20px', opacity: 0.7 }} />
          Key Benefits Delivered
        </h3>
        <div className="row g-3">
          {content.benefits.map((benefit, index) => (
            <div key={index} className="col-md-6">
              <div className="benefit-item d-flex align-items-start gap-2" style={{ 
                background: '#3b286d', 
                padding: '15px 20px', 
                borderRadius: '12px',
                color: '#fff',
                height: '100%'
              }}>
                <i className="fas fa-arrow-right" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '4px', fontSize: '12px' }} />
                <span style={{ fontSize: '15px', fontWeight: '500' }}>{benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

