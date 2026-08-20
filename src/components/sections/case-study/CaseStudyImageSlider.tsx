"use client";

import { useEffect, useState, type SyntheticEvent } from "react";

const fallbackCaseStudyImage = "/assets/img/case-study/1.webp";

function handleCaseStudyImageError(event: SyntheticEvent<HTMLImageElement, Event>) {
  const target = event.currentTarget;
  if (!target.dataset.fallback) {
    target.dataset.fallback = "true";
    target.src = fallbackCaseStudyImage;
  }
}

interface CaseStudyImageSliderProps {
  images: string[];
  caseStudyTitle: string;
}

export default function CaseStudyImageSlider({
  images,
  caseStudyTitle,
}: CaseStudyImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  
  const itemsPerView = 3;
  const totalSlides = Math.max(0, images.length - itemsPerView + 1);

  const slideDelay = 500;

  const startSlide = (nextIndex: number) => {
    setIsSliding(true);

    window.setTimeout(() => {
      setCurrentIndex(nextIndex);
      window.setTimeout(() => setIsSliding(false), slideDelay);
    }, slideDelay);
  };

  const goToPrevious = () => {
    const nextIndex = currentIndex === 0 ? Math.max(0, totalSlides - 1) : currentIndex - 1;
    startSlide(nextIndex);
  };

  const goToNext = () => {
    const nextIndex = currentIndex === Math.max(0, totalSlides - 1) ? 0 : currentIndex + 1;
    startSlide(nextIndex);
  };

  const goToSlide = (index: number) => {
    const nextIndex = Math.min(index, Math.max(0, totalSlides - 1));
    startSlide(nextIndex);
  };

  useEffect(() => {
    if (images.length <= itemsPerView) return;

    const intervalId = setInterval(() => {
      const nextIndex =
        currentIndex >= Math.max(0, totalSlides - 1) ? 0 : currentIndex + 1;
      startSlide(nextIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length, totalSlides, itemsPerView]);

  if (!images || images.length === 0) {
    return null;
  }

  const visibleImages = images.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="case-study-carousel-slider-wrapper my-5">
      <div className="carousel-container">
        <h3 className="mb-4">Case Study Gallery</h3>
        
        {/* Carousel Display */}
        <div className="carousel-content">
          {/* Navigation Arrow - Previous */}
          <button
            onClick={goToPrevious}
            className="carousel-nav carousel-nav-prev"
            aria-label="Previous"
            disabled={currentIndex === 0}
            style={{
              position: "absolute",
              left: "-50px",
              top: "50%",
              transform: "translateY(-50%)",
              background: currentIndex === 0 ? "#ccc" : "#ff6b35",
              color: "white",
              border: "none",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              transition: "all 0.5s ease",
            }}
            onMouseEnter={(e) => {
              if (currentIndex !== 0) {
                e.currentTarget.style.background = "#e55a2b";
              }
            }}
            onMouseLeave={(e) => {
              if (currentIndex !== 0) {
                e.currentTarget.style.background = "#ff6b35";
              }
            }}
          >
            ❮
          </button>

          {/* Image Grid - 3 columns */}
          <div
            className={`carousel-images ${isSliding ? "sliding" : ""}`}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              padding: "0 20px",
              transition: "transform 0.5s ease-in-out, opacity 0.4s ease-in-out",
              transform: isSliding ? "translateX(-8px)" : "translateX(0)",
              opacity: isSliding ? 0.65 : 1,
            }}
          >
            {visibleImages.map((image, index) => (
              <div
                key={currentIndex + index}
                className="carousel-image-item"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f5",
                  aspectRatio: "1",
                  animation: "fadeIn 0.5s ease-in-out",
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  transform: "translateY(0)",
                  opacity: 1,
                }}
              >
                <img
                  src={
                    image?.startsWith("/assets/img/")
                      ? image
                      : `/assets/img/case-study/${image}`
                  }
                  alt={`${caseStudyTitle} - Image ${currentIndex + index + 1}`}
                  onError={handleCaseStudyImageError}
                  style={{
                    width: "100%",
                    height: "80%",
                    objectFit: "cover",
                    display: "block",
                    margin: "auto",
                  }}
                />
                {/* Image Counter */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    padding: "6px 10px",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                >
                  {currentIndex + index + 1}/{images.length}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrow - Next */}
          <button
            onClick={goToNext}
            className="carousel-nav carousel-nav-next"
            aria-label="Next"
            disabled={currentIndex >= Math.max(0, totalSlides - 1)}
            style={{
              position: "absolute",
              right: "-50px",
              top: "50%",
              transform: "translateY(-50%)",
              background:
                currentIndex >= Math.max(0, totalSlides - 1) ? "#ccc" : "#ff6b35",
              color: "white",
              border: "none",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor:
                currentIndex >= Math.max(0, totalSlides - 1)
                  ? "not-allowed"
                  : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (currentIndex < Math.max(0, totalSlides - 1)) {
                e.currentTarget.style.background = "#e55a2b";
              }
            }}
            onMouseLeave={(e) => {
              if (currentIndex < Math.max(0, totalSlides - 1)) {
                e.currentTarget.style.background = "#ff6b35";
              }
            }}
          >
            ❯
          </button>
        </div>

        {/* Dots Indicator */}
        {totalSlides > 0 && (
          <div
            className="carousel-dots"
            style={{
              textAlign: "center",
              marginTop: "25px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {Array.from({ length: totalSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "none",
                  background: index === currentIndex ? "#ff6b35" : "#ddd",
                  cursor: "pointer",
                  transition: "background 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  if (index !== currentIndex) {
                    e.currentTarget.style.background = "#ffb399";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    index === currentIndex ? "#ff6b35" : "#ddd";
                }}
              />
            ))}
          </div>
        )}

        {/* Image Counter Info */}
        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Showing {Math.min(itemsPerView, images.length - currentIndex)} of{" "}
          {images.length} images
        </div>
      </div>

      <style jsx>{`
        .carousel-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 30px 0;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 1024px) {
          .carousel-images {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .carousel-nav {
            width: 35px !important;
            height: 35px !important;
          }

          .carousel-nav-prev {
            left: -40px !important;
          }

          .carousel-nav-next {
            right: -40px !important;
          }
        }

        @media (max-width: 768px) {
          .carousel-images {
            grid-template-columns: repeat(1, 1fr) !important;
            gap: 15px !important;
            padding: 0 !important;
          }

          .carousel-nav {
            width: 30px !important;
            height: 30px !important;
          }

          .carousel-image-item {
            transition: transform 0.5s ease, opacity 0.6s ease;
          }
        }

        .carousel-images.sliding {
          transform: translateX(-8px);
          opacity: 0.6;
        }

        .carousel-image-item {
          transition: transform 0.45s ease, opacity 0.45s ease;
        }

        .carousel-image-item img {
          transition: transform 0.45s ease, opacity 0.45s ease;
        }
            font-size: 16px !important;
          }

          .carousel-nav-prev {
            left: 5px !important;
          }

          .carousel-nav-next {
            right: 5px !important;
          }
        }
      `}</style>
    </div>
  );
}

