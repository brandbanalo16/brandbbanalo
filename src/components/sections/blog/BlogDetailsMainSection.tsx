import React, { Suspense } from 'react';
import BlogDetailsContentSection from "./BlogDetailsContentSection";
import BlogSidebar from "./BlogSidebar";

export default function BlogDetailsMainSection() {
  return (
    <section className="news-details-section section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <Suspense fallback={<div>Loading...</div>}>
              <BlogDetailsContentSection />
            </Suspense>
          </div>
          <div className="col-12 col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}

