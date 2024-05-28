export const SignUp = () => {
  return (
    <section className="crancy-wc crancy-wc__full crancy-bg-cover">
      <div className="crancy-wc__form">
        <div className="crancy-wc__form--middle">
          <div className="crancy-wc__form-inner">
            <div className="crancy-wc__logo">
              <a href="index.html">
                <img src="img/logo.png" alt="#" />
              </a>
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
                    action="index.html"
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
                              <i className="fas fa-eye" id="toggle-icon"></i>
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
                            <a href="#">Terms and Conditions</a>
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
                          <a href="create-account.html">Sign in</a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="crancy-wc__footer--top">
                  <div className="crancy-wc__footer">
                    <ul className="crancy-wc__footer--list list-none">
                      <li>
                        <a href="#">Terms & Condition</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Help</a>
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
                    @ 2023 <a href="#">Zomur.</a> All Right Reserved.
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
                      Curates the best new blockchain jobs at leading companies
                      that use blockchain technology
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
                      Curates the best new blockchain jobs at leading companies
                      that use blockchain technology
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
                      Curates the best new blockchain jobs at leading companies
                      that use blockchain technology
                    </p>
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
