import Link from "next/link";

export const Calender = () => {
  return (
    <section className="crancy-adashboard crancy-show">
      <div className="container container__bscreen">
        <div className="row">
          <div className="col-12">
            <div className="crancy-body">
              <div className="crancy-dsinner">
                <div className="row row__bscreen">
                  <div className="col-xxl-8 col-xl-12 col-12 mg-top-30">
                    <div className="crancy-calandere-main">
                      <div
                        id="crancy-calender-event"
                        className="crancy-default-cd crancy-default-cd__event"
                      ></div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-12 col-12 mg-top-30">
                    <div className="crancy-sidebar">
                      <div className="crancy-sidebar__heading">
                        <h3 className="crancy-default__title m-0">
                          My Recent task
                        </h3>
                      </div>
                      <form>
                        <div className="crancy-my-task pd-btm-20 mg-btm-20 crancy-border-bottom">
                          <div className="crancy-single__task--date crancy-font-regular mg-btm-10">
                            <img src="img/calendar-icon-5.svg" />1 Apr, 2023
                          </div>
                          <div className="crancy-my-task__group">
                            <input
                              className="crancy-wc__form-check"
                              id="checkbox"
                              name="checkbox"
                              type="checkbox"
                            />
                            <label htmlFor="checkbox" className="m-0">
                              <div className="crancy-my-task__inside crancy-flex-between">
                                <div className="crancy-my-task__title crancy-flex-center crancy-flex-gap-20">
                                  <h4 className="m-0">Kick off Project</h4>
                                  <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                                    <Link href="/Calender/">
                                      <img
                                        src="img/author-1.png"
                                        alt="author-img"
                                      />
                                    </Link>
                                    <Link href="/Calender/">
                                      <img
                                        src="img/author-2.png"
                                        alt="author-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <Link href="/Calender/">
                                  <img src="img/toggle-icon-5.svg" />
                                </Link>
                              </div>
                              <p>Completed Apr 20</p>
                              <p>Circle - Dashboard, Stats, and UI Kit</p>
                            </label>
                          </div>
                        </div>
                        <div className="crancy-my-task pd-btm-20 mg-btm-20 crancy-border-bottom">
                          <div className="crancy-single__task--date crancy-font-regular mg-btm-10">
                            <img src="img/calendar-icon-5.svg" />1 Apr, 2023
                          </div>
                          <div className="crancy-my-task__group">
                            <input
                              className="crancy-wc__form-check"
                              id="checkbox2"
                              name="checkbox2"
                              type="checkbox"
                            />
                            <label htmlFor="checkbox2" className="m-0">
                              <div className="crancy-my-task__inside crancy-flex-between">
                                <div className="crancy-my-task__title crancy-flex-center crancy-flex-gap-20">
                                  <h4 className="m-0">Kick off Project</h4>
                                  <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                                    <Link href="/Calender/">
                                      <img
                                        src="img/author-1.png"
                                        alt="author-img"
                                      />
                                    </Link>
                                    <Link href="/Calender/">
                                      <img
                                        src="img/author-2.png"
                                        alt="author-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <Link href="/Calender/">
                                  <img src="img/toggle-icon-5.svg" />
                                </Link>
                              </div>
                              <p>Completed Apr 20</p>
                              <p>Circle - Dashboard, Stats, and UI Kit</p>
                            </label>
                          </div>
                        </div>
                        <div className="crancy-my-task pd-btm-20 mg-btm-20 crancy-border-bottom">
                          <div className="crancy-single__task--date crancy-font-regular mg-btm-10">
                            <img src="img/calendar-icon-5.svg" />1 Apr, 2023
                          </div>
                          <div className="crancy-my-task__group">
                            <input
                              className="crancy-wc__form-check"
                              id="checkbox3"
                              name="checkbox3"
                              type="checkbox"
                            />
                            <label htmlFor="checkbox3" className="m-0">
                              <div className="crancy-my-task__inside crancy-flex-between">
                                <div className="crancy-my-task__title crancy-flex-center crancy-flex-gap-20">
                                  <h4 className="m-0">Kick off Project</h4>
                                  <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                                    <Link href="/Calender/">
                                      <img
                                        src="img/author-1.png"
                                        alt="author-img"
                                      />
                                    </Link>
                                    <Link href="/Calender/">
                                      <img
                                        src="img/author-2.png"
                                        alt="author-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <Link href="/Calender/">
                                  <img src="img/toggle-icon-5.svg" />
                                </Link>
                              </div>
                              <p>Completed Apr 20</p>
                              <p>Circle - Dashboard, Stats, and UI Kit</p>
                            </label>
                          </div>
                        </div>
                        <div className="crancy-my-task pd-btm-20 mg-btm-20 crancy-border-bottom">
                          <div className="crancy-single__task--date crancy-font-regular mg-btm-10">
                            <img src="img/calendar-icon-5.svg" />1 Apr, 2023
                          </div>
                          <div className="crancy-my-task__group">
                            <input
                              className="crancy-wc__form-check"
                              id="checkbox4"
                              name="checkbox4"
                              type="checkbox"
                            />
                            <label htmlFor="checkbox4" className="m-0">
                              <div className="crancy-my-task__inside crancy-flex-between">
                                <div className="crancy-my-task__title crancy-flex-center crancy-flex-gap-20">
                                  <h4 className="m-0">Kick off Project</h4>
                                  <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                                    <Link href="/Calender/">
                                      <img
                                        src="img/author-1.png"
                                        alt="author-img"
                                      />
                                    </Link>
                                    <Link href="/Calender/">
                                      <img
                                        src="img/author-2.png"
                                        alt="author-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <Link href="/Calender/">
                                  <img src="img/toggle-icon-5.svg" />
                                </Link>
                              </div>
                              <p>Completed Apr 20</p>
                              <p>Circle - Dashboard, Stats, and UI Kit</p>
                            </label>
                          </div>
                        </div>
                        <div className="crancy-my-task pd-btm-20 mg-btm-20 crancy-border-bottom">
                          <div className="crancy-single__task--date crancy-font-regular mg-btm-10">
                            <img src="img/calendar-icon-5.svg" />1 Apr, 2023
                          </div>
                          <div className="crancy-my-task__group">
                            <input
                              className="crancy-wc__form-check"
                              id="checkbox5"
                              name="checkbox5"
                              type="checkbox"
                            />
                            <label htmlFor="checkbox5" className="m-0">
                              <div className="crancy-my-task__inside crancy-flex-between">
                                <div className="crancy-my-task__title crancy-flex-center crancy-flex-gap-20">
                                  <h4 className="m-0">Kick off Project</h4>
                                  <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                                    <Link href="/Calender/">
                                      <img
                                        src="img/author-1.png"
                                        alt="author-img"
                                      />
                                    </Link>
                                    <Link href="/Calender/">
                                      <img
                                        src="img/author-2.png"
                                        alt="author-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <Link href="/Calender/">
                                  <img src="img/toggle-icon-5.svg" />
                                </Link>
                              </div>
                              <p>Completed Apr 20</p>
                              <p>Circle - Dashboard, Stats, and UI Kit</p>
                            </label>
                          </div>
                        </div>
                        <div className="crancy-my-task pd-btm-20 mg-btm-20 crancy-border-bottom">
                          <div className="crancy-single__task--date crancy-font-regular mg-btm-10">
                            <img src="img/calendar-icon-5.svg" />1 Apr, 2023
                          </div>
                          <div className="crancy-my-task__group">
                            <input
                              className="crancy-wc__form-check"
                              id="checkbox6"
                              name="checkbox6"
                              type="checkbox"
                            />
                            <label htmlFor="checkbox6" className="m-0">
                              <div className="crancy-my-task__inside crancy-flex-between">
                                <div className="crancy-my-task__title crancy-flex-center crancy-flex-gap-20">
                                  <h4 className="m-0">Kick off Project</h4>
                                  <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                                    <Link href="/Calender/">
                                      <img
                                        src="img/author-1.png"
                                        alt="author-img"
                                      />
                                    </Link>
                                    <Link href="/Calender/">
                                      <img
                                        src="img/author-2.png"
                                        alt="author-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <Link href="/Calender/">
                                  <img src="img/toggle-icon-5.svg" />
                                </Link>
                              </div>
                              <p>Completed Apr 20</p>
                              <p>Circle - Dashboard, Stats, and UI Kit</p>
                            </label>
                          </div>
                        </div>
                      </form>
                      <div className="crancy-flex-center">
                        <Link
                          href="/Calender/"
                          className="crancy-underline crancy-font-medium"
                        >
                          Show More Schedule
                        </Link>
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
