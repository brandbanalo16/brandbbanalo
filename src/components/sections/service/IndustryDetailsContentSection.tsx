"use client";

import servicesData from "@/data/Industry.json";
import Link from "next/link";

type IndustryDetailsContentSectionProps = {
  selectedIndustryId: string;
};

const industries = servicesData.industries;
const services = servicesData.services;

export default function IndustryDetailsContentSection({
  selectedIndustryId,
}: IndustryDetailsContentSectionProps) {
  const industry =
    industries.find((ind) => ind.id === selectedIndustryId) ?? industries[0];

  const recommendedServices = services.filter((svc) =>
    industry.recommendedServiceIds.includes(svc.id)
  );

  return (
    <div className="service-details-content mt-5">
      <h3>{industry.name}</h3>
      <p className="mb-4">{industry.description}</p>

      <div className="thumb mb-4">
        <img
          src={industry.image}
          alt={industry.name}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {recommendedServices.length > 0 && (
        <>
          <h3>Recommended Services for this Industry</h3>
          <ul className="details-list">
            {recommendedServices.map((svc) => (
              <li key={svc.id}>
                <i className="fa-solid fa-circle-check" />{" "}
                <Link href={`/industrial-specific/${svc.key}/${industry.key}`}>
                  {svc.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}



