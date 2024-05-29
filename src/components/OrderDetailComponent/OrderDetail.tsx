import Link from "next/link";

export const OrderDetail = () => {
  return (
    <section className="crancy-adashboard crancy-show">
      <div className="container container__bscreen">
        <div className="row">
          <div className="col-xxl-8 col-12 crancy-main__column">
            <div className="crancy-body">
              <div className="crancy-dsinner">
                <div className="crancy-table-meta mg-top-30">
                  <div className="row">
                    <div className="col-12">
                      <div className="crancy-flex-between crancy-flex-wrap crancy-flex-gap-15">
                        <div className="crancy-table-meta__group">
                          <Link
                            href="/OrderProducts/"
                            className="crancy-table-meta__single"
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
                              Order Details
                            </p>
                          </Link>
                        </div>
                        <div className="crancy-table-meta__group">
                          <Link
                            className="crancy-table-meta__single"
                            href="OrderDetail"
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
                            href="/OrderDetail/"
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

                <div className="row">
                  <div className="col-lg-8 col-12">
                    <div className="crancy-unfilled bg-white crancy-bradius mg-top-30">
                      <h4 className="crancy-unfilled__title crancy-border-bottom pd-btm-30 mg-btm-30 crancy-color4">
                        <img src="img/unfilled-icon.svg" /> Unfulfilled
                      </h4>
                      <div className="crancy-cart">
                        <div className="crancy-cart__img">
                          <img src="img/cart-img.png" alt="#" />
                          <div className="crancy-cart__content">
                            <h4 className="crancy-cart__title">
                              Pattern top with knot
                            </h4>
                            <p className="crancy-cart__label">ID: 088134NT</p>
                          </div>
                        </div>
                        <div className="crancy-cart__amount">
                          <h4 className="crancy-cart__amount--title">
                            $210.98
                          </h4>
                          <p className="crancy-cart__amount--label">Qty: 1</p>
                        </div>
                      </div>
                      <div className="crancy-border-top pd-top-30 mg-top-30 crancy-flex__right crancy-flex-gap-15">
                        <Link
                          href="/OrderDetail/"
                          className="crancy-btn crancy-btn__v2"
                        >
                          Mark as fulfilled
                        </Link>
                        <Link href="/OrderDetail/" className="crancy-btn">
                          Crate shipping label
                        </Link>
                      </div>
                    </div>
                    <div className="crancy-unfilled bg-white crancy-bradius mg-top-30">
                      <h4 className="crancy-unfilled__title crancy-border-bottom pd-btm-30 mg-btm-30 crancy-color1">
                        <img src="img/filled-icon.svg" />
                        Paid
                      </h4>

                      <ul className="crancy-paid-list">
                        <li>
                          <div className="crancy-paid-list__single">
                            <p className="crancy-paid-list__title">
                              <b>Subtotal</b> <span>1 Item</span>
                            </p>
                            <span className="crancy-paid-list__value">
                              $210.98
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="crancy-paid-list__single">
                            <p className="crancy-paid-list__title">
                              <b>Shipping</b>
                              <span>AU Standar Delivery (1.00 kg)</span>
                            </p>
                            <span className="crancy-paid-list__value">
                              $10.15
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="crancy-paid-list__single">
                            <p className="crancy-paid-list__title">
                              <b>Tax</b> <span>GST (AU) 10%</span>
                            </p>
                            <span className="crancy-paid-list__value">
                              $10.15
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="crancy-paid-list__single">
                            <p className="crancy-paid-list__title">
                              <b>Total</b>
                            </p>
                            <span className="crancy-paid-list__value">
                              <b>$2.75</b>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="crancy-paid-list__single crancy-border-top pd-top-20 mg-top-20">
                            <p className="crancy-paid-list__title">
                              Paid by customer
                            </p>
                            <span className="crancy-paid-list__value crancy-fsize-20">
                              <b>$223.88</b>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="crancy-unfilled bg-white crancy-bradius mg-top-30">
                      <form className="crancy-wallet-customer">
                        <div className="crancy-wallet-customer__single">
                          <h3 className="crancy-wallet-customer__title">
                            Customer
                          </h3>
                          <div className="crancy-flex-between">
                            <div className="crancy-wallet-customer__author">
                              <img src="img/customer-order.png" />
                              <div className="crancy-wallet-customer__content">
                                <h4 className="crancy-wallet-customer__content--name">
                                  Darcel Ballentine
                                </h4>
                                <p className="crancy-wallet-customer__content--text">
                                  10 orders
                                </p>
                              </div>
                            </div>
                            <Link href="/OrderDetail/">
                              <img src="img/message-icon2.svg" />
                            </Link>
                          </div>
                        </div>
                        <div className="crancy-wallet-customer__single">
                          <h3 className="crancy-wallet-customer__title">
                            Contact Information
                            <Link
                              href="/OrderDetail/"
                              className="crancy-color1"
                            >
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
                                <Link href="tell:(671) 555-0110">
                                  (671) 555-0110
                                </Link>
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="crancy-wallet-customer__single">
                          <h3 className="crancy-wallet-customer__title">
                            Shipping Address
                            <Link
                              href="/OrderDetail/"
                              className="crancy-color1"
                            >
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
                            Billing Address
                            <Link
                              href="/OrderDetail/"
                              className="crancy-color1"
                            >
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
                            <Link
                              href="/OrderDetail/"
                              className="crancy-color1"
                            >
                              Edit
                            </Link>
                          </h3>
                          <ul className="crancy-wallet-customer__contact">
                            <li>
                              <img src="img/location-icon2.svg" />
                              <p>No notes from customer</p>
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-12 crancy-main__sidebar">
            <div className="crancy-sidebar mg-top-30">
              <div className="row">
                <div className="col-xl-12 col-lg-6 col-md-6 col-12 crancy-sidebar__widget">
                  <div className="crancy-sidebar__single">
                    <div className="crancy-sidebar__heading">
                      <h4 className="crancy-sidebar__title">Sales history</h4>
                      <Link
                        href="/OrderDetail/"
                        className="crancy-sidebar__toggles"
                      >
                        <img src="img/toggle-icon2.svg" />
                      </Link>
                    </div>

                    <ul className="crancy-sidebar__historylist">
                      <li>
                        <div className="crancy-sidebar__history">
                          <div className="crancy-sidebar__history-thumb">
                            <img src="img/sales-history-1.png" alt="#" />
                            <h4>
                              <Link href="/OrderDetail/">
                                <span className="crancy-sidebar__history-title">
                                  Rompi Berkancing
                                </span>
                              </Link>
                              <b className="crancy-sidebar__history-name crancy-pcolor">
                                $400.98<span>April 29, 2022</span>
                              </b>
                            </h4>
                          </div>
                          <div className="crancy-sidebar__history-grow crancy-gcolor">
                            +324.75%
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="crancy-sidebar__history">
                          <div className="crancy-sidebar__history-thumb">
                            <img src="img/sales-history-2.png" alt="#" />
                            <h4>
                              <Link href="/OrderDetail/">
                                <span className="crancy-sidebar__history-title">
                                  Blazer assorted pocket
                                </span>
                              </Link>
                              <b className="crancy-sidebar__history-name crancy-pcolor">
                                $550.75<span>April 28, 2022</span>
                              </b>
                            </h4>
                          </div>
                          <div className="crancy-sidebar__history-grow crancy-rcolor">
                            -324.75%
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="crancy-sidebar__history">
                          <div className="crancy-sidebar__history-thumb">
                            <img src="img/sales-history-3.png" alt="#" />
                            <h4>
                              <Link href="/OrderDetail/">
                                <span className="crancy-sidebar__history-title">
                                  Pattern top with knot
                                </span>
                              </Link>
                              <b className="crancy-sidebar__history-name crancy-pcolor">
                                $210.98<span>April 25, 2022</span>
                              </b>
                            </h4>
                          </div>
                          <div className="crancy-sidebar__history-grow crancy-gcolor">
                            -324.75%
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-12 col-lg-6 col-md-6 col-12 crancy-sidebar__widget">
                  <div className="crancy-sidebar__single">
                    <div className="crancy-sidebar__heading">
                      <h4 className="crancy-sidebar__title">View Date</h4>
                    </div>
                    <div
                      id="crancy-calender"
                      className="crancy-default-cd"
                    ></div>
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
