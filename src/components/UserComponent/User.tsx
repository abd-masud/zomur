import Link from "next/link";

export const User = () => {
  return (
    <section className="crancy-adashboard crancy-show">
      <div className="container container__bscreen">
        <div className="row">
          <div className="col-12">
            <div className="crancy-body">
              <div className="crancy-dsinner">
                <div className="row mg-top-10">
                  <div className="col-lg-9 col-12">
                    <div className="crancy-user-search mg-top-40">
                      <div className="crancy-user-search__single crancy-user-search__single--sform">
                        <div className="crancy-header__form crancy-header__form--user">
                          <form
                            className="crancy-header__form-inner"
                            action="#"
                          >
                            <button className="search-btn" type="submit">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="9.78639"
                                  cy="9.78614"
                                  r="8.23951"
                                  stroke="#9AA2B1"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M15.5176 15.9448L18.7479 19.1668"
                                  stroke="#9AA2B1"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>
                            <input
                              name="s"
                              value=""
                              type="text"
                              placeholder="Job Title, Company, or Keywords"
                            />
                          </form>
                        </div>
                      </div>
                      <div className="crancy-user-search__single crancy-user-search__single--location">
                        <img src="img/location.svg" />
                        <select name="location" id="location">
                          <option value="company" selected>
                            Select Location
                          </option>
                          <option>New York</option>
                          <option>Sydney</option>
                          <option>Dhaka</option>
                          <option>Victoria</option>
                        </select>
                      </div>
                      <div className="crancy-user-search__single crancy-user-search__single--button">
                        <div className="crancy-user-search__group">
                          <div className="crancy-user-search__filter">
                            <Link href="/User/">
                              <img src="img/filter-icon2.svg" />
                            </Link>
                          </div>
                          <Link
                            href="/User/"
                            className="crancy-btn crancy-btn__user"
                          >
                            Search
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-user mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="/User/">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                          </div>
                          <div className="crancy-single-user__head">
                            <img src="img/user-2.png" />
                            <h4 className="crancy-single-user__title">
                              Courtney Henry<span>Dhaka, Bangladesh</span>
                            </h4>
                            <p className="crancy-single-user__label">Manager</p>
                          </div>
                          <div className="crancy-single-user__info">
                            <ul className="crancy-single-user__list">
                              <li>
                                Email:{" "}
                                <Link href="/User/">cooper@example.com</Link>
                              </li>
                              <li>
                                Phone: <Link href="/User/">(219) 555-0114</Link>
                              </li>
                            </ul>
                          </div>
                          <Link href="/Inbox/" className="crancy-btn__default">
                            Message
                          </Link>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-user mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="/User/">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                          </div>
                          <div className="crancy-single-user__head">
                            <img src="img/user-3.png" />
                            <h4 className="crancy-single-user__title">
                              Daniel Jason<span>New York, US</span>
                            </h4>
                            <p className="crancy-single-user__label">
                              President of Sales
                            </p>
                          </div>
                          <div className="crancy-single-user__info">
                            <ul className="crancy-single-user__list">
                              <li>
                                Email:{" "}
                                <Link href="/User/">cooper@example.com</Link>
                              </li>
                              <li>
                                Phone: <Link href="/User/">(219) 555-0114</Link>
                              </li>
                            </ul>
                          </div>
                          <Link href="/Inbox/" className="crancy-btn__default">
                            Message
                          </Link>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-user mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="/User/">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                          </div>
                          <div className="crancy-single-user__head">
                            <img src="img/user-4.png" />
                            <h4 className="crancy-single-user__title">
                              Fency Anna<span>Sydney, Australia</span>
                            </h4>
                            <p className="crancy-single-user__label">
                              Head of HR
                            </p>
                          </div>
                          <div className="crancy-single-user__info">
                            <ul className="crancy-single-user__list">
                              <li>
                                Email:{" "}
                                <Link href="/User/">cooper@example.com</Link>
                              </li>
                              <li>
                                Phone: <Link href="/User/">(219) 555-0114</Link>
                              </li>
                            </ul>
                          </div>
                          <Link href="/Inbox/" className="crancy-btn__default">
                            Message
                          </Link>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-user mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="/User/">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                          </div>
                          <div className="crancy-single-user__head">
                            <img src="img/user-5.png" />
                            <h4 className="crancy-single-user__title">
                              James Cameron<span>Paris, France</span>
                            </h4>
                            <p className="crancy-single-user__label">
                              Sales Manager
                            </p>
                          </div>
                          <div className="crancy-single-user__info">
                            <ul className="crancy-single-user__list">
                              <li>
                                Email:{" "}
                                <Link href="/User/">cooper@example.com</Link>
                              </li>
                              <li>
                                Phone: <Link href="/User/">(219) 555-0114</Link>
                              </li>
                            </ul>
                          </div>
                          <Link href="/Inbox/" className="crancy-btn__default">
                            Message
                          </Link>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-user mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="/User/">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                          </div>
                          <div className="crancy-single-user__head">
                            <img src="img/user-6.png" />
                            <h4 className="crancy-single-user__title">
                              Janny Smooth<span>Begum Para, Canada</span>
                            </h4>
                            <p className="crancy-single-user__label">
                              Support Engineer
                            </p>
                          </div>
                          <div className="crancy-single-user__info">
                            <ul className="crancy-single-user__list">
                              <li>
                                Email:{" "}
                                <Link href="/User/">cooper@example.com</Link>
                              </li>
                              <li>
                                Phone: <Link href="/User/">(219) 555-0114</Link>
                              </li>
                            </ul>
                          </div>
                          <Link href="/Inbox/" className="crancy-btn__default">
                            Message
                          </Link>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-user mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="/User/">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                          </div>
                          <div className="crancy-single-user__head">
                            <img src="img/user-7.png" />
                            <h4 className="crancy-single-user__title">
                              Albeda Simu<span>Dhaka, Bangladesh</span>
                            </h4>
                            <p className="crancy-single-user__label">
                              Beta Testing
                            </p>
                          </div>
                          <div className="crancy-single-user__info">
                            <ul className="crancy-single-user__list">
                              <li>
                                Email:{" "}
                                <Link href="/User/">cooper@example.com</Link>
                              </li>
                              <li>
                                Phone: <Link href="/User/">(219) 555-0114</Link>
                              </li>
                            </ul>
                          </div>
                          <Link href="/Inbox/" className="crancy-btn__default">
                            Message
                          </Link>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-user mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="/User/">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                          </div>
                          <div className="crancy-single-user__head">
                            <img src="img/user-2.png" />
                            <h4 className="crancy-single-user__title">
                              Courtney Henry<span>Dhaka, Bangladesh</span>
                            </h4>
                            <p className="crancy-single-user__label">Manager</p>
                          </div>
                          <div className="crancy-single-user__info">
                            <ul className="crancy-single-user__list">
                              <li>
                                Email:{" "}
                                <Link href="/User/">cooper@example.com</Link>
                              </li>
                              <li>
                                Phone: <Link href="/User/">(219) 555-0114</Link>
                              </li>
                            </ul>
                          </div>
                          <Link href="/Inbox/" className="crancy-btn__default">
                            Message
                          </Link>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-user mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="/User/">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                          </div>
                          <div className="crancy-single-user__head">
                            <img src="img/user-3.png" />
                            <h4 className="crancy-single-user__title">
                              Daniel Jason<span>New York, US</span>
                            </h4>
                            <p className="crancy-single-user__label">
                              President of Sales
                            </p>
                          </div>
                          <div className="crancy-single-user__info">
                            <ul className="crancy-single-user__list">
                              <li>
                                Email:{" "}
                                <Link href="/User/">cooper@example.com</Link>
                              </li>
                              <li>
                                Phone: <Link href="/User/">(219) 555-0114</Link>
                              </li>
                            </ul>
                          </div>
                          <Link href="/Inbox/" className="crancy-btn__default">
                            Message
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row mg-top-30">
                      <div className="crancy-pagination crancy-pagination__v3">
                        <ul className="crancy-pagination__list">
                          <li className="crancy-pagination__button">
                            <Link href="/User/">
                              <i className="fas fa-angles-left"></i>
                            </Link>
                          </li>
                          <li className="crancy-pagination__button">
                            <Link href="/User/">
                              <i className="fas fa-angle-left"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/User/">1</Link>
                          </li>
                          <li className="active">
                            <Link href="/User/">2</Link>
                          </li>
                          <li>
                            <Link href="/User/">3</Link>
                          </li>
                          <li>
                            <Link href="/User/">...</Link>
                          </li>
                          <li>
                            <Link href="/User/">4</Link>
                          </li>
                          <li className="crancy-pagination__button">
                            <Link href="/User/">
                              <i className="fas fa-angles-right"></i>
                            </Link>
                          </li>
                          <li className="crancy-pagination__button">
                            <Link href="/User/">
                              <i className="fas fa-angle-right"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-12">
                    <div className="crancy-featured-user mg-top-70">
                      <div className="crancy-featured-user__head">
                        <img src="img/user-3.png" />
                        <h4 className="crancy-featured-user__title">
                          Courtney Henry
                        </h4>
                        <p className="crancy-featured-user__text">
                          Finance managers • Jakarta, Indonesia• 2 days ago
                        </p>
                      </div>
                      <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists mg-top-20">
                        <Link href="/User/">
                          <img src="img/author-1.png" alt="author-img" />
                        </Link>
                        <Link href="/User/">
                          <img src="img/author-2.png" alt="author-img" />
                        </Link>
                        <Link href="/User/">
                          <img src="img/author-3.png" alt="author-img" />
                        </Link>
                        <Link href="/User/">
                          <span>+8</span>
                        </Link>
                        <b className="crancy-featured-user__more">
                          Eight friends work here
                        </b>
                      </div>
                      <div className="crancy-featured-user__btn-group">
                        <Link href="/User/">
                          <img src="img/saved-icon.svg" />
                        </Link>
                        <Link href="/User/">
                          <img src="img/share-icon.svg" />
                        </Link>
                      </div>
                      <ul className="crancy-featured-user__list crancy-featured-user__border">
                        <li>
                          Experience <Link href="/User/">2-4 Years</Link>
                        </li>
                        <li>
                          Seniority Level{" "}
                          <Link href="/User/">Senior Level</Link>
                        </li>
                        <li>
                          Employment <Link href="/User/">Full Time</Link>
                        </li>
                        <li>
                          Salary <Link href="/User/">$250-300</Link>
                        </li>
                      </ul>
                      <div className="crancy-featured-user__files crancy-featured-user__border">
                        <h4 className="crancy-featured-user__title--small">
                          Files
                        </h4>
                        <Link href="/User/">
                          <div className="crancy-featured-user__fcontent">
                            <span className="crancy-featured-user__ficon">
                              <img src="img/file-icon.svg" />
                            </span>
                            <h4 className="crancy-featured-user__fname">
                              Overview.pdf
                              <span className="crancy-featured-user__fsize">
                                50 Kb
                              </span>
                            </h4>
                          </div>
                          <div className="crancy-featured-user__fdownload">
                            <img src="img/download-icon.svg" />
                          </div>
                        </Link>
                        <Link href="/User/" className="mg-top-20">
                          <div className="crancy-featured-user__fcontent">
                            <span className="crancy-featured-user__ficon">
                              <img src="img/file-icon.svg" />
                            </span>
                            <h4 className="crancy-featured-user__fname">
                              Overview.pdf
                              <span className="crancy-featured-user__fsize">
                                50 Kb
                              </span>
                            </h4>
                          </div>
                          <div className="crancy-featured-user__fdownload">
                            <img src="img/download-icon.svg" />
                          </div>
                        </Link>
                      </div>
                      <div className="crancy-featured-user__hagent crancy-featured-user__border">
                        <h4 className="crancy-featured-user__title--small">
                          Hiring Agent
                        </h4>
                        <div className="crancy-featured-user__hcard">
                          <img src="img/hire-agent.png" />
                          <div className="crancy-featured-user__hcontent">
                            <h4 className="crancy-featured-user__hagent--title">
                              Annette Black
                              <span>
                                <b>HR Specialist</b> • 4 Yrs Exp
                              </span>
                            </h4>
                          </div>
                        </div>
                        <div className="crancy-featured-user__button mg-top-25">
                          <Link
                            href="/Inbox/"
                            className="crancy-btn crancy-featured-user__btn"
                          >
                            Add a contact
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
