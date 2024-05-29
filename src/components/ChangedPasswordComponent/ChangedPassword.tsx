import Link from "next/link";

export const ChangedPassword = () => {
  return (
    <>
      <div
        id="login_popup"
        className="crancy-login-popup crancy-login-popup__confirm"
      >
        <div className="crancy-login-popup__inner">
          <div className="crancy-login-popup__middle">
            <div className="crancy-wc__heading">
              <h3 className="crancy-login-popup__title">Create new password</h3>
              <p>
                Please enter a new password. Your new password must be different
                from previous password.
              </p>
            </div>

            <form
              className="crancy-wc__form-main crancy-wc__form-main--password mg-top-30"
              action="/"
              method="post"
            >
              <div className="form-group">
                <div className="form-group__input">
                  <div className="crancy-wc__ficon">
                    <img src="img/password-icon.svg" />
                  </div>
                  <input
                    className="crancy-wc__form-input"
                    placeholder="Enter- Password"
                    id="password-field"
                    type="password"
                    name="password"
                    maxLength={8}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-group__input">
                  <div className="crancy-wc__ficon">
                    <img src="img/password-icon.svg" />
                  </div>
                  <input
                    className="crancy-wc__form-input"
                    placeholder="Re- Password"
                    id="password-field"
                    type="password"
                    name="password"
                    maxLength={8}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="crancy-wc__button crancy-wc__button--initial">
                  <button
                    className="ntfmax-wc__btn ntfmax-wc__btn--login"
                    type="submit"
                  >
                    Continue
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div className="form-group form-mg-top25">
                <div className="crancy-wc__form-login--label">
                  <span>Or Continue with</span>
                </div>
                <div className="crancy-wc__slist--info">
                  <ul className="crancy-wc__slist">
                    <li>
                      <Link href="/ChangedPassword/">
                        <img src="img/facebook-icon.png" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/ChangedPassword/">
                        <img src="img/apple-logo.png" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/ChangedPassword/">
                        <img src="img/google-logo.png" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="body-bg">
        <section className="crancy-wc crancy-wc__full crancy-bg-cover">
          <div className="crancy-wc__form">
            <div className="crancy-wc__form--middle">
              <div className="crancy-wc__form-inner">
                <div className="crancy-wc__logo">
                  <Link href="/">
                    <img src="img/logo.png" alt="#" />
                  </Link>
                </div>
                <div className="crancy-wc__form-inside">
                  <div className="crancy-wc__form-middle">
                    <div className="crancy-wc__form-top">
                      <div className="crancy-wc__heading pd-btm-20">
                        <h3 className="crancy-wc__form-title crancy-wc__form-title__one m-0">
                          Create your account
                        </h3>
                      </div>
                      <form
                        className="crancy-wc__form-main"
                        action="/"
                        method="post"
                      >
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-group">
                              <div className="form-group__input">
                                <input
                                  className="crancy-wc__form-input"
                                  type="text"
                                  name="name"
                                  placeholder="First name"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-group">
                              <div className="form-group__input">
                                <input
                                  className="crancy-wc__form-input"
                                  type="text"
                                  name="name"
                                  placeholder="Last name"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <div className="form-group__input">
                                <input
                                  className="crancy-wc__form-input"
                                  type="email"
                                  name="email"
                                  placeholder="Email"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <div className="form-group__input">
                                <input
                                  className="crancy-wc__form-input"
                                  placeholder="Password"
                                  id="password-field"
                                  type="password"
                                  name="password"
                                  maxLength={8}
                                  required
                                />
                                <span className="crancy-wc__toggle">
                                  <i
                                    className="fas fa-eye"
                                    id="toggle-icon"
                                  ></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="crancy-wc__check-inline">
                            <div className="crancy-wc__checkbox">
                              <input
                                className="crancy-wc__form-check"
                                id="checkbox"
                                name="checkbox"
                                type="checkbox"
                              />
                              <label htmlFor="checkbox">
                                By proceeding, you agree to the
                                <Link href="/ChangedPassword/">
                                  Terms and Conditions
                                </Link>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mg-top-30">
                          <div className="crancy-wc__button">
                            <button className="ntfmax-wc__btn" type="submit">
                              Sign in with email
                            </button>
                          </div>
                          <div className="crancy-wc__form-login--label">
                            <span>Or sign up with</span>
                          </div>
                          <div className="crancy-wc__button--group">
                            <button
                              className="ntfmax-wc__btn ntfmax-wc__btn--two"
                              type="submit"
                            >
                              <div className="ntfmax-wc__btn-icon">
                                <img src="img/google-logo.png" />
                              </div>
                              Google
                            </button>
                            <button
                              className="ntfmax-wc__btn ntfmax-wc__btn--two"
                              type="submit"
                            >
                              <div className="ntfmax-wc__btn-icon">
                                <img src="img/apple-logo.png" />
                              </div>
                              Apple
                            </button>
                          </div>
                        </div>
                        <div className="form-group form-mg-top30">
                          <div className="crancy-wc__bottom">
                            <p className="crancy-wc__text">
                              Already have an account ?
                              <Link href="/Login/">Sign in</Link>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="crancy-wc__footer--top">
                      <div className="crancy-wc__footer">
                        <ul className="crancy-wc__footer--list list-none">
                          <li>
                            <Link href="/ChangedPassword/">
                              Terms & Condition
                            </Link>
                          </li>
                          <li>
                            <Link href="/ChangedPassword/">Privacy Policy</Link>
                          </li>
                          <li>
                            <Link href="/ChangedPassword/">Help</Link>
                          </li>
                        </ul>
                        <div className="crancy-wc__footer--languages">
                          <select className="crancy-wc__footer--language">
                            <option data-display="English">English</option>
                            <option value="2">Bengali</option>
                            <option value="3">Frances</option>
                          </select>
                        </div>
                      </div>
                      <p className="crancy-wc__footer--copyright">
                        @ 2023 <Link href="/ChangedPassword/">Zomur.</Link> All
                        Right Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="crancy-wc__banner crancy-bg-cover"
                style={{ backgroundImage: "url(img/welcome-vector-shape.png)" }}
              >
                <div className="crancy-wc__banner--img">
                  <img src="img/welcome-vector.png" alt="#" />
                </div>
                <div className="crancy-wc__slider">
                  <div className="single-slider">
                    <div className="crancy-wc__slider--single">
                      <div className="crancy-wc__slider--content">
                        <h4 className="crancy-wc__slider--title">
                          The Easiest Way to Build <br />
                          your Own Business
                        </h4>
                        <p className="crancy-wc__slider--text">
                          Curates the best new blockchain jobs at leading
                          companies that use blockchain technology
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-slider">
                    <div className="crancy-wc__slider--single">
                      <div className="crancy-wc__slider--content">
                        <h4 className="crancy-wc__slider--title">
                          Sign in & Get the Access to Manage Apps
                        </h4>
                        <p className="crancy-wc__slider--text">
                          Curates the best new blockchain jobs at leading
                          companies that use blockchain technology
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-slider">
                    <div className="crancy-wc__slider--single">
                      <div className="crancy-wc__slider--content">
                        <h4 className="crancy-wc__slider--title">
                          The Easiest Way to Build <br />
                          your Own Business
                        </h4>
                        <p className="crancy-wc__slider--text">
                          Curates the best new blockchain jobs at leading
                          companies that use blockchain technology
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
