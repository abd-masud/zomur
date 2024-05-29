import Link from "next/link";

export const ComingSoon = () => {
  return (
    <div
      className="crancy-coming-soon crancy-bg-cover"
      style={{ backgroundImage: "url(img/comming-soon.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="crancy-coming-soon__inside crancy-flex__column-center text-center">
              <div className="crancy-coming-soon__content">
                <h2 className="crancy-coming-soon__title">
                  We are coming soon
                </h2>
                <p className="crancy-coming-soon__text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry`s standard dummy text ever since the
                  1500s,
                </p>
              </div>
              <div
                className="crancy-countdown"
                id="crancy_countdown"
                data-countdown="2025/01/01"
              ></div>
              <form className="crancy-coming-soon__form" action="#">
                <h4 className="crancy-coming-soon__form-label">
                  Subscribe Newsletter
                </h4>
                <div className="crancy-coming-soon__form-inner">
                  <input type="email" placeholder="Enter your e-mail" />
                  <button className="crancy-btn" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
              <ul className="crancy-coming-soon__slist m-0">
                <li>
                  <Link href="/ComingSoon/">
                    {" "}
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/ComingSoon/">
                    {" "}
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/ComingSoon/">
                    {" "}
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/ComingSoon/">
                    {" "}
                    <i className="fa-brands fa-skype"></i>
                  </Link>
                </li>
              </ul>
              <div className="crancy-coming-soon__button">
                <Link className="crancy-btn" href="/">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
