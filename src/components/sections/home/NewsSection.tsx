export default function NewsSection() {
  return (
    <section className="news-section fix section-padding">
      <div className="container">
        <div className="section-title theme-color-2 text-center">
          <h6 className="wow fadeInUp">latest news</h6>
          <h2 className="tp_reveal_anim">our latest blog &amp; news</h2>
        </div>
      </div>
      <div className="container custom-container-2">
        <div className="row">
          {[
            {
              id: 1,
              title: "Digital Marketing agency for E-commerce Startup",
              cat: "MARKETING",
              date: "October 15, 2025",
              img: "post-4.webp"
            },
            {
              id: 2,
              title: "Brand Banalo best Digital marketing agency for Lead Generation",
              cat: "STRATEGY",
              date: "October 20, 2025",
              img: "post-5.webp"
            },
            {
              id: 3,
              title: "Best Business Making Company to Grow your Company",
              cat: "BUSINESS",
              date: "October 25, 2025",
              img: "post-4.webp"
            }
          ].map((post, index) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + index * 0.2}s`}
              key={post.id}
            >
              <div className="news-box-items-2">
                <div className="thumb">
                  <img src={`/assets/img/news/${post.img}`} alt={post.title} />
                  <a href={`/blog/details?slug=${post.title.toLowerCase().replace(/ /g, '-')}`} className="post-cat">
                    {post.cat}
                  </a>
                </div>
                <div className="content">
                  <p>{post.date}</p>
                  <h3>
                    <a href={`/blog/details?slug=${post.title.toLowerCase().replace(/ /g, '-')}`}>
                      {post.title}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


