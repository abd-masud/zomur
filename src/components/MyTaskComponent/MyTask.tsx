import Link from "next/link";

export const MyTask = () => {
  return (
    <section className="crancy-adashboard crancy-show">
      <div className="container container__bscreen">
        <div className="row">
          <div className="col-12">
            <div className="crancy-body">
              <div className="crancy-dsinner">
                <div className="row row__bscreen">
                  <div className="col-xxl-3 col-lg-4 col-md-6 col-12 mg-top-30">
                    <div className="crancy-todolist__task--group">
                      <h3 className="crancy-todolist__heading">
                        <b>To Do</b> <span>(03)</span>
                      </h3>
                      <div className="crancy-todolist__task--button">
                        <Link href="/MyTask/">
                          <img src="img/plus-icon-default.svg" />
                        </Link>
                        <Link href="/MyTask/">
                          <img src="img/toggle-icon.svg" />
                        </Link>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">Implement Login</Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date">
                          <img src="img/calendar-icon-5.svg" /> Mar 20
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">Team Meeting </Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date">
                          <img src="img/calendar-icon-5.svg" /> Mar 20
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">Group Meeting</Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date">
                          <img src="img/calendar-icon-5.svg" /> Mar 20
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">USA Clients</Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date">
                          <img src="img/calendar-icon-5.svg" /> Mar 20
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-md-6 col-12 mg-top-30">
                    <div className="crancy-todolist__task--group">
                      <h3 className="crancy-todolist__heading">
                        <b className="crancy-color1">In Progress</b>
                        <span>(02)</span>
                      </h3>
                      <div className="crancy-todolist__task--button">
                        <Link href="/MyTask/">
                          <img src="img/plus-icon-default.svg" />
                        </Link>
                        <Link href="/MyTask/">
                          <img src="img/toggle-icon.svg" />
                        </Link>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">UI Adjustments</Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date crancy-color1__opacity--bg crancy-color1">
                          <img src="img/clock-icon.svg" /> 3 days left
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">Mobile Apps Fixing</Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date crancy-color1__opacity--bg crancy-color1">
                          <img src="img/clock-icon.svg" /> 7 days left
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">UI Adjustments</Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date crancy-color1__opacity--bg crancy-color1">
                          <img src="img/clock-icon.svg" /> 7 days left
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">Case Study</Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date crancy-color1__opacity--bg crancy-color1">
                          <img src="img/clock-icon.svg" /> 7 days left
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-md-6 col-12 mg-top-30">
                    <div className="crancy-todolist__task--group">
                      <h3 className="crancy-todolist__heading">
                        <b className="crancy-color5">In Review</b>
                        <span>(10)</span>
                      </h3>
                      <div className="crancy-todolist__task--button">
                        <Link href="/MyTask/">
                          <img src="img/plus-icon-default.svg" />
                        </Link>
                        <Link href="/MyTask/">
                          <img src="img/toggle-icon.svg" />
                        </Link>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">Design Landign Page</Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date">
                          <img src="img/calendar-icon-5.svg" /> Mar 20
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">Website Design</Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date">
                          <img src="img/calendar-icon-5.svg" /> Mar 20
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">NFT Lading Page</Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date">
                          <img src="img/calendar-icon-5.svg" /> Mar 20
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">Design Landing Page</Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date">
                          <img src="img/calendar-icon-5.svg" /> Mar 20
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-3 col-lg-4 col-md-6 col-12 mg-top-30">
                    <div className="crancy-todolist__task--group">
                      <h3 className="crancy-todolist__heading">
                        <b className="crancy-color8">Done</b> <span>(10)</span>
                      </h3>
                      <div className="crancy-todolist__task--button">
                        <Link href="/MyTask/">
                          <img src="img/plus-icon-default.svg" />
                        </Link>
                        <Link href="/MyTask/">
                          <img src="img/toggle-icon.svg" />
                        </Link>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">NFT Website</Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date">
                          <img src="img/calendar-icon-5.svg" /> Mar 30
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">Saas Product</Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date">
                          <img src="img/calendar-icon-5.svg" /> Mar 20
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">BankCo </Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date">
                          <img src="img/calendar-icon-5.svg" /> Mar 20
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="crancy-single__task mg-top-30">
                      <div className="crancy-single__task--header mg-btm-5">
                        <h4 className="crancy-single__task--title m-0">
                          <Link href="/MyTask/">Bizpa</Link>
                        </h4>
                        <div
                          className="crancy-single__task--toggle"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <img src="img/toggle-icon-5.svg" />
                        </div>
                      </div>
                      <p className="crancy-single__task--label">
                        <span className="crancy-active-dot"></span>Development
                      </p>
                      <div className="mg-top-20">
                        <p>
                          Richard McClintock, a Latin professor at login
                          Hampden-Sydney College in Virginia....
                        </p>
                      </div>
                      <div className="crancy-single__task--footer mg-top-20 pd-top-20 crancy-border-top">
                        <div className="crancy-single__task--date">
                          <img src="img/calendar-icon-5.svg" /> Mar 20
                        </div>
                        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity crancy-featured-user__lists m-0">
                          <Link href="/MyTask/">
                            <img src="img/author-1.png" alt="author-img" />
                          </Link>
                          <Link href="/MyTask/">
                            <img src="img/author-2.png" alt="author-img" />
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
      </div>
    </section>
  );
};
