export const AddProduct = () => {
  return (
    <section className="crancy-adashboard crancy-show">
      <div className="container container__bscreen">
        <div className="row">
          <div className="col-xxl-8 col-12 crancy-main__column">
            <div className="crancy-body">
              <div className="crancy-dsinner">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 col-12 mg-top-30">
                      <div className="crancy-product-card">
                        <h4 className="crancy-product-card__title">
                          Product Information
                          <a href="#">
                            <img src="img/alert-circle.svg" />
                          </a>
                        </h4>
                        <div className="crancy__item-form--group mg-top-25">
                          <label className="crancy__item-label crancy__item-label-product">
                            Product Name
                          </label>
                          <input
                            className="crancy__item-input"
                            type="text"
                            placeholder="Bamba Shoes Contrast"
                            required
                          />
                        </div>
                        <div className="crancy__item-form--group mg-top-25">
                          <label className="crancy__item-label crancy__item-label-product">
                            Category
                          </label>
                          <select
                            className="form-select crancy__item-input"
                            aria-label="Default select example"
                          >
                            <option selected>Clothing</option>
                            <option value="1">Shoes</option>
                            <option value="2">Jewellery</option>
                          </select>
                        </div>
                        <div className="crancy__item-form--group mg-top-25">
                          <label className="crancy__item-label crancy__item-label-product">
                            Collection
                          </label>
                          <input
                            className="crancy__item-input"
                            type="text"
                            placeholder="Premium Shoes"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 mg-top-30">
                      <div className="crancy-product-card">
                        <h4 className="crancy-product-card__title">
                          Product Image
                          <a href="#">
                            <img src="img/alert-circle.svg" />
                          </a>
                        </h4>
                        <p>
                          Select a product photo or drag and drop up to 5 photos
                          at once here. Include min. 2 attractive photos to make
                          the product more attractive to buyers.
                        </p>
                        <div className="crancy-product-card__img">
                          <div className="row mg-btm-20">
                            <div className="col-lg-6 col-md-6 col-12 mg-top-form-20">
                              <div className="crancy-product-card__upload">
                                <div className="crancy-product-card__uploaded">
                                  <img src="img/product-upload.jpg" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mg-top-form-20">
                              <div className="crancy-product-card__upload crancy-product-card__upload--border">
                                <input
                                  type="file"
                                  className="btn-check"
                                  name="options"
                                  id="input-img1"
                                  autoComplete="off"
                                />
                                <label
                                  className="crancy-image-video-upload__label"
                                  htmlFor="input-img1"
                                >
                                  <img src="img/upload-file.png" />
                                  <h4 className="crancy-image-video-upload__title">
                                    Drag &amp; Drop or
                                    <span className="crancy-primary-color">
                                      Choose File
                                    </span>
                                    to upload
                                  </h4>
                                </label>
                              </div>
                            </div>
                          </div>
                          <p>
                            The image format is .jpg .jpeg .png and a minimum
                            size of 300 x 300px (For optimal images minimum size
                            of 700 x 700 px).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 mg-top-30">
                      <div className="crancy-product-card">
                        <h4 className="crancy-product-card__title">
                          Detail Product
                          <a href="#">
                            <img src="img/alert-circle.svg" />
                          </a>
                        </h4>
                        <div className="crancy__item-form--group mg-top-25">
                          <label className="crancy__item-label crancy__item-label-product crancy-flex-between">
                            Description <span>53/2000</span>
                          </label>
                          <textarea
                            className="crancy__item-input crancy__item-textarea"
                            placeholder="The Green to Wear 2.0 standard aims to reduce the environmental"
                            required
                          ></textarea>
                        </div>
                        <div className="crancy__item-form--group mg-top-25">
                          <label className="crancy__item-label crancy__item-label-product">
                            Video URL <span>(optional)</span>
                          </label>
                          <input
                            className="crancy__item-input"
                            type="url"
                            placeholder="Add Video URL"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 mg-top-30">
                      <div className="crancy-product-card">
                        <h4 className="crancy-product-card__title">
                          Variants
                          <a href="#">
                            <img src="img/alert-circle.svg" />
                          </a>
                        </h4>
                        <div className="crancy__item-form--group mg-top-25">
                          <label className="crancy__item-label crancy__item-label-product crancy-flex-between">
                            Variant 1
                            <a href="#">
                              <img src="img/trash-icon.svg" />
                            </a>
                          </label>
                          <select
                            className="form-select crancy__item-input"
                            aria-label="Default select example"
                          >
                            <option selected>Clothing</option>
                            <option value="1">Shoes</option>
                            <option value="2">Jewellery</option>
                          </select>
                        </div>
                        <div className="crancy__item-form--group mg-top-25">
                          <label className="crancy__item-label crancy__item-label-product">
                            Add Size
                          </label>
                          <div className="crancy__item-form--add">
                            <input
                              className="crancy__item-input"
                              type="text"
                              required
                            />
                            <div className="crancy__item-form--add__group">
                              <a className="crancy__item-form--add__single">
                                EU-39 <i className="fas fa-times"></i>
                              </a>
                              <a className="crancy__item-form--add__single">
                                EU-39 <i className="fas fa-times"></i>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="crancy__item-form--group mg-top-5">
                          <div className="crancy__item-form--added">
                            <div className="form-group crancy-form-checkbox__added mg-top-15">
                              <input
                                className="d-none"
                                type="checkbox"
                                id="add1"
                                name="add1"
                              />
                              <label
                                className="crancy-form-labe2"
                                htmlFor="add1"
                              >
                                EU-39
                                <span>
                                  <i className="fas fa-times"></i>
                                </span>
                              </label>
                            </div>
                            <div className="form-group crancy-form-checkbox__added mg-top-15">
                              <input
                                className="d-none"
                                type="checkbox"
                                id="add2"
                                name="add2"
                              />
                              <label
                                className="crancy-form-labe2"
                                htmlFor="add2"
                              >
                                EU-40
                                <span>
                                  <i className="fas fa-times"></i>
                                </span>
                              </label>
                            </div>
                            <div className="form-group crancy-form-checkbox__added mg-top-15">
                              <input
                                className="d-none"
                                type="checkbox"
                                id="add3"
                                name="add3"
                              />
                              <label
                                className="crancy-form-labe2"
                                htmlFor="add3"
                              >
                                EU-41
                                <span>
                                  <i className="fas fa-times"></i>
                                </span>
                              </label>
                            </div>
                            <div className="form-group crancy-form-checkbox__added mg-top-15">
                              <input
                                className="d-none"
                                type="checkbox"
                                id="add4"
                                name="add4"
                              />
                              <label
                                className="crancy-form-labe2"
                                htmlFor="add4"
                              >
                                EU-42
                                <span>
                                  <i className="fas fa-times"></i>
                                </span>
                              </label>
                            </div>
                            <div className="form-group crancy-form-checkbox__added mg-top-15">
                              <input
                                className="d-none"
                                type="checkbox"
                                id="add5"
                                name="add5"
                              />
                              <label
                                className="crancy-form-labe2"
                                htmlFor="add5"
                              >
                                EU-43
                                <span>
                                  <i className="fas fa-times"></i>
                                </span>
                              </label>
                            </div>
                            <div className="form-group crancy-form-checkbox__added mg-top-15">
                              <input
                                className="d-none"
                                type="checkbox"
                                id="add6"
                                name="add6"
                              />
                              <label
                                className="crancy-form-labe2"
                                htmlFor="add6"
                              >
                                EU-44
                                <span>
                                  <i className="fas fa-times"></i>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="crancy__item-form--group mg-top-25">
                          <button className="crancy-btn crancy-btn--add-new">
                            <i className="fas fa-plus"></i> New Variant
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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
                      <a href="#" className="crancy-sidebar__toggles">
                        <img src="img/toggle-icon2.svg" />
                      </a>
                    </div>

                    <ul className="crancy-sidebar__historylist">
                      <li>
                        <div className="crancy-sidebar__history">
                          <div className="crancy-sidebar__history-thumb">
                            <img src="img/sales-history-1.png" alt="#" />
                            <h4>
                              <a href="#">
                                <span className="crancy-sidebar__history-title">
                                  Rompi Berkancing
                                </span>
                              </a>
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
                              <a href="#">
                                <span className="crancy-sidebar__history-title">
                                  Blazer assorted pocket
                                </span>
                              </a>
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
                              <a href="#">
                                <span className="crancy-sidebar__history-title">
                                  Pattern top with knot
                                </span>
                              </a>
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
