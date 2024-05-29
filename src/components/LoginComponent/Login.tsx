import Link from "next/link";

export const Login = () => {
  return (
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
                      Login to your account
                    </h3>
                  </div>
                  <form
                    className="crancy-wc__form-main"
                    action="/"
                    method="post"
                  >
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
                    <div className="form-group">
                      <div className="crancy-wc__check-inline">
                        <div className="crancy-wc__checkbox">
                          <input
                            className="crancy-wc__form-check"
                            id="checkbox"
                            name="checkbox"
                            type="checkbox"
                          />
                          <label htmlFor="checkbox">Remember Me</label>
                        </div>
                        <div className="crancy-wc__forgot">
                          <Link href="/ForgetPassword/" className="forgot-pass">
                            Forgot Password?
                          </Link>
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
                        <span>Or login with</span>
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
                          Dont’t have an account ?
                          <Link href="/SignUp/">Get Started</Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="crancy-wc__footer--top">
                  <div className="crancy-wc__footer">
                    <ul className="crancy-wc__footer--list list-none">
                      <li>
                        <Link href="/Login/">Terms & Condition</Link>
                      </li>
                      <li>
                        <Link href="/Login/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/Login/">Help</Link>
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
                    @ 2023 <Link href="/Login/">Zomur.</Link> All Right
                    Reserved.
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
