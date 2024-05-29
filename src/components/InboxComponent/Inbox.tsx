import Link from "next/link";

export const Inbox = () => {
  return (
    <section className="crancy-adashboard crancy-show">
      <div className="container container__bscreen">
        <div className="row row__bscreen">
          <div className="col-12">
            <div className="crancy-body">
              <div className="crancy-dsinner">
                <div className="crancy-chatbox">
                  <div className="row g-0">
                    <div className="col-lg-3 col-md-4 col-12 crancy-chatbox__one">
                      <div className="crancy-chatbox__sidebar">
                        <div className="crancy-chatbox__first-group">
                          <h4 className="crancy-default__title m-0">
                            Messages (22)
                          </h4>
                          <div className="crancy-chatbox__edit">
                            <Link href="/Inbox/">
                              <img src="img/edit-icon2.svg" />
                            </Link>
                          </div>
                        </div>

                        <div className="crancy-chatbox__right">
                          <div className="crancy-header__form crancy-header__form--chatbox">
                            <form
                              className="crancy-header__form-inner crancy-header__form--inbox"
                              action="#"
                            >
                              <button className="search-btn" type="submit">
                                <svg
                                  width="22"
                                  height="22"
                                  viewBox="0 0 22 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1.75 10.5C1.75 15.3325 5.66751 19.25 10.5 19.25C15.3325 19.25 19.25 15.3325 19.25 10.5C19.25 5.66751 15.3325 1.75 10.5 1.75C5.66751 1.75 1.75 5.66751 1.75 10.5ZM10.5 20.75C4.83908 20.75 0.25 16.1609 0.25 10.5C0.25 4.83908 4.83908 0.25 10.5 0.25C16.1609 0.25 20.75 4.83908 20.75 10.5C20.75 13.0605 19.8111 15.4017 18.2589 17.1982L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L17.1982 18.2589C15.4017 19.8111 13.0605 20.75 10.5 20.75Z"
                                    fill="#28303F"
                                  />
                                </svg>
                              </button>
                              <input
                                name="s"
                                value=""
                                type="text"
                                placeholder="Search Message"
                              />
                            </form>
                          </div>
                        </div>

                        <div className="crancy-chatbox__pinned pd-left-25 pd-right-25 crancy-flex-between mg-top-30 mg-btm-20">
                          <h4 className="crancy-chatbox__pinned--title m-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.7682 2.90645C8.94657 2.08616 7.54172 2.66713 7.54172 3.82719C7.54172 4.17253 7.40431 4.50373 7.15972 4.74792L6.07925 5.82663C5.83466 6.07083 5.50292 6.20801 5.15701 6.20801C3.99506 6.20801 3.41315 7.61058 4.23477 8.43087L5.81896 10.0125L2.14059 13.6849C1.95314 13.872 1.95314 14.1754 2.14059 14.3626C2.32804 14.5497 2.63196 14.5497 2.81941 14.3626L6.49779 10.6902L8.08195 12.2718C8.90358 13.0921 10.3084 12.5111 10.3084 11.351C10.3084 11.0057 10.4458 10.6745 10.6904 10.4303L11.7709 9.3516C12.0155 9.10741 12.3472 8.97022 12.6931 8.97022C13.8551 8.97022 14.437 7.56766 13.6154 6.74737L9.7682 2.90645Z"
                                fill="#2A313C"
                              />
                            </svg>
                            Pinned Messages <span>(3)</span>
                          </h4>
                          <Link href="/Inbox/">
                            <img src="img/toggle-icon-3.svg" />
                          </Link>
                        </div>

                        <ul className="crancy-chatbox__list">
                          <li>
                            <div className="crancy-chatbox__inner">
                              <div className="crancy-chatbox__author">
                                <div className="crancy-chatbox__author-img">
                                  <img src="img/chat-author7.png" alt="#" />
                                  <span className="crancy-chatbox__author-online"></span>
                                </div>
                                <div className="crancy-chatbox__author-content">
                                  <h4 className="crancy-chatbox__author-title">
                                    Emilia Sam
                                  </h4>
                                  <p className="crancy-chatbox__author-desc">
                                    Sent image
                                  </p>
                                </div>
                              </div>
                              <div className="crancy-chatbox__right">
                                <div className="crancy-chatbox__info">
                                  <p className="crancy-chatbox__time">16:14</p>
                                </div>
                                <div className="crancy-chatbox__toggle">
                                  <img src="img/file-icon3.svg" />
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="active">
                            <div className="crancy-chatbox__inner">
                              <div className="crancy-chatbox__author">
                                <div className="crancy-chatbox__author-img">
                                  <img src="img/chat-author8.png" alt="#" />
                                  <span className="crancy-chatbox__author-online"></span>
                                </div>
                                <div className="crancy-chatbox__author-content">
                                  <h4 className="crancy-chatbox__author-title">
                                    Eleanor Pena
                                  </h4>
                                  <p className="crancy-chatbox__author-desc crancy-color8">
                                    Eleanor is typing......
                                  </p>
                                </div>
                              </div>
                              <div className="crancy-chatbox__right">
                                <div className="crancy-chatbox__info">
                                  <p className="crancy-chatbox__time">10:14</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="crancy-chatbox__inner">
                              <div className="crancy-chatbox__author">
                                <div className="crancy-chatbox__author-img">
                                  <img src="img/chat-author9.png" alt="#" />
                                  <span className="crancy-chatbox__author-online"></span>
                                </div>
                                <div className="crancy-chatbox__author-content">
                                  <h4 className="crancy-chatbox__author-title">
                                    Cody Fisher
                                  </h4>
                                  <p className="crancy-chatbox__author-desc">
                                    Voice Message
                                  </p>
                                </div>
                              </div>
                              <div className="crancy-chatbox__right">
                                <div className="crancy-chatbox__info">
                                  <p className="crancy-chatbox__time">11:14</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <div className="crancy-chatbox__pinned pd-left-25 pd-right-25 crancy-flex-between mg-top-30 mg-btm-20">
                          <h4 className="crancy-chatbox__pinned--title m-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="12"
                              viewBox="0 0 14 12"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2.99992 0C1.52716 0 0.333252 1.19391 0.333252 2.66667V9.33333C0.333252 10.8061 1.52716 12 2.99992 12H10.9999C12.4727 12 13.6666 10.8061 13.6666 9.33333V2.66667C13.6666 1.19391 12.4727 0 10.9999 0H2.99992ZM3.27727 2.91728C3.04751 2.7641 2.73707 2.82619 2.5839 3.05595C2.43072 3.28572 2.49281 3.59615 2.72257 3.74933L5.24337 5.42986C6.30705 6.13898 7.69279 6.13898 8.75647 5.42986L11.2773 3.74933C11.507 3.59615 11.5691 3.28572 11.4159 3.05595C11.2628 2.82619 10.9523 2.7641 10.7226 2.91728L8.20177 4.59781C7.47399 5.083 6.52585 5.083 5.79807 4.59781L3.27727 2.91728Z"
                                fill="#2A313C"
                              />
                            </svg>
                            All Messages <span>(22)</span>
                          </h4>
                          <Link href="/Inbox/">
                            <img src="img/toggle-icon-3.svg" />
                          </Link>
                        </div>

                        <ul className="crancy-chatbox__list">
                          <li>
                            <div className="crancy-chatbox__inner">
                              <div className="crancy-chatbox__author">
                                <div className="crancy-chatbox__author-img">
                                  <img src="img/chat-author1.png" alt="#" />
                                  <span className="crancy-chatbox__author-online"></span>
                                </div>
                                <div className="crancy-chatbox__author-content">
                                  <h4 className="crancy-chatbox__author-title">
                                    Marjorie
                                  </h4>
                                  <p className="crancy-chatbox__author-desc">
                                    You:
                                    <span className="crancy-bcolor">
                                      Good Luck
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="crancy-chatbox__right">
                                <div className="crancy-chatbox__info">
                                  <p className="crancy-chatbox__time">15:20</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="active">
                            <div className="crancy-chatbox__inner">
                              <div className="crancy-chatbox__author">
                                <div className="crancy-chatbox__author-img">
                                  <img src="img/chat-author2.png" alt="#" />
                                  <span className="crancy-chatbox__author-online"></span>
                                </div>
                                <div className="crancy-chatbox__author-content">
                                  <h4 className="crancy-chatbox__author-title">
                                    Esther
                                  </h4>
                                  <p className="crancy-chatbox__author-desc">
                                    <span className="crancy-rcolor">
                                      Missed Call
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="crancy-chatbox__right">
                                <div className="crancy-chatbox__info">
                                  <p className="crancy-chatbox__time">12:24</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="crancy-chatbox__inner">
                              <div className="crancy-chatbox__author">
                                <div className="crancy-chatbox__author-img">
                                  <img src="img/chat-author3.png" alt="#" />
                                  <span className="crancy-chatbox__author-online"></span>
                                </div>
                                <div className="crancy-chatbox__author-content">
                                  <h4 className="crancy-chatbox__author-title">
                                    Debra
                                  </h4>
                                  <p className="crancy-chatbox__author-desc">
                                    Thank you
                                  </p>
                                </div>
                              </div>
                              <div className="crancy-chatbox__right">
                                <div className="crancy-chatbox__info">
                                  <p className="crancy-chatbox__time">17:22</p>
                                </div>
                                <div className="crancy-chatbox__toggle">
                                  <img src="img/chat-seen.svg" />
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="crancy-chatbox__inner">
                              <div className="crancy-chatbox__author">
                                <div className="crancy-chatbox__author-img">
                                  <img src="img/chat-author4.png" alt="#" />
                                  <span className="crancy-chatbox__author-online crancy-sbcolor"></span>
                                </div>
                                <div className="crancy-chatbox__author-content">
                                  <h4 className="crancy-chatbox__author-title">
                                    Angel
                                  </h4>
                                  <p className="crancy-chatbox__author-desc">
                                    Voice Message
                                  </p>
                                </div>
                              </div>
                              <div className="crancy-chatbox__right">
                                <div className="crancy-chatbox__info">
                                  <p className="crancy-chatbox__time">20:14</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="crancy-chatbox__inner">
                              <div className="crancy-chatbox__author">
                                <div className="crancy-chatbox__author-img">
                                  <img src="img/chat-author5.png" alt="#" />
                                  <span className="crancy-chatbox__author-online crancy-sbcolor"></span>
                                </div>
                                <div className="crancy-chatbox__author-content">
                                  <h4 className="crancy-chatbox__author-title">
                                    Cody
                                  </h4>
                                  <p className="crancy-chatbox__author-desc">
                                    Voice Message
                                  </p>
                                </div>
                              </div>
                              <div className="crancy-chatbox__right">
                                <div className="crancy-chatbox__info">
                                  <p className="crancy-chatbox__time">16:11</p>
                                </div>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="crancy-chatbox__inner">
                              <div className="crancy-chatbox__author">
                                <div className="crancy-chatbox__author-img">
                                  <img src="img/chat-author5.png" alt="#" />
                                  <span className="crancy-chatbox__author-online crancy-sbcolor"></span>
                                </div>
                                <div className="crancy-chatbox__author-content">
                                  <h4 className="crancy-chatbox__author-title">
                                    Cody
                                  </h4>
                                  <p className="crancy-chatbox__author-desc">
                                    Voice Message
                                  </p>
                                </div>
                              </div>
                              <div className="crancy-chatbox__right">
                                <div className="crancy-chatbox__info">
                                  <p className="crancy-chatbox__time">16:11</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="crancy-chatbox__inner">
                              <div className="crancy-chatbox__author">
                                <div className="crancy-chatbox__author-img">
                                  <img src="img/chat-author6.png" alt="#" />
                                  <span className="crancy-chatbox__author-online crancy-sbcolor"></span>
                                </div>
                                <div className="crancy-chatbox__author-content">
                                  <h4 className="crancy-chatbox__author-title">
                                    Cody
                                  </h4>
                                  <p className="crancy-chatbox__author-desc">
                                    Voice Message
                                  </p>
                                </div>
                              </div>
                              <div className="crancy-chatbox__right">
                                <div className="crancy-chatbox__info">
                                  <p className="crancy-chatbox__time">10:14</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-5 col-12 crancy-chatbox__two">
                      <div className="crancy-chatbox__explore">
                        <div className="crancy-chatbox__explore-head">
                          <div className="crancy-chatbox__author">
                            <div className="crancy-chatbox__author-img--head">
                              <img src="img/chat-top-ms.png" alt="#" />
                              <span className="crancy-chatbox__author-online"></span>
                            </div>
                            <div className="crancy-chatbox__heading">
                              <h4 className="crancy-chatbox__heading--title">
                                AJOY Sarker
                              </h4>
                              <p className="crancy-chatbox__heading--text">
                                Online
                              </p>
                            </div>
                          </div>
                          <div className="crancy-chatbox__toggle">
                            <Link href="/Inbox/">
                              <img src="img/print-icon.svg" />
                            </Link>
                            <Link href="/Inbox/">
                              <img src="img/target-icon.svg" />
                            </Link>
                            <Link href="/Inbox/">
                              <img src="img/toggle-icon2.svg" />
                            </Link>
                          </div>
                        </div>

                        <div className="crancy-chatbox__explore-body">
                          <div className="crancy-chatbox__incoming">
                            <ul className="crancy-chatbox__incoming-list">
                              <li>
                                <div className="crancy-chatbox__chat">
                                  <div className="crancy-chatbox__author-img">
                                    <img src="img/chat-author11.png" alt="#" />
                                  </div>
                                  <div className="crancy-chatbox__main-content">
                                    <div className="crancy-chatbox__incoming-chat">
                                      <p className="crancy-chatbox__incoming-text">
                                        Lorem ipsum dolor sit ame?
                                      </p>
                                    </div>
                                    <p className="crancy-chatbox__time crancy-chatbox__time-two">
                                      20 min ago
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="crancy-chatbox__incoming crancy-chatbox__outgoing">
                            <ul className="crancy-chatbox__incoming-list">
                              <li>
                                <div className="crancy-chatbox__chat">
                                  <div className="crancy-chatbox__main-content">
                                    <div className="crancy-chatbox__incoming-chat">
                                      <p className="crancy-chatbox__incoming-text">
                                        Lorem ipsum dolor sit ame?
                                      </p>
                                    </div>
                                    <p className="crancy-chatbox__time crancy-chatbox__time-two">
                                      10:00 PM
                                    </p>
                                  </div>
                                  <div className="crancy-chatbox__author-img">
                                    <img src="img/chat-author12.png" alt="#" />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="crancy-chatbox__incoming">
                            <ul className="crancy-chatbox__incoming-list">
                              <li>
                                <div className="crancy-chatbox__chat">
                                  <div className="crancy-chatbox__author-img">
                                    <img src="img/chat-author11.png" alt="#" />
                                  </div>
                                  <div className="crancy-chatbox__main-content">
                                    <div className="crancy-chatbox__incoming-chat">
                                      <p className="crancy-chatbox__incoming-text">
                                        Lorem ipsum dolor sit ame?
                                      </p>
                                    </div>
                                    <p className="crancy-chatbox__time crancy-chatbox__time-two">
                                      11.32 PM
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="crancy-chatbox__incoming crancy-chatbox__outgoing">
                            <ul className="crancy-chatbox__incoming-list">
                              <li>
                                <div className="crancy-chatbox__chat">
                                  <div className="crancy-chatbox__main-content">
                                    <div className="crancy-chatbox__incoming-chat">
                                      <p className="crancy-chatbox__incoming-text">
                                        Lorem ipsum dolor sit ame?
                                      </p>
                                    </div>
                                    <p className="crancy-chatbox__time crancy-chatbox__time-two">
                                      11:55 PM
                                    </p>
                                  </div>
                                  <div className="crancy-chatbox__author-img">
                                    <img src="img/chat-author12.png" alt="#" />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="crancy-chatbox__incoming">
                            <ul className="crancy-chatbox__incoming-list">
                              <li>
                                <div className="crancy-chatbox__chat">
                                  <div className="crancy-chatbox__author-img">
                                    <img src="img/chat-author11.png" alt="#" />
                                  </div>
                                  <div className="crancy-chatbox__main-content">
                                    <div className="crancy-chatbox__incoming-chat">
                                      <p className="crancy-chatbox__incoming-text">
                                        Lorem ipsum dolor sit ame?
                                      </p>
                                    </div>
                                    <p className="crancy-chatbox__time crancy-chatbox__time-two">
                                      6 min ago
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="crancy-chatbox__incoming crancy-chatbox__outgoing">
                            <ul className="crancy-chatbox__incoming-list">
                              <li>
                                <div className="crancy-chatbox__chat">
                                  <div className="crancy-chatbox__main-content crancy-chatbox__main-content-file">
                                    <div className="crancy-chatbox__incoming-info">
                                      <p>Brand Styles Guide.pdf</p>
                                      <span className="crancy-color1">
                                        487 KB
                                      </span>
                                    </div>
                                    <div className="crancy-chatbox__incoming-chat crancy-chatbox__incoming-chat__file">
                                      <p className="crancy-chatbox__incoming-text">
                                        <Link
                                          href="/Inbox/"
                                          className="text-white crancy-flex-between"
                                        >
                                          Download
                                          <i className="fas fa-download"></i>
                                        </Link>
                                      </p>
                                    </div>
                                    <p className="crancy-chatbox__time crancy-chatbox__time-two">
                                      11:55 PM
                                    </p>
                                  </div>
                                  <div className="crancy-chatbox__author-img">
                                    <img src="img/chat-author12.png" alt="#" />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="crancy-chatbox__new-message">
                            <div className="crancy-chatbox__form">
                              <form
                                className="crancy-chatbox__form-inner"
                                action="#"
                              >
                                <textarea
                                  name="s"
                                  value=""
                                  placeholder="Type a message..."
                                ></textarea>
                                <div className="crancy-chatbox__button">
                                  <div className="crancy-chatbox__button-inline">
                                    <div className="crancy-chatbox__button-inline__single crancy-chatbox__button-inline__highlights">
                                      <Link href="/Inbox/">
                                        <img src="img/bold-icon.svg" />
                                      </Link>
                                      <Link href="/Inbox/">
                                        <img src="img/italic-icon.svg" />
                                      </Link>
                                      <Link href="/Inbox/">
                                        <img src="img/underline-icon.svg" />
                                      </Link>
                                    </div>
                                    <div className="crancy-chatbox__button-inline__single crancy-chatbox__button-inline__link">
                                      <Link href="/Inbox/">
                                        <img src="img/link-icon.svg" />
                                      </Link>
                                      <Link href="/Inbox/">
                                        <img src="img/imoji-icon.svg" />
                                      </Link>
                                      <Link href="/Inbox/">
                                        <img src="img/photo-icon.svg" />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="crancy-chatbox__submit">
                                    <button
                                      className="crancy-chatbox__submit-btn"
                                      type="submit"
                                    >
                                      <img src="img/send-icon.svg" />
                                      Send
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12 crancy-chatbox__three">
                      <div className="crancy-chatbox-uinfo">
                        <div className="crancy-flex-between">
                          <h3 className="crancy-default__title m-0">
                            User Info
                          </h3>
                          <div className="crancy-chatbox__edit">
                            <Link href="/Inbox/">
                              <img src="img/close-icon.svg" />
                            </Link>
                          </div>
                        </div>
                        <div className="crancy-chatbox-uinfo__thumb text-center mg-top-30">
                          <img src="img/uinfo-thumb.png" />
                          <h4 className="crancy-chatbox-uinfo__title zmr-h3 m-0 mg-top-15">
                            AJOY Sarker
                          </h4>
                          <p>UX Researcher</p>
                        </div>
                        <div className="crancy-chatbox-uinfo__available crancy-flex__column mg-top-20 pd-btm-30 mg-btm-30 crancy-border-bottom">
                          <span className="crancy-active-dot"></span>
                          <select name="card_detail" id="card_detail">
                            <option value="card_detail" selected>
                              Quomodosoft Team
                            </option>
                            <option>Support Team</option>
                          </select>
                        </div>

                        <div className="crancy-chat-box-uinfo__files">
                          <h4 className="crancy-chat-box-uinfo__ftitle">
                            Shared Files
                          </h4>
                          <ul className="crancy-chat-box-uinfo__flist">
                            <li>
                              <div className="crancy-chat-box-uinfo__inside crancy-flex-between">
                                <div className="crancy-chat-box-uinfo__thumb crancy-flex-between crancy-flex-gap-15">
                                  <div className="crancy-chat-box-uinfo__icon">
                                    <img src="img/file-icon1.svg" alt="#" />
                                  </div>
                                  <div className="crancy-chat-box-uinfo__ititle">
                                    <Link
                                      href="/Inbox/"
                                      className="crancy-bcolor crancy-f-semi"
                                    >
                                      Reference.zip
                                    </Link>
                                    <p>2 MB</p>
                                  </div>
                                </div>
                                <Link
                                  href="/Inbox/"
                                  className="crancy-chat-box-uinfo__delete"
                                >
                                  <img src="img/delete-icon.svg" />
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="crancy-chat-box-uinfo__inside crancy-flex-between">
                                <div className="crancy-chat-box-uinfo__thumb crancy-flex-between crancy-flex-gap-15">
                                  <div className="crancy-chat-box-uinfo__icon">
                                    <img src="img/file-icon1.svg" alt="#" />
                                  </div>
                                  <div className="crancy-chat-box-uinfo__ititle">
                                    <Link
                                      href="/Inbox/"
                                      className="crancy-bcolor crancy-f-semi"
                                    >
                                      Doc0001.docx
                                    </Link>
                                    <p>1,025 KB</p>
                                  </div>
                                </div>
                                <Link
                                  href="/Inbox/"
                                  className="crancy-chat-box-uinfo__delete"
                                >
                                  <img src="img/delete-icon.svg" />
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="crancy-chat-box-uinfo__inside crancy-flex-between">
                                <div className="crancy-chat-box-uinfo__thumb crancy-flex-between crancy-flex-gap-15">
                                  <div className="crancy-chat-box-uinfo__icon">
                                    <img src="img/file-icon4.svg" alt="#" />
                                  </div>
                                  <div className="crancy-chat-box-uinfo__ititle">
                                    <Link
                                      href="/Inbox/"
                                      className="crancy-bcolor crancy-f-semi"
                                    >
                                      Filex.pdf
                                    </Link>
                                    <p>2,25 KB</p>
                                  </div>
                                </div>
                                <Link
                                  href="/Inbox/"
                                  className="crancy-chat-box-uinfo__delete"
                                >
                                  <img src="img/delete-icon.svg" />
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="crancy-chat-box-uinfo__files mg-top-30">
                          <h4 className="crancy-chat-box-uinfo__ftitle">
                            Shared Links
                          </h4>
                          <ul className="crancy-chat-box-uinfo__flist">
                            <li>
                              <div className="crancy-chat-box-uinfo__inside crancy-flex-between">
                                <div className="crancy-chat-box-uinfo__thumb crancy-flex-between crancy-flex-gap-15">
                                  <div className="crancy-chat-box-uinfo__icon">
                                    <img src="img/link-icon2.svg" alt="#" />
                                  </div>
                                  <div className="crancy-chat-box-uinfo__ititle">
                                    <Link
                                      href="/Inbox/"
                                      className="crancy-bcolor crancy-f-semi"
                                    >
                                      muz.li
                                    </Link>
                                    <p>https://muz.li.com</p>
                                  </div>
                                </div>
                                <Link
                                  href="/Inbox/"
                                  className="crancy-chat-box-uinfo__delete"
                                >
                                  <img src="img/delete-icon.svg" />
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="crancy-chat-box-uinfo__inside crancy-flex-between">
                                <div className="crancy-chat-box-uinfo__thumb crancy-flex-between crancy-flex-gap-15">
                                  <div className="crancy-chat-box-uinfo__icon">
                                    <img src="img/link-icon2.svg" alt="#" />
                                  </div>
                                  <div className="crancy-chat-box-uinfo__ititle">
                                    <Link
                                      href="/Inbox/"
                                      className="crancy-bcolor crancy-f-semi"
                                    >
                                      Dribbble
                                    </Link>
                                    <p>https://dribbble.com/rf...</p>
                                  </div>
                                </div>
                                <Link
                                  href="/Inbox/"
                                  className="crancy-chat-box-uinfo__delete"
                                >
                                  <img src="img/delete-icon.svg" />
                                </Link>
                              </div>
                            </li>
                          </ul>
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
