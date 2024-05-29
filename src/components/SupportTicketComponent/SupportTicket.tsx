import Link from "next/link";

export const SupportTicket = () => {
  return (
    <section className="crancy-adashboard crancy-show">
      <div className="container container__bscreen">
        <div className="row row__bscreen">
          <div className="col-xxl-9 col-12">
            <div className="crancy-body">
              <div className="crancy-dsinner">
                <div className="crancy-table-meta mg-top-30">
                  <div className="row">
                    <div className="col-12">
                      <div className="crancy-flex-between crancy-flex-wrap crancy-flex-gap-15">
                        <div className="crancy-table-meta__group">
                          <Link
                            className="crancy-table-meta__single"
                            href="/SupportTicket/"
                            data-bs-toggle="modal"
                            data-bs-target="#popup_modal_import"
                          >
                            <p className="crancy-table-meta__btn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="14"
                                viewBox="0 0 8 14"
                                fill="none"
                              >
                                <path
                                  d="M7 1L1 7L7 13"
                                  stroke="#5D6A83"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              Support Details
                            </p>
                          </Link>
                        </div>
                        <div className="crancy-table-meta__group">
                          <Link
                            className="crancy-table-meta__single"
                            href="/SupportTicket/"
                            data-bs-toggle="modal"
                            data-bs-target="#popup_modal_import"
                          >
                            <p className="crancy-table-meta__btn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M15 15H17C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13V9C19 8.46957 18.7893 7.96086 18.4142 7.58579C18.0391 7.21071 17.5304 7 17 7H3C2.46957 7 1.96086 7.21071 1.58579 7.58579C1.21071 7.96086 1 8.46957 1 9V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15H5"
                                  stroke="#5D6A83"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M15 7V3C15 2.46957 14.7893 1.96086 14.4142 1.58579C14.0391 1.21071 13.5304 1 13 1H7C6.46957 1 5.96086 1.21071 5.58579 1.58579C5.21071 1.96086 5 2.46957 5 3V7"
                                  stroke="#5D6A83"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13 11H7C5.89543 11 5 11.8954 5 13V17C5 18.1046 5.89543 19 7 19H13C14.1046 19 15 18.1046 15 17V13C15 11.8954 14.1046 11 13 11Z"
                                  stroke="#5D6A83"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              Print order
                            </p>
                          </Link>
                          <Link
                            className="crancy-table-meta__single"
                            href="/SupportTicket/"
                            data-bs-toggle="modal"
                            data-bs-target="#popup_modal_import"
                          >
                            <p className="crancy-table-meta__btn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M11 2L2 11L11 19.5V14C18 14 21 21.5 21 21.5C21 13 18.5 7.5 11 7.5V2Z"
                                  stroke="#5D6A83"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              Refund items
                            </p>
                          </Link>
                          <div className="crancy-table-meta__single">
                            <select
                              className="form-select crancy__item-input"
                              aria-label="All customer"
                            >
                              <option selected>More actions</option>
                              <option value="1">T-shirts</option>
                              <option value="2">Shirts</option>
                              <option value="3">Cap</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 mg-top-40">
                  <div className="bg-white crancy-bradius">
                    <div className="row g-0">
                      <div className="col-lg-7 col-12">
                        <div className="crancy-support-form pd-right-60 pd-btm-30">
                          <form action="#">
                            <div className="row mg-top-5">
                              <div className="col-lg-6 col-12 mg-top-25">
                                <div className="crancy__item-form--group">
                                  <label className="crancy__item-label crancy__item-label-product">
                                    First Name
                                  </label>
                                  <input
                                    className="crancy__item-input"
                                    type="text"
                                    placeholder="AJOY"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-12 mg-top-25">
                                <div className="crancy__item-form--group">
                                  <label className="crancy__item-label crancy__item-label-product">
                                    Last Name
                                  </label>
                                  <input
                                    className="crancy__item-input"
                                    type="text"
                                    placeholder="Sarker"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-12 mg-top-25">
                                <div className="crancy__item-form--group">
                                  <label className="crancy__item-label crancy__item-label-product">
                                    Email
                                  </label>
                                  <input
                                    className="crancy__item-input"
                                    type="text"
                                    placeholder="ajoykumer@mail.com"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-12 mg-top-25">
                                <div className="crancy__item-form--group">
                                  <label className="crancy__item-label crancy__item-label-product">
                                    Phone Number (Optional)
                                  </label>
                                  <input
                                    className="crancy__item-input"
                                    type="text"
                                    placeholder="(704) 555-0127"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-12 mg-top-30">
                                <h4>Support issues</h4>
                              </div>
                              <div className="col-12 mg-top-25">
                                <div className="crancy__item-form--group">
                                  <label className="crancy__item-label crancy__item-label-product">
                                    Title
                                  </label>
                                  <input
                                    className="crancy__item-input"
                                    type="text"
                                    placeholder="My previous transaction declined"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-12 mg-top-25">
                                <div className="crancy__item-form--group">
                                  <label className="crancy__item-label crancy__item-label-product">
                                    Descriptions
                                  </label>
                                  <textarea
                                    placeholder="Description"
                                    id="ckdesc1"
                                    required
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-12 crancy-flex-end mg-top-40">
                                <button className="crancy-btn" type="submit">
                                  Submit Ticket
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-5 col-12">
                        <div className="support-ticket-sidebar mg-top-30">
                          <div
                            className="list-group list-group crancy-tab_inbox"
                            id="list-tab"
                            role="tablist"
                          >
                            <Link
                              className="list-group-item active"
                              data-bs-toggle="list"
                              href="#crancy-inbox-1"
                              role="tab"
                            >
                              Your inbox
                            </Link>
                            <Link
                              className="list-group-item"
                              data-bs-toggle="list"
                              href="#crancy-inbox-1"
                              role="tab"
                            >
                              Done
                            </Link>
                            <Link
                              className="list-group-item"
                              data-bs-toggle="list"
                              href="#crancy-inbox-1"
                              role="tab"
                            >
                              Saved
                            </Link>
                          </div>
                          <div
                            className="tab-content mg-top-20"
                            id="nav-tabContent"
                          >
                            <div
                              className="tab-pane fade show active"
                              id="crancy-inbox-1"
                              role="tabpanel"
                              aria-labelledby="crancy-inbox-1"
                            >
                              <div className="crancy-inbox-tab crancy-border-1px crancy-bradius">
                                <div className="crancy-sidebar__heading crancy-flex-wrap">
                                  <h4 className="crancy-sidebar__title">
                                    Recent Support
                                  </h4>
                                  <Link
                                    href="/SupportTicket/"
                                    className="crancy-sidebar__toggles"
                                  >
                                    <img src="img/toggle-icon.svg" />
                                  </Link>
                                </div>
                                <div className="crancy-inbox-card crancy-bradius crancy-flex-center crancy-align-item-start crancy-flex-wrap crancy-flex-gap-10 mg-top-20">
                                  <img
                                    className="crancy-img-medium-circle"
                                    src="img/support-inbox1.png"
                                    alt="#"
                                  />
                                  <div className="crancy-inbox-card__content">
                                    <p className="mg-btm-15 crancy-color1 crancy-fsize-15">
                                      Joel Becker <span>12h</span>
                                    </p>
                                    <h5 className="crancy-inbox-card__title">
                                      <Link href="/SupportTicket/">
                                        When is the Sketch version available for
                                        download?
                                      </Link>
                                    </h5>
                                    <p>
                                      "Love this so much! What tools do you use
                                      to create your 3d illustrations?"
                                    </p>
                                    <ul className="crancy-inbox-card__list d-flex crancy-flex-gap-15 mg-top-15">
                                      <li>
                                        <Link href="/SupportTicket/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                          >
                                            <path
                                              opacity="0.4"
                                              d="M6 0C2.7 0 0 2.325 0 5.25C0 8.175 2.7 10.5 6 10.5C6.3 10.5 6.6 10.5 6.825 10.425L10.5 12V8.7C11.4 7.8 12 6.6 12 5.25C12 2.325 9.3 0 6 0Z"
                                            />
                                          </svg>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/SupportTicket/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                          >
                                            <path
                                              opacity="0.4"
                                              d="M11.358 4.0787L8.12095 3.60845L6.6727 0.675203C6.4192 0.162953 5.5807 0.162953 5.3272 0.675203L3.8797 3.60845L0.64195 4.0787C0.0292003 4.16795 -0.21905 4.92395 0.22645 5.35895L2.56945 7.64195L2.0167 10.8662C1.91245 11.4767 2.55445 11.9455 3.10495 11.6567L5.99995 10.135L8.8957 11.6575C9.4417 11.9432 10.089 11.482 9.98395 10.867L9.4312 7.6427L11.7742 5.3597C12.219 4.92395 11.9707 4.16795 11.358 4.0787Z"
                                            />
                                          </svg>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/SupportTicket/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="4"
                                            viewBox="0 0 12 4"
                                            fill="none"
                                          >
                                            <circle
                                              opacity="0.4"
                                              cx="6"
                                              cy="2"
                                              r="1.5"
                                            />
                                            <circle
                                              opacity="0.4"
                                              cx="1.5"
                                              cy="2"
                                              r="1.5"
                                            />
                                            <circle
                                              opacity="0.4"
                                              cx="10.5"
                                              cy="2"
                                              r="1.5"
                                            />
                                          </svg>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="crancy-inbox-card active crancy-bradius crancy-flex-center crancy-align-item-start crancy-flex-wrap crancy-flex-gap-10 mg-top-20">
                                  <img
                                    className="crancy-img-medium-circle"
                                    src="img/support-inbox2.png"
                                    alt="#"
                                  />
                                  <div className="crancy-inbox-card__content">
                                    <p className="mg-btm-15 crancy-color1 crancy-fsize-15">
                                      Joel Becker <span>12h</span>
                                    </p>
                                    <h5 className="crancy-inbox-card__title">
                                      <Link href="/SupportTicket/">
                                        When is the Sketch version available for
                                        download?
                                      </Link>
                                    </h5>
                                    <p>
                                      "Love this so much! What tools do you use
                                      to create your 3d illustrations?"
                                    </p>
                                    <ul className="crancy-inbox-card__list d-flex crancy-flex-gap-15 mg-top-15">
                                      <li>
                                        <Link href="/SupportTicket/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                          >
                                            <path
                                              opacity="0.4"
                                              d="M6 0C2.7 0 0 2.325 0 5.25C0 8.175 2.7 10.5 6 10.5C6.3 10.5 6.6 10.5 6.825 10.425L10.5 12V8.7C11.4 7.8 12 6.6 12 5.25C12 2.325 9.3 0 6 0Z"
                                            />
                                          </svg>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/SupportTicket/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                          >
                                            <path
                                              opacity="0.4"
                                              d="M11.358 4.0787L8.12095 3.60845L6.6727 0.675203C6.4192 0.162953 5.5807 0.162953 5.3272 0.675203L3.8797 3.60845L0.64195 4.0787C0.0292003 4.16795 -0.21905 4.92395 0.22645 5.35895L2.56945 7.64195L2.0167 10.8662C1.91245 11.4767 2.55445 11.9455 3.10495 11.6567L5.99995 10.135L8.8957 11.6575C9.4417 11.9432 10.089 11.482 9.98395 10.867L9.4312 7.6427L11.7742 5.3597C12.219 4.92395 11.9707 4.16795 11.358 4.0787Z"
                                            />
                                          </svg>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/SupportTicket/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="4"
                                            viewBox="0 0 12 4"
                                            fill="none"
                                          >
                                            <circle
                                              opacity="0.4"
                                              cx="6"
                                              cy="2"
                                              r="1.5"
                                            />
                                            <circle
                                              opacity="0.4"
                                              cx="1.5"
                                              cy="2"
                                              r="1.5"
                                            />
                                            <circle
                                              opacity="0.4"
                                              cx="10.5"
                                              cy="2"
                                              r="1.5"
                                            />
                                          </svg>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="crancy-inbox-card crancy-bradius crancy-flex-center crancy-align-item-start crancy-flex-wrap crancy-flex-gap-10 mg-top-20">
                                  <img
                                    className="crancy-img-medium-circle"
                                    src="img/support-inbox3.png"
                                    alt="#"
                                  />
                                  <div className="crancy-inbox-card__content">
                                    <p className="mg-btm-15 crancy-color1 crancy-fsize-15">
                                      Joel Becker <span>12h</span>
                                    </p>
                                    <h5 className="crancy-inbox-card__title">
                                      <Link href="/SupportTicket/">
                                        When is the Sketch version available for
                                        download?
                                      </Link>
                                    </h5>
                                    <p>
                                      "Love this so much! What tools do you use
                                      to create your 3d illustrations?"
                                    </p>
                                    <ul className="crancy-inbox-card__list d-flex crancy-flex-gap-15 mg-top-15">
                                      <li>
                                        <Link href="/SupportTicket/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                          >
                                            <path
                                              opacity="0.4"
                                              d="M6 0C2.7 0 0 2.325 0 5.25C0 8.175 2.7 10.5 6 10.5C6.3 10.5 6.6 10.5 6.825 10.425L10.5 12V8.7C11.4 7.8 12 6.6 12 5.25C12 2.325 9.3 0 6 0Z"
                                            />
                                          </svg>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/SupportTicket/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                          >
                                            <path
                                              opacity="0.4"
                                              d="M11.358 4.0787L8.12095 3.60845L6.6727 0.675203C6.4192 0.162953 5.5807 0.162953 5.3272 0.675203L3.8797 3.60845L0.64195 4.0787C0.0292003 4.16795 -0.21905 4.92395 0.22645 5.35895L2.56945 7.64195L2.0167 10.8662C1.91245 11.4767 2.55445 11.9455 3.10495 11.6567L5.99995 10.135L8.8957 11.6575C9.4417 11.9432 10.089 11.482 9.98395 10.867L9.4312 7.6427L11.7742 5.3597C12.219 4.92395 11.9707 4.16795 11.358 4.0787Z"
                                            />
                                          </svg>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/SupportTicket/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="4"
                                            viewBox="0 0 12 4"
                                            fill="none"
                                          >
                                            <circle
                                              opacity="0.4"
                                              cx="6"
                                              cy="2"
                                              r="1.5"
                                            />
                                            <circle
                                              opacity="0.4"
                                              cx="1.5"
                                              cy="2"
                                              r="1.5"
                                            />
                                            <circle
                                              opacity="0.4"
                                              cx="10.5"
                                              cy="2"
                                              r="1.5"
                                            />
                                          </svg>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-12 crancy-flex__center mg-top-40">
                                  <button className="crancy-btn crancy-btn__third">
                                    Load More
                                  </button>
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
            </div>
          </div>

          <div className="col-xxl-3 col-12">
            <div className="crancy-unfilled bg-white crancy-bradius mg-top-30">
              <form className="crancy-wallet-customer">
                <div className="crancy-wallet-customer__single">
                  <h3 className="crancy-wallet-customer__title">Customer</h3>
                  <div className="crancy-flex-between">
                    <div className="crancy-wallet-customer__author">
                      <img src="img/support-customer.png" />
                      <div className="crancy-wallet-customer__content">
                        <h4 className="crancy-wallet-customer__content--name">
                          Darcel Ballentine
                        </h4>
                        <p className="crancy-wallet-customer__content--text">
                          10 orders
                        </p>
                      </div>
                    </div>
                    <Link href="/SupportTicket/">
                      <img src="img/message-icon2.svg" />
                    </Link>
                  </div>
                </div>
                <div className="crancy-wallet-customer__single">
                  <h3 className="crancy-wallet-customer__title">
                    Contact Information
                    <Link href="/SupportTicket/" className="crancy-color1">
                      Edit
                    </Link>
                  </h3>
                  <ul className="crancy-wallet-customer__contact">
                    <li>
                      <img src="img/email-icon2.svg" />
                      <p>
                        <Link href="mailto:darcelballentine@mail.com">
                          darcelballentine@mail.com
                        </Link>
                      </p>
                    </li>
                    <li>
                      <img src="img/phone-icon2.svg" />
                      <p>
                        <Link href="tell:(671) 555-0110">(671) 555-0110</Link>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="crancy-wallet-customer__single">
                  <h3 className="crancy-wallet-customer__title">
                    Shipping Address
                    <Link href="/SupportTicket/" className="crancy-color1">
                      Edit
                    </Link>
                  </h3>
                  <ul className="crancy-wallet-customer__contact">
                    <li>
                      <img src="img/location-icon2.svg" />
                      <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                    </li>
                  </ul>
                </div>
                <div className="crancy-wallet-customer__single">
                  <h3 className="crancy-wallet-customer__title">
                    Billing Address{" "}
                    <Link href="/SupportTicket/" className="crancy-color1">
                      Edit
                    </Link>
                  </h3>
                  <ul className="crancy-wallet-customer__contact">
                    <li>
                      <img src="img/location-icon2.svg" />
                      <p>Same as shipping address</p>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            <div className="crancy-unfilled bg-white crancy-bradius mg-top-30">
              <form className="crancy-wallet-customer">
                <div className="crancy-wallet-customer__single">
                  <h3 className="crancy-wallet-customer__title">
                    Note{" "}
                    <Link href="/SupportTicket/" className="crancy-color1">
                      Edit
                    </Link>
                  </h3>
                  <ul className="crancy-wallet-customer__contact">
                    <li>
                      <p>No notes from customer</p>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            <div className="crancy-unfilled bg-white crancy-bradius mg-top-30">
              <div className="d-flex crancy-aitems-center crancy-flex-gap-30">
                <div
                  className="crancy-progress__single circle__one"
                  data-value="0.64"
                >
                  <b className="number crancy-color1">64%</b>
                </div>
                <div className="crancy-progress-card__profile">
                  <h4 className="crancy-sidebar__title mg-btm-10">
                    Complete profile
                  </h4>
                  <p>Complete your profile to unlock all features</p>
                </div>
              </div>
              <div className="mg-top-30">
                <Link
                  href="/SupportTicket/"
                  className="crancy-width-100 crancy-btn"
                >
                  Verify identity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
