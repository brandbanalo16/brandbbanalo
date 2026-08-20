"use client";

import React from "react";
import "@/styles/css/Hero.css";

import banner from "@/styles/img/banner.webp";
import servicesData from "@/data/Industry.json";

type ServiceHeroSectionProps = {
  selectedServiceId?: string;
  isMainPage?: boolean;
  data?: {
    subtitle: string;
    title: string;
    description: string;
    image: string;
  };
  customSubtitle?: string;
  customTitle?: string;
  customDescription?: string;
};

const services = servicesData.services;

const ServiceHeroSection: React.FC<ServiceHeroSectionProps> = ({
  selectedServiceId,
  isMainPage = false,
  data,
  customSubtitle,
  customTitle,
  customDescription,
}) => {
  const current =
    services.find((svc) => svc.id === selectedServiceId) ?? services[0];

  const displaySubtitle = customSubtitle || data?.subtitle || current.heroSubtitle || "Website & App Development Services";
  const displayTitle = customTitle || data?.title || current.heroTitle;
  const displayDescription = customDescription || data?.description || current.heroDescription;
  const displayImage = data?.image || (typeof banner === "string" ? banner : banner.src);

  return (
    <section className="hero">
      <div
        className={`hero-container ${isMainPage ? 'hero-main-page' : 'hero-sub-page'}`}
        style={{
          border: "1px solid black",
          borderRadius: "50px",
        }}
      >
        <p className="hero-subtitle">
          {displaySubtitle}
        </p>

        <h1 className="hero-title">
          {displayTitle} <br />
          Experiences That Inspire & Convert
        </h1>

        <div className="future-text">
          <img src="/assets/img/service-banner-right-logo.svg" alt="Service Banner Logo" />
        </div>
      </div>

      <div
        className="hero-image-wrapper"
      >
        <img
          src={displayImage}
          alt="Website preview"
          width={700}
          height={500}
          style={{ width: "100%", maxWidth: "700px", display: "block", margin: "auto", position: "relative", zIndex: 1 }}
        />

        <div className="hero-description-container">
          <p>{displayDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;

