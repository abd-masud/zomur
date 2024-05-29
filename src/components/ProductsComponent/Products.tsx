import Link from "next/link";

export const Products = () => {
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
                      <div className="crancy-flex-wrap crancy-flex-gap-15 crancy-flex-between">
                        <div className="crancy-table-meta__group">
                          <div className="crancy-table-meta__single">
                            <div
                              className="list-group crancy-table-meta__tab"
                              id="list-tab"
                              role="tablist"
                            >
                              <Link
                                className="list-group-item active"
                                data-bs-toggle="list"
                                href="#crancy-table-tab-1"
                                role="tab"
                              >
                                <span className="crancy-table-meta__tab-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <path
                                      d="M15 1H3C1.89543 1 1 1.89543 1 3V5C1 6.10457 1.89543 7 3 7H15C16.1046 7 17 6.10457 17 5V3C17 1.89543 16.1046 1 15 1Z"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M15 11H3C1.89543 11 1 11.8954 1 13V15C1 16.1046 1.89543 17 3 17H15C16.1046 17 17 16.1046 17 15V13C17 11.8954 16.1046 11 15 11Z"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </span>
                              </Link>
                              <Link
                                className="list-group-item"
                                data-bs-toggle="list"
                                href="#crancy-table-tab-1"
                                role="tab"
                              >
                                <span className="crancy-table-meta__tab-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <path
                                      d="M6 1H2C1.44772 1 1 1.44772 1 2V6C1 6.55228 1.44772 7 2 7H6C6.55228 7 7 6.55228 7 6V2C7 1.44772 6.55228 1 6 1Z"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M16 1H12C11.4477 1 11 1.44772 11 2V6C11 6.55228 11.4477 7 12 7H16C16.5523 7 17 6.55228 17 6V2C17 1.44772 16.5523 1 16 1Z"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M6 11H2C1.44772 11 1 11.4477 1 12V16C1 16.5523 1.44772 17 2 17H6C6.55228 17 7 16.5523 7 16V12C7 11.4477 6.55228 11 6 11Z"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M16 11H12C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17H16C16.5523 17 17 16.5523 17 16V12C17 11.4477 16.5523 11 16 11Z"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="crancy-table-meta__single">
                            <span className="crancy-table-meta__label">
                              Show:
                            </span>
                            <select
                              className="form-select crancy__item-input"
                              aria-label="All products"
                            >
                              <option selected>All products</option>
                              <option value="1">T-shirts</option>
                              <option value="2">Shirts</option>
                              <option value="3">Cap</option>
                            </select>
                          </div>
                        </div>
                        <div className="crancy-table-meta__group">
                          <div className="crancy-table-meta__single">
                            <span className="crancy-table-meta__label">
                              Sort by:
                            </span>
                            <select
                              className="form-select crancy__item-input"
                              aria-label="Default select example"
                            >
                              <option selected>Default</option>
                              <option value="1">Popular</option>
                              <option value="2">New</option>
                              <option value="3">Tredning</option>
                            </select>
                          </div>
                          <Link
                            href="/Products/"
                            className="crancy-btn crancy-btn__filter"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M8 1V15"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M1 8H15"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            Add products
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="crancy-table-tab-1"
                    role="tabpanel"
                    aria-labelledby="crancy-table-tab-1"
                  >
                    <div className="crancy-table crancy-table--v3 mg-top-30">
                      <div className="crancy-customer-filter crancy-customer-filter--inline">
                        <div className="crancy-customer-filter__single crancy-customer-filter__search">
                          <div className="crancy-header__form crancy-header__form--customer">
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
                                  ></circle>
                                  <path
                                    d="M15.5176 15.9448L18.7479 19.1668"
                                    stroke="#9AA2B1"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                              </button>
                              <input
                                name="s"
                                value=""
                                type="text"
                                placeholder="Search by ID, product, or others..."
                              />
                            </form>
                          </div>
                        </div>
                        <div className="crancy-customer-filter__single crancy-customer-filter_filter">
                          <Link
                            href="/Products/"
                            className="crancy-customer-filter__single--button crancy-filters-button"
                          >
                            <img src="img/filter-icon3.svg" />
                            Filters
                          </Link>
                        </div>
                      </div>
                      <div className="crancy-table-filter crancy-table-filter-tables mg-btm-20">
                        <div className="row">
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="crancy-table-filter__single crancy-table-filter__location">
                              <label htmlFor="crancy-table-filter__label">
                                Collection
                              </label>
                              <select name="company_name" id="company">
                                <option value="company" selected>
                                  All Collection
                                </option>
                                <option>Bags</option>
                                <option>T-shirts</option>
                                <option>Tops</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="crancy-table-filter__single crancy-table-filter__amount">
                              <label htmlFor="crancy-table-filter__label">
                                Price
                              </label>
                              <select name="company_name" id="company">
                                <option value="company" selected>
                                  &gt; $100
                                </option>
                                <option>&gt; $200</option>
                                <option>&gt; $300</option>
                                <option>&gt; $400</option>
                                <option>&gt; $500</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="crancy-table-filter__single crancy-table-filter__trans-date">
                              <label htmlFor="crancy-table-filter__label">
                                Status
                              </label>
                              <select name="company_name" id="company">
                                <option value="company" selected>
                                  Active
                                </option>
                                <option>Hold</option>
                                <option>Cancel</option>
                                <option>Deleted</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="crancy-table-filter__single crancy-table-filter__trans">
                              <label htmlFor="crancy-table-filter__label">
                                Type of products
                              </label>
                              <select name="company_name" id="company">
                                <option value="company" selected>
                                  OutWear
                                </option>
                                <option>Make Over</option>
                                <option>Tshirts</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <table
                        id="crancy-table__main"
                        className="crancy-table__main crancy-table__main-v3"
                      >
                        <thead className="crancy-table__head">
                          <tr>
                            <th className="crancy-table__column-1 crancy-table__h1">
                              <div className="crancy-wc__checkbox">
                                <input
                                  className="crancy-wc__form-check"
                                  id="checkbox"
                                  name="checkbox"
                                  type="checkbox"
                                />
                                <span>Product Info</span>
                              </div>
                            </th>
                            <th className="crancy-table__column-2 crancy-table__h2">
                              Price
                            </th>
                            <th className="crancy-table__column-3 crancy-table__h3">
                              Stock
                            </th>
                            <th className="crancy-table__column-4 crancy-table__h4">
                              Statistics
                            </th>
                            <th className="crancy-table__column-5 crancy-table__h5">
                              Active
                            </th>
                          </tr>
                        </thead>
                        <tbody className="crancy-table__body">
                          <tr>
                            <td className="crancy-table__column-1 crancy-table__data-1">
                              <div className="crancy-table__customer">
                                <div className="crancy-wc__checkbox">
                                  <input
                                    className="crancy-wc__form-check"
                                    id="checkbox"
                                    name="checkbox"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="checkbox"
                                    className="crancy-table__customer-img"
                                  >
                                    <img src="img/product-1.jpg" alt="#" />
                                    <h4 className="crancy-table__product-title">
                                      Berkancing <span>ID: 098134NN</span>
                                    </h4>
                                  </label>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-2 crancy-table__data-2">
                              <h4 className="crancy-table__product-title">
                                $400.98
                              </h4>
                            </td>
                            <td className="crancy-table__column-3 crancy-table__data-3">
                              <h4 className="crancy-table__product-title">
                                234
                              </h4>
                            </td>
                            <td className="crancy-table__column-4 crancy-table__data-4">
                              <div className="crancy-traffic-list__progress crancy-traffic-list__progress--v2">
                                <div className="crancy-progressbar__label">
                                  <h4 className="crancy-progressbar__title">
                                    Perfect
                                  </h4>
                                  <div className="crancy-progressbar__percent">
                                    <span>1.2k sales</span>
                                  </div>
                                </div>
                                <div className="progress crancy-progressbar__single progress crancy-progressbar__single--v2">
                                  <div
                                    className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                    role="progressbar"
                                    style={{ width: "80%" }}
                                    aria-valuenow={80}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-5 crancy-table__data-5">
                              <label className="crancy__item-switch crancy__item-switch--v2 m-0">
                                <input type="checkbox" checked />
                                <span className="crancy__item-switch--slide crancy__item-switch--round"></span>
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="crancy-table__column-1 crancy-table__data-1">
                              <div className="crancy-table__customer">
                                <div className="crancy-wc__checkbox">
                                  <input
                                    className="crancy-wc__form-check"
                                    id="checkbox"
                                    name="checkbox"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="checkbox"
                                    className="crancy-table__customer-img"
                                  >
                                    <img src="img/product-2.jpg" alt="#" />
                                    <h4 className="crancy-table__product-title">
                                      Blazzer assorted pocket
                                      <span>ID: 098134NN</span>
                                    </h4>
                                  </label>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-2 crancy-table__data-2">
                              <h4 className="crancy-table__product-title">
                                $550.75
                              </h4>
                            </td>
                            <td className="crancy-table__column-3 crancy-table__data-3">
                              <h4 className="crancy-table__product-title">
                                570
                              </h4>
                            </td>
                            <td className="crancy-table__column-4 crancy-table__data-4">
                              <div className="crancy-traffic-list__progress crancy-traffic-list__progress--v2">
                                <div className="crancy-progressbar__label">
                                  <h4 className="crancy-progressbar__title">
                                    Perfect
                                  </h4>
                                  <div className="crancy-progressbar__percent">
                                    <span>900 sales</span>
                                  </div>
                                </div>
                                <div className="progress crancy-progressbar__single progress crancy-progressbar__single--v2">
                                  <div
                                    className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                    role="progressbar"
                                    style={{ width: "65%" }}
                                    aria-valuenow={65}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-5 crancy-table__data-5">
                              <label className="crancy__item-switch crancy__item-switch--v2 m-0">
                                <input type="checkbox" checked />
                                <span className="crancy__item-switch--slide crancy__item-switch--round"></span>
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="crancy-table__column-1 crancy-table__data-1">
                              <div className="crancy-table__customer">
                                <div className="crancy-wc__checkbox">
                                  <input
                                    className="crancy-wc__form-check"
                                    id="checkbox"
                                    name="checkbox"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="checkbox"
                                    className="crancy-table__customer-img"
                                  >
                                    <img src="img/product-3.jpg" alt="#" />
                                    <h4 className="crancy-table__product-title">
                                      Pattern top with knot
                                      <span>ID: 098134NN</span>
                                    </h4>
                                  </label>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-2 crancy-table__data-2">
                              <h4 className="crancy-table__product-title">
                                $210.98
                              </h4>
                            </td>
                            <td className="crancy-table__column-3 crancy-table__data-3">
                              <h4 className="crancy-table__product-title">
                                89
                              </h4>
                            </td>
                            <td className="crancy-table__column-4 crancy-table__data-4">
                              <div className="crancy-traffic-list__progress crancy-traffic-list__progress--v2">
                                <div className="crancy-progressbar__label">
                                  <h4 className="crancy-progressbar__title">
                                    Good
                                  </h4>
                                  <div className="crancy-progressbar__percent">
                                    <span>719 sales</span>
                                  </div>
                                </div>
                                <div className="progress crancy-progressbar__single progress crancy-progressbar__single--v2">
                                  <div
                                    className="progress-bar crancy-progressbar__bar crancy-color5__bg"
                                    role="progressbar"
                                    style={{ width: "65%" }}
                                    aria-valuenow={65}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-5 crancy-table__data-5">
                              <label className="crancy__item-switch crancy__item-switch--v2 m-0">
                                <input type="checkbox" />
                                <span className="crancy__item-switch--slide crancy__item-switch--round"></span>
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="crancy-table__column-1 crancy-table__data-1">
                              <div className="crancy-table__customer">
                                <div className="crancy-wc__checkbox">
                                  <input
                                    className="crancy-wc__form-check"
                                    id="checkbox"
                                    name="checkbox"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="checkbox"
                                    className="crancy-table__customer-img"
                                  >
                                    <img src="img/product-4.jpg" alt="#" />
                                    <h4 className="crancy-table__product-title">
                                      Basic Hoodie <span>ID: 098134NN</span>
                                    </h4>
                                  </label>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-2 crancy-table__data-2">
                              <h4 className="crancy-table__product-title">
                                $210.98
                              </h4>
                            </td>
                            <td className="crancy-table__column-3 crancy-table__data-3">
                              <h4 className="crancy-table__product-title">
                                89
                              </h4>
                            </td>
                            <td className="crancy-table__column-4 crancy-table__data-4">
                              <div className="crancy-traffic-list__progress crancy-traffic-list__progress--v2">
                                <div className="crancy-progressbar__label">
                                  <h4 className="crancy-progressbar__title">
                                    Bad
                                  </h4>
                                  <div className="crancy-progressbar__percent">
                                    <span>512 sales</span>
                                  </div>
                                </div>
                                <div className="progress crancy-progressbar__single progress crancy-progressbar__single--v2">
                                  <div
                                    className="progress-bar crancy-progressbar__bar crancy-color4__bg"
                                    role="progressbar"
                                    style={{ width: "30%" }}
                                    aria-valuenow={30}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-5 crancy-table__data-5">
                              <label className="crancy__item-switch crancy__item-switch--v2 m-0">
                                <input type="checkbox" />
                                <span className="crancy__item-switch--slide crancy__item-switch--round"></span>
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="crancy-table__column-1 crancy-table__data-1">
                              <div className="crancy-table__customer">
                                <div className="crancy-wc__checkbox">
                                  <input
                                    className="crancy-wc__form-check"
                                    id="checkbox"
                                    name="checkbox"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="checkbox"
                                    className="crancy-table__customer-img"
                                  >
                                    <img src="img/product-5.jpg" alt="#" />
                                    <h4 className="crancy-table__product-title">
                                      Jacket Cap <span>ID: 098134NN</span>
                                    </h4>
                                  </label>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-2 crancy-table__data-2">
                              <h4 className="crancy-table__product-title">
                                $276.99
                              </h4>
                            </td>
                            <td className="crancy-table__column-3 crancy-table__data-3">
                              <h4 className="crancy-table__product-title">
                                876
                              </h4>
                            </td>
                            <td className="crancy-table__column-4 crancy-table__data-4">
                              <div className="crancy-traffic-list__progress crancy-traffic-list__progress--v2">
                                <div className="crancy-progressbar__label">
                                  <h4 className="crancy-progressbar__title">
                                    Bad
                                  </h4>
                                  <div className="crancy-progressbar__percent">
                                    <span>512 sales</span>
                                  </div>
                                </div>
                                <div className="progress crancy-progressbar__single progress crancy-progressbar__single--v2">
                                  <div
                                    className="progress-bar crancy-progressbar__bar crancy-color4__bg"
                                    role="progressbar"
                                    style={{ width: "30%" }}
                                    aria-valuenow={30}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-5 crancy-table__data-5">
                              <label className="crancy__item-switch crancy__item-switch--v2 m-0">
                                <input type="checkbox" />
                                <span className="crancy__item-switch--slide crancy__item-switch--round"></span>
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="crancy-table__column-1 crancy-table__data-1">
                              <div className="crancy-table__customer">
                                <div className="crancy-wc__checkbox">
                                  <input
                                    className="crancy-wc__form-check"
                                    id="checkbox"
                                    name="checkbox"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="checkbox"
                                    className="crancy-table__customer-img"
                                  >
                                    <img src="img/product-6.jpg" alt="#" />
                                    <h4 className="crancy-table__product-title">
                                      Orange Half Shirt
                                      <span>ID: 098134NN</span>
                                    </h4>
                                  </label>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-2 crancy-table__data-2">
                              <h4 className="crancy-table__product-title">
                                $276.99
                              </h4>
                            </td>
                            <td className="crancy-table__column-3 crancy-table__data-3">
                              <h4 className="crancy-table__product-title">
                                890
                              </h4>
                            </td>
                            <td className="crancy-table__column-4 crancy-table__data-4">
                              <div className="crancy-traffic-list__progress crancy-traffic-list__progress--v2">
                                <div className="crancy-progressbar__label">
                                  <h4 className="crancy-progressbar__title">
                                    Bad
                                  </h4>
                                  <div className="crancy-progressbar__percent">
                                    <span>512 sales</span>
                                  </div>
                                </div>
                                <div className="progress crancy-progressbar__single progress crancy-progressbar__single--v2">
                                  <div
                                    className="progress-bar crancy-progressbar__bar crancy-color4__bg"
                                    role="progressbar"
                                    style={{ width: "30%" }}
                                    aria-valuenow={30}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-5 crancy-table__data-5">
                              <label className="crancy__item-switch crancy__item-switch--v2 m-0">
                                <input type="checkbox" checked />
                                <span className="crancy__item-switch--slide crancy__item-switch--round"></span>
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="crancy-table__column-1 crancy-table__data-1">
                              <div className="crancy-table__customer">
                                <div className="crancy-wc__checkbox">
                                  <input
                                    className="crancy-wc__form-check"
                                    id="checkbox"
                                    name="checkbox"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="checkbox"
                                    className="crancy-table__customer-img"
                                  >
                                    <img src="img/product-1.jpg" alt="#" />
                                    <h4 className="crancy-table__product-title">
                                      Berkancing <span>ID: 098134NN</span>
                                    </h4>
                                  </label>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-2 crancy-table__data-2">
                              <h4 className="crancy-table__product-title">
                                $400.98
                              </h4>
                            </td>
                            <td className="crancy-table__column-3 crancy-table__data-3">
                              <h4 className="crancy-table__product-title">
                                234
                              </h4>
                            </td>
                            <td className="crancy-table__column-4 crancy-table__data-4">
                              <div className="crancy-traffic-list__progress crancy-traffic-list__progress--v2">
                                <div className="crancy-progressbar__label">
                                  <h4 className="crancy-progressbar__title">
                                    Perfect
                                  </h4>
                                  <div className="crancy-progressbar__percent">
                                    <span>1.2k sales</span>
                                  </div>
                                </div>
                                <div className="progress crancy-progressbar__single progress crancy-progressbar__single--v2">
                                  <div
                                    className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                    role="progressbar"
                                    style={{ width: "80%" }}
                                    aria-valuenow={80}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-5 crancy-table__data-5">
                              <label className="crancy__item-switch crancy__item-switch--v2 m-0">
                                <input type="checkbox" checked />
                                <span className="crancy__item-switch--slide crancy__item-switch--round"></span>
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="crancy-table__column-1 crancy-table__data-1">
                              <div className="crancy-table__customer">
                                <div className="crancy-wc__checkbox">
                                  <input
                                    className="crancy-wc__form-check"
                                    id="checkbox"
                                    name="checkbox"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="checkbox"
                                    className="crancy-table__customer-img"
                                  >
                                    <img src="img/product-2.jpg" alt="#" />
                                    <h4 className="crancy-table__product-title">
                                      Blazzer assorted pocket
                                      <span>ID: 098134NN</span>
                                    </h4>
                                  </label>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-2 crancy-table__data-2">
                              <h4 className="crancy-table__product-title">
                                $550.75
                              </h4>
                            </td>
                            <td className="crancy-table__column-3 crancy-table__data-3">
                              <h4 className="crancy-table__product-title">
                                570
                              </h4>
                            </td>
                            <td className="crancy-table__column-4 crancy-table__data-4">
                              <div className="crancy-traffic-list__progress crancy-traffic-list__progress--v2">
                                <div className="crancy-progressbar__label">
                                  <h4 className="crancy-progressbar__title">
                                    Perfect
                                  </h4>
                                  <div className="crancy-progressbar__percent">
                                    <span>900 sales</span>
                                  </div>
                                </div>
                                <div className="progress crancy-progressbar__single progress crancy-progressbar__single--v2">
                                  <div
                                    className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                    role="progressbar"
                                    style={{ width: "65%" }}
                                    aria-valuenow={65}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td className="crancy-table__column-5 crancy-table__data-5">
                              <label className="crancy__item-switch crancy__item-switch--v2 m-0">
                                <input type="checkbox" checked />
                                <span className="crancy__item-switch--slide crancy__item-switch--round"></span>
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
                        href="/Products/"
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
                              <Link href="/Products/">
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
                              <Link href="/Products/">
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
                              <Link href="/Products/">
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
