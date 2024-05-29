import Link from "next/link";

export const ProfileOverview = () => {
  return (
    <section className="crancy-adashboard crancy-show">
      <div className="container container__bscreen">
        <div className="row row__bscreen">
          <div className="col-xxl-8 col-xl-9 col-12">
            <div className="crancy-userprofile__header mg-top-30">
              <img src="img/profile-cover.png" alt="#" />
              <div className="crancy-userprofile__right">
                <Link
                  href="/ProfileOverview/"
                  className="crancy-btn crancy-btn__profile"
                >
                  Edit Profile
                </Link>
              </div>
            </div>
            <div className="crancy-userprofile__bottom">
              <div className="crancy-upcard__thumb">
                <img src="img/profile-single-thumb.png" alt="#" />
                <div className="crancy-upcard__content">
                  <h4 className="crancy-upcard__title">AJOY Sarker</h4>
                  <Link
                    href="/ProfileOverview/"
                    className="crancy-upcard__text"
                  >
                    @ajoysarker
                  </Link>
                </div>
              </div>
              <ul className="crancy-userprofile__list">
                <li className="active">
                  <Link href="/ProfileOverview/">
                    Post <span>10,3K</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ProfileOverview/">
                    Followers <span>2,564</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ProfileOverview/">
                    Following <span>3,154</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ProfileOverview/">
                    Likes <span>12,2k</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ProfileOverview/">
                    Photos <span>35</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ProfileOverview/">
                    Videos <span>24</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ProfileOverview/">
                    Saved <span>18</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="bg-white crancy-bradius pd-15-20 mg-top-30">
                  <h5 className="mg-btm-20">Complete Your Profile</h5>
                  <div className="crancy-traffic-list__progress">
                    <div className="progress crancy-progressbar__single crancy-progressbar__single--v2">
                      <div
                        className="progress-bar crancy-progressbar__bar crancy-progressbar__single--v2 crancy-color1__bg"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white crancy-bradius crancy-bradius mg-top-30">
                  <div className="crancy-flex-between crancy-border-bottom pd-15-20">
                    <h4 className="crancy-unfilled__title m-0">About Me</h4>
                    <Link
                      href="/ProfileOverview/"
                      className="crancy-sidebar__toggles"
                    >
                      <img src="img/toggle-icon-3.svg" />
                    </Link>
                  </div>
                  <div className="pd-15-20">
                    <div className="crancy-border-bottom pd-btm-15">
                      <p className="m-0">
                        “Pushing pixels and experiences in digital products for
                        Sebostudio”
                      </p>
                    </div>
                  </div>
                  <ul className="crancy-about-list pd-15-20">
                    <li>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="21"
                          viewBox="0 0 18 21"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 13C11.2091 13 13 11.2091 13 9C13 6.79086 11.2091 5 9 5C6.79086 5 5 6.79086 5 9C5 11.2091 6.79086 13 9 13ZM9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11Z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 8.87006C0 3.96756 4.03307 0 9 0C13.9669 0 18 3.96756 18 8.87006C18 11.2916 17.0094 13.5597 15.295 15.2093L9.70134 20.7128C9.31219 21.0957 8.68788 21.0957 8.29871 20.7129L2.69735 15.2024C0.984442 13.5459 0 11.2842 0 8.87006ZM13.9003 13.7759C15.2357 12.4909 16 10.7409 16 8.87006C16 5.07953 12.8696 2 9 2C5.13037 2 2 5.07953 2 8.87006C2 10.7352 2.75964 12.4804 4.09383 13.7707L8.99996 18.5972L13.9003 13.7759Z"
                          />
                        </svg>
                        Dhaka, Bangladesh
                      </p>
                    </li>
                    <li>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.0377 7.9746V11H15.9738C15.9113 9.81198 15.7393 8.69949 15.4857 7.70394C14.6997 7.8418 13.8791 7.93323 13.0377 7.9746ZM11.0377 7.97817C10.1699 7.93864 9.32374 7.84591 8.51427 7.70393C8.26072 8.69949 8.08873 9.81198 8.02618 11H11.0377V7.97817ZM13.0377 15.4187C13.9278 15.4625 14.7945 15.5622 15.6218 15.7138C15.8009 14.8733 15.9232 13.9614 15.9738 13H13.0377V15.4187ZM11.0377 15.4151V13H8.02618C8.07679 13.9614 8.19908 14.8733 8.37825 15.7138C9.22878 15.558 10.1211 15.4569 11.0377 15.4151ZM13.0377 17.4214V20.6577C13.8152 20.1441 14.5325 19.0794 15.0665 17.6465C14.4167 17.5357 13.7369 17.4595 13.0377 17.4214ZM11.0377 17.4175C10.3119 17.4541 9.60657 17.5317 8.9335 17.6465C9.48472 19.1257 10.2313 20.2124 11.0377 20.7056V17.4175ZM13.0377 5.9719C13.6548 5.9383 14.2568 5.87502 14.8364 5.78441C14.3343 4.63851 13.7084 3.78536 13.0377 3.34233V5.9719ZM11.0377 5.97585V3.29436C10.3386 3.72198 9.68444 4.59567 9.16358 5.7844C9.76672 5.87869 10.3942 5.9434 11.0377 5.97585ZM3.05493 11H6.02331C6.08564 9.66991 6.27155 8.40289 6.56376 7.24514C5.94076 7.05779 5.35285 6.83766 4.80902 6.58714C3.86225 7.84293 3.23682 9.35463 3.05493 11ZM3.05493 13C3.21544 14.452 3.72139 15.8 4.48877 16.9598C5.08216 16.6635 5.73396 16.4053 6.43124 16.1887C6.21501 15.1884 6.07562 14.1164 6.02331 13H3.05493ZM20.9451 11C20.7632 9.35462 20.1377 7.84293 19.191 6.58713C18.6471 6.83767 18.0592 7.05779 17.4362 7.24514C17.7284 8.40289 17.9144 9.66991 17.9767 11H20.9451ZM20.9451 13H17.9767C17.9244 14.1164 17.785 15.1884 17.5688 16.1887C18.266 16.4053 18.9178 16.6635 19.5112 16.9598C20.2786 15.8 20.7846 14.452 20.9451 13ZM7.8023 19.9632C7.48915 19.406 7.21136 18.7858 6.97333 18.1143C6.56714 18.2423 6.18177 18.3859 5.82103 18.5438C6.41161 19.1016 7.07768 19.5804 7.8023 19.9632ZM16.1977 19.9632C16.9223 19.5804 17.5884 19.1016 18.1789 18.5438C17.8182 18.3859 17.4328 18.2423 17.0267 18.1143C16.7886 18.7858 16.5108 19.406 16.1977 19.9632ZM7.8023 4.03684C7.26398 4.3212 6.75798 4.65854 6.29124 5.04193C6.57499 5.15037 6.87152 5.25058 7.17926 5.34205C7.36728 4.87688 7.57552 4.44033 7.8023 4.03684ZM16.1977 4.03684C16.4245 4.44033 16.6327 4.87688 16.8207 5.34204C17.1284 5.25057 17.425 5.15036 17.7087 5.04191C17.242 4.65853 16.736 4.32119 16.1977 4.03684ZM12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23Z"
                          />
                        </svg>
                        dribbble.com/ajoysatker
                      </p>
                    </li>
                    <li>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.49506 5.8C8.44489 6.30533 8.01853 6.7 7.5 6.7C6.98147 6.7 6.55511 6.30533 6.50494 5.8H4V7.4H20V5.8H18.3951C18.3449 6.30533 17.9185 6.7 17.4 6.7C16.8815 6.7 16.4551 6.30533 16.4049 5.8H8.49506ZM6.5 3.8V3C6.5 2.44772 6.94772 2 7.5 2C8.05228 2 8.5 2.44772 8.5 3V3.8H16.4V3C16.4 2.44772 16.8477 2 17.4 2C17.9523 2 18.4 2.44772 18.4 3V3.8H20.1C21.1493 3.8 22 4.65066 22 5.7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5.7C2 4.65066 2.85066 3.8 3.9 3.8H6.5ZM20 9.4H4V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V9.4ZM6.6 13C6.04772 13 5.6 12.5523 5.6 12C5.6 11.4477 6.04772 11 6.6 11H10.2C10.7523 11 11.2 11.4477 11.2 12C11.2 12.5523 10.7523 13 10.2 13H6.6ZM6.6 16.6C6.04772 16.6 5.6 16.1523 5.6 15.6C5.6 15.0477 6.04772 14.6 6.6 14.6H13.8C14.3523 14.6 14.8 15.0477 14.8 15.6C14.8 16.1523 14.3523 16.6 13.8 16.6H6.6Z"
                          />
                        </svg>
                        Joined June 2012
                      </p>
                    </li>
                    <li>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17 6H20C21.6569 6 23 7.34315 23 9V19C23 20.6569 21.6569 22 20 22H4C2.34315 22 1 20.6569 1 19V9C1 7.34315 2.34315 6 4 6H7C7 4.34315 8.34315 3 10 3H14C15.6569 3 17 4.34315 17 6ZM6.5 8V20H17.5V8H6.5ZM19.5 8V20H20C20.5523 20 21 19.5523 21 19V9C21 8.44772 20.5523 8 20 8H19.5ZM4 8H4.5V20H4C3.44772 20 3 19.5523 3 19V9C3 8.44772 3.44772 8 4 8ZM15 6C15 5.44772 14.5523 5 14 5H10C9.44772 5 9 5.44772 9 6H15Z"
                          />
                        </svg>
                        Working at Sebo Studio
                      </p>
                    </li>
                    <li>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13 10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H13V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V12H9C8.44772 12 8 11.5523 8 11C8 10.4477 8.44772 10 9 10H11V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V10ZM9.69613 21.0598L3.03052 14.1928C0.32316 11.4037 0.32316 6.89356 3.03052 4.10441C5.46229 1.59917 9.26809 1.32338 12 3.31651C14.7319 1.32338 18.5377 1.59917 20.9695 4.10441C23.6768 6.89356 23.6768 11.4037 20.9695 14.1928L14.3039 21.0598C13.6897 21.6925 12.8562 22.025 12 21.9986C11.1438 22.025 10.3103 21.6925 9.69613 21.0598ZM11.9543 19.9989H12.0457C12.3494 20.0128 12.645 19.8974 12.8688 19.6668L19.5344 12.7998C21.4885 10.7866 21.4885 7.51062 19.5344 5.49742C17.6536 3.55985 14.6385 3.49697 12.6869 5.34162C12.3014 5.70598 11.6986 5.70598 11.3131 5.34162C9.36152 3.49697 6.34638 3.55985 4.46562 5.49742C2.51146 7.51062 2.51146 10.7866 4.46562 12.7998L11.1312 19.6668C11.355 19.8974 11.6506 20.0128 11.9543 19.9989Z"
                          />
                        </svg>
                        In relationship with Figma
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="bg-white crancy-bradius pd-15-20 mg-top-30">
                  <div className="crancy-flex-between crancy-border-bottom pd-btm-15 mg-btm-20">
                    <h5 className="m-0">Photos and Videos</h5>
                    <Link href="/ProfileOverview/" className="crancy-color1">
                      SEE ALL
                    </Link>
                  </div>

                  <ul className="crancy-photos-list">
                    <li>
                      <Link href="img/gallery-1.png" data-fancybox="p_gallery">
                        <img src="img/photos-1.png" />
                      </Link>
                    </li>
                    <li>
                      <Link href="img/gallery-2.png" data-fancybox="p_gallery">
                        <img src="img/photos-2.png" />
                      </Link>
                    </li>
                    <li>
                      <Link href="img/gallery-3.png" data-fancybox="p_gallery">
                        <img src="img/photos-3.png" />
                      </Link>
                    </li>
                    <li>
                      <Link href="img/gallery-4.png" data-fancybox="p_gallery">
                        <img src="img/photos-4.png" />
                      </Link>
                    </li>
                    <li>
                      <Link href="img/gallery-5.png" data-fancybox="p_gallery">
                        <img src="img/photos-5.png" />
                      </Link>
                    </li>
                    <li>
                      <Link href="img/gallery-6.png" data-fancybox="p_gallery">
                        <img src="img/photos-6.png" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <div className="bg-white crancy-bradius crancy-bradius mg-top-30">
                  <div className="crancy-flex-between crancy-border-bottom pd-15-20">
                    <h4 className="crancy-unfilled__title m-0">
                      Post Something
                    </h4>
                    {/* <!-- <Link href="/ProfileOverview/" className="crancy-sidebar__toggles"
                        ><img src="img/toggle-icon-4.svg"
                      /></Link> --> */}
                  </div>
                  <div className="pd-15-20">
                    <form>
                      <div className="author-post">
                        <img
                          className="crancy-img-small-circle"
                          src="img/profile-single-thumb.png"
                        />
                        <input placeholder="What’s on your mind?" />
                        <div className="author-post__file">
                          <input
                            id="file-input1"
                            type="file"
                            className="d-none"
                          />
                          <label
                            className="author-post__icon"
                            htmlFor="file-input1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M22.5 18.65C22.5 20.5061 20.9274 22 19 22H5C3.07258 22 1.5 20.5061 1.5 18.65V5.35C1.5 3.49395 3.07258 2 5 2H19C20.9274 2 22.5 3.49395 22.5 5.35V18.65ZM21.5 15.0708L16.7865 10.775L12.0725 15.0284L17.4604 21H19C20.3863 21 21.5 19.942 21.5 18.65V15.0708ZM21.5 13.7178V5.35C21.5 4.05803 20.3863 3 19 3H5C3.61372 3 2.5 4.05803 2.5 5.35V17.445L8.31356 11.646C8.51602 11.444 8.84633 11.4527 9.0379 11.6651L11.4026 14.2859L16.4533 9.72878C16.6443 9.55643 16.9349 9.55716 17.125 9.73045L21.5 13.7178ZM16.1135 21L8.64759 12.7253L2.50884 18.8487C2.61604 20.0487 3.68548 21 5 21H16.1135ZM8.19048 8.7C7.12564 8.7 6.2619 7.83843 6.2619 6.775C6.2619 5.71157 7.12564 4.85 8.19048 4.85C9.25532 4.85 10.119 5.71157 10.119 6.775C10.119 7.83843 9.25532 8.7 8.19048 8.7ZM8.19048 7.7C8.70359 7.7 9.11905 7.28558 9.11905 6.775C9.11905 6.26442 8.70359 5.85 8.19048 5.85C7.67736 5.85 7.2619 6.26442 7.2619 6.775C7.2619 7.28558 7.67736 7.7 8.19048 7.7Z"
                                fill="#5D6A83"
                              />
                            </svg>
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="bg-white crancy-bradius crancy-bradius mg-top-30">
                  <div className="crancy-flex-between pd-15-20">
                    <div className="author-post-profile crancy-flex-center crancy-flex-gap-10">
                      <img
                        className="crancy-img-medium-circle"
                        src="img/profile-single-thumb.png"
                        alt="#"
                      />
                      <div className="author-post-content">
                        <h6 className="m-0">
                          <Link href="/ProfileOverview/">
                            <span className="crancy-sidebar__history-title">
                              Ahmad Nur Fawaid
                            </span>
                          </Link>
                        </h6>
                        <p>12 April at 09.28 PM</p>
                      </div>
                    </div>
                    <Link
                      href="/ProfileOverview/"
                      className="crancy-sidebar__toggles"
                    >
                      <img src="img/toggle-icon-4.svg" />
                    </Link>
                  </div>
                  <div className="pd-15-20">
                    <p className="m-0">
                      Peace On Earth A Wonderful Wish But No Way
                    </p>
                  </div>
                  <div className="pd-top-20 mg-top-20 mg-btm-20 crancy-border-top mg-left-20 mg-right-20">
                    <ul className="author-post-meta">
                      <li>
                        <Link href="/ProfileOverview/">
                          <span className="author-post-icon">
                            <svg
                              className=""
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.5139 18.2841L8.06545 21.6848C7.0587 22.4545 5.61004 21.7355 5.60796 20.4701L5.60414 18.1541C3.53288 17.656 2 15.7858 2 13.564V7.72006C2 5.11409 4.10604 3 6.70588 3H17.2941C19.894 3 22 5.11409 22 7.72006V13.564C22 16.17 19.894 18.2841 17.2941 18.2841H12.5139ZM7.60639 19.5183L11.5682 16.4896C11.7426 16.3563 11.956 16.2841 12.1755 16.2841H17.2941C18.7877 16.2841 20 15.0671 20 13.564V7.72006C20 6.21696 18.7877 5 17.2941 5H6.70588C5.21232 5 4 6.21696 4 7.72006V13.564C4 15.0388 5.16906 16.243 6.63013 16.2831C7.17089 16.2979 7.60181 16.7401 7.6027 17.281L7.60639 19.5183Z"
                                fill="#5D6A83"
                              />
                            </svg>
                          </span>
                          25 Comments
                        </Link>
                      </li>
                      <li>
                        <Link href="/ProfileOverview/">
                          <span className="author-post-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 4.12905L12.2215 3.9013C14.6871 1.36623 18.6965 1.36623 21.1621 3.9013C23.6126 6.42082 23.6126 10.4946 21.1621 13.0141L13.4337 20.9602C12.6636 21.752 11.3974 21.7696 10.6056 20.9994C10.5857 20.98 10.5857 20.98 10.5663 20.9602L2.83787 13.0141C0.387375 10.4946 0.387375 6.42082 2.83787 3.9013C5.3035 1.36623 9.31287 1.36623 11.7785 3.9013L12 4.12905ZM19.7284 11.6196C21.4239 9.87644 21.4239 7.03895 19.7284 5.29574C18.0481 3.56809 15.3355 3.56809 13.6552 5.29574L12.7169 6.26053C12.3242 6.66424 11.6758 6.66424 11.2831 6.26053L10.3448 5.29574C8.66445 3.56809 5.95192 3.56809 4.27159 5.29574C2.57614 7.03895 2.57614 9.87644 4.27159 11.6196L12 19.5657L19.7284 11.6196Z"
                                fill="#5D6A83"
                              />
                            </svg>
                          </span>
                          120k Likes
                        </Link>
                      </li>
                      <li>
                        <Link href="/ProfileOverview/">
                          <span className="author-post-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15 5C15 2.79086 16.7909 1 19 1C21.2091 1 23 2.79086 23 5C23 7.20914 21.2091 9 19 9C17.6346 9 16.429 8.31588 15.7072 7.27171L8.76803 10.6544C8.91821 11.0749 9 11.5279 9 12C9 12.4395 8.92912 12.8624 8.79816 13.258L15.6976 16.7423C16.4182 15.6903 17.6285 15 19 15C21.2091 15 23 16.7909 23 19C23 21.2091 21.2091 23 19 23C16.7909 23 15 21.2091 15 19C15 18.8782 15.0054 18.7577 15.0161 18.6387L7.70513 14.9466C6.99302 15.6007 6.04314 16 5 16C2.79086 16 1 14.2091 1 12C1 9.79086 2.79086 8 5 8C6.0062 8 6.92562 8.37152 7.62857 8.98486L15.0181 5.38268C15.0061 5.25673 15 5.12908 15 5ZM21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7C20.1046 7 21 6.10457 21 5ZM21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21C20.1046 21 21 20.1046 21 19ZM5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"
                                fill="#5D6A83"
                              />
                            </svg>
                          </span>
                          231 Share
                        </Link>
                      </li>
                      <li>
                        <Link href="/ProfileOverview/">
                          <span className="author-post-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.85713 1.04785H17.1428C19.2468 1.04785 20.9524 2.75343 20.9524 4.85738V20.2121C20.9524 21.2641 20.0996 22.1169 19.0476 22.1169C18.615 22.1169 18.1954 21.9697 17.8576 21.6994L12.5 17.4128L7.14236 21.6994C6.32095 22.3567 5.12229 22.2235 4.46508 21.4021C4.19484 21.0644 4.04761 20.6447 4.04761 20.2121V4.85738C4.04761 2.75343 5.75319 1.04785 7.85713 1.04785ZM7.85713 2.95261C6.80516 2.95261 5.95237 3.8054 5.95237 4.85738V20.2121L11.31 15.9255C12.0057 15.3689 12.9943 15.3689 13.69 15.9255L19.0476 20.2121V4.85738C19.0476 3.8054 18.1948 2.95261 17.1428 2.95261H7.85713Z"
                                fill="#5D6A83"
                              />
                            </svg>
                          </span>
                          12 Saved
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="pd-15-20 crancy-border-top">
                    <form>
                      <div className="author-post author-post--v2">
                        <img
                          className="crancy-img-small-circle"
                          src="img/profile-single-thumb.png"
                        />
                        <div className="author-post__inner crancy-flex-center crancy-width-100">
                          <input placeholder="Write your comment…" />
                          <div className="author-post__right">
                            <div className="author-post__file">
                              <input
                                id="file-input1"
                                type="file"
                                className="d-none"
                              />
                              <label
                                className="author-post__icon m-0"
                                htmlFor="file-input1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.533 17.5008C10.5532 18.4254 9.00922 18.4083 8.05035 17.4494C7.07404 16.4731 7.07404 14.8902 8.05035 13.9139L15.8285 6.1357C16.0238 5.94044 16.3404 5.94044 16.5356 6.1357C16.7309 6.33097 16.7309 6.64755 16.5356 6.84281L8.75745 14.621C8.17167 15.2068 8.17167 16.1565 8.75745 16.7423C9.34324 17.3281 10.293 17.3281 10.8788 16.7423L18.6569 8.96413C20.0238 7.5973 20.0238 5.38122 18.6569 4.01438C17.2901 2.64755 15.074 2.64755 13.7072 4.01438L5.92903 11.7926C3.78114 13.9404 3.78114 17.4229 5.92903 19.5707C8.07691 21.7186 11.5593 21.7186 13.7072 19.5707L20.0712 13.2068C20.2664 13.0115 20.583 13.0115 20.7783 13.2068C20.9735 13.402 20.9735 13.7186 20.7783 13.9139L14.4143 20.2778C11.8759 22.8162 7.76033 22.8162 5.22192 20.2778C2.70091 17.7568 2.68363 13.6802 5.17008 11.1379L13.0001 3.30728C14.7575 1.54992 17.6067 1.54992 19.3641 3.30728C21.1214 5.06464 21.1214 7.91388 19.3641 9.67124L11.5337 17.5015L11.533 17.5008Z"
                                  />
                                </svg>
                              </label>
                            </div>
                            <div className="author-post__file">
                              <input
                                id="file-input2"
                                type="file"
                                className="d-none"
                              />
                              <label
                                className="author-post__icon m-0"
                                htmlFor="file-input2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path d="M7.70702 16.4196C7.48593 16.2541 7.44083 15.9408 7.60628 15.7197C7.77173 15.4986 8.08508 15.4535 8.30617 15.619C10.3073 17.1165 13.7545 17.1258 15.6977 15.6237C15.9162 15.4548 16.2302 15.495 16.3991 15.7135C16.568 15.932 16.5278 16.246 16.3093 16.4149C14.007 18.1945 10.0646 18.1839 7.70702 16.4196Z" />
                                  <path d="M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z" />
                                  <path d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z" />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12ZM21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z"
                                  />
                                </svg>
                              </label>
                            </div>
                            <div className="author-post__file">
                              <input
                                id="file-input3"
                                type="file"
                                className="d-none"
                              />
                              <label
                                className="author-post__icon m-0"
                                htmlFor="file-input3"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M22.5 18.65C22.5 20.5061 20.9274 22 19 22H5C3.07258 22 1.5 20.5061 1.5 18.65V5.35C1.5 3.49395 3.07258 2 5 2H19C20.9274 2 22.5 3.49395 22.5 5.35V18.65ZM21.5 15.0708L16.7865 10.775L12.0725 15.0284L17.4604 21H19C20.3863 21 21.5 19.942 21.5 18.65V15.0708ZM21.5 13.7178V5.35C21.5 4.05803 20.3863 3 19 3H5C3.61372 3 2.5 4.05803 2.5 5.35V17.445L8.31356 11.646C8.51602 11.444 8.84633 11.4527 9.0379 11.6651L11.4026 14.2859L16.4533 9.72878C16.6443 9.55643 16.9349 9.55716 17.125 9.73045L21.5 13.7178ZM16.1135 21L8.64759 12.7253L2.50884 18.8487C2.61604 20.0487 3.68548 21 5 21H16.1135ZM8.19048 8.7C7.12564 8.7 6.2619 7.83843 6.2619 6.775C6.2619 5.71157 7.12564 4.85 8.19048 4.85C9.25532 4.85 10.119 5.71157 10.119 6.775C10.119 7.83843 9.25532 8.7 8.19048 8.7ZM8.19048 7.7C8.70359 7.7 9.11905 7.28558 9.11905 6.775C9.11905 6.26442 8.70359 5.85 8.19048 5.85C7.67736 5.85 7.2619 6.26442 7.2619 6.775C7.2619 7.28558 7.67736 7.7 8.19048 7.7Z"
                                  />
                                </svg>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="bg-white crancy-bradius crancy-bradius mg-top-30">
                  <div className="crancy-flex-between pd-15-20">
                    <div className="author-post-profile crancy-flex-center crancy-flex-gap-10">
                      <img
                        className="crancy-img-medium-circle"
                        src="img/profile-single-thumb.png"
                        alt="#"
                      />
                      <div className="author-post-content">
                        <h6 className="m-0">
                          <Link href="/ProfileOverview/">
                            <span className="crancy-sidebar__history-title">
                              Ahmad Nur Fawaid
                            </span>
                          </Link>
                        </h6>
                        <p>12 April at 09.28 PM</p>
                      </div>
                    </div>
                    <Link
                      href="/ProfileOverview/"
                      className="crancy-sidebar__toggles"
                    >
                      <img src="img/toggle-icon-4.svg" />
                    </Link>
                  </div>
                  <div className="pd-15-20">
                    <p className="m-0">
                      One of the perks of working in an international company is
                      sharing knowledge with your colleagues.
                    </p>
                    <div className="row author-post-images gap-small">
                      <div className="col-lg-6 col-md-6 col-12 mg-top-15">
                        <div className="posted-img">
                          <Link
                            className="crancy-width-100"
                            href="img/post-image1.jpg"
                            data-fancybox="p_gallery2"
                          >
                            <img
                              className="crancy-width-100"
                              src="img/post-image1.jpg"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 mg-top-15">
                        <div className="posted-img">
                          <Link
                            className="crancy-width-100"
                            href="img/post-image2.jpg"
                            data-fancybox="p_gallery2"
                          >
                            <img
                              className="crancy-width-100"
                              src="img/post-image2.jpg"
                            />
                          </Link>
                        </div>
                        <div className="posted-img mg-top-15">
                          <Link
                            href="img/post-image3.jpg"
                            data-fancybox="p_gallery2"
                            className="crancy-width-100"
                          >
                            <img
                              className="crancy-width-100"
                              src="img/post-image3.jpg"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pd-top-20 mg-top-20 mg-btm-20 crancy-border-top mg-left-20 mg-right-20">
                    <ul className="author-post-meta">
                      <li>
                        <Link href="/ProfileOverview/">
                          <span className="author-post-icon">
                            <svg
                              className=""
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.5139 18.2841L8.06545 21.6848C7.0587 22.4545 5.61004 21.7355 5.60796 20.4701L5.60414 18.1541C3.53288 17.656 2 15.7858 2 13.564V7.72006C2 5.11409 4.10604 3 6.70588 3H17.2941C19.894 3 22 5.11409 22 7.72006V13.564C22 16.17 19.894 18.2841 17.2941 18.2841H12.5139ZM7.60639 19.5183L11.5682 16.4896C11.7426 16.3563 11.956 16.2841 12.1755 16.2841H17.2941C18.7877 16.2841 20 15.0671 20 13.564V7.72006C20 6.21696 18.7877 5 17.2941 5H6.70588C5.21232 5 4 6.21696 4 7.72006V13.564C4 15.0388 5.16906 16.243 6.63013 16.2831C7.17089 16.2979 7.60181 16.7401 7.6027 17.281L7.60639 19.5183Z"
                                fill="#5D6A83"
                              />
                            </svg>
                          </span>
                          25 Comments
                        </Link>
                      </li>
                      <li>
                        <Link href="/ProfileOverview/">
                          <span className="author-post-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 4.12905L12.2215 3.9013C14.6871 1.36623 18.6965 1.36623 21.1621 3.9013C23.6126 6.42082 23.6126 10.4946 21.1621 13.0141L13.4337 20.9602C12.6636 21.752 11.3974 21.7696 10.6056 20.9994C10.5857 20.98 10.5857 20.98 10.5663 20.9602L2.83787 13.0141C0.387375 10.4946 0.387375 6.42082 2.83787 3.9013C5.3035 1.36623 9.31287 1.36623 11.7785 3.9013L12 4.12905ZM19.7284 11.6196C21.4239 9.87644 21.4239 7.03895 19.7284 5.29574C18.0481 3.56809 15.3355 3.56809 13.6552 5.29574L12.7169 6.26053C12.3242 6.66424 11.6758 6.66424 11.2831 6.26053L10.3448 5.29574C8.66445 3.56809 5.95192 3.56809 4.27159 5.29574C2.57614 7.03895 2.57614 9.87644 4.27159 11.6196L12 19.5657L19.7284 11.6196Z"
                                fill="#5D6A83"
                              />
                            </svg>
                          </span>
                          120k Likes
                        </Link>
                      </li>
                      <li>
                        <Link href="/ProfileOverview/">
                          <span className="author-post-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15 5C15 2.79086 16.7909 1 19 1C21.2091 1 23 2.79086 23 5C23 7.20914 21.2091 9 19 9C17.6346 9 16.429 8.31588 15.7072 7.27171L8.76803 10.6544C8.91821 11.0749 9 11.5279 9 12C9 12.4395 8.92912 12.8624 8.79816 13.258L15.6976 16.7423C16.4182 15.6903 17.6285 15 19 15C21.2091 15 23 16.7909 23 19C23 21.2091 21.2091 23 19 23C16.7909 23 15 21.2091 15 19C15 18.8782 15.0054 18.7577 15.0161 18.6387L7.70513 14.9466C6.99302 15.6007 6.04314 16 5 16C2.79086 16 1 14.2091 1 12C1 9.79086 2.79086 8 5 8C6.0062 8 6.92562 8.37152 7.62857 8.98486L15.0181 5.38268C15.0061 5.25673 15 5.12908 15 5ZM21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7C20.1046 7 21 6.10457 21 5ZM21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21C20.1046 21 21 20.1046 21 19ZM5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"
                                fill="#5D6A83"
                              />
                            </svg>
                          </span>
                          231 Share
                        </Link>
                      </li>
                      <li>
                        <Link href="/ProfileOverview/">
                          <span className="author-post-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.85713 1.04785H17.1428C19.2468 1.04785 20.9524 2.75343 20.9524 4.85738V20.2121C20.9524 21.2641 20.0996 22.1169 19.0476 22.1169C18.615 22.1169 18.1954 21.9697 17.8576 21.6994L12.5 17.4128L7.14236 21.6994C6.32095 22.3567 5.12229 22.2235 4.46508 21.4021C4.19484 21.0644 4.04761 20.6447 4.04761 20.2121V4.85738C4.04761 2.75343 5.75319 1.04785 7.85713 1.04785ZM7.85713 2.95261C6.80516 2.95261 5.95237 3.8054 5.95237 4.85738V20.2121L11.31 15.9255C12.0057 15.3689 12.9943 15.3689 13.69 15.9255L19.0476 20.2121V4.85738C19.0476 3.8054 18.1948 2.95261 17.1428 2.95261H7.85713Z"
                                fill="#5D6A83"
                              />
                            </svg>
                          </span>
                          12 Saved
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="pd-15-20 crancy-border-top">
                    <form>
                      <div className="author-post author-post--v2">
                        <img
                          className="crancy-img-small-circle"
                          src="img/profile-single-thumb.png"
                        />
                        <div className="author-post__inner crancy-flex-center crancy-width-100">
                          <input placeholder="Write your comment…" />
                          <div className="author-post__right">
                            <div className="author-post__file">
                              <input
                                id="file-input1"
                                type="file"
                                className="d-none"
                              />
                              <label
                                className="author-post__icon m-0"
                                htmlFor="file-input1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.533 17.5008C10.5532 18.4254 9.00922 18.4083 8.05035 17.4494C7.07404 16.4731 7.07404 14.8902 8.05035 13.9139L15.8285 6.1357C16.0238 5.94044 16.3404 5.94044 16.5356 6.1357C16.7309 6.33097 16.7309 6.64755 16.5356 6.84281L8.75745 14.621C8.17167 15.2068 8.17167 16.1565 8.75745 16.7423C9.34324 17.3281 10.293 17.3281 10.8788 16.7423L18.6569 8.96413C20.0238 7.5973 20.0238 5.38122 18.6569 4.01438C17.2901 2.64755 15.074 2.64755 13.7072 4.01438L5.92903 11.7926C3.78114 13.9404 3.78114 17.4229 5.92903 19.5707C8.07691 21.7186 11.5593 21.7186 13.7072 19.5707L20.0712 13.2068C20.2664 13.0115 20.583 13.0115 20.7783 13.2068C20.9735 13.402 20.9735 13.7186 20.7783 13.9139L14.4143 20.2778C11.8759 22.8162 7.76033 22.8162 5.22192 20.2778C2.70091 17.7568 2.68363 13.6802 5.17008 11.1379L13.0001 3.30728C14.7575 1.54992 17.6067 1.54992 19.3641 3.30728C21.1214 5.06464 21.1214 7.91388 19.3641 9.67124L11.5337 17.5015L11.533 17.5008Z"
                                  />
                                </svg>
                              </label>
                            </div>
                            <div className="author-post__file">
                              <input
                                id="file-input2"
                                type="file"
                                className="d-none"
                              />
                              <label
                                className="author-post__icon m-0"
                                htmlFor="file-input2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path d="M7.70702 16.4196C7.48593 16.2541 7.44083 15.9408 7.60628 15.7197C7.77173 15.4986 8.08508 15.4535 8.30617 15.619C10.3073 17.1165 13.7545 17.1258 15.6977 15.6237C15.9162 15.4548 16.2302 15.495 16.3991 15.7135C16.568 15.932 16.5278 16.246 16.3093 16.4149C14.007 18.1945 10.0646 18.1839 7.70702 16.4196Z" />
                                  <path d="M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z" />
                                  <path d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z" />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12ZM21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z"
                                  />
                                </svg>
                              </label>
                            </div>
                            <div className="author-post__file">
                              <input
                                id="file-input3"
                                type="file"
                                className="d-none"
                              />
                              <label
                                className="author-post__icon m-0"
                                htmlFor="file-input3"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M22.5 18.65C22.5 20.5061 20.9274 22 19 22H5C3.07258 22 1.5 20.5061 1.5 18.65V5.35C1.5 3.49395 3.07258 2 5 2H19C20.9274 2 22.5 3.49395 22.5 5.35V18.65ZM21.5 15.0708L16.7865 10.775L12.0725 15.0284L17.4604 21H19C20.3863 21 21.5 19.942 21.5 18.65V15.0708ZM21.5 13.7178V5.35C21.5 4.05803 20.3863 3 19 3H5C3.61372 3 2.5 4.05803 2.5 5.35V17.445L8.31356 11.646C8.51602 11.444 8.84633 11.4527 9.0379 11.6651L11.4026 14.2859L16.4533 9.72878C16.6443 9.55643 16.9349 9.55716 17.125 9.73045L21.5 13.7178ZM16.1135 21L8.64759 12.7253L2.50884 18.8487C2.61604 20.0487 3.68548 21 5 21H16.1135ZM8.19048 8.7C7.12564 8.7 6.2619 7.83843 6.2619 6.775C6.2619 5.71157 7.12564 4.85 8.19048 4.85C9.25532 4.85 10.119 5.71157 10.119 6.775C10.119 7.83843 9.25532 8.7 8.19048 8.7ZM8.19048 7.7C8.70359 7.7 9.11905 7.28558 9.11905 6.775C9.11905 6.26442 8.70359 5.85 8.19048 5.85C7.67736 5.85 7.2619 6.26442 7.2619 6.775C7.2619 7.28558 7.67736 7.7 8.19048 7.7Z"
                                  />
                                </svg>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-3 col-12">
            <div className="profile-sidebar-meta crancy-flex-between crancy-flex-wrap crancy-flex-gap-15 mg-top-30">
              <h4 className="crancy-default__title m-0">Friends List</h4>
              <div className="crancy-flex-center crancy-flex-gap-5 crancy-flex-wrap">
                <Link href="" className="profile-sidebar-meta__single">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.6829 4.6829C1.1057 8.2601 1.1057 14.0599 4.6829 17.6371C8.2601 21.2143 14.0599 21.2143 17.6371 17.6371C21.2143 14.0599 21.2143 8.2601 17.6371 4.6829C14.0599 1.1057 8.2601 1.1057 4.6829 4.6829ZM6.09712 6.09712C8.89327 3.30096 13.4267 3.30096 16.2229 6.09712C19.019 8.89327 19.019 13.4267 16.2229 16.2229C13.4267 19.019 8.89327 19.019 6.09712 16.2229C3.30096 13.4267 3.30096 8.89327 6.09712 6.09712Z"
                      fill="#92929D"
                    />
                    <path
                      d="M22.0943 20.2825L17.9649 16.153C17.0221 15.2102 15.6078 16.6244 16.5506 17.5672L20.6801 21.6967C21.6229 22.6395 23.0371 21.2253 22.0943 20.2825Z"
                      fill="#92929D"
                    />
                  </svg>
                </Link>
                <div className="crancy-table-meta__single profile-sidebar-meta__single">
                  <span className="crancy-table-meta__label">Sort by:</span>
                  <select
                    className="form-select crancy__item-input"
                    aria-label="Newest First"
                  >
                    <option selected>Newest First</option>
                    <option value="1">Popular</option>
                    <option value="2">Trending</option>
                  </select>
                </div>
                <Link
                  href=""
                  className="profile-sidebar-meta__single profile-sidebar-meta__single--filter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9999 12.9125V18C14.9999 18.3788 14.7859 18.725 14.4472 18.8944L10.4472 20.8944C9.78226 21.2269 8.99994 20.7434 8.99994 20V12.9125L2.22599 4.63324C1.69177 3.98031 2.15632 3 2.99994 3H20.9999C21.8436 3 22.3081 3.98031 21.7739 4.63324L14.9999 12.9125ZM12.9999 17.382V12.5556C12.9999 12.3247 13.0798 12.101 13.226 11.9223L18.8897 5H5.11019L10.7739 11.9223C10.9201 12.101 10.9999 12.3247 10.9999 12.5556V18.382L12.9999 17.382Z"
                      fill="#92929D"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="crancy-friends-card bg-white mg-top-30 crancy-bradius-12">
              <div className="crancy-friends-card__cover">
                <img className="crancy-width-100" src="img/friend-cover1.jpg" />
              </div>
              <div className="crancy-friends-card__body crancy-flex__space pd-left-20 pd-right-20 pd-btm-50 pd-top-15 crancy-flex-wrap crancy-flex-gap-15">
                <div className="crancy-friends-card__author crancy-flex-gap-15 crancy-flex-center crancy-flex-wrap">
                  <img src="img/friend-profile1.jpg" />
                  <div className="crancy-friends-card__content">
                    <Link href="/ProfileOverview/">
                      <h4 className="crancy-friends-card__title crancy-flex__column m-0 crancy-flex-gap-5">
                        Mayke Schuurs
                        <span className="crancy-f14 crancy-font-weight-regular paragraph-color">
                          @maymayke
                        </span>
                      </h4>
                    </Link>
                    <p className="mg-top-5">Not a Man but a Ghost 👻</p>
                  </div>
                </div>
                <div className="crancy-friends-card__content">
                  <Link
                    href="/ProfileOverview/"
                    className="crancy-btn crancy-btn__view"
                  >
                    Following
                  </Link>
                </div>
              </div>
            </div>

            <div className="crancy-friends-card bg-white mg-top-30 crancy-bradius-12">
              <div className="crancy-friends-card__cover">
                <img className="crancy-width-100" src="img/friend-cover2.jpg" />
              </div>
              <div className="crancy-friends-card__body crancy-flex__space pd-left-20 pd-right-20 pd-btm-50 pd-top-15 crancy-flex-wrap crancy-flex-gap-15">
                <div className="crancy-friends-card__author crancy-flex-gap-15 crancy-flex-center crancy-flex-wrap">
                  <img src="img/friend-profile2.jpg" />
                  <div className="crancy-friends-card__content">
                    <Link href="/ProfileOverview/">
                      <h4 className="crancy-friends-card__title crancy-flex__column m-0 crancy-flex-gap-5">
                        Mayke Schuurs
                        <span className="crancy-f14 crancy-font-weight-regular paragraph-color">
                          @Ralph Edwards
                        </span>
                      </h4>
                    </Link>
                    <p className="mg-top-5">Not a Man but a Ghost 👻</p>
                  </div>
                </div>
                <div className="crancy-friends-card__content">
                  <Link
                    href="/ProfileOverview/"
                    className="crancy-btn crancy-btn__view"
                  >
                    Following
                  </Link>
                </div>
              </div>
            </div>

            <div className="crancy-friends-card bg-white mg-top-30 crancy-bradius-12">
              <div className="crancy-friends-card__cover">
                <img className="crancy-width-100" src="img/friend-cover3.jpg" />
              </div>
              <div className="crancy-friends-card__body crancy-flex__space pd-left-20 pd-right-20 pd-btm-50 pd-top-15 crancy-flex-wrap crancy-flex-gap-15">
                <div className="crancy-friends-card__author crancy-flex-gap-15 crancy-flex-center crancy-flex-wrap">
                  <img src="img/friend-profile3.jpg" />
                  <div className="crancy-friends-card__content">
                    <Link href="/ProfileOverview/">
                      <h4 className="crancy-friends-card__title crancy-flex__column m-0 crancy-flex-gap-5">
                        Mayke Schuurs
                        <span className="crancy-f14 crancy-font-weight-regular paragraph-color">
                          @Bessie Cooper
                        </span>
                      </h4>
                    </Link>
                    <p className="mg-top-5">Not a Man but a Ghost 👻</p>
                  </div>
                </div>
                <div className="crancy-friends-card__content">
                  <Link
                    href="/ProfileOverview/"
                    className="crancy-btn crancy-btn__view"
                  >
                    Following
                  </Link>
                </div>
              </div>
            </div>

            <div className="crancy-friends-card bg-white mg-top-30 crancy-bradius-12">
              <div className="crancy-friends-card__cover">
                <img className="crancy-width-100" src="img/friend-cover4.jpg" />
              </div>
              <div className="crancy-friends-card__body crancy-flex__space pd-left-20 pd-right-20 pd-btm-50 pd-top-15 crancy-flex-wrap crancy-flex-gap-15">
                <div className="crancy-friends-card__author crancy-flex-gap-15 crancy-flex-center crancy-flex-wrap">
                  <img src="img/friend-profile4.jpg" />
                  <div className="crancy-friends-card__content">
                    <Link href="/ProfileOverview/">
                      <h4 className="crancy-friends-card__title crancy-flex__column m-0 crancy-flex-gap-5">
                        Mayke Schuurs
                        <span className="crancy-f14 crancy-font-weight-regular paragraph-color">
                          @Albert Flores
                        </span>
                      </h4>
                    </Link>
                    <p className="mg-top-5">Not a Man but a Ghost 👻</p>
                  </div>
                </div>
                <div className="crancy-friends-card__content">
                  <Link
                    href="/ProfileOverview/"
                    className="crancy-btn crancy-btn__view"
                  >
                    Following
                  </Link>
                </div>
              </div>
            </div>

            <div className="crancy-friends-card bg-white mg-top-30 crancy-bradius-12">
              <div className="crancy-friends-card__cover">
                <img className="crancy-width-100" src="img/friend-cover4.jpg" />
              </div>
              <div className="crancy-friends-card__body crancy-flex__space pd-left-20 pd-right-20 pd-btm-50 pd-top-15 crancy-flex-wrap crancy-flex-gap-15">
                <div className="crancy-friends-card__author crancy-flex-gap-15 crancy-flex-center crancy-flex-wrap">
                  <img src="img/friend-profile5.jpg" />
                  <div className="crancy-friends-card__content">
                    <Link href="/ProfileOverview/">
                      <h4 className="crancy-friends-card__title crancy-flex__column m-0 crancy-flex-gap-5">
                        Mayke Schuurs
                        <span className="crancy-f14 crancy-font-weight-regular paragraph-color">
                          @Devon Lane
                        </span>
                      </h4>
                    </Link>
                    <p className="mg-top-5">Not a Man but a Ghost 👻</p>
                  </div>
                </div>
                <div className="crancy-friends-card__content">
                  <Link
                    href="/ProfileOverview/"
                    className="crancy-btn crancy-btn__view"
                  >
                    Following
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
