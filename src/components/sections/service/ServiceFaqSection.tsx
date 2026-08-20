"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqsByService: Record<string, FaqItem[]> = {
  "001": [
    { question: "What makes a great B2B website design?", answer: "A great B2B website balances professional aesthetics with clear messaging, fast load times, and conversion-focused layouts. It should quickly communicate your value proposition and guide visitors to take action." },
    { question: "How long does website design take?", answer: "A typical B2B website design caseStudy takes 4–8 weeks, depending on scope, number of pages, and client feedback cycles. We work in structured sprints to keep things on schedule." },
    { question: "Will my website be mobile-friendly?", answer: "Absolutely. All our designs are mobile-first and rigorously tested across devices and screen sizes to ensure consistent performance and appearance." },
    { question: "Can you redesign an existing website?", answer: "Yes. We offer full redesign services where we audit your current site, identify gaps, and rebuild it with a modern, high-converting design while preserving your existing brand equity." },
  ],
  "002": [
    { question: "What technologies do you use for web development?", answer: "We build on modern stacks including Next.js, React, and headless CMS platforms. We choose technologies based on your specific business needs for scalability, performance, and maintainability." },
    { question: "How do you ensure website security?", answer: "We implement HTTPS, secure headers, input validation, and regular dependency audits as standard. For e-commerce or sensitive data sites, we add additional layers including WAF, rate limiting, and penetration testing." },
    { question: "Can you integrate my CRM or other tools?", answer: "Yes. We have experience integrating with HubSpot, Salesforce, Zoho, payment gateways, ERP systems, and custom APIs to connect your website with your existing business workflows." },
    { question: "How fast will my website be?", answer: "We target 90+ scores on Core Web Vitals through optimised code, image compression, CDN delivery, and efficient caching strategies." },
  ],
  "003": [
    { question: "Which social media platforms do you manage?", answer: "We manage Instagram, LinkedIn, Facebook, Twitter/X, and YouTube, depending on where your audience is most active. We tailor the platform mix to your industry and business goals." },
    { question: "How often will you post on our accounts?", answer: "Posting frequency is agreed upfront and typically ranges from 3–7 posts per week per platform. We create a monthly content calendar that you review and approve before we publish." },
    { question: "Do you create the content or do we provide it?", answer: "We handle end-to-end content creation — strategy, copywriting, graphic design, and scheduling. You can provide input and brand assets, and we handle the rest." },
    { question: "How do you measure social media success?", answer: "We track follower growth, reach, engagement rate, click-through rates, and lead attribution monthly, providing transparent reports with insights and recommendations." },
  ],
  "004": [
    { question: "Which ad platforms do you manage?", answer: "We manage Google Ads (Search, Display, Shopping, YouTube), Meta Ads (Facebook & Instagram), and LinkedIn Ads. We recommend platforms based on where your buyers actively search and engage." },
    { question: "What budget do I need to start?", answer: "We typically recommend a minimum ad spend of ₹30,000/month to generate meaningful data and results. Our management fee is separate from your ad spend and scales with campaign size." },
    { question: "How soon will I see results from paid ads?", answer: "Most clients start seeing qualified leads within the first 2–4 weeks. The first month is typically a learning phase where we optimise targeting and creatives for better performance." },
    { question: "How do you track ROI from ads?", answer: "We set up conversion tracking, UTM parameters, and CRM integrations so every lead and sale is attributed accurately. You get weekly and monthly reports showing cost per lead, ROAS, and campaign performance." },
  ],
  "005": [
    { question: "What is your lead generation process?", answer: "We start by defining your ideal customer profile, then build targeted landing pages, ad campaigns, and lead magnets. Leads are captured, qualified, and passed to your sales team via your CRM or preferred system." },
    { question: "How do you ensure lead quality?", answer: "We use multi-step qualification forms, intent-based targeting, and lead scoring to filter out low-quality enquiries. We continuously optimise based on your sales team's feedback on lead quality." },
    { question: "What is a typical cost per lead?", answer: "Cost per lead varies by industry and channel but our B2B clients typically see CPLs ranging from ₹200–₹2000 depending on the service complexity and competition. We benchmark and target reduction over time." },
    { question: "Can you integrate leads directly into our CRM?", answer: "Yes. We integrate with HubSpot, Zoho, Salesforce, and most major CRMs so leads flow in automatically with proper tagging and source attribution." },
  ],
  "006": [
    { question: "What is included in a branding package?", answer: "Our standard branding packages include logo design (primary, secondary, icon variants), brand colour palette, typography system, brand guidelines document, and core stationery designs (business card, letterhead)." },
    { question: "How long does branding take?", answer: "A full brand identity caseStudy typically takes 3–6 weeks, including research, concept development, refinement, and final delivery with guidelines." },
    { question: "Can you work with an existing logo or brand?", answer: "Yes. We offer brand refresh and evolution services where we modernise or refine your existing identity while maintaining brand recognition and continuity." },
    { question: "Do you deliver brand guidelines?", answer: "Absolutely. Every branding caseStudy includes a comprehensive brand guidelines document covering logo usage rules, colour codes, typography hierarchy, do's and don'ts, and application examples." },
  ],
  "007": [
    { question: "How long does SEO take to show results?", answer: "SEO is a long-term investment. Most clients begin seeing measurable improvements in rankings and organic traffic within 3–6 months. Competitive industries may take longer, but results compound significantly over time." },
    { question: "What does your SEO service include?", answer: "We cover technical SEO audits, on-page optimisation, keyword research, content strategy, link building, and monthly reporting. We take a holistic approach that covers all factors Google uses to rank websites." },
    { question: "Do you guarantee first page rankings?", answer: "No ethical SEO agency can guarantee specific rankings. We do guarantee a transparent, best-practice approach, consistent effort, and regular reporting that demonstrates real progress toward your business goals." },
    { question: "Can you do local SEO for my business?", answer: "Yes. We offer local SEO services including Google Business Profile optimisation, local citation building, and location-specific content to help you dominate local search in your target areas." },
  ],
};

