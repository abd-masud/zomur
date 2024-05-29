import Link from "next/link";

export const Transaction = () => {
  return (
    <section className="crancy-adashboard crancy-show">
      <div className="container container__bscreen">
        <div className="row">
          <div className="col-xxl-8 col-12 crancy-main__column">
            <div className="crancy-body">
              <div className="crancy-dsinner">
                <div className="crancy-table crancy-table--v3 mg-top-30">
                  <div className="crancy-customer-filter">
                    <div className="crancy-customer-filter__single crancy-customer-filter__single--csearch">
                      <div className="crancy-header__form crancy-header__form--customer">
                        <form className="crancy-header__form-inner" action="#">
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
                    <div className="crancy-customer-filter__single">
                      <Link
                        href="/Transaction/"
                        className="crancy-customer-filter__single--button"
                      >
                        <img src="img/filter-icon3.svg" />
                        Filters
                      </Link>
                    </div>
                    <div className="crancy-customer-filter__single">
                      <Link
                        href="/Transaction/"
                        className="crancy-customer-filter__single--button"
                      >
                        <img src="img/calendar-icon-2.svg" />
                        April 11 - April 24
                      </Link>
                    </div>
                    <div className="crancy-customer-filter__single">
                      <Link
                        href="/Transaction/"
                        className="crancy-customer-filter__single--button"
                      >
                        <img src="img/download-icon2.svg" />
                        Download
                      </Link>
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
                            <span>Customer name</span>
                          </div>
                        </th>
                        <th className="crancy-table__column-2 crancy-table__h2">
                          Date
                        </th>
                        <th className="crancy-table__column-3 crancy-table__h3">
                          Amount
                        </th>
                        <th className="crancy-table__column-4 crancy-table__h4">
                          Payment
                        </th>
                        <th className="crancy-table__column-5 crancy-table__h5">
                          Status
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
                                <img src="img/customer1.png" alt="#" />
                                <h4 className="crancy-table__product-title">
                                  Jenny Wilson
                                </h4>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            Apr 27, 2023
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            $3,987.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--paid">
                            Paid
                          </div>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <div className="crancy-table__actions crancy-table__actions--between">
                            <div className="crancy-table__status crancy-table__status--paid">
                              Unfulfilled
                            </div>
                            <div className="crancy-table__action">
                              <Link href="/Transaction/">
                                <img src="img/dots.svg" />
                              </Link>
                            </div>
                          </div>
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
                                <img src="img/customer2.png" alt="#" />
                                <h4 className="crancy-table__product-title">
                                  Eleanor Pena
                                </h4>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            Apr 27, 2023
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            $3,987.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--unpaid">
                            Unpaid
                          </div>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <div className="crancy-table__actions crancy-table__actions--between">
                            <div className="crancy-table__status crancy-table__status--delete">
                              Cancelled
                            </div>
                            <div className="crancy-table__action">
                              <Link href="/Transaction/">
                                <img src="img/dots.svg" />
                              </Link>
                            </div>
                          </div>
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
                                <img src="img/customer3.png" alt="#" />
                                <h4 className="crancy-table__product-title">
                                  Guy Hawkins
                                </h4>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            Apr 27, 2023
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            $3,987.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--paid">
                            Paid
                          </div>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <div className="crancy-table__actions crancy-table__actions--between">
                            <div className="crancy-table__status crancy-table__status--paid">
                              Unfulfilled
                            </div>
                            <div className="crancy-table__action">
                              <Link href="/Transaction/">
                                <img src="img/dots.svg" />
                              </Link>
                            </div>
                          </div>
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
                                <img src="img/customer4.png" alt="#" />
                                <h4 className="crancy-table__product-title">
                                  Kristin Watson
                                </h4>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            Apr 27, 2023
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            $3,987.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--paid">
                            Paid
                          </div>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <div className="crancy-table__actions crancy-table__actions--between">
                            <div className="crancy-table__status crancy-table__status--paid">
                              Unfulfilled
                            </div>
                            <div className="crancy-table__action">
                              <Link href="/Transaction/">
                                <img src="img/dots.svg" />
                              </Link>
                            </div>
                          </div>
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
                                <img src="img/customer5.png" alt="#" />
                                <h4 className="crancy-table__product-title">
                                  Jerome Bell
                                </h4>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            Apr 27, 2023
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            $3,987.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--unpaid">
                            Unpaid
                          </div>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <div className="crancy-table__actions crancy-table__actions--between">
                            <div className="crancy-table__status crancy-table__status--delete">
                              Cancelled
                            </div>
                            <div className="crancy-table__action">
                              <Link href="/Transaction/">
                                <img src="img/dots.svg" />
                              </Link>
                            </div>
                          </div>
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
                                <img src="img/customer6.png" alt="#" />
                                <h4 className="crancy-table__product-title">
                                  Jacob Jones
                                </h4>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            Apr 27, 2023
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            $3,987.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--unpaid">
                            Unpaid
                          </div>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <div className="crancy-table__actions crancy-table__actions--between">
                            <div className="crancy-table__status crancy-table__status--delete">
                              Cancelled
                            </div>
                            <div className="crancy-table__action">
                              <Link href="/Transaction/">
                                <img src="img/dots.svg" />
                              </Link>
                            </div>
                          </div>
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
                                <img src="img/customer7.png" alt="#" />
                                <h4 className="crancy-table__product-title">
                                  Annette Black
                                </h4>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            Apr 27, 2023
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            $3,987.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--paid">
                            Paid
                          </div>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <div className="crancy-table__actions crancy-table__actions--between">
                            <div className="crancy-table__status crancy-table__status--paid">
                              Unfulfilled
                            </div>
                            <div className="crancy-table__action">
                              <Link href="/Transaction/">
                                <img src="img/dots.svg" />
                              </Link>
                            </div>
                          </div>
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
                                <img src="img/customer8.png" alt="#" />
                                <h4 className="crancy-table__product-title">
                                  Arlene McCoy
                                </h4>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            Apr 27, 2023
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            $3,987.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--paid">
                            Paid
                          </div>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <div className="crancy-table__actions crancy-table__actions--between">
                            <div className="crancy-table__status crancy-table__status--paid">
                              Unfulfilled
                            </div>
                            <div className="crancy-table__action">
                              <Link href="/Transaction/">
                                <img src="img/dots.svg" />
                              </Link>
                            </div>
                          </div>
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
                                <img src="img/customer9.png" alt="#" />
                                <h4 className="crancy-table__product-title">
                                  Dianne Russell
                                </h4>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            Apr 27, 2023
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            $3,987.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--paid">
                            Paid
                          </div>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <div className="crancy-table__actions crancy-table__actions--between">
                            <div className="crancy-table__status crancy-table__status--paid">
                              Unfulfilled
                            </div>
                            <div className="crancy-table__action">
                              <Link href="/Transaction/">
                                <img src="img/dots.svg" />
                              </Link>
                            </div>
                          </div>
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
                                <img src="img/customer10.png" alt="#" />
                                <h4 className="crancy-table__product-title">
                                  Darrell Steward
                                </h4>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            Apr 27, 2023
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            $3,987.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--paid">
                            Paid
                          </div>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <div className="crancy-table__actions crancy-table__actions--between">
                            <div className="crancy-table__status crancy-table__status--paid">
                              Unfulfilled
                            </div>
                            <div className="crancy-table__action">
                              <Link href="/Transaction/">
                                <img src="img/dots.svg" />
                              </Link>
                            </div>
                          </div>
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
                                <img src="img/customer1.png" alt="#" />
                                <h4 className="crancy-table__product-title">
                                  Daniel Vector
                                </h4>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            Aug 27, 2023
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            $3,987.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--paid">
                            Paid
                          </div>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <div className="crancy-table__actions crancy-table__actions--between">
                            <div className="crancy-table__status crancy-table__status--paid">
                              Unfulfilled
                            </div>
                            <div className="crancy-table__action">
                              <Link href="/Transaction/">
                                <img src="img/dots.svg" />
                              </Link>
                            </div>
                          </div>
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
                                <img src="img/customer2.png" alt="#" />
                                <h4 className="crancy-table__product-title">
                                  Eleanor Pena
                                </h4>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            Aug 23, 2023
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            $3,987.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--unpaid">
                            Unpaid
                          </div>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <div className="crancy-table__actions crancy-table__actions--between">
                            <div className="crancy-table__status crancy-table__status--delete">
                              Cancelled
                            </div>
                            <div className="crancy-table__action">
                              <Link href="/Transaction/">
                                <img src="img/dots.svg" />
                              </Link>
                            </div>
                          </div>
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
                                <img src="img/customer3.png" alt="#" />
                                <h4 className="crancy-table__product-title">
                                  Guy Hawkins
                                </h4>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            Aug 25, 2023
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            $3,987.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--paid">
                            Paid
                          </div>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <div className="crancy-table__actions crancy-table__actions--between">
                            <div className="crancy-table__status crancy-table__status--paid">
                              Unfulfilled
                            </div>
                            <div className="crancy-table__action">
                              <Link href="/Transaction/">
                                <img src="img/dots.svg" />
                              </Link>
                            </div>
                          </div>
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
                                <img src="img/customer4.png" alt="#" />
                                <h4 className="crancy-table__product-title">
                                  Brown William
                                </h4>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            May 27, 2023
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            $3,987.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--paid">
                            Paid
                          </div>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <div className="crancy-table__actions crancy-table__actions--between">
                            <div className="crancy-table__status crancy-table__status--paid">
                              Unfulfilled
                            </div>
                            <div className="crancy-table__action">
                              <Link href="/Transaction/">
                                <img src="img/dots.svg" />
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-12 crancy-main__sidebar">
            <div className="crancy-sidebar mg-top-30">
              <div className="row">
                <div className="col-xxl-12 col-xl-6 col-12 crancy-sidebar__widget">
                  <div className="crancy-sidebar__single">
                    <div className="crancy-sidebar__heading">
                      <h4 className="crancy-sidebar__title">My Wallet</h4>
                      <Link
                        href="/Transaction/"
                        className="crancy-sidebar__toggles"
                      >
                        <img src="img/inline-toggle.svg" />
                      </Link>
                    </div>

                    <div
                      className="crancy-wallet-card crancy-bg-cover"
                      style={{
                        backgroundImage: "url(img/wallet-card-shape.svg)",
                      }}
                    >
                      <div className="crancy-wallet-card__inner">
                        <div className="crancy-wallet-card__left">
                          <img src="img/wallet-card-img.svg" />
                          <div className="crancy-wallet-card__amount">
                            <h4 className="crancy-wallet-card__title">
                              <span>My Balance</span>
                              <b>$25,463.00</b>
                            </h4>
                          </div>
                        </div>
                        <div className="crancy-wallet-card__right">
                          <img src="img/wallet-card-statics.svg" />
                          <span className="crancy-progress-card__percent crancy-color1">
                            <svg
                              className="crancy-color1__fill"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.4308 3.30786L14.4437 3.30786L10.5548 3.30786L9.56762 3.30786C8.2813 3.30786 7.47984 4.70322 8.12798 5.81431L11.0596 10.8399C11.7027 11.9424 13.2957 11.9424 13.9389 10.8399L16.8705 5.81431C17.5186 4.70322 16.7171 3.30786 15.4308 3.30786Z"></path>
                              <path
                                opacity="0.4"
                                d="M4.16878 15.8335L5.15594 15.8335L9.04483 15.8335L10.032 15.8335C11.3183 15.8335 12.1198 14.4381 11.4716 13.327L8.54002 8.30144C7.89689 7.19893 6.30389 7.19892 5.66076 8.30143L2.72915 13.327C2.08101 14.4381 2.88247 15.8335 4.16878 15.8335Z"
                              ></path>
                            </svg>
                            +2.5%
                          </span>
                        </div>
                      </div>
                      <div className="crancy-wallet-card__buttons">
                        <Link
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#popup_modal_1"
                          className="crancy-btn crancy-ybcolor"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M18 11L18 7L6 7V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V11ZM18 11C20.2091 11 22 9.20914 22 7C22 4.79086 20.2091 3 18 3H6C3.79086 3 2 4.79086 2 7C2 9.20914 3.79086 11 6 11"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M14 12.5858L12.7071 11.2929C12.3166 10.9024 11.6834 10.9024 11.2929 11.2929L10 12.5858M12 16.5858V11.5858"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                          Deposit
                        </Link>
                        <Link
                          href="/Transaction/"
                          className="crancy-btn crancy-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 13.0001L6 17.0001L18 17.0001L18 5.00009C18 3.89552 17.1046 3.00009 16 3.00009L8 3.00009C6.89543 3.00009 6 3.89552 6 5.00009L6 13.0001ZM6 13.0001C3.79086 13.0001 2 14.7909 2 17.0001C2 19.2092 3.79086 21.0001 6 21.0001L18 21.0001C20.2091 21.0001 22 19.2092 22 17.0001C22 14.791 20.2091 13.0001 18 13.0001"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 11.4143L11.2929 12.7072C11.6834 13.0977 12.3166 13.0977 12.7071 12.7072L14 11.4143M12 7.4143L12 12.4143"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                          Withdraw
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-12 col-xl-6 col-12 crancy-sidebar__widget">
                  <div className="crancy-sidebar__single">
                    <form className="crancy-wallet-form" action="#">
                      <span className="crancy-wallet-form__label">Send</span>

                      <div className="crancy-wallet-form__card">
                        <div className="crancy-wallet-form__card-select">
                          <img src="img/card-logo.svg" />
                          <span>Debit</span>
                        </div>
                        <span className="crancy-wallet-form__list crancy-flex__column">
                          <select name="card_detail" id="card_detail">
                            <option value="card_detail" selected>
                              $10,431
                            </option>
                            <option>$20,431</option>
                          </select>
                        </span>
                      </div>

                      <div className="crancy-wallet-form__amount mg-top-15">
                        <span className="crancy-wallet-form__amount-label">
                          Enter amount
                        </span>
                        <div className="crancy-wallet-form__amount-group">
                          <input type="text" placeholder="$1,24" />
                          <div className="crancy-wallet-form__amount-author">
                            <Link href="/Transaction/">
                              <img src="img/amount-author1.png" />
                            </Link>
                            <Link href="/Transaction/">
                              <img src="img/amount-author2.png" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#popup_modal_2"
                        className="crancy-btn crancy-full-width mg-top-20"
                      >
                        Send Money
                      </button>
                    </form>

                    <form className="crancy-wallet-customer mg-top-30">
                      <div className="crancy-wallet-customer__single">
                        <h3 className="crancy-wallet-customer__title">
                          Customer <Link href="/Transaction/">Edit</Link>
                        </h3>
                        <div className="crancy-wallet-customer__author">
                          <img src="img/payment-author.svg" />
                          <div className="crancy-wallet-customer__content">
                            <h4 className="crancy-wallet-customer__content--name">
                              Darcel Ballentine
                            </h4>
                            <p className="crancy-wallet-customer__content--text">
                              Los Angeles, USA
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="crancy-wallet-customer__single">
                        <h3 className="crancy-wallet-customer__title">
                          Contact Information{" "}
                          <Link href="/Transaction/">Edit</Link>
                        </h3>
                        <ul className="crancy-wallet-customer__contact">
                          <li>
                            <img src="img/email-icon.svg" />
                            <p>
                              <Link href="mailto:darcelballentine@mail.com">
                                darcelballentine@mail.com
                              </Link>
                            </p>
                          </li>
                          <li>
                            <img src="img/phone-icon.svg" />
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
                          Default Address <Link href="/Transaction/">Edit</Link>
                        </h3>
                        <ul className="crancy-wallet-customer__contact">
                          <li>
                            <img src="img/location-icon.svg" />
                            <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
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
      </div>
    </section>
  );
};
