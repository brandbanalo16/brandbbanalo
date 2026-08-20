"use client";

interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}

interface FaqAccordionSectionProps {
  data?: {
    title: string;
    image: string;
    items: FaqItem[];
  };
}

const defaultFaqItems = [
  {
    id: "faq1",
    question: "Why Is SEO Important For Small Business?",
    answer: "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people"
  },
  {
    id: "faq2",
    question: "How do I choose the best SEO Agency?",
    answer: "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people"
  }
];

export default function FaqAccordionSection({ data }: FaqAccordionSectionProps) {
  const title = data?.title || "Asked & Question";
  const image = data?.image || "/assets/img/faq.webp";
  const items = data?.items || defaultFaqItems;

  return (
    <section className="faq-section fix section-padding">
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="faq-image text-center">
                <img 
                  src={image} 
                  alt="FAQ" 
                  style={{ borderRadius: "20px", maxWidth: "100%", height: "auto" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x600/eeeeee/999999?text=FAQ+Image';
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content">
                <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: "800", marginBottom: "30px", color: "#222" }}>{title}</h2>
                <div className="faq-accordion-items">
                  <div className="faq-accordion">
                    <div className="accordion" id="serviceFaqAccordion">
                      {items.map((item, index) => {
                        const itemId = item.id || `faq-item-${index}`;
                        const isExpanded = index === 0;
                        return (
                          <div
                            key={itemId}
                            className={`accordion-item wow fadeInUp`}
                            data-wow-delay={`${0.3 + index * 0.1}s`}
                          >
                            <h5 className="accordion-header">
                              <button
                                className={`accordion-button ${isExpanded ? "" : "collapsed"}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${itemId}`}
                                aria-expanded={isExpanded}
                                aria-controls={itemId}
                                style={{ fontWeight: "700", color: "#3b286d" }}
                              >
                                {item.question}
                              </button>
                            </h5>
                            <div
                              id={itemId}
                              className={`accordion-collapse collapse ${isExpanded ? "show" : ""}`}
                              data-bs-parent="#serviceFaqAccordion"
                            >
                              <div className="accordion-body" style={{ color: "#666", lineHeight: "1.7" }}>
                                {item.answer}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

