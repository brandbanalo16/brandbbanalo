import Link from "next/link";

interface ServiceBreadcrumbSectionProps {
  title: string;
}

export default function ServiceBreadcrumbSection({ title }: ServiceBreadcrumbSectionProps) {
  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
    >
      <div className="container">
        <div className="page-heading">
          <div className="breadcrumb-sub-title">
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              {title}
            </h1>
          </div>
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <Link href="/">
                <i className="fa-regular fa-house" /> Home
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-slash-forward" />
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