const defaultFaqs: FaqItem[] = [
  { question: "How do I get started?", answer: "Simply reach out to us via the contact form or phone. We'll schedule a discovery call to understand your business, goals, and challenges, and propose the right solution." },
  { question: "What industries do you specialise in?", answer: "We specialise in B2B industries including pharma, manufacturing, industrials, healthcare, engineering, and professional services. Our strategies are tailored specifically to B2B buying cycles." },
  { question: "Do you work with small businesses?", answer: "Yes. We work with businesses of all sizes, from early-stage startups to established enterprises. Our engagement scope and pricing scale to suit your stage and goals." },
  { question: "How do we communicate during a caseStudy?", answer: "We assign a dedicated account manager and keep communication structured through regular check-ins, shared dashboards, and monthly reports. You will always know exactly where your caseStudy stands." },
];

type ServiceFaqSectionProps = {
  serviceId?: string;
};

export default function ServiceFaqSection({ serviceId }: ServiceFaqSectionProps) {
  const faqs = (serviceId && faqsByService[serviceId]) ? faqsByService[serviceId] : defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <div className="faq-wrapper mt-5">
      <h3 className="mb-4">Frequently Asked Questions</h3>
      <div className="faq-accordion-items">
        <div className="faq-accordion">
          <div className="accordion" id="accordion">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="accordion-item mb-3 wow fadeInUp"
                data-wow-delay={`${0.3 + index * 0.2}s`}
              >
                <h5 className="accordion-header">
                  <button
                    className={`accordion-button${openIndex === index ? "" : " collapsed"}`}
                    type="button"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    {faq.question}
                  </button>
                </h5>
                <div
                  className={`accordion-collapse${openIndex === index ? " show" : " collapse"}`}
                >
                  <div className="accordion-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
