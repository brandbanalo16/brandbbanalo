"use client";

import Link from "next/link";
import servicesData from "@/data/Industry.json";

type ServiceSidebarSectionProps = {
  selectedServiceId: string;
  onSelectService: (id: string) => void;
  selectedIndustryKey?: string;
};

const serviceLinks = servicesData.services.map((s) => ({
  id: s.id,
  label: s.sidebarLabel || s.name,
  slug: s.key,
}));
const defaultIndustryKey = servicesData.industries[0]?.key ?? "pcd-pharma";

export default function ServiceSidebarSection({
  selectedServiceId,
  selectedIndustryKey,
}: ServiceSidebarSectionProps) {
  const industryKey = selectedIndustryKey ?? defaultIndustryKey;
  return (
    <div className="main-sidebar sticky-style">
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h4>All Services</h4>
        </div>
        <div className="service-widget-categories">
          <ul>
            {serviceLinks.map((item) => {
              const isActive = selectedServiceId === item.id;

              return (
                <li
                  key={item.id}
                  className={isActive ? "active" : undefined}
                >
                  <Link href={`/industrial-specific/${item.slug}/${industryKey}`}>
                    {item.label}{" "}
                    <span>
                      <i className="fa-regular fa-arrow-right-long" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}


