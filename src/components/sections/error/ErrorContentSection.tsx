import Link from "next/link";

export default function ErrorContentSection() {
  return (
    <section className="error-section fix section-padding">
      <div className="container">
        <div className="error-content">
          <h2 className="wow fadeInUp">404</h2>
          <h3 className="wow fadeInUp" data-wow-delay=".3s">
            Sorry! Page not found.
          </h3>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            The page you are looking for was moved, removed, renamed or never
            existed.
          </p>
          <Link
            href="/"
            className="theme-btn wow fadeInUp"
            data-wow-delay=".7s"
          >
            <span className="icon-1">
              <img src="/assets/img/icon/10.svg" alt="Go to home" />
            </span>
            Go to home
            <span className="icon-2">
              <img src="/assets/img/icon/11.svg" alt="Go to home" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

