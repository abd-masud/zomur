export const Analytics = () => {
  return (
    <section className="crancy-adashboard crancy-show">
      <div className="container container__bscreen">
        <div className="row">
          <div className="col-xxl-8 col-12 crancy-main__column">
            <div className="crancy-body">
              <div className="crancy-dsinner">
                <div className="row crancy-gap-30">
                  <div className="col-12">
                    <div className="charts-main charts-home-one mg-top-30">
                      <div className="charts-main__heading mg-btm-20">
                        <h4 className="charts-main__title">Analytics</h4>
                        <div className="charts-main__middle">
                          <div
                            className="list-group crancy-chart-tabs"
                            id="list-tab"
                            role="tablist"
                          >
                            <a
                              className="list-group-item active"
                              data-bs-toggle="list"
                              href="#crancy-chart__s1"
                              role="tab"
                            >
                              <span className="crancy-chart-tabs__icon"></span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="13"
                                viewBox="0 0 16 13"
                                fill="none"
                              >
                                <path d="M13.4316 0.307526L12.4445 0.307526L8.55557 0.307526L7.56841 0.307526C6.28209 0.307526 5.48064 1.70288 6.12878 2.81398L9.06038 7.83959C9.70351 8.94209 11.2965 8.9421 11.9396 7.83959L14.8713 2.81398C15.5194 1.70288 14.7179 0.307526 13.4316 0.307526Z" />
                                <path
                                  opacity="0.4"
                                  d="M2.16918 12.8332L3.15634 12.8332L7.04523 12.8332L8.03239 12.8332C9.31871 12.8332 10.1202 11.4378 9.47202 10.3267L6.54042 5.3011C5.89729 4.19859 4.30429 4.19859 3.66116 5.3011L0.72955 10.3267C0.0814114 11.4378 0.882863 12.8332 2.16918 12.8332Z"
                                />
                              </svg>
                              Income
                            </a>
                            <a
                              className="list-group-item"
                              data-bs-toggle="list"
                              href="#crancy-chart__s1"
                              role="tab"
                            >
                              <span className="crancy-chart-tabs__icon"></span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="13"
                                viewBox="0 0 16 13"
                                fill="none"
                              >
                                <path d="M13.4316 0.307526L12.4445 0.307526L8.55557 0.307526L7.56841 0.307526C6.28209 0.307526 5.48064 1.70288 6.12878 2.81398L9.06038 7.83959C9.70351 8.94209 11.2965 8.9421 11.9396 7.83959L14.8713 2.81398C15.5194 1.70288 14.7179 0.307526 13.4316 0.307526Z" />
                                <path
                                  opacity="0.4"
                                  d="M2.16918 12.8332L3.15634 12.8332L7.04523 12.8332L8.03239 12.8332C9.31871 12.8332 10.1202 11.4378 9.47202 10.3267L6.54042 5.3011C5.89729 4.19859 4.30429 4.19859 3.66116 5.3011L0.72955 10.3267C0.0814114 11.4378 0.882863 12.8332 2.16918 12.8332Z"
                                />
                              </svg>
                              Expense
                            </a>
                          </div>
                        </div>
                        <div className="crancy-customer-filter pd-0 m-0">
                          <div className="crancy-customer-filter__single">
                            <a
                              href="#"
                              className="crancy-customer-filter__single--button"
                            >
                              <img src="img/calendar-icon-2.svg" />
                              April 11 - April 24
                            </a>
                          </div>
                          <div className="crancy-customer-filter__single">
                            <a
                              href="#"
                              className="crancy-customer-filter__single--button"
                            >
                              <img src="img/download-icon2.svg" />
                              Download
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="charts-main__one">
                        <div className="tab-content" id="nav-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="crancy-chart__s1"
                            role="tabpanel"
                            aria-labelledby="crancy-chart__s1"
                          >
                            <div className="crancy-chart__inside crancy-chart__three">
                              <canvas id="myChart_recent_statics"></canvas>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="crancy-table crancy-table--v4 mg-top-30">
                  <div className="crancy-table__heading">
                    <h3 className="crancy-table__title mb-0">
                      Recent Marketing
                    </h3>
                    <a className="crancy-table__filter">
                      <img src="img/crancy-filter.svg" />
                      Filter
                    </a>
                  </div>

                  <table
                    id="crancy-table__main"
                    className="crancy-table__main crancy-table__main-v4"
                  >
                    <thead className="crancy-table__head">
                      <tr>
                        <th className="crancy-table__column-1 crancy-table__h1">
                          Campaign
                        </th>
                        <th className="crancy-table__column-2 crancy-table__h2">
                          Cost
                        </th>
                        <th className="crancy-table__column-3 crancy-table__h3">
                          Sales
                        </th>
                        <th className="crancy-table__column-4 crancy-table__h4">
                          Sessions
                        </th>
                        <th className="crancy-table__column-5 crancy-table__h5">
                          Impressions
                        </th>
                        <th className="crancy-table__column-6 crancy-table__h5">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="crancy-table__body">
                      <tr>
                        <td className="crancy-table__column-1 crancy-table__data-1">
                          <div className="crancy-table__campaing">
                            <div className="crancy-table__campaing-icon">
                              <img src="img/facebook-icon.svg" alt="#" />
                            </div>
                            <div className="crancy-table__campaing-content">
                              <h4 className="crancy-table__product-title">
                                Facebook Ads
                              </h4>
                              <p className="crancy-table__product-text">
                                Created: April 01, 2023
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            $1,240.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">550</h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <h4 className="crancy-table__product-title">1,365</h4>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <h4 className="crancy-table__product-title">
                            68,342
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--active">
                            Active
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="crancy-table__column-1 crancy-table__data-1">
                          <div className="crancy-table__campaing">
                            <div className="crancy-table__campaing-icon">
                              <img src="img/instagram-icon.svg" alt="#" />
                            </div>
                            <div className="crancy-table__campaing-content">
                              <h4 className="crancy-table__product-title">
                                Lite Ads
                              </h4>
                              <p className="crancy-table__product-text">
                                Created: March 28, 2023
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            $3,765.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">1,254</h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <h4 className="crancy-table__product-title">
                            10,456
                          </h4>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <h4 className="crancy-table__product-title">
                            80,165
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--active">
                            Active
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="crancy-table__column-1 crancy-table__data-1">
                          <div className="crancy-table__campaing">
                            <div className="crancy-table__campaing-icon">
                              <img src="img/tiktok-icon.svg" alt="#" />
                            </div>
                            <div className="crancy-table__campaing-content">
                              <h4 className="crancy-table__product-title">
                                Tiktok Ads
                              </h4>
                              <p className="crancy-table__product-text">
                                Created: March 25, 2023
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            $5,765.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            34,254
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <h4 className="crancy-table__product-title">5,456</h4>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <h4 className="crancy-table__product-title">
                            53,165
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--active">
                            Active
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="crancy-table__column-1 crancy-table__data-1">
                          <div className="crancy-table__campaing">
                            <div className="crancy-table__campaing-icon">
                              <img src="img/vuitton-icon.svg" alt="#" />
                            </div>
                            <div className="crancy-table__campaing-content">
                              <h4 className="crancy-table__product-title">
                                Tred Vuitton
                              </h4>
                              <p className="crancy-table__product-text">
                                Created: March 20, 2023
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            $534,765.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            44,254
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <h4 className="crancy-table__product-title">
                            523,456
                          </h4>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <h4 className="crancy-table__product-title">
                            543,165
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--active">
                            Active
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="crancy-table__column-1 crancy-table__data-1">
                          <div className="crancy-table__campaing">
                            <div className="crancy-table__campaing-icon">
                              <img src="img/reddit-icon.svg" alt="#" />
                            </div>
                            <div className="crancy-table__campaing-content">
                              <h4 className="crancy-table__product-title">
                                Gillette
                              </h4>
                              <p className="crancy-table__product-text">
                                Created: March 15, 2023
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            $534,765.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            44,254
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <h4 className="crancy-table__product-title">
                            523,456
                          </h4>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <h4 className="crancy-table__product-title">
                            543,165
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--active">
                            Active
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="crancy-table__column-1 crancy-table__data-1">
                          <div className="crancy-table__campaing">
                            <div className="crancy-table__campaing-icon">
                              <img src="img/pizza-icon.svg" alt="#" />
                            </div>
                            <div className="crancy-table__campaing-content">
                              <h4 className="crancy-table__product-title">
                                Gillette
                              </h4>
                              <p className="crancy-table__product-text">
                                Created: March 05, 2023
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            $4,765.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            44,254
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <h4 className="crancy-table__product-title">
                            23,456
                          </h4>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <h4 className="crancy-table__product-title">
                            5434,165
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--active">
                            Active
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="crancy-table__column-1 crancy-table__data-1">
                          <div className="crancy-table__campaing">
                            <div className="crancy-table__campaing-icon">
                              <img src="img/starbucks-icon.svg" alt="#" />
                            </div>
                            <div className="crancy-table__campaing-content">
                              <h4 className="crancy-table__product-title">
                                Starbucks
                              </h4>
                              <p className="crancy-table__product-text">
                                Created: February 25, 2023
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            $980.12
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">3,254</h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <h4 className="crancy-table__product-title">
                            23,456
                          </h4>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <h4 className="crancy-table__product-title">
                            5434,165
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--active">
                            Active
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="crancy-table__column-1 crancy-table__data-1">
                          <div className="crancy-table__campaing">
                            <div className="crancy-table__campaing-icon">
                              <img src="img/facebook-icon.svg" alt="#" />
                            </div>
                            <div className="crancy-table__campaing-content">
                              <h4 className="crancy-table__product-title">
                                Meta Ads
                              </h4>
                              <p className="crancy-table__product-text">
                                Created: February 20, 2023
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            $1,240.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">550</h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <h4 className="crancy-table__product-title">1,365</h4>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <h4 className="crancy-table__product-title">
                            68,342
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--active">
                            Active
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="crancy-table__column-1 crancy-table__data-1">
                          <div className="crancy-table__campaing">
                            <div className="crancy-table__campaing-icon">
                              <img src="img/instagram-icon.svg" alt="#" />
                            </div>
                            <div className="crancy-table__campaing-content">
                              <h4 className="crancy-table__product-title">
                                Instagram Ads
                              </h4>
                              <p className="crancy-table__product-text">
                                Created: February 10, 2023
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            $3,765.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">1,254</h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <h4 className="crancy-table__product-title">
                            10,456
                          </h4>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <h4 className="crancy-table__product-title">
                            80,165
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--active">
                            Active
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="crancy-table__column-1 crancy-table__data-1">
                          <div className="crancy-table__campaing">
                            <div className="crancy-table__campaing-icon">
                              <img src="img/tiktok-icon.svg" alt="#" />
                            </div>
                            <div className="crancy-table__campaing-content">
                              <h4 className="crancy-table__product-title">
                                Tiktok Ads
                              </h4>
                              <p className="crancy-table__product-text">
                                Created: January 28, 2023
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            $5,765.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            34,254
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <h4 className="crancy-table__product-title">5,456</h4>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <h4 className="crancy-table__product-title">
                            53,165
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--active">
                            Active
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="crancy-table__column-1 crancy-table__data-1">
                          <div className="crancy-table__campaing">
                            <div className="crancy-table__campaing-icon">
                              <img src="img/vuitton-icon.svg" alt="#" />
                            </div>
                            <div className="crancy-table__campaing-content">
                              <h4 className="crancy-table__product-title">
                                Louis Vuitton
                              </h4>
                              <p className="crancy-table__product-text">
                                Created: January 20, 2023
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="crancy-table__column-2 crancy-table__data-2">
                          <h4 className="crancy-table__product-title">
                            $534,765.00
                          </h4>
                        </td>
                        <td className="crancy-table__column-3 crancy-table__data-3">
                          <h4 className="crancy-table__product-title">
                            44,254
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <h4 className="crancy-table__product-title">
                            523,456
                          </h4>
                        </td>
                        <td className="crancy-table__column-5 crancy-table__data-5">
                          <h4 className="crancy-table__product-title">
                            543,165
                          </h4>
                        </td>
                        <td className="crancy-table__column-4 crancy-table__data-4">
                          <div className="crancy-table__status crancy-table__status--active">
                            Active
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-12 crancy-main__sidebar">
            <div className="crancy-sidebar mg-top-30">
              <div className="row">
                <div className="col-xxl-12 col-xl-6 col-12 crancy-sidebar__widget">
                  <div className="crancy-sidebar__single">
                    <div className="crancy-spending-overview">
                      <div className="crancy-spending-overview__tabs">
                        <div
                          className="list-group list-group crancy-new-list__tabs"
                          id="list-tab"
                          role="tablist"
                        >
                          <a
                            className="list-group-item"
                            data-bs-toggle="list"
                            href="#crancy-spending-1"
                            role="tab"
                          >
                            <span className="crancy-tsidebar__icon"></span>Week
                          </a>
                          <a
                            className="list-group-item active"
                            data-bs-toggle="list"
                            href="#crancy-spending-1"
                            role="tab"
                          >
                            <span className="crancy-tsidebar__icon"></span>Month
                          </a>
                          <a
                            className="list-group-item"
                            data-bs-toggle="list"
                            href="#crancy-spending-1"
                            role="tab"
                          >
                            <span className="crancy-tsidebar__icon"></span>Year
                          </a>
                        </div>
                      </div>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="crancy-spending-1"
                          role="tabpanel"
                          aria-labelledby="crancy-spending-1"
                        >
                          <div className="crancy-spending-am text-center mg-top-20 mg-btm-20">
                            <span className="crancy-spending-am__label">
                              Total Spendings
                            </span>
                            <h3 className="crancy-spending-am__amount">
                              $1,549.00
                            </h3>
                          </div>
                          <div className="crancy-spending-card">
                            <h4 className="crancy-spending-card__title">
                              Overview
                            </h4>
                            <div
                              className=" "
                              style={{ height: "100%", width: "100%" }}
                            >
                              <canvas className="spending_over_view"></canvas>
                            </div>
                            <div className="crancy-spending-card__graph mg-top-30">
                              <img src="img/spending-overview-play.svg" />
                              <p className="crancy-spending-card__text">
                                Your spending decreased -7.8% from last month.
                                Good job!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-12 col-xl-6 col-12 crancy-sidebar__widget">
                  <div className="crancy-sidebar__single crancy-sidebar__single--bg">
                    <div className="crancy-total-view">
                      <div className="crancy-sidebar__heading crancy-sidebar__heading--bordered">
                        <h4 className="crancy-sidebar__title">Performance</h4>
                        <a href="#" className="crancy-sidebar__toggles">
                          <img src="img/toggle-icon2.svg" />
                        </a>
                      </div>

                      <div className="crancy-total-view__inner crancy-total-view__inner_2 text-center">
                        <div className="crancy-total-view__chart">
                          <div style={{ width: "100%", height: "173px" }}>
                            <canvas className="revenueTarget w-full h-full"></canvas>
                          </div>
                        </div>
                        <p className="crancy-total-view__text mg-top-15">
                          Your spending decreased -7.8% from last month. Good
                          job!
                        </p>
                        <a href="#" className="crancy-btn mg-top-20">
                          See More
                        </a>
                        <ul className="crancy-progress-list crancy-flex__center crancy-progress-list--v2 crancy-progress-list__inline mg-top-40">
                          <li>
                            <span className="crancy-progress-list__color"></span>
                            <p>View Count 124</p>
                          </li>
                          <li>
                            <span className="crancy-progress-list__color crancy-color9__bg"></span>
                            <p>Percantage 56%</p>
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
    </section>
  );
};
