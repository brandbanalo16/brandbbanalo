import servicesData from "@/data/Industry.json";
import { getMergedServiceForIndustry } from "@/lib/industryData";

type ServiceDetailsContentSectionProps = {
  selectedServiceId: string;
  selectedIndustryId?: string;
};

type ServiceContent = (typeof servicesData.services)[number] & {
  fullContent?: string;
  industries?: string[];
  highlights?: string[];
};

function findServiceById(id: string): ServiceContent {
  const match = servicesData.services.find((s) => s.id === id);
  return (match ?? servicesData.services[0]) as ServiceContent;
}

export default function ServiceDetailsContentSection({
  selectedServiceId,
  selectedIndustryId,
}: ServiceDetailsContentSectionProps) {
  const merged =
    getMergedServiceForIndustry({
      serviceId: selectedServiceId,
      industryId: selectedIndustryId,
    }) ?? findServiceById(selectedServiceId);

  const current = merged as ServiceContent;
  const firstSection = current.sections[0];
  const secondSection = current.sections[1] ?? current.sections[0];

  const contentParagraphs: string[] = current.fullContent
    ? current.fullContent.split("\n\n").filter((p: string) => p.trim().length > 0)
    : [];

  const highlights =
    current.highlights && current.highlights.length > 0
      ? current.highlights
      : [
          "Conversion-focused structure and clear CTAs",
          "Mobile-first experience and fast performance",
          "SEO-ready pages and analytics tracking",
        ];

  return (
    <div className="service-details-content">
      <h3>{current.heroTitle}</h3>
      <p className="mb-4">{current.heroDescription}</p>
      {contentParagraphs.length > 0 ? (
        contentParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))
      ) : (
        <>
          <p className="mb-4">{firstSection.body}</p>
          <p className="mb-4">{secondSection.body}</p>
        </>
      )}

      {current.industries && current.industries.length > 0 && (
        <div className="industry-list mb-5">
          <h4>Industries We Serve</h4>
          <ul>
            {current.industries.map((industry, index) => (
              <li key={index}>{industry}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="thumb mb-5">
        <img src={current.image} alt={current.name} />
      </div>

      <h3>Service Highlights</h3>
      <p className="mb-4">{firstSection.body}</p>
      <h3>{secondSection.heading}</h3>
      <p className="mb-5">{secondSection.body}</p>

      <div className="details-list-items">
        <ul className="details-list">
          {highlights.map((item) => (
            <li key={item}>
              <i className="fa-solid fa-circle-check" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


