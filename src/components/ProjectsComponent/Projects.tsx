import Link from "next/link";

export const Projects = () => {
  return (
    <section className="crancy-adashboard crancy-show">
      <div className="container container__bscreen">
        <div className="row row__bscreen">
          <div className="col-12">
            <div className="crancy-body">
              <div className="crancy-dsinner">
                <div className="row">
                  <div className="col-12 mg-top-50">
                    <div className="crancy-projects-head">
                      <h2 className="crancy-projects-head__heading">
                        Projects
                      </h2>
                      <div className="crancy-projects-head__right">
                        <Link
                          href="/Projects/"
                          className="crancy-projects-head__button crancy-projects-head__button--filter"
                        >
                          <img src="img/filter-icon.svg" />
                        </Link>
                        <Link
                          href="/Projects/"
                          className="crancy-btn crancy-projects-head__button crancy-projects-head__button--add"
                        >
                          <i className="fas fa-plus"></i>Add Project
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mg-top-30">
                    <div
                      className="crancy-pcats__list crancy-prcats__list list-group"
                      id="list-tab"
                      role="tablist"
                    >
                      <Link
                        className="list-group-item active"
                        data-bs-toggle="list"
                        // href="#tab_p1"
                        role="tab"
                        href="/ProfileComponent/"
                      >
                        All<span>151</span>
                      </Link>
                      <Link
                        className="list-group-item"
                        data-bs-toggle="list"
                        href="#tab_p1"
                        role="tab"
                      >
                        Started<span>128</span>
                      </Link>
                      <Link
                        className="list-group-item"
                        data-bs-toggle="list"
                        href="#tab_p1"
                        role="tab"
                      >
                        On Hold<span>15</span>
                      </Link>
                      <Link
                        className="list-group-item"
                        data-bs-toggle="list"
                        href="#tab_p1"
                        role="tab"
                      >
                        Completed<span>8</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="tab_p1"
                    role="tabpanel"
                    aria-labelledby="side__one"
                  >
                    <div className="row mg-top-10">
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-project mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="" className="crancy-toggle__dropd">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                            <ul className="crancy-toggle__dropdown">
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.1817 3.5C15.0085 3.5 14.8371 3.5341 14.6771 3.60035C14.5172 3.66661 14.3719 3.76371 14.2494 3.88613L13.0763 5.05922L14.9408 6.92366L16.1139 5.75057C16.2363 5.62815 16.3334 5.48281 16.3996 5.32286C16.4659 5.16291 16.5 4.99148 16.5 4.81835C16.5 4.64522 16.4659 4.47379 16.3996 4.31384C16.3334 4.15389 16.2363 4.00856 16.1139 3.88613C15.9914 3.76371 15.8461 3.66661 15.6862 3.60035C15.5262 3.5341 15.3548 3.5 15.1817 3.5ZM13.8801 7.98432L12.0157 6.11988L4.51809 13.6175L3.81893 16.1811L6.38252 15.4819L13.8801 7.98432ZM14.1031 2.21453C14.4451 2.0729 14.8115 2 15.1817 2C15.5518 2 15.9182 2.0729 16.2602 2.21453C16.6021 2.35617 16.9128 2.56377 17.1745 2.82548C17.4362 3.08718 17.6438 3.39788 17.7855 3.73981C17.9271 4.08175 18 4.44824 18 4.81835C18 5.18846 17.9271 5.55495 17.7855 5.89689C17.6438 6.23882 17.4362 6.54952 17.1745 6.81122L7.30235 16.6834C7.21005 16.7757 7.09527 16.8423 6.96935 16.8766L2.94735 17.9736C2.6877 18.0444 2.41 17.9706 2.21969 17.7803C2.02937 17.59 1.95563 17.3123 2.02644 17.0526L3.12335 13.0306C3.1577 12.9047 3.2243 12.7899 3.3166 12.6977L13.1888 2.82548C13.4505 2.56377 13.7612 2.35617 14.1031 2.21453Z"
                                    />
                                  </svg>
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9 7.96667C10.2668 7.96667 11.2692 6.95327 11.2692 5.73333C11.2692 4.5134 10.2668 3.5 9 3.5C7.73318 3.5 6.73077 4.5134 6.73077 5.73333C6.73077 6.95327 7.73318 7.96667 9 7.96667ZM9 9.46667C11.0817 9.46667 12.7692 7.7952 12.7692 5.73333C12.7692 3.67147 11.0817 2 9 2C6.91832 2 5.23077 3.67147 5.23077 5.73333C5.23077 7.7952 6.91832 9.46667 9 9.46667ZM10.27 12.0333H7.46342C5.33108 12.0333 3.5 13.851 3.5 16.2222C3.5 16.3188 3.5364 16.3929 3.58194 16.4403C3.62647 16.4867 3.67003 16.5 3.70732 16.5H10.35C10.35 16.5 11 16.5977 11 17.25C11 17.9023 10.35 18 10.35 18H3.70732C2.76439 18 2 17.2041 2 16.2222C2 13.0803 4.44606 10.5333 7.46342 10.5333H10.27C10.7725 10.5333 11 10.9727 11 11.3C11 11.6 10.7748 12.0333 10.27 12.0333ZM15.5 11.75C15.5 11.3358 15.1642 11 14.75 11C14.3358 11 14 11.3358 14 11.75V13.5H12.25C11.8358 13.5 11.5 13.8358 11.5 14.25C11.5 14.6642 11.8358 15 12.25 15H14V16.75C14 17.1642 14.3358 17.5 14.75 17.5C15.1642 17.5 15.5 17.1642 15.5 16.75V15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H15.5V11.75Z"
                                    />
                                  </svg>
                                  Add Member
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/" className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10.75 5.65012C10.75 5.2359 10.4142 4.90012 10 4.90012C9.58579 4.90012 9.25 5.2359 9.25 5.65012V10.0001C9.25 10.2842 9.4105 10.5439 9.66459 10.6709L12.5646 12.1209C12.9351 12.3062 13.3856 12.156 13.5708 11.7855C13.7561 11.415 13.6059 10.9645 13.2354 10.7793L10.75 9.53659V5.65012Z"
                                    />
                                  </svg>
                                  Add Due Date
                                </Link>
                              </li>
                              <li className="last-dropdown">
                                <Link
                                  href="/Projects/"
                                  className="crancy-color4"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8.04999 3.70503C8.18127 3.57375 8.35932 3.5 8.54497 3.5H11.445C11.6306 3.5 11.8087 3.57375 11.9399 3.70503C12.0712 3.8363 12.145 4.01435 12.145 4.2V4.9L7.84497 4.89999V4.2C7.84497 4.01435 7.91872 3.8363 8.04999 3.70503ZM6.34497 4.89999V4.2C6.34497 3.61652 6.57675 3.05694 6.98933 2.64437C7.40191 2.23179 7.96149 2 8.54497 2H11.445C12.0284 2 12.588 2.23179 13.0006 2.64437C13.4132 3.05694 13.645 3.61652 13.645 4.2V4.9L16.52 4.89999C16.9342 4.89999 17.27 5.23578 17.27 5.64999C17.27 6.06421 16.9342 6.39999 16.52 6.39999H15.82V15.8C15.82 16.3835 15.5882 16.9431 15.1756 17.3556C14.763 17.7682 14.2034 18 13.62 18H6.36997C5.78649 18 5.22691 17.7682 4.81433 17.3556C4.40175 16.9431 4.16997 16.3835 4.16997 15.8V6.39999H3.46997C3.05576 6.39999 2.71997 6.06421 2.71997 5.64999C2.71997 5.23578 3.05576 4.89999 3.46997 4.89999H6.34497ZM5.66997 15.8V6.4H14.32V15.8C14.32 15.9857 14.2462 16.1637 14.1149 16.295C13.9837 16.4263 13.8056 16.5 13.62 16.5H6.36997C6.18432 16.5 6.00627 16.4263 5.87499 16.295C5.74372 16.1637 5.66997 15.9857 5.66997 15.8ZM8.54498 8.52502C8.9592 8.52502 9.29498 8.86081 9.29498 9.27502V13.625C9.29498 14.0392 8.9592 14.375 8.54498 14.375C8.13077 14.375 7.79498 14.0392 7.79498 13.625V9.27502C7.79498 8.86081 8.13077 8.52502 8.54498 8.52502ZM12.1949 9.27502C12.1949 8.86081 11.8592 8.52502 11.4449 8.52502C11.0307 8.52502 10.6949 8.86081 10.6949 9.27502V13.625C10.6949 14.0392 11.0307 14.375 11.4449 14.375C11.8592 14.375 12.1949 14.0392 12.1949 13.625V9.27502Z"
                                      fill="#DD3333"
                                    />
                                  </svg>
                                  Delete Project
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="crancy-single-project__head">
                            <div className="crancy-single-project__icon">
                              <img src="img/p-icon-1.svg" />
                            </div>
                            <div className="crancy-single-project__heading">
                              <h4 className="crancy-single-project__title">
                                Angular
                              </h4>
                              <p className="crancy-single-project__label">
                                Angular, Inc.
                              </p>
                            </div>
                          </div>
                          <div className="crancy-single-project__content">
                            <p>
                              Create a mobile application on iOS and Android
                              devices.
                            </p>
                            <div className="crancy-single-project__progress">
                              <span className="crancy-single-project__label">
                                Progress
                              </span>
                              <span className="crancy-single-project__percent">
                                50%
                              </span>
                            </div>
                            <div className="progress crancy-progressbar__single crancy-progressbar__single--v3">
                              <div
                                className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                role="progressbar"
                                style={{ width: "78%" }}
                                aria-valuenow={78}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="crancy-single-project__bottom">
                            <div className="crancy-single-project__authors">
                              <Link href="/Projects/">
                                <img src="img/pr-author-1.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-2.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-3.png" />
                              </Link>
                            </div>
                            <div className="crancy-single-project__date">
                              <img src="img/time.svg" />1 week left
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-project mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="" className="crancy-toggle__dropd">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                            <ul className="crancy-toggle__dropdown">
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.1817 3.5C15.0085 3.5 14.8371 3.5341 14.6771 3.60035C14.5172 3.66661 14.3719 3.76371 14.2494 3.88613L13.0763 5.05922L14.9408 6.92366L16.1139 5.75057C16.2363 5.62815 16.3334 5.48281 16.3996 5.32286C16.4659 5.16291 16.5 4.99148 16.5 4.81835C16.5 4.64522 16.4659 4.47379 16.3996 4.31384C16.3334 4.15389 16.2363 4.00856 16.1139 3.88613C15.9914 3.76371 15.8461 3.66661 15.6862 3.60035C15.5262 3.5341 15.3548 3.5 15.1817 3.5ZM13.8801 7.98432L12.0157 6.11988L4.51809 13.6175L3.81893 16.1811L6.38252 15.4819L13.8801 7.98432ZM14.1031 2.21453C14.4451 2.0729 14.8115 2 15.1817 2C15.5518 2 15.9182 2.0729 16.2602 2.21453C16.6021 2.35617 16.9128 2.56377 17.1745 2.82548C17.4362 3.08718 17.6438 3.39788 17.7855 3.73981C17.9271 4.08175 18 4.44824 18 4.81835C18 5.18846 17.9271 5.55495 17.7855 5.89689C17.6438 6.23882 17.4362 6.54952 17.1745 6.81122L7.30235 16.6834C7.21005 16.7757 7.09527 16.8423 6.96935 16.8766L2.94735 17.9736C2.6877 18.0444 2.41 17.9706 2.21969 17.7803C2.02937 17.59 1.95563 17.3123 2.02644 17.0526L3.12335 13.0306C3.1577 12.9047 3.2243 12.7899 3.3166 12.6977L13.1888 2.82548C13.4505 2.56377 13.7612 2.35617 14.1031 2.21453Z"
                                    />
                                  </svg>
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9 7.96667C10.2668 7.96667 11.2692 6.95327 11.2692 5.73333C11.2692 4.5134 10.2668 3.5 9 3.5C7.73318 3.5 6.73077 4.5134 6.73077 5.73333C6.73077 6.95327 7.73318 7.96667 9 7.96667ZM9 9.46667C11.0817 9.46667 12.7692 7.7952 12.7692 5.73333C12.7692 3.67147 11.0817 2 9 2C6.91832 2 5.23077 3.67147 5.23077 5.73333C5.23077 7.7952 6.91832 9.46667 9 9.46667ZM10.27 12.0333H7.46342C5.33108 12.0333 3.5 13.851 3.5 16.2222C3.5 16.3188 3.5364 16.3929 3.58194 16.4403C3.62647 16.4867 3.67003 16.5 3.70732 16.5H10.35C10.35 16.5 11 16.5977 11 17.25C11 17.9023 10.35 18 10.35 18H3.70732C2.76439 18 2 17.2041 2 16.2222C2 13.0803 4.44606 10.5333 7.46342 10.5333H10.27C10.7725 10.5333 11 10.9727 11 11.3C11 11.6 10.7748 12.0333 10.27 12.0333ZM15.5 11.75C15.5 11.3358 15.1642 11 14.75 11C14.3358 11 14 11.3358 14 11.75V13.5H12.25C11.8358 13.5 11.5 13.8358 11.5 14.25C11.5 14.6642 11.8358 15 12.25 15H14V16.75C14 17.1642 14.3358 17.5 14.75 17.5C15.1642 17.5 15.5 17.1642 15.5 16.75V15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H15.5V11.75Z"
                                    />
                                  </svg>
                                  Add Member
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/" className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10.75 5.65012C10.75 5.2359 10.4142 4.90012 10 4.90012C9.58579 4.90012 9.25 5.2359 9.25 5.65012V10.0001C9.25 10.2842 9.4105 10.5439 9.66459 10.6709L12.5646 12.1209C12.9351 12.3062 13.3856 12.156 13.5708 11.7855C13.7561 11.415 13.6059 10.9645 13.2354 10.7793L10.75 9.53659V5.65012Z"
                                    />
                                  </svg>
                                  Add Due Date
                                </Link>
                              </li>
                              <li className="last-dropdown">
                                <Link
                                  href="/Projects/"
                                  className="crancy-color4"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8.04999 3.70503C8.18127 3.57375 8.35932 3.5 8.54497 3.5H11.445C11.6306 3.5 11.8087 3.57375 11.9399 3.70503C12.0712 3.8363 12.145 4.01435 12.145 4.2V4.9L7.84497 4.89999V4.2C7.84497 4.01435 7.91872 3.8363 8.04999 3.70503ZM6.34497 4.89999V4.2C6.34497 3.61652 6.57675 3.05694 6.98933 2.64437C7.40191 2.23179 7.96149 2 8.54497 2H11.445C12.0284 2 12.588 2.23179 13.0006 2.64437C13.4132 3.05694 13.645 3.61652 13.645 4.2V4.9L16.52 4.89999C16.9342 4.89999 17.27 5.23578 17.27 5.64999C17.27 6.06421 16.9342 6.39999 16.52 6.39999H15.82V15.8C15.82 16.3835 15.5882 16.9431 15.1756 17.3556C14.763 17.7682 14.2034 18 13.62 18H6.36997C5.78649 18 5.22691 17.7682 4.81433 17.3556C4.40175 16.9431 4.16997 16.3835 4.16997 15.8V6.39999H3.46997C3.05576 6.39999 2.71997 6.06421 2.71997 5.64999C2.71997 5.23578 3.05576 4.89999 3.46997 4.89999H6.34497ZM5.66997 15.8V6.4H14.32V15.8C14.32 15.9857 14.2462 16.1637 14.1149 16.295C13.9837 16.4263 13.8056 16.5 13.62 16.5H6.36997C6.18432 16.5 6.00627 16.4263 5.87499 16.295C5.74372 16.1637 5.66997 15.9857 5.66997 15.8ZM8.54498 8.52502C8.9592 8.52502 9.29498 8.86081 9.29498 9.27502V13.625C9.29498 14.0392 8.9592 14.375 8.54498 14.375C8.13077 14.375 7.79498 14.0392 7.79498 13.625V9.27502C7.79498 8.86081 8.13077 8.52502 8.54498 8.52502ZM12.1949 9.27502C12.1949 8.86081 11.8592 8.52502 11.4449 8.52502C11.0307 8.52502 10.6949 8.86081 10.6949 9.27502V13.625C10.6949 14.0392 11.0307 14.375 11.4449 14.375C11.8592 14.375 12.1949 14.0392 12.1949 13.625V9.27502Z"
                                      fill="#DD3333"
                                    />
                                  </svg>
                                  Delete Project
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="crancy-single-project__head">
                            <div className="crancy-single-project__icon">
                              <img src="img/p-icon-2.svg" />
                            </div>
                            <div className="crancy-single-project__heading">
                              <h4 className="crancy-single-project__title">
                                Gitlab
                              </h4>
                              <p className="crancy-single-project__label">
                                Gitlab, Inc.
                              </p>
                            </div>
                          </div>
                          <div className="crancy-single-project__content">
                            <p>
                              Create a mobile application on iOS and Android
                              devices.
                            </p>
                            <div className="crancy-single-project__progress">
                              <span className="crancy-single-project__label">
                                Progress
                              </span>
                              <span className="crancy-single-project__percent">
                                50%
                              </span>
                            </div>
                            <div className="progress crancy-progressbar__single crancy-progressbar__single--v3">
                              <div
                                className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                role="progressbar"
                                style={{ width: "78%" }}
                                aria-valuenow={78}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="crancy-single-project__bottom">
                            <div className="crancy-single-project__authors">
                              <Link href="/Projects/">
                                <img src="img/pr-author-1.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-2.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-3.png" />
                              </Link>
                            </div>
                            <div className="crancy-single-project__date">
                              <img src="img/time.svg" />1 week left
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-project mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="" className="crancy-toggle__dropd">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                            <ul className="crancy-toggle__dropdown">
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.1817 3.5C15.0085 3.5 14.8371 3.5341 14.6771 3.60035C14.5172 3.66661 14.3719 3.76371 14.2494 3.88613L13.0763 5.05922L14.9408 6.92366L16.1139 5.75057C16.2363 5.62815 16.3334 5.48281 16.3996 5.32286C16.4659 5.16291 16.5 4.99148 16.5 4.81835C16.5 4.64522 16.4659 4.47379 16.3996 4.31384C16.3334 4.15389 16.2363 4.00856 16.1139 3.88613C15.9914 3.76371 15.8461 3.66661 15.6862 3.60035C15.5262 3.5341 15.3548 3.5 15.1817 3.5ZM13.8801 7.98432L12.0157 6.11988L4.51809 13.6175L3.81893 16.1811L6.38252 15.4819L13.8801 7.98432ZM14.1031 2.21453C14.4451 2.0729 14.8115 2 15.1817 2C15.5518 2 15.9182 2.0729 16.2602 2.21453C16.6021 2.35617 16.9128 2.56377 17.1745 2.82548C17.4362 3.08718 17.6438 3.39788 17.7855 3.73981C17.9271 4.08175 18 4.44824 18 4.81835C18 5.18846 17.9271 5.55495 17.7855 5.89689C17.6438 6.23882 17.4362 6.54952 17.1745 6.81122L7.30235 16.6834C7.21005 16.7757 7.09527 16.8423 6.96935 16.8766L2.94735 17.9736C2.6877 18.0444 2.41 17.9706 2.21969 17.7803C2.02937 17.59 1.95563 17.3123 2.02644 17.0526L3.12335 13.0306C3.1577 12.9047 3.2243 12.7899 3.3166 12.6977L13.1888 2.82548C13.4505 2.56377 13.7612 2.35617 14.1031 2.21453Z"
                                    />
                                  </svg>
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9 7.96667C10.2668 7.96667 11.2692 6.95327 11.2692 5.73333C11.2692 4.5134 10.2668 3.5 9 3.5C7.73318 3.5 6.73077 4.5134 6.73077 5.73333C6.73077 6.95327 7.73318 7.96667 9 7.96667ZM9 9.46667C11.0817 9.46667 12.7692 7.7952 12.7692 5.73333C12.7692 3.67147 11.0817 2 9 2C6.91832 2 5.23077 3.67147 5.23077 5.73333C5.23077 7.7952 6.91832 9.46667 9 9.46667ZM10.27 12.0333H7.46342C5.33108 12.0333 3.5 13.851 3.5 16.2222C3.5 16.3188 3.5364 16.3929 3.58194 16.4403C3.62647 16.4867 3.67003 16.5 3.70732 16.5H10.35C10.35 16.5 11 16.5977 11 17.25C11 17.9023 10.35 18 10.35 18H3.70732C2.76439 18 2 17.2041 2 16.2222C2 13.0803 4.44606 10.5333 7.46342 10.5333H10.27C10.7725 10.5333 11 10.9727 11 11.3C11 11.6 10.7748 12.0333 10.27 12.0333ZM15.5 11.75C15.5 11.3358 15.1642 11 14.75 11C14.3358 11 14 11.3358 14 11.75V13.5H12.25C11.8358 13.5 11.5 13.8358 11.5 14.25C11.5 14.6642 11.8358 15 12.25 15H14V16.75C14 17.1642 14.3358 17.5 14.75 17.5C15.1642 17.5 15.5 17.1642 15.5 16.75V15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H15.5V11.75Z"
                                    />
                                  </svg>
                                  Add Member
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/" className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10.75 5.65012C10.75 5.2359 10.4142 4.90012 10 4.90012C9.58579 4.90012 9.25 5.2359 9.25 5.65012V10.0001C9.25 10.2842 9.4105 10.5439 9.66459 10.6709L12.5646 12.1209C12.9351 12.3062 13.3856 12.156 13.5708 11.7855C13.7561 11.415 13.6059 10.9645 13.2354 10.7793L10.75 9.53659V5.65012Z"
                                    />
                                  </svg>
                                  Add Due Date
                                </Link>
                              </li>
                              <li className="last-dropdown">
                                <Link
                                  href="/Projects/"
                                  className="crancy-color4"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8.04999 3.70503C8.18127 3.57375 8.35932 3.5 8.54497 3.5H11.445C11.6306 3.5 11.8087 3.57375 11.9399 3.70503C12.0712 3.8363 12.145 4.01435 12.145 4.2V4.9L7.84497 4.89999V4.2C7.84497 4.01435 7.91872 3.8363 8.04999 3.70503ZM6.34497 4.89999V4.2C6.34497 3.61652 6.57675 3.05694 6.98933 2.64437C7.40191 2.23179 7.96149 2 8.54497 2H11.445C12.0284 2 12.588 2.23179 13.0006 2.64437C13.4132 3.05694 13.645 3.61652 13.645 4.2V4.9L16.52 4.89999C16.9342 4.89999 17.27 5.23578 17.27 5.64999C17.27 6.06421 16.9342 6.39999 16.52 6.39999H15.82V15.8C15.82 16.3835 15.5882 16.9431 15.1756 17.3556C14.763 17.7682 14.2034 18 13.62 18H6.36997C5.78649 18 5.22691 17.7682 4.81433 17.3556C4.40175 16.9431 4.16997 16.3835 4.16997 15.8V6.39999H3.46997C3.05576 6.39999 2.71997 6.06421 2.71997 5.64999C2.71997 5.23578 3.05576 4.89999 3.46997 4.89999H6.34497ZM5.66997 15.8V6.4H14.32V15.8C14.32 15.9857 14.2462 16.1637 14.1149 16.295C13.9837 16.4263 13.8056 16.5 13.62 16.5H6.36997C6.18432 16.5 6.00627 16.4263 5.87499 16.295C5.74372 16.1637 5.66997 15.9857 5.66997 15.8ZM8.54498 8.52502C8.9592 8.52502 9.29498 8.86081 9.29498 9.27502V13.625C9.29498 14.0392 8.9592 14.375 8.54498 14.375C8.13077 14.375 7.79498 14.0392 7.79498 13.625V9.27502C7.79498 8.86081 8.13077 8.52502 8.54498 8.52502ZM12.1949 9.27502C12.1949 8.86081 11.8592 8.52502 11.4449 8.52502C11.0307 8.52502 10.6949 8.86081 10.6949 9.27502V13.625C10.6949 14.0392 11.0307 14.375 11.4449 14.375C11.8592 14.375 12.1949 14.0392 12.1949 13.625V9.27502Z"
                                      fill="#DD3333"
                                    />
                                  </svg>
                                  Delete Project
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="crancy-single-project__head">
                            <div className="crancy-single-project__icon">
                              <img src="img/p-icon-3.svg" />
                            </div>
                            <div className="crancy-single-project__heading">
                              <h4 className="crancy-single-project__title">
                                App Development
                              </h4>
                              <p className="crancy-single-project__label">
                                Dropbox, Inc.
                              </p>
                            </div>
                          </div>
                          <div className="crancy-single-project__content">
                            <p>
                              Create a mobile application on iOS and Android
                              devices.
                            </p>
                            <div className="crancy-single-project__progress">
                              <span className="crancy-single-project__label">
                                Progress
                              </span>
                              <span className="crancy-single-project__percent">
                                50%
                              </span>
                            </div>
                            <div className="progress crancy-progressbar__single crancy-progressbar__single--v3">
                              <div
                                className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                role="progressbar"
                                style={{ width: "78%" }}
                                aria-valuenow={78}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="crancy-single-project__bottom">
                            <div className="crancy-single-project__authors">
                              <Link href="/Projects/">
                                <img src="img/pr-author-1.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-2.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-3.png" />
                              </Link>
                            </div>
                            <div className="crancy-single-project__date">
                              <img src="img/time.svg" />1 week left
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-project mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="" className="crancy-toggle__dropd">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                            <ul className="crancy-toggle__dropdown">
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.1817 3.5C15.0085 3.5 14.8371 3.5341 14.6771 3.60035C14.5172 3.66661 14.3719 3.76371 14.2494 3.88613L13.0763 5.05922L14.9408 6.92366L16.1139 5.75057C16.2363 5.62815 16.3334 5.48281 16.3996 5.32286C16.4659 5.16291 16.5 4.99148 16.5 4.81835C16.5 4.64522 16.4659 4.47379 16.3996 4.31384C16.3334 4.15389 16.2363 4.00856 16.1139 3.88613C15.9914 3.76371 15.8461 3.66661 15.6862 3.60035C15.5262 3.5341 15.3548 3.5 15.1817 3.5ZM13.8801 7.98432L12.0157 6.11988L4.51809 13.6175L3.81893 16.1811L6.38252 15.4819L13.8801 7.98432ZM14.1031 2.21453C14.4451 2.0729 14.8115 2 15.1817 2C15.5518 2 15.9182 2.0729 16.2602 2.21453C16.6021 2.35617 16.9128 2.56377 17.1745 2.82548C17.4362 3.08718 17.6438 3.39788 17.7855 3.73981C17.9271 4.08175 18 4.44824 18 4.81835C18 5.18846 17.9271 5.55495 17.7855 5.89689C17.6438 6.23882 17.4362 6.54952 17.1745 6.81122L7.30235 16.6834C7.21005 16.7757 7.09527 16.8423 6.96935 16.8766L2.94735 17.9736C2.6877 18.0444 2.41 17.9706 2.21969 17.7803C2.02937 17.59 1.95563 17.3123 2.02644 17.0526L3.12335 13.0306C3.1577 12.9047 3.2243 12.7899 3.3166 12.6977L13.1888 2.82548C13.4505 2.56377 13.7612 2.35617 14.1031 2.21453Z"
                                    />
                                  </svg>
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9 7.96667C10.2668 7.96667 11.2692 6.95327 11.2692 5.73333C11.2692 4.5134 10.2668 3.5 9 3.5C7.73318 3.5 6.73077 4.5134 6.73077 5.73333C6.73077 6.95327 7.73318 7.96667 9 7.96667ZM9 9.46667C11.0817 9.46667 12.7692 7.7952 12.7692 5.73333C12.7692 3.67147 11.0817 2 9 2C6.91832 2 5.23077 3.67147 5.23077 5.73333C5.23077 7.7952 6.91832 9.46667 9 9.46667ZM10.27 12.0333H7.46342C5.33108 12.0333 3.5 13.851 3.5 16.2222C3.5 16.3188 3.5364 16.3929 3.58194 16.4403C3.62647 16.4867 3.67003 16.5 3.70732 16.5H10.35C10.35 16.5 11 16.5977 11 17.25C11 17.9023 10.35 18 10.35 18H3.70732C2.76439 18 2 17.2041 2 16.2222C2 13.0803 4.44606 10.5333 7.46342 10.5333H10.27C10.7725 10.5333 11 10.9727 11 11.3C11 11.6 10.7748 12.0333 10.27 12.0333ZM15.5 11.75C15.5 11.3358 15.1642 11 14.75 11C14.3358 11 14 11.3358 14 11.75V13.5H12.25C11.8358 13.5 11.5 13.8358 11.5 14.25C11.5 14.6642 11.8358 15 12.25 15H14V16.75C14 17.1642 14.3358 17.5 14.75 17.5C15.1642 17.5 15.5 17.1642 15.5 16.75V15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H15.5V11.75Z"
                                    />
                                  </svg>
                                  Add Member
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/" className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10.75 5.65012C10.75 5.2359 10.4142 4.90012 10 4.90012C9.58579 4.90012 9.25 5.2359 9.25 5.65012V10.0001C9.25 10.2842 9.4105 10.5439 9.66459 10.6709L12.5646 12.1209C12.9351 12.3062 13.3856 12.156 13.5708 11.7855C13.7561 11.415 13.6059 10.9645 13.2354 10.7793L10.75 9.53659V5.65012Z"
                                    />
                                  </svg>
                                  Add Due Date
                                </Link>
                              </li>
                              <li className="last-dropdown">
                                <Link
                                  href="/Projects/"
                                  className="crancy-color4"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8.04999 3.70503C8.18127 3.57375 8.35932 3.5 8.54497 3.5H11.445C11.6306 3.5 11.8087 3.57375 11.9399 3.70503C12.0712 3.8363 12.145 4.01435 12.145 4.2V4.9L7.84497 4.89999V4.2C7.84497 4.01435 7.91872 3.8363 8.04999 3.70503ZM6.34497 4.89999V4.2C6.34497 3.61652 6.57675 3.05694 6.98933 2.64437C7.40191 2.23179 7.96149 2 8.54497 2H11.445C12.0284 2 12.588 2.23179 13.0006 2.64437C13.4132 3.05694 13.645 3.61652 13.645 4.2V4.9L16.52 4.89999C16.9342 4.89999 17.27 5.23578 17.27 5.64999C17.27 6.06421 16.9342 6.39999 16.52 6.39999H15.82V15.8C15.82 16.3835 15.5882 16.9431 15.1756 17.3556C14.763 17.7682 14.2034 18 13.62 18H6.36997C5.78649 18 5.22691 17.7682 4.81433 17.3556C4.40175 16.9431 4.16997 16.3835 4.16997 15.8V6.39999H3.46997C3.05576 6.39999 2.71997 6.06421 2.71997 5.64999C2.71997 5.23578 3.05576 4.89999 3.46997 4.89999H6.34497ZM5.66997 15.8V6.4H14.32V15.8C14.32 15.9857 14.2462 16.1637 14.1149 16.295C13.9837 16.4263 13.8056 16.5 13.62 16.5H6.36997C6.18432 16.5 6.00627 16.4263 5.87499 16.295C5.74372 16.1637 5.66997 15.9857 5.66997 15.8ZM8.54498 8.52502C8.9592 8.52502 9.29498 8.86081 9.29498 9.27502V13.625C9.29498 14.0392 8.9592 14.375 8.54498 14.375C8.13077 14.375 7.79498 14.0392 7.79498 13.625V9.27502C7.79498 8.86081 8.13077 8.52502 8.54498 8.52502ZM12.1949 9.27502C12.1949 8.86081 11.8592 8.52502 11.4449 8.52502C11.0307 8.52502 10.6949 8.86081 10.6949 9.27502V13.625C10.6949 14.0392 11.0307 14.375 11.4449 14.375C11.8592 14.375 12.1949 14.0392 12.1949 13.625V9.27502Z"
                                      fill="#DD3333"
                                    />
                                  </svg>
                                  Delete Project
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="crancy-single-project__head">
                            <div className="crancy-single-project__icon">
                              <img src="img/p-icon-3.svg" />
                            </div>
                            <div className="crancy-single-project__heading">
                              <h4 className="crancy-single-project__title">
                                App Development
                              </h4>
                              <p className="crancy-single-project__label">
                                Dropbox, Inc.
                              </p>
                            </div>
                          </div>
                          <div className="crancy-single-project__content">
                            <p>
                              Create a mobile application on iOS and Android
                              devices.
                            </p>
                            <div className="crancy-single-project__progress">
                              <span className="crancy-single-project__label">
                                Progress
                              </span>
                              <span className="crancy-single-project__percent">
                                50%
                              </span>
                            </div>
                            <div className="progress crancy-progressbar__single crancy-progressbar__single--v3">
                              <div
                                className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                role="progressbar"
                                style={{ width: "78%" }}
                                aria-valuenow={78}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="crancy-single-project__bottom">
                            <div className="crancy-single-project__authors">
                              <Link href="/Projects/">
                                <img src="img/pr-author-1.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-2.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-3.png" />
                              </Link>
                            </div>
                            <div className="crancy-single-project__date">
                              <img src="img/time.svg" />1 week left
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-project mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="" className="crancy-toggle__dropd">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                            <ul className="crancy-toggle__dropdown">
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.1817 3.5C15.0085 3.5 14.8371 3.5341 14.6771 3.60035C14.5172 3.66661 14.3719 3.76371 14.2494 3.88613L13.0763 5.05922L14.9408 6.92366L16.1139 5.75057C16.2363 5.62815 16.3334 5.48281 16.3996 5.32286C16.4659 5.16291 16.5 4.99148 16.5 4.81835C16.5 4.64522 16.4659 4.47379 16.3996 4.31384C16.3334 4.15389 16.2363 4.00856 16.1139 3.88613C15.9914 3.76371 15.8461 3.66661 15.6862 3.60035C15.5262 3.5341 15.3548 3.5 15.1817 3.5ZM13.8801 7.98432L12.0157 6.11988L4.51809 13.6175L3.81893 16.1811L6.38252 15.4819L13.8801 7.98432ZM14.1031 2.21453C14.4451 2.0729 14.8115 2 15.1817 2C15.5518 2 15.9182 2.0729 16.2602 2.21453C16.6021 2.35617 16.9128 2.56377 17.1745 2.82548C17.4362 3.08718 17.6438 3.39788 17.7855 3.73981C17.9271 4.08175 18 4.44824 18 4.81835C18 5.18846 17.9271 5.55495 17.7855 5.89689C17.6438 6.23882 17.4362 6.54952 17.1745 6.81122L7.30235 16.6834C7.21005 16.7757 7.09527 16.8423 6.96935 16.8766L2.94735 17.9736C2.6877 18.0444 2.41 17.9706 2.21969 17.7803C2.02937 17.59 1.95563 17.3123 2.02644 17.0526L3.12335 13.0306C3.1577 12.9047 3.2243 12.7899 3.3166 12.6977L13.1888 2.82548C13.4505 2.56377 13.7612 2.35617 14.1031 2.21453Z"
                                    />
                                  </svg>
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9 7.96667C10.2668 7.96667 11.2692 6.95327 11.2692 5.73333C11.2692 4.5134 10.2668 3.5 9 3.5C7.73318 3.5 6.73077 4.5134 6.73077 5.73333C6.73077 6.95327 7.73318 7.96667 9 7.96667ZM9 9.46667C11.0817 9.46667 12.7692 7.7952 12.7692 5.73333C12.7692 3.67147 11.0817 2 9 2C6.91832 2 5.23077 3.67147 5.23077 5.73333C5.23077 7.7952 6.91832 9.46667 9 9.46667ZM10.27 12.0333H7.46342C5.33108 12.0333 3.5 13.851 3.5 16.2222C3.5 16.3188 3.5364 16.3929 3.58194 16.4403C3.62647 16.4867 3.67003 16.5 3.70732 16.5H10.35C10.35 16.5 11 16.5977 11 17.25C11 17.9023 10.35 18 10.35 18H3.70732C2.76439 18 2 17.2041 2 16.2222C2 13.0803 4.44606 10.5333 7.46342 10.5333H10.27C10.7725 10.5333 11 10.9727 11 11.3C11 11.6 10.7748 12.0333 10.27 12.0333ZM15.5 11.75C15.5 11.3358 15.1642 11 14.75 11C14.3358 11 14 11.3358 14 11.75V13.5H12.25C11.8358 13.5 11.5 13.8358 11.5 14.25C11.5 14.6642 11.8358 15 12.25 15H14V16.75C14 17.1642 14.3358 17.5 14.75 17.5C15.1642 17.5 15.5 17.1642 15.5 16.75V15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H15.5V11.75Z"
                                    />
                                  </svg>
                                  Add Member
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/" className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10.75 5.65012C10.75 5.2359 10.4142 4.90012 10 4.90012C9.58579 4.90012 9.25 5.2359 9.25 5.65012V10.0001C9.25 10.2842 9.4105 10.5439 9.66459 10.6709L12.5646 12.1209C12.9351 12.3062 13.3856 12.156 13.5708 11.7855C13.7561 11.415 13.6059 10.9645 13.2354 10.7793L10.75 9.53659V5.65012Z"
                                    />
                                  </svg>
                                  Add Due Date
                                </Link>
                              </li>
                              <li className="last-dropdown">
                                <Link
                                  href="/Projects/"
                                  className="crancy-color4"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8.04999 3.70503C8.18127 3.57375 8.35932 3.5 8.54497 3.5H11.445C11.6306 3.5 11.8087 3.57375 11.9399 3.70503C12.0712 3.8363 12.145 4.01435 12.145 4.2V4.9L7.84497 4.89999V4.2C7.84497 4.01435 7.91872 3.8363 8.04999 3.70503ZM6.34497 4.89999V4.2C6.34497 3.61652 6.57675 3.05694 6.98933 2.64437C7.40191 2.23179 7.96149 2 8.54497 2H11.445C12.0284 2 12.588 2.23179 13.0006 2.64437C13.4132 3.05694 13.645 3.61652 13.645 4.2V4.9L16.52 4.89999C16.9342 4.89999 17.27 5.23578 17.27 5.64999C17.27 6.06421 16.9342 6.39999 16.52 6.39999H15.82V15.8C15.82 16.3835 15.5882 16.9431 15.1756 17.3556C14.763 17.7682 14.2034 18 13.62 18H6.36997C5.78649 18 5.22691 17.7682 4.81433 17.3556C4.40175 16.9431 4.16997 16.3835 4.16997 15.8V6.39999H3.46997C3.05576 6.39999 2.71997 6.06421 2.71997 5.64999C2.71997 5.23578 3.05576 4.89999 3.46997 4.89999H6.34497ZM5.66997 15.8V6.4H14.32V15.8C14.32 15.9857 14.2462 16.1637 14.1149 16.295C13.9837 16.4263 13.8056 16.5 13.62 16.5H6.36997C6.18432 16.5 6.00627 16.4263 5.87499 16.295C5.74372 16.1637 5.66997 15.9857 5.66997 15.8ZM8.54498 8.52502C8.9592 8.52502 9.29498 8.86081 9.29498 9.27502V13.625C9.29498 14.0392 8.9592 14.375 8.54498 14.375C8.13077 14.375 7.79498 14.0392 7.79498 13.625V9.27502C7.79498 8.86081 8.13077 8.52502 8.54498 8.52502ZM12.1949 9.27502C12.1949 8.86081 11.8592 8.52502 11.4449 8.52502C11.0307 8.52502 10.6949 8.86081 10.6949 9.27502V13.625C10.6949 14.0392 11.0307 14.375 11.4449 14.375C11.8592 14.375 12.1949 14.0392 12.1949 13.625V9.27502Z"
                                      fill="#DD3333"
                                    />
                                  </svg>
                                  Delete Project
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="crancy-single-project__head">
                            <div className="crancy-single-project__icon">
                              <img src="img/p-icon-4.svg" />
                            </div>
                            <div className="crancy-single-project__heading">
                              <h4 className="crancy-single-project__title">
                                Firebase
                              </h4>
                              <p className="crancy-single-project__label">
                                Firebase, Inc.
                              </p>
                            </div>
                          </div>
                          <div className="crancy-single-project__content">
                            <p>
                              Create a mobile application on iOS and Android
                              devices.
                            </p>
                            <div className="crancy-single-project__progress">
                              <span className="crancy-single-project__label">
                                Progress
                              </span>
                              <span className="crancy-single-project__percent">
                                50%
                              </span>
                            </div>
                            <div className="progress crancy-progressbar__single crancy-progressbar__single--v3">
                              <div
                                className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                role="progressbar"
                                style={{ width: "78%" }}
                                aria-valuenow={78}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="crancy-single-project__bottom">
                            <div className="crancy-single-project__authors">
                              <Link href="/Projects/">
                                <img src="img/pr-author-1.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-2.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-3.png" />
                              </Link>
                            </div>
                            <div className="crancy-single-project__date">
                              <img src="img/time.svg" />1 week left
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-project mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="" className="crancy-toggle__dropd">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                            <ul className="crancy-toggle__dropdown">
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.1817 3.5C15.0085 3.5 14.8371 3.5341 14.6771 3.60035C14.5172 3.66661 14.3719 3.76371 14.2494 3.88613L13.0763 5.05922L14.9408 6.92366L16.1139 5.75057C16.2363 5.62815 16.3334 5.48281 16.3996 5.32286C16.4659 5.16291 16.5 4.99148 16.5 4.81835C16.5 4.64522 16.4659 4.47379 16.3996 4.31384C16.3334 4.15389 16.2363 4.00856 16.1139 3.88613C15.9914 3.76371 15.8461 3.66661 15.6862 3.60035C15.5262 3.5341 15.3548 3.5 15.1817 3.5ZM13.8801 7.98432L12.0157 6.11988L4.51809 13.6175L3.81893 16.1811L6.38252 15.4819L13.8801 7.98432ZM14.1031 2.21453C14.4451 2.0729 14.8115 2 15.1817 2C15.5518 2 15.9182 2.0729 16.2602 2.21453C16.6021 2.35617 16.9128 2.56377 17.1745 2.82548C17.4362 3.08718 17.6438 3.39788 17.7855 3.73981C17.9271 4.08175 18 4.44824 18 4.81835C18 5.18846 17.9271 5.55495 17.7855 5.89689C17.6438 6.23882 17.4362 6.54952 17.1745 6.81122L7.30235 16.6834C7.21005 16.7757 7.09527 16.8423 6.96935 16.8766L2.94735 17.9736C2.6877 18.0444 2.41 17.9706 2.21969 17.7803C2.02937 17.59 1.95563 17.3123 2.02644 17.0526L3.12335 13.0306C3.1577 12.9047 3.2243 12.7899 3.3166 12.6977L13.1888 2.82548C13.4505 2.56377 13.7612 2.35617 14.1031 2.21453Z"
                                    />
                                  </svg>
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9 7.96667C10.2668 7.96667 11.2692 6.95327 11.2692 5.73333C11.2692 4.5134 10.2668 3.5 9 3.5C7.73318 3.5 6.73077 4.5134 6.73077 5.73333C6.73077 6.95327 7.73318 7.96667 9 7.96667ZM9 9.46667C11.0817 9.46667 12.7692 7.7952 12.7692 5.73333C12.7692 3.67147 11.0817 2 9 2C6.91832 2 5.23077 3.67147 5.23077 5.73333C5.23077 7.7952 6.91832 9.46667 9 9.46667ZM10.27 12.0333H7.46342C5.33108 12.0333 3.5 13.851 3.5 16.2222C3.5 16.3188 3.5364 16.3929 3.58194 16.4403C3.62647 16.4867 3.67003 16.5 3.70732 16.5H10.35C10.35 16.5 11 16.5977 11 17.25C11 17.9023 10.35 18 10.35 18H3.70732C2.76439 18 2 17.2041 2 16.2222C2 13.0803 4.44606 10.5333 7.46342 10.5333H10.27C10.7725 10.5333 11 10.9727 11 11.3C11 11.6 10.7748 12.0333 10.27 12.0333ZM15.5 11.75C15.5 11.3358 15.1642 11 14.75 11C14.3358 11 14 11.3358 14 11.75V13.5H12.25C11.8358 13.5 11.5 13.8358 11.5 14.25C11.5 14.6642 11.8358 15 12.25 15H14V16.75C14 17.1642 14.3358 17.5 14.75 17.5C15.1642 17.5 15.5 17.1642 15.5 16.75V15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H15.5V11.75Z"
                                    />
                                  </svg>
                                  Add Member
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/" className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10.75 5.65012C10.75 5.2359 10.4142 4.90012 10 4.90012C9.58579 4.90012 9.25 5.2359 9.25 5.65012V10.0001C9.25 10.2842 9.4105 10.5439 9.66459 10.6709L12.5646 12.1209C12.9351 12.3062 13.3856 12.156 13.5708 11.7855C13.7561 11.415 13.6059 10.9645 13.2354 10.7793L10.75 9.53659V5.65012Z"
                                    />
                                  </svg>
                                  Add Due Date
                                </Link>
                              </li>
                              <li className="last-dropdown">
                                <Link
                                  href="/Projects/"
                                  className="crancy-color4"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8.04999 3.70503C8.18127 3.57375 8.35932 3.5 8.54497 3.5H11.445C11.6306 3.5 11.8087 3.57375 11.9399 3.70503C12.0712 3.8363 12.145 4.01435 12.145 4.2V4.9L7.84497 4.89999V4.2C7.84497 4.01435 7.91872 3.8363 8.04999 3.70503ZM6.34497 4.89999V4.2C6.34497 3.61652 6.57675 3.05694 6.98933 2.64437C7.40191 2.23179 7.96149 2 8.54497 2H11.445C12.0284 2 12.588 2.23179 13.0006 2.64437C13.4132 3.05694 13.645 3.61652 13.645 4.2V4.9L16.52 4.89999C16.9342 4.89999 17.27 5.23578 17.27 5.64999C17.27 6.06421 16.9342 6.39999 16.52 6.39999H15.82V15.8C15.82 16.3835 15.5882 16.9431 15.1756 17.3556C14.763 17.7682 14.2034 18 13.62 18H6.36997C5.78649 18 5.22691 17.7682 4.81433 17.3556C4.40175 16.9431 4.16997 16.3835 4.16997 15.8V6.39999H3.46997C3.05576 6.39999 2.71997 6.06421 2.71997 5.64999C2.71997 5.23578 3.05576 4.89999 3.46997 4.89999H6.34497ZM5.66997 15.8V6.4H14.32V15.8C14.32 15.9857 14.2462 16.1637 14.1149 16.295C13.9837 16.4263 13.8056 16.5 13.62 16.5H6.36997C6.18432 16.5 6.00627 16.4263 5.87499 16.295C5.74372 16.1637 5.66997 15.9857 5.66997 15.8ZM8.54498 8.52502C8.9592 8.52502 9.29498 8.86081 9.29498 9.27502V13.625C9.29498 14.0392 8.9592 14.375 8.54498 14.375C8.13077 14.375 7.79498 14.0392 7.79498 13.625V9.27502C7.79498 8.86081 8.13077 8.52502 8.54498 8.52502ZM12.1949 9.27502C12.1949 8.86081 11.8592 8.52502 11.4449 8.52502C11.0307 8.52502 10.6949 8.86081 10.6949 9.27502V13.625C10.6949 14.0392 11.0307 14.375 11.4449 14.375C11.8592 14.375 12.1949 14.0392 12.1949 13.625V9.27502Z"
                                      fill="#DD3333"
                                    />
                                  </svg>
                                  Delete Project
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="crancy-single-project__head">
                            <div className="crancy-single-project__icon">
                              <img src="img/p-icon-5.svg" />
                            </div>
                            <div className="crancy-single-project__heading">
                              <h4 className="crancy-single-project__title">
                                facebook-messenger
                              </h4>
                              <p className="crancy-single-project__label">
                                messenger, Inc.
                              </p>
                            </div>
                          </div>
                          <div className="crancy-single-project__content">
                            <p>
                              Create a mobile application on iOS and Android
                              devices.
                            </p>
                            <div className="crancy-single-project__progress">
                              <span className="crancy-single-project__label">
                                Progress
                              </span>
                              <span className="crancy-single-project__percent">
                                50%
                              </span>
                            </div>
                            <div className="progress crancy-progressbar__single crancy-progressbar__single--v3">
                              <div
                                className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                role="progressbar"
                                style={{ width: "78%" }}
                                aria-valuenow={78}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="crancy-single-project__bottom">
                            <div className="crancy-single-project__authors">
                              <Link href="/Projects/">
                                <img src="img/pr-author-1.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-2.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-3.png" />
                              </Link>
                            </div>
                            <div className="crancy-single-project__date">
                              <img src="img/time.svg" />1 week left
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-project mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="" className="crancy-toggle__dropd">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                            <ul className="crancy-toggle__dropdown">
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.1817 3.5C15.0085 3.5 14.8371 3.5341 14.6771 3.60035C14.5172 3.66661 14.3719 3.76371 14.2494 3.88613L13.0763 5.05922L14.9408 6.92366L16.1139 5.75057C16.2363 5.62815 16.3334 5.48281 16.3996 5.32286C16.4659 5.16291 16.5 4.99148 16.5 4.81835C16.5 4.64522 16.4659 4.47379 16.3996 4.31384C16.3334 4.15389 16.2363 4.00856 16.1139 3.88613C15.9914 3.76371 15.8461 3.66661 15.6862 3.60035C15.5262 3.5341 15.3548 3.5 15.1817 3.5ZM13.8801 7.98432L12.0157 6.11988L4.51809 13.6175L3.81893 16.1811L6.38252 15.4819L13.8801 7.98432ZM14.1031 2.21453C14.4451 2.0729 14.8115 2 15.1817 2C15.5518 2 15.9182 2.0729 16.2602 2.21453C16.6021 2.35617 16.9128 2.56377 17.1745 2.82548C17.4362 3.08718 17.6438 3.39788 17.7855 3.73981C17.9271 4.08175 18 4.44824 18 4.81835C18 5.18846 17.9271 5.55495 17.7855 5.89689C17.6438 6.23882 17.4362 6.54952 17.1745 6.81122L7.30235 16.6834C7.21005 16.7757 7.09527 16.8423 6.96935 16.8766L2.94735 17.9736C2.6877 18.0444 2.41 17.9706 2.21969 17.7803C2.02937 17.59 1.95563 17.3123 2.02644 17.0526L3.12335 13.0306C3.1577 12.9047 3.2243 12.7899 3.3166 12.6977L13.1888 2.82548C13.4505 2.56377 13.7612 2.35617 14.1031 2.21453Z"
                                    />
                                  </svg>
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9 7.96667C10.2668 7.96667 11.2692 6.95327 11.2692 5.73333C11.2692 4.5134 10.2668 3.5 9 3.5C7.73318 3.5 6.73077 4.5134 6.73077 5.73333C6.73077 6.95327 7.73318 7.96667 9 7.96667ZM9 9.46667C11.0817 9.46667 12.7692 7.7952 12.7692 5.73333C12.7692 3.67147 11.0817 2 9 2C6.91832 2 5.23077 3.67147 5.23077 5.73333C5.23077 7.7952 6.91832 9.46667 9 9.46667ZM10.27 12.0333H7.46342C5.33108 12.0333 3.5 13.851 3.5 16.2222C3.5 16.3188 3.5364 16.3929 3.58194 16.4403C3.62647 16.4867 3.67003 16.5 3.70732 16.5H10.35C10.35 16.5 11 16.5977 11 17.25C11 17.9023 10.35 18 10.35 18H3.70732C2.76439 18 2 17.2041 2 16.2222C2 13.0803 4.44606 10.5333 7.46342 10.5333H10.27C10.7725 10.5333 11 10.9727 11 11.3C11 11.6 10.7748 12.0333 10.27 12.0333ZM15.5 11.75C15.5 11.3358 15.1642 11 14.75 11C14.3358 11 14 11.3358 14 11.75V13.5H12.25C11.8358 13.5 11.5 13.8358 11.5 14.25C11.5 14.6642 11.8358 15 12.25 15H14V16.75C14 17.1642 14.3358 17.5 14.75 17.5C15.1642 17.5 15.5 17.1642 15.5 16.75V15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H15.5V11.75Z"
                                    />
                                  </svg>
                                  Add Member
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/" className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10.75 5.65012C10.75 5.2359 10.4142 4.90012 10 4.90012C9.58579 4.90012 9.25 5.2359 9.25 5.65012V10.0001C9.25 10.2842 9.4105 10.5439 9.66459 10.6709L12.5646 12.1209C12.9351 12.3062 13.3856 12.156 13.5708 11.7855C13.7561 11.415 13.6059 10.9645 13.2354 10.7793L10.75 9.53659V5.65012Z"
                                    />
                                  </svg>
                                  Add Due Date
                                </Link>
                              </li>
                              <li className="last-dropdown">
                                <Link
                                  href="/Projects/"
                                  className="crancy-color4"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8.04999 3.70503C8.18127 3.57375 8.35932 3.5 8.54497 3.5H11.445C11.6306 3.5 11.8087 3.57375 11.9399 3.70503C12.0712 3.8363 12.145 4.01435 12.145 4.2V4.9L7.84497 4.89999V4.2C7.84497 4.01435 7.91872 3.8363 8.04999 3.70503ZM6.34497 4.89999V4.2C6.34497 3.61652 6.57675 3.05694 6.98933 2.64437C7.40191 2.23179 7.96149 2 8.54497 2H11.445C12.0284 2 12.588 2.23179 13.0006 2.64437C13.4132 3.05694 13.645 3.61652 13.645 4.2V4.9L16.52 4.89999C16.9342 4.89999 17.27 5.23578 17.27 5.64999C17.27 6.06421 16.9342 6.39999 16.52 6.39999H15.82V15.8C15.82 16.3835 15.5882 16.9431 15.1756 17.3556C14.763 17.7682 14.2034 18 13.62 18H6.36997C5.78649 18 5.22691 17.7682 4.81433 17.3556C4.40175 16.9431 4.16997 16.3835 4.16997 15.8V6.39999H3.46997C3.05576 6.39999 2.71997 6.06421 2.71997 5.64999C2.71997 5.23578 3.05576 4.89999 3.46997 4.89999H6.34497ZM5.66997 15.8V6.4H14.32V15.8C14.32 15.9857 14.2462 16.1637 14.1149 16.295C13.9837 16.4263 13.8056 16.5 13.62 16.5H6.36997C6.18432 16.5 6.00627 16.4263 5.87499 16.295C5.74372 16.1637 5.66997 15.9857 5.66997 15.8ZM8.54498 8.52502C8.9592 8.52502 9.29498 8.86081 9.29498 9.27502V13.625C9.29498 14.0392 8.9592 14.375 8.54498 14.375C8.13077 14.375 7.79498 14.0392 7.79498 13.625V9.27502C7.79498 8.86081 8.13077 8.52502 8.54498 8.52502ZM12.1949 9.27502C12.1949 8.86081 11.8592 8.52502 11.4449 8.52502C11.0307 8.52502 10.6949 8.86081 10.6949 9.27502V13.625C10.6949 14.0392 11.0307 14.375 11.4449 14.375C11.8592 14.375 12.1949 14.0392 12.1949 13.625V9.27502Z"
                                      fill="#DD3333"
                                    />
                                  </svg>
                                  Delete Project
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="crancy-single-project__head">
                            <div className="crancy-single-project__icon">
                              <img src="img/p-icon-1.svg" />
                            </div>
                            <div className="crancy-single-project__heading">
                              <h4 className="crancy-single-project__title">
                                Angular
                              </h4>
                              <p className="crancy-single-project__label">
                                Angular, Inc.
                              </p>
                            </div>
                          </div>
                          <div className="crancy-single-project__content">
                            <p>
                              Create a mobile application on iOS and Android
                              devices.
                            </p>
                            <div className="crancy-single-project__progress">
                              <span className="crancy-single-project__label">
                                Progress
                              </span>
                              <span className="crancy-single-project__percent">
                                50%
                              </span>
                            </div>
                            <div className="progress crancy-progressbar__single crancy-progressbar__single--v3">
                              <div
                                className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                role="progressbar"
                                style={{ width: "78%" }}
                                aria-valuenow={78}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="crancy-single-project__bottom">
                            <div className="crancy-single-project__authors">
                              <Link href="/Projects/">
                                <img src="img/pr-author-1.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-2.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-3.png" />
                              </Link>
                            </div>
                            <div className="crancy-single-project__date">
                              <img src="img/time.svg" />1 week left
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-project mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="" className="crancy-toggle__dropd">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                            <ul className="crancy-toggle__dropdown">
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.1817 3.5C15.0085 3.5 14.8371 3.5341 14.6771 3.60035C14.5172 3.66661 14.3719 3.76371 14.2494 3.88613L13.0763 5.05922L14.9408 6.92366L16.1139 5.75057C16.2363 5.62815 16.3334 5.48281 16.3996 5.32286C16.4659 5.16291 16.5 4.99148 16.5 4.81835C16.5 4.64522 16.4659 4.47379 16.3996 4.31384C16.3334 4.15389 16.2363 4.00856 16.1139 3.88613C15.9914 3.76371 15.8461 3.66661 15.6862 3.60035C15.5262 3.5341 15.3548 3.5 15.1817 3.5ZM13.8801 7.98432L12.0157 6.11988L4.51809 13.6175L3.81893 16.1811L6.38252 15.4819L13.8801 7.98432ZM14.1031 2.21453C14.4451 2.0729 14.8115 2 15.1817 2C15.5518 2 15.9182 2.0729 16.2602 2.21453C16.6021 2.35617 16.9128 2.56377 17.1745 2.82548C17.4362 3.08718 17.6438 3.39788 17.7855 3.73981C17.9271 4.08175 18 4.44824 18 4.81835C18 5.18846 17.9271 5.55495 17.7855 5.89689C17.6438 6.23882 17.4362 6.54952 17.1745 6.81122L7.30235 16.6834C7.21005 16.7757 7.09527 16.8423 6.96935 16.8766L2.94735 17.9736C2.6877 18.0444 2.41 17.9706 2.21969 17.7803C2.02937 17.59 1.95563 17.3123 2.02644 17.0526L3.12335 13.0306C3.1577 12.9047 3.2243 12.7899 3.3166 12.6977L13.1888 2.82548C13.4505 2.56377 13.7612 2.35617 14.1031 2.21453Z"
                                    />
                                  </svg>
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9 7.96667C10.2668 7.96667 11.2692 6.95327 11.2692 5.73333C11.2692 4.5134 10.2668 3.5 9 3.5C7.73318 3.5 6.73077 4.5134 6.73077 5.73333C6.73077 6.95327 7.73318 7.96667 9 7.96667ZM9 9.46667C11.0817 9.46667 12.7692 7.7952 12.7692 5.73333C12.7692 3.67147 11.0817 2 9 2C6.91832 2 5.23077 3.67147 5.23077 5.73333C5.23077 7.7952 6.91832 9.46667 9 9.46667ZM10.27 12.0333H7.46342C5.33108 12.0333 3.5 13.851 3.5 16.2222C3.5 16.3188 3.5364 16.3929 3.58194 16.4403C3.62647 16.4867 3.67003 16.5 3.70732 16.5H10.35C10.35 16.5 11 16.5977 11 17.25C11 17.9023 10.35 18 10.35 18H3.70732C2.76439 18 2 17.2041 2 16.2222C2 13.0803 4.44606 10.5333 7.46342 10.5333H10.27C10.7725 10.5333 11 10.9727 11 11.3C11 11.6 10.7748 12.0333 10.27 12.0333ZM15.5 11.75C15.5 11.3358 15.1642 11 14.75 11C14.3358 11 14 11.3358 14 11.75V13.5H12.25C11.8358 13.5 11.5 13.8358 11.5 14.25C11.5 14.6642 11.8358 15 12.25 15H14V16.75C14 17.1642 14.3358 17.5 14.75 17.5C15.1642 17.5 15.5 17.1642 15.5 16.75V15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H15.5V11.75Z"
                                    />
                                  </svg>
                                  Add Member
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/" className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10.75 5.65012C10.75 5.2359 10.4142 4.90012 10 4.90012C9.58579 4.90012 9.25 5.2359 9.25 5.65012V10.0001C9.25 10.2842 9.4105 10.5439 9.66459 10.6709L12.5646 12.1209C12.9351 12.3062 13.3856 12.156 13.5708 11.7855C13.7561 11.415 13.6059 10.9645 13.2354 10.7793L10.75 9.53659V5.65012Z"
                                    />
                                  </svg>
                                  Add Due Date
                                </Link>
                              </li>
                              <li className="last-dropdown">
                                <Link
                                  href="/Projects/"
                                  className="crancy-color4"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8.04999 3.70503C8.18127 3.57375 8.35932 3.5 8.54497 3.5H11.445C11.6306 3.5 11.8087 3.57375 11.9399 3.70503C12.0712 3.8363 12.145 4.01435 12.145 4.2V4.9L7.84497 4.89999V4.2C7.84497 4.01435 7.91872 3.8363 8.04999 3.70503ZM6.34497 4.89999V4.2C6.34497 3.61652 6.57675 3.05694 6.98933 2.64437C7.40191 2.23179 7.96149 2 8.54497 2H11.445C12.0284 2 12.588 2.23179 13.0006 2.64437C13.4132 3.05694 13.645 3.61652 13.645 4.2V4.9L16.52 4.89999C16.9342 4.89999 17.27 5.23578 17.27 5.64999C17.27 6.06421 16.9342 6.39999 16.52 6.39999H15.82V15.8C15.82 16.3835 15.5882 16.9431 15.1756 17.3556C14.763 17.7682 14.2034 18 13.62 18H6.36997C5.78649 18 5.22691 17.7682 4.81433 17.3556C4.40175 16.9431 4.16997 16.3835 4.16997 15.8V6.39999H3.46997C3.05576 6.39999 2.71997 6.06421 2.71997 5.64999C2.71997 5.23578 3.05576 4.89999 3.46997 4.89999H6.34497ZM5.66997 15.8V6.4H14.32V15.8C14.32 15.9857 14.2462 16.1637 14.1149 16.295C13.9837 16.4263 13.8056 16.5 13.62 16.5H6.36997C6.18432 16.5 6.00627 16.4263 5.87499 16.295C5.74372 16.1637 5.66997 15.9857 5.66997 15.8ZM8.54498 8.52502C8.9592 8.52502 9.29498 8.86081 9.29498 9.27502V13.625C9.29498 14.0392 8.9592 14.375 8.54498 14.375C8.13077 14.375 7.79498 14.0392 7.79498 13.625V9.27502C7.79498 8.86081 8.13077 8.52502 8.54498 8.52502ZM12.1949 9.27502C12.1949 8.86081 11.8592 8.52502 11.4449 8.52502C11.0307 8.52502 10.6949 8.86081 10.6949 9.27502V13.625C10.6949 14.0392 11.0307 14.375 11.4449 14.375C11.8592 14.375 12.1949 14.0392 12.1949 13.625V9.27502Z"
                                      fill="#DD3333"
                                    />
                                  </svg>
                                  Delete Project
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="crancy-single-project__head">
                            <div className="crancy-single-project__icon">
                              <img src="img/p-icon-9.svg" />
                            </div>
                            <div className="crancy-single-project__heading">
                              <h4 className="crancy-single-project__title">
                                Bitbucket
                              </h4>
                              <p className="crancy-single-project__label">
                                Bitbucket, Inc.
                              </p>
                            </div>
                          </div>
                          <div className="crancy-single-project__content">
                            <p>
                              Create a mobile application on iOS and Android
                              devices.
                            </p>
                            <div className="crancy-single-project__progress">
                              <span className="crancy-single-project__label">
                                Progress
                              </span>
                              <span className="crancy-single-project__percent">
                                50%
                              </span>
                            </div>
                            <div className="progress crancy-progressbar__single crancy-progressbar__single--v3">
                              <div
                                className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                role="progressbar"
                                style={{ width: "78%" }}
                                aria-valuenow={78}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="crancy-single-project__bottom">
                            <div className="crancy-single-project__authors">
                              <Link href="/Projects/">
                                <img src="img/pr-author-1.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-2.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-3.png" />
                              </Link>
                            </div>
                            <div className="crancy-single-project__date">
                              <img src="img/time.svg" />1 week left
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-project mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="" className="crancy-toggle__dropd">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                            <ul className="crancy-toggle__dropdown">
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.1817 3.5C15.0085 3.5 14.8371 3.5341 14.6771 3.60035C14.5172 3.66661 14.3719 3.76371 14.2494 3.88613L13.0763 5.05922L14.9408 6.92366L16.1139 5.75057C16.2363 5.62815 16.3334 5.48281 16.3996 5.32286C16.4659 5.16291 16.5 4.99148 16.5 4.81835C16.5 4.64522 16.4659 4.47379 16.3996 4.31384C16.3334 4.15389 16.2363 4.00856 16.1139 3.88613C15.9914 3.76371 15.8461 3.66661 15.6862 3.60035C15.5262 3.5341 15.3548 3.5 15.1817 3.5ZM13.8801 7.98432L12.0157 6.11988L4.51809 13.6175L3.81893 16.1811L6.38252 15.4819L13.8801 7.98432ZM14.1031 2.21453C14.4451 2.0729 14.8115 2 15.1817 2C15.5518 2 15.9182 2.0729 16.2602 2.21453C16.6021 2.35617 16.9128 2.56377 17.1745 2.82548C17.4362 3.08718 17.6438 3.39788 17.7855 3.73981C17.9271 4.08175 18 4.44824 18 4.81835C18 5.18846 17.9271 5.55495 17.7855 5.89689C17.6438 6.23882 17.4362 6.54952 17.1745 6.81122L7.30235 16.6834C7.21005 16.7757 7.09527 16.8423 6.96935 16.8766L2.94735 17.9736C2.6877 18.0444 2.41 17.9706 2.21969 17.7803C2.02937 17.59 1.95563 17.3123 2.02644 17.0526L3.12335 13.0306C3.1577 12.9047 3.2243 12.7899 3.3166 12.6977L13.1888 2.82548C13.4505 2.56377 13.7612 2.35617 14.1031 2.21453Z"
                                    />
                                  </svg>
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9 7.96667C10.2668 7.96667 11.2692 6.95327 11.2692 5.73333C11.2692 4.5134 10.2668 3.5 9 3.5C7.73318 3.5 6.73077 4.5134 6.73077 5.73333C6.73077 6.95327 7.73318 7.96667 9 7.96667ZM9 9.46667C11.0817 9.46667 12.7692 7.7952 12.7692 5.73333C12.7692 3.67147 11.0817 2 9 2C6.91832 2 5.23077 3.67147 5.23077 5.73333C5.23077 7.7952 6.91832 9.46667 9 9.46667ZM10.27 12.0333H7.46342C5.33108 12.0333 3.5 13.851 3.5 16.2222C3.5 16.3188 3.5364 16.3929 3.58194 16.4403C3.62647 16.4867 3.67003 16.5 3.70732 16.5H10.35C10.35 16.5 11 16.5977 11 17.25C11 17.9023 10.35 18 10.35 18H3.70732C2.76439 18 2 17.2041 2 16.2222C2 13.0803 4.44606 10.5333 7.46342 10.5333H10.27C10.7725 10.5333 11 10.9727 11 11.3C11 11.6 10.7748 12.0333 10.27 12.0333ZM15.5 11.75C15.5 11.3358 15.1642 11 14.75 11C14.3358 11 14 11.3358 14 11.75V13.5H12.25C11.8358 13.5 11.5 13.8358 11.5 14.25C11.5 14.6642 11.8358 15 12.25 15H14V16.75C14 17.1642 14.3358 17.5 14.75 17.5C15.1642 17.5 15.5 17.1642 15.5 16.75V15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H15.5V11.75Z"
                                    />
                                  </svg>
                                  Add Member
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/" className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10.75 5.65012C10.75 5.2359 10.4142 4.90012 10 4.90012C9.58579 4.90012 9.25 5.2359 9.25 5.65012V10.0001C9.25 10.2842 9.4105 10.5439 9.66459 10.6709L12.5646 12.1209C12.9351 12.3062 13.3856 12.156 13.5708 11.7855C13.7561 11.415 13.6059 10.9645 13.2354 10.7793L10.75 9.53659V5.65012Z"
                                    />
                                  </svg>
                                  Add Due Date
                                </Link>
                              </li>
                              <li className="last-dropdown">
                                <Link
                                  href="/Projects/"
                                  className="crancy-color4"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8.04999 3.70503C8.18127 3.57375 8.35932 3.5 8.54497 3.5H11.445C11.6306 3.5 11.8087 3.57375 11.9399 3.70503C12.0712 3.8363 12.145 4.01435 12.145 4.2V4.9L7.84497 4.89999V4.2C7.84497 4.01435 7.91872 3.8363 8.04999 3.70503ZM6.34497 4.89999V4.2C6.34497 3.61652 6.57675 3.05694 6.98933 2.64437C7.40191 2.23179 7.96149 2 8.54497 2H11.445C12.0284 2 12.588 2.23179 13.0006 2.64437C13.4132 3.05694 13.645 3.61652 13.645 4.2V4.9L16.52 4.89999C16.9342 4.89999 17.27 5.23578 17.27 5.64999C17.27 6.06421 16.9342 6.39999 16.52 6.39999H15.82V15.8C15.82 16.3835 15.5882 16.9431 15.1756 17.3556C14.763 17.7682 14.2034 18 13.62 18H6.36997C5.78649 18 5.22691 17.7682 4.81433 17.3556C4.40175 16.9431 4.16997 16.3835 4.16997 15.8V6.39999H3.46997C3.05576 6.39999 2.71997 6.06421 2.71997 5.64999C2.71997 5.23578 3.05576 4.89999 3.46997 4.89999H6.34497ZM5.66997 15.8V6.4H14.32V15.8C14.32 15.9857 14.2462 16.1637 14.1149 16.295C13.9837 16.4263 13.8056 16.5 13.62 16.5H6.36997C6.18432 16.5 6.00627 16.4263 5.87499 16.295C5.74372 16.1637 5.66997 15.9857 5.66997 15.8ZM8.54498 8.52502C8.9592 8.52502 9.29498 8.86081 9.29498 9.27502V13.625C9.29498 14.0392 8.9592 14.375 8.54498 14.375C8.13077 14.375 7.79498 14.0392 7.79498 13.625V9.27502C7.79498 8.86081 8.13077 8.52502 8.54498 8.52502ZM12.1949 9.27502C12.1949 8.86081 11.8592 8.52502 11.4449 8.52502C11.0307 8.52502 10.6949 8.86081 10.6949 9.27502V13.625C10.6949 14.0392 11.0307 14.375 11.4449 14.375C11.8592 14.375 12.1949 14.0392 12.1949 13.625V9.27502Z"
                                      fill="#DD3333"
                                    />
                                  </svg>
                                  Delete Project
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="crancy-single-project__head">
                            <div className="crancy-single-project__icon">
                              <img src="img/p-icon-6.svg" />
                            </div>
                            <div className="crancy-single-project__heading">
                              <h4 className="crancy-single-project__title">
                                Python
                              </h4>
                              <p className="crancy-single-project__label">
                                Python, Inc.
                              </p>
                            </div>
                          </div>
                          <div className="crancy-single-project__content">
                            <p>
                              Create a mobile application on iOS and Android
                              devices.
                            </p>
                            <div className="crancy-single-project__progress">
                              <span className="crancy-single-project__label">
                                Progress
                              </span>
                              <span className="crancy-single-project__percent">
                                50%
                              </span>
                            </div>
                            <div className="progress crancy-progressbar__single crancy-progressbar__single--v3">
                              <div
                                className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                role="progressbar"
                                style={{ width: "78%" }}
                                aria-valuenow={78}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="crancy-single-project__bottom">
                            <div className="crancy-single-project__authors">
                              <Link href="/Projects/">
                                <img src="img/pr-author-1.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-2.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-3.png" />
                              </Link>
                            </div>
                            <div className="crancy-single-project__date">
                              <img src="img/time.svg" />1 week left
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-project mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="" className="crancy-toggle__dropd">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                            <ul className="crancy-toggle__dropdown">
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.1817 3.5C15.0085 3.5 14.8371 3.5341 14.6771 3.60035C14.5172 3.66661 14.3719 3.76371 14.2494 3.88613L13.0763 5.05922L14.9408 6.92366L16.1139 5.75057C16.2363 5.62815 16.3334 5.48281 16.3996 5.32286C16.4659 5.16291 16.5 4.99148 16.5 4.81835C16.5 4.64522 16.4659 4.47379 16.3996 4.31384C16.3334 4.15389 16.2363 4.00856 16.1139 3.88613C15.9914 3.76371 15.8461 3.66661 15.6862 3.60035C15.5262 3.5341 15.3548 3.5 15.1817 3.5ZM13.8801 7.98432L12.0157 6.11988L4.51809 13.6175L3.81893 16.1811L6.38252 15.4819L13.8801 7.98432ZM14.1031 2.21453C14.4451 2.0729 14.8115 2 15.1817 2C15.5518 2 15.9182 2.0729 16.2602 2.21453C16.6021 2.35617 16.9128 2.56377 17.1745 2.82548C17.4362 3.08718 17.6438 3.39788 17.7855 3.73981C17.9271 4.08175 18 4.44824 18 4.81835C18 5.18846 17.9271 5.55495 17.7855 5.89689C17.6438 6.23882 17.4362 6.54952 17.1745 6.81122L7.30235 16.6834C7.21005 16.7757 7.09527 16.8423 6.96935 16.8766L2.94735 17.9736C2.6877 18.0444 2.41 17.9706 2.21969 17.7803C2.02937 17.59 1.95563 17.3123 2.02644 17.0526L3.12335 13.0306C3.1577 12.9047 3.2243 12.7899 3.3166 12.6977L13.1888 2.82548C13.4505 2.56377 13.7612 2.35617 14.1031 2.21453Z"
                                    />
                                  </svg>
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9 7.96667C10.2668 7.96667 11.2692 6.95327 11.2692 5.73333C11.2692 4.5134 10.2668 3.5 9 3.5C7.73318 3.5 6.73077 4.5134 6.73077 5.73333C6.73077 6.95327 7.73318 7.96667 9 7.96667ZM9 9.46667C11.0817 9.46667 12.7692 7.7952 12.7692 5.73333C12.7692 3.67147 11.0817 2 9 2C6.91832 2 5.23077 3.67147 5.23077 5.73333C5.23077 7.7952 6.91832 9.46667 9 9.46667ZM10.27 12.0333H7.46342C5.33108 12.0333 3.5 13.851 3.5 16.2222C3.5 16.3188 3.5364 16.3929 3.58194 16.4403C3.62647 16.4867 3.67003 16.5 3.70732 16.5H10.35C10.35 16.5 11 16.5977 11 17.25C11 17.9023 10.35 18 10.35 18H3.70732C2.76439 18 2 17.2041 2 16.2222C2 13.0803 4.44606 10.5333 7.46342 10.5333H10.27C10.7725 10.5333 11 10.9727 11 11.3C11 11.6 10.7748 12.0333 10.27 12.0333ZM15.5 11.75C15.5 11.3358 15.1642 11 14.75 11C14.3358 11 14 11.3358 14 11.75V13.5H12.25C11.8358 13.5 11.5 13.8358 11.5 14.25C11.5 14.6642 11.8358 15 12.25 15H14V16.75C14 17.1642 14.3358 17.5 14.75 17.5C15.1642 17.5 15.5 17.1642 15.5 16.75V15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H15.5V11.75Z"
                                    />
                                  </svg>
                                  Add Member
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/" className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10.75 5.65012C10.75 5.2359 10.4142 4.90012 10 4.90012C9.58579 4.90012 9.25 5.2359 9.25 5.65012V10.0001C9.25 10.2842 9.4105 10.5439 9.66459 10.6709L12.5646 12.1209C12.9351 12.3062 13.3856 12.156 13.5708 11.7855C13.7561 11.415 13.6059 10.9645 13.2354 10.7793L10.75 9.53659V5.65012Z"
                                    />
                                  </svg>
                                  Add Due Date
                                </Link>
                              </li>
                              <li className="last-dropdown">
                                <Link
                                  href="/Projects/"
                                  className="crancy-color4"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8.04999 3.70503C8.18127 3.57375 8.35932 3.5 8.54497 3.5H11.445C11.6306 3.5 11.8087 3.57375 11.9399 3.70503C12.0712 3.8363 12.145 4.01435 12.145 4.2V4.9L7.84497 4.89999V4.2C7.84497 4.01435 7.91872 3.8363 8.04999 3.70503ZM6.34497 4.89999V4.2C6.34497 3.61652 6.57675 3.05694 6.98933 2.64437C7.40191 2.23179 7.96149 2 8.54497 2H11.445C12.0284 2 12.588 2.23179 13.0006 2.64437C13.4132 3.05694 13.645 3.61652 13.645 4.2V4.9L16.52 4.89999C16.9342 4.89999 17.27 5.23578 17.27 5.64999C17.27 6.06421 16.9342 6.39999 16.52 6.39999H15.82V15.8C15.82 16.3835 15.5882 16.9431 15.1756 17.3556C14.763 17.7682 14.2034 18 13.62 18H6.36997C5.78649 18 5.22691 17.7682 4.81433 17.3556C4.40175 16.9431 4.16997 16.3835 4.16997 15.8V6.39999H3.46997C3.05576 6.39999 2.71997 6.06421 2.71997 5.64999C2.71997 5.23578 3.05576 4.89999 3.46997 4.89999H6.34497ZM5.66997 15.8V6.4H14.32V15.8C14.32 15.9857 14.2462 16.1637 14.1149 16.295C13.9837 16.4263 13.8056 16.5 13.62 16.5H6.36997C6.18432 16.5 6.00627 16.4263 5.87499 16.295C5.74372 16.1637 5.66997 15.9857 5.66997 15.8ZM8.54498 8.52502C8.9592 8.52502 9.29498 8.86081 9.29498 9.27502V13.625C9.29498 14.0392 8.9592 14.375 8.54498 14.375C8.13077 14.375 7.79498 14.0392 7.79498 13.625V9.27502C7.79498 8.86081 8.13077 8.52502 8.54498 8.52502ZM12.1949 9.27502C12.1949 8.86081 11.8592 8.52502 11.4449 8.52502C11.0307 8.52502 10.6949 8.86081 10.6949 9.27502V13.625C10.6949 14.0392 11.0307 14.375 11.4449 14.375C11.8592 14.375 12.1949 14.0392 12.1949 13.625V9.27502Z"
                                      fill="#DD3333"
                                    />
                                  </svg>
                                  Delete Project
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="crancy-single-project__head">
                            <div className="crancy-single-project__icon">
                              <img src="img/p-icon-7.svg" />
                            </div>
                            <div className="crancy-single-project__heading">
                              <h4 className="crancy-single-project__title">
                                Slack
                              </h4>
                              <p className="crancy-single-project__label">
                                Slack, Inc.
                              </p>
                            </div>
                          </div>
                          <div className="crancy-single-project__content">
                            <p>
                              Create a mobile application on iOS and Android
                              devices.
                            </p>
                            <div className="crancy-single-project__progress">
                              <span className="crancy-single-project__label">
                                Progress
                              </span>
                              <span className="crancy-single-project__percent">
                                50%
                              </span>
                            </div>
                            <div className="progress crancy-progressbar__single crancy-progressbar__single--v3">
                              <div
                                className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                role="progressbar"
                                style={{ width: "78%" }}
                                aria-valuenow={78}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="crancy-single-project__bottom">
                            <div className="crancy-single-project__authors">
                              <Link href="/Projects/">
                                <img src="img/pr-author-1.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-2.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-3.png" />
                              </Link>
                            </div>
                            <div className="crancy-single-project__date">
                              <img src="img/time.svg" />1 week left
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-project mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="" className="crancy-toggle__dropd">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                            <ul className="crancy-toggle__dropdown">
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.1817 3.5C15.0085 3.5 14.8371 3.5341 14.6771 3.60035C14.5172 3.66661 14.3719 3.76371 14.2494 3.88613L13.0763 5.05922L14.9408 6.92366L16.1139 5.75057C16.2363 5.62815 16.3334 5.48281 16.3996 5.32286C16.4659 5.16291 16.5 4.99148 16.5 4.81835C16.5 4.64522 16.4659 4.47379 16.3996 4.31384C16.3334 4.15389 16.2363 4.00856 16.1139 3.88613C15.9914 3.76371 15.8461 3.66661 15.6862 3.60035C15.5262 3.5341 15.3548 3.5 15.1817 3.5ZM13.8801 7.98432L12.0157 6.11988L4.51809 13.6175L3.81893 16.1811L6.38252 15.4819L13.8801 7.98432ZM14.1031 2.21453C14.4451 2.0729 14.8115 2 15.1817 2C15.5518 2 15.9182 2.0729 16.2602 2.21453C16.6021 2.35617 16.9128 2.56377 17.1745 2.82548C17.4362 3.08718 17.6438 3.39788 17.7855 3.73981C17.9271 4.08175 18 4.44824 18 4.81835C18 5.18846 17.9271 5.55495 17.7855 5.89689C17.6438 6.23882 17.4362 6.54952 17.1745 6.81122L7.30235 16.6834C7.21005 16.7757 7.09527 16.8423 6.96935 16.8766L2.94735 17.9736C2.6877 18.0444 2.41 17.9706 2.21969 17.7803C2.02937 17.59 1.95563 17.3123 2.02644 17.0526L3.12335 13.0306C3.1577 12.9047 3.2243 12.7899 3.3166 12.6977L13.1888 2.82548C13.4505 2.56377 13.7612 2.35617 14.1031 2.21453Z"
                                    />
                                  </svg>
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9 7.96667C10.2668 7.96667 11.2692 6.95327 11.2692 5.73333C11.2692 4.5134 10.2668 3.5 9 3.5C7.73318 3.5 6.73077 4.5134 6.73077 5.73333C6.73077 6.95327 7.73318 7.96667 9 7.96667ZM9 9.46667C11.0817 9.46667 12.7692 7.7952 12.7692 5.73333C12.7692 3.67147 11.0817 2 9 2C6.91832 2 5.23077 3.67147 5.23077 5.73333C5.23077 7.7952 6.91832 9.46667 9 9.46667ZM10.27 12.0333H7.46342C5.33108 12.0333 3.5 13.851 3.5 16.2222C3.5 16.3188 3.5364 16.3929 3.58194 16.4403C3.62647 16.4867 3.67003 16.5 3.70732 16.5H10.35C10.35 16.5 11 16.5977 11 17.25C11 17.9023 10.35 18 10.35 18H3.70732C2.76439 18 2 17.2041 2 16.2222C2 13.0803 4.44606 10.5333 7.46342 10.5333H10.27C10.7725 10.5333 11 10.9727 11 11.3C11 11.6 10.7748 12.0333 10.27 12.0333ZM15.5 11.75C15.5 11.3358 15.1642 11 14.75 11C14.3358 11 14 11.3358 14 11.75V13.5H12.25C11.8358 13.5 11.5 13.8358 11.5 14.25C11.5 14.6642 11.8358 15 12.25 15H14V16.75C14 17.1642 14.3358 17.5 14.75 17.5C15.1642 17.5 15.5 17.1642 15.5 16.75V15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H15.5V11.75Z"
                                    />
                                  </svg>
                                  Add Member
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/" className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10.75 5.65012C10.75 5.2359 10.4142 4.90012 10 4.90012C9.58579 4.90012 9.25 5.2359 9.25 5.65012V10.0001C9.25 10.2842 9.4105 10.5439 9.66459 10.6709L12.5646 12.1209C12.9351 12.3062 13.3856 12.156 13.5708 11.7855C13.7561 11.415 13.6059 10.9645 13.2354 10.7793L10.75 9.53659V5.65012Z"
                                    />
                                  </svg>
                                  Add Due Date
                                </Link>
                              </li>
                              <li className="last-dropdown">
                                <Link
                                  href="/Projects/"
                                  className="crancy-color4"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8.04999 3.70503C8.18127 3.57375 8.35932 3.5 8.54497 3.5H11.445C11.6306 3.5 11.8087 3.57375 11.9399 3.70503C12.0712 3.8363 12.145 4.01435 12.145 4.2V4.9L7.84497 4.89999V4.2C7.84497 4.01435 7.91872 3.8363 8.04999 3.70503ZM6.34497 4.89999V4.2C6.34497 3.61652 6.57675 3.05694 6.98933 2.64437C7.40191 2.23179 7.96149 2 8.54497 2H11.445C12.0284 2 12.588 2.23179 13.0006 2.64437C13.4132 3.05694 13.645 3.61652 13.645 4.2V4.9L16.52 4.89999C16.9342 4.89999 17.27 5.23578 17.27 5.64999C17.27 6.06421 16.9342 6.39999 16.52 6.39999H15.82V15.8C15.82 16.3835 15.5882 16.9431 15.1756 17.3556C14.763 17.7682 14.2034 18 13.62 18H6.36997C5.78649 18 5.22691 17.7682 4.81433 17.3556C4.40175 16.9431 4.16997 16.3835 4.16997 15.8V6.39999H3.46997C3.05576 6.39999 2.71997 6.06421 2.71997 5.64999C2.71997 5.23578 3.05576 4.89999 3.46997 4.89999H6.34497ZM5.66997 15.8V6.4H14.32V15.8C14.32 15.9857 14.2462 16.1637 14.1149 16.295C13.9837 16.4263 13.8056 16.5 13.62 16.5H6.36997C6.18432 16.5 6.00627 16.4263 5.87499 16.295C5.74372 16.1637 5.66997 15.9857 5.66997 15.8ZM8.54498 8.52502C8.9592 8.52502 9.29498 8.86081 9.29498 9.27502V13.625C9.29498 14.0392 8.9592 14.375 8.54498 14.375C8.13077 14.375 7.79498 14.0392 7.79498 13.625V9.27502C7.79498 8.86081 8.13077 8.52502 8.54498 8.52502ZM12.1949 9.27502C12.1949 8.86081 11.8592 8.52502 11.4449 8.52502C11.0307 8.52502 10.6949 8.86081 10.6949 9.27502V13.625C10.6949 14.0392 11.0307 14.375 11.4449 14.375C11.8592 14.375 12.1949 14.0392 12.1949 13.625V9.27502Z"
                                      fill="#DD3333"
                                    />
                                  </svg>
                                  Delete Project
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="crancy-single-project__head">
                            <div className="crancy-single-project__icon">
                              <img src="img/p-icon-8.svg" />
                            </div>
                            <div className="crancy-single-project__heading">
                              <h4 className="crancy-single-project__title">
                                Java
                              </h4>
                              <p className="crancy-single-project__label">
                                Java, Inc.
                              </p>
                            </div>
                          </div>
                          <div className="crancy-single-project__content">
                            <p>
                              Create a mobile application on iOS and Android
                              devices.
                            </p>
                            <div className="crancy-single-project__progress">
                              <span className="crancy-single-project__label">
                                Progress
                              </span>
                              <span className="crancy-single-project__percent">
                                50%
                              </span>
                            </div>
                            <div className="progress crancy-progressbar__single crancy-progressbar__single--v3">
                              <div
                                className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                role="progressbar"
                                style={{ width: "78%" }}
                                aria-valuenow={78}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="crancy-single-project__bottom">
                            <div className="crancy-single-project__authors">
                              <Link href="/Projects/">
                                <img src="img/pr-author-1.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-2.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-3.png" />
                              </Link>
                            </div>
                            <div className="crancy-single-project__date">
                              <img src="img/time.svg" />1 week left
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
                        <div className="crancy-single-project mg-top-30">
                          <div className="crancy-toggle">
                            <Link href="" className="crancy-toggle__dropd">
                              <img src="img/toggle-icon.svg" />
                            </Link>
                            <ul className="crancy-toggle__dropdown">
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.1817 3.5C15.0085 3.5 14.8371 3.5341 14.6771 3.60035C14.5172 3.66661 14.3719 3.76371 14.2494 3.88613L13.0763 5.05922L14.9408 6.92366L16.1139 5.75057C16.2363 5.62815 16.3334 5.48281 16.3996 5.32286C16.4659 5.16291 16.5 4.99148 16.5 4.81835C16.5 4.64522 16.4659 4.47379 16.3996 4.31384C16.3334 4.15389 16.2363 4.00856 16.1139 3.88613C15.9914 3.76371 15.8461 3.66661 15.6862 3.60035C15.5262 3.5341 15.3548 3.5 15.1817 3.5ZM13.8801 7.98432L12.0157 6.11988L4.51809 13.6175L3.81893 16.1811L6.38252 15.4819L13.8801 7.98432ZM14.1031 2.21453C14.4451 2.0729 14.8115 2 15.1817 2C15.5518 2 15.9182 2.0729 16.2602 2.21453C16.6021 2.35617 16.9128 2.56377 17.1745 2.82548C17.4362 3.08718 17.6438 3.39788 17.7855 3.73981C17.9271 4.08175 18 4.44824 18 4.81835C18 5.18846 17.9271 5.55495 17.7855 5.89689C17.6438 6.23882 17.4362 6.54952 17.1745 6.81122L7.30235 16.6834C7.21005 16.7757 7.09527 16.8423 6.96935 16.8766L2.94735 17.9736C2.6877 18.0444 2.41 17.9706 2.21969 17.7803C2.02937 17.59 1.95563 17.3123 2.02644 17.0526L3.12335 13.0306C3.1577 12.9047 3.2243 12.7899 3.3166 12.6977L13.1888 2.82548C13.4505 2.56377 13.7612 2.35617 14.1031 2.21453Z"
                                    />
                                  </svg>
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9 7.96667C10.2668 7.96667 11.2692 6.95327 11.2692 5.73333C11.2692 4.5134 10.2668 3.5 9 3.5C7.73318 3.5 6.73077 4.5134 6.73077 5.73333C6.73077 6.95327 7.73318 7.96667 9 7.96667ZM9 9.46667C11.0817 9.46667 12.7692 7.7952 12.7692 5.73333C12.7692 3.67147 11.0817 2 9 2C6.91832 2 5.23077 3.67147 5.23077 5.73333C5.23077 7.7952 6.91832 9.46667 9 9.46667ZM10.27 12.0333H7.46342C5.33108 12.0333 3.5 13.851 3.5 16.2222C3.5 16.3188 3.5364 16.3929 3.58194 16.4403C3.62647 16.4867 3.67003 16.5 3.70732 16.5H10.35C10.35 16.5 11 16.5977 11 17.25C11 17.9023 10.35 18 10.35 18H3.70732C2.76439 18 2 17.2041 2 16.2222C2 13.0803 4.44606 10.5333 7.46342 10.5333H10.27C10.7725 10.5333 11 10.9727 11 11.3C11 11.6 10.7748 12.0333 10.27 12.0333ZM15.5 11.75C15.5 11.3358 15.1642 11 14.75 11C14.3358 11 14 11.3358 14 11.75V13.5H12.25C11.8358 13.5 11.5 13.8358 11.5 14.25C11.5 14.6642 11.8358 15 12.25 15H14V16.75C14 17.1642 14.3358 17.5 14.75 17.5C15.1642 17.5 15.5 17.1642 15.5 16.75V15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H15.5V11.75Z"
                                    />
                                  </svg>
                                  Add Member
                                </Link>
                              </li>
                              <li>
                                <Link href="/Projects/" className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10.75 5.65012C10.75 5.2359 10.4142 4.90012 10 4.90012C9.58579 4.90012 9.25 5.2359 9.25 5.65012V10.0001C9.25 10.2842 9.4105 10.5439 9.66459 10.6709L12.5646 12.1209C12.9351 12.3062 13.3856 12.156 13.5708 11.7855C13.7561 11.415 13.6059 10.9645 13.2354 10.7793L10.75 9.53659V5.65012Z"
                                    />
                                  </svg>
                                  Add Due Date
                                </Link>
                              </li>
                              <li className="last-dropdown">
                                <Link
                                  href="/Projects/"
                                  className="crancy-color4"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8.04999 3.70503C8.18127 3.57375 8.35932 3.5 8.54497 3.5H11.445C11.6306 3.5 11.8087 3.57375 11.9399 3.70503C12.0712 3.8363 12.145 4.01435 12.145 4.2V4.9L7.84497 4.89999V4.2C7.84497 4.01435 7.91872 3.8363 8.04999 3.70503ZM6.34497 4.89999V4.2C6.34497 3.61652 6.57675 3.05694 6.98933 2.64437C7.40191 2.23179 7.96149 2 8.54497 2H11.445C12.0284 2 12.588 2.23179 13.0006 2.64437C13.4132 3.05694 13.645 3.61652 13.645 4.2V4.9L16.52 4.89999C16.9342 4.89999 17.27 5.23578 17.27 5.64999C17.27 6.06421 16.9342 6.39999 16.52 6.39999H15.82V15.8C15.82 16.3835 15.5882 16.9431 15.1756 17.3556C14.763 17.7682 14.2034 18 13.62 18H6.36997C5.78649 18 5.22691 17.7682 4.81433 17.3556C4.40175 16.9431 4.16997 16.3835 4.16997 15.8V6.39999H3.46997C3.05576 6.39999 2.71997 6.06421 2.71997 5.64999C2.71997 5.23578 3.05576 4.89999 3.46997 4.89999H6.34497ZM5.66997 15.8V6.4H14.32V15.8C14.32 15.9857 14.2462 16.1637 14.1149 16.295C13.9837 16.4263 13.8056 16.5 13.62 16.5H6.36997C6.18432 16.5 6.00627 16.4263 5.87499 16.295C5.74372 16.1637 5.66997 15.9857 5.66997 15.8ZM8.54498 8.52502C8.9592 8.52502 9.29498 8.86081 9.29498 9.27502V13.625C9.29498 14.0392 8.9592 14.375 8.54498 14.375C8.13077 14.375 7.79498 14.0392 7.79498 13.625V9.27502C7.79498 8.86081 8.13077 8.52502 8.54498 8.52502ZM12.1949 9.27502C12.1949 8.86081 11.8592 8.52502 11.4449 8.52502C11.0307 8.52502 10.6949 8.86081 10.6949 9.27502V13.625C10.6949 14.0392 11.0307 14.375 11.4449 14.375C11.8592 14.375 12.1949 14.0392 12.1949 13.625V9.27502Z"
                                      fill="#DD3333"
                                    />
                                  </svg>
                                  Delete Project
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="crancy-single-project__head">
                            <div className="crancy-single-project__icon">
                              <img src="img/p-icon-10.svg" />
                            </div>
                            <div className="crancy-single-project__heading">
                              <h4 className="crancy-single-project__title">
                                Vue
                              </h4>
                              <p className="crancy-single-project__label">
                                vue, Inc.
                              </p>
                            </div>
                          </div>
                          <div className="crancy-single-project__content">
                            <p>
                              Create a mobile application on iOS and Android
                              devices.
                            </p>
                            <div className="crancy-single-project__progress">
                              <span className="crancy-single-project__label">
                                Progress
                              </span>
                              <span className="crancy-single-project__percent">
                                50%
                              </span>
                            </div>
                            <div className="progress crancy-progressbar__single crancy-progressbar__single--v3">
                              <div
                                className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                                role="progressbar"
                                style={{ width: "78%" }}
                                aria-valuenow={78}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="crancy-single-project__bottom">
                            <div className="crancy-single-project__authors">
                              <Link href="/Projects/">
                                <img src="img/pr-author-1.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-2.png" />
                              </Link>
                              <Link href="/Projects/">
                                <img src="img/pr-author-3.png" />
                              </Link>
                            </div>
                            <div className="crancy-single-project__date">
                              <img src="img/time.svg" />1 week left
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
          <div className="col-12 mg-top-30">
            <div className="crancy-pagination crancy-pagination__v3">
              <ul className="crancy-pagination__list">
                <li className="crancy-pagination__button">
                  <Link href="/Projects/">
                    <i className="fas fa-angles-left"></i>
                  </Link>
                </li>
                <li className="crancy-pagination__button">
                  <Link href="/Projects/">
                    <i className="fas fa-angle-left"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/Projects/">1</Link>
                </li>
                <li className="active">
                  <Link href="/Projects/">2</Link>
                </li>
                <li>
                  <Link href="/Projects/">3</Link>
                </li>
                <li>
                  <Link href="/Projects/">...</Link>
                </li>
                <li>
                  <Link href="/Projects/">4</Link>
                </li>
                <li className="crancy-pagination__button">
                  <Link href="/Projects/">
                    <i className="fas fa-angles-right"></i>
                  </Link>
                </li>
                <li className="crancy-pagination__button">
                  <Link href="/Projects/">
                    <i className="fas fa-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
