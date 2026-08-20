 "use client";

import servicesData from "@/data/Industry.json";

type ServiceIndustrySectionProps = {
  selectedIndustryId: string;
  onSelectIndustry: (id: string) => void;
};

const industryLinks = servicesData.industries;

export default function ServiceIndustrySection({
  selectedIndustryId,
  onSelectIndustry,
}: ServiceIndustrySectionProps) {
  return (
    <div className="main-sidebar sticky-style">
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h4>All Industry</h4>
        </div>
        <div className="service-widget-categories">
          <ul>
            {industryLinks.map((item) => {
              const isActive = selectedIndustryId === item.id;

              return (
                <li
                  key={item.id}
                  className={isActive ? "active" : undefined}
                >
                  <button
                    type="button"
                    className="w-100 text-start bg-transparent border-0 p-0"
                    onClick={() => onSelectIndustry(item.id)}
                  >
                    {item.name}{" "}
                    <span>
                      <i className="fa-regular fa-arrow-right-long" />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}


