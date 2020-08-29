import React from "react";

export default function mainpage({ featured }) {
  return (
    <>
      <div className="slider">
        <div className="callbacks_container">
          <ul className="rslides" id="slider">
            <li>
              <img
                src={"/images/banner.jpg"}
                className="img-responsive"
                alt=""
              />
              <div className="button">
                <a href="#" className="hvr-shutter-out-horizontal">
                  Watch Now
                </a>
              </div>
            </li>
            <li>
              <img
                src={"/images/banner1.jpg"}
                className="img-responsive"
                alt=""
              />
              <div className="button">
                <a href="#" className="hvr-shutter-out-horizontal">
                  Watch Now
                </a>
              </div>
            </li>
            <li>
              <img
                src={"/images/banner2.jpg"}
                className="img-responsive"
                alt=""
              />
              <div className="button">
                <a href="#" className="hvr-shutter-out-horizontal">
                  Watch Now
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="banner_desc">
          <div className="col-md-9">
            <ul className="list_1">
              <li>
                Published <span className="m_1">Feb 20, 2015</span>
              </li>
              <li>
                Updated <span className="m_1">Feb 20 2015</span>
              </li>
              <li>
                Rating{" "}
                <span className="m_1">
                  <img src={"/images/rating.png"} alt="" />
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-3 grid_1">
            <ul className="list_1 list_2">
              <li>
                <i className="icon1"> </i>
                <p>2,548</p>
              </li>
              <li>
                <i className="icon2"> </i>
                <p>215</p>
              </li>
              <li>
                <i className="icon3"> </i>
                <p>546</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="box_1">
          <h1 className="m_2">Featured Movies [{featured[0].title}]</h1>
          <div className="search">
            <form>
              <input type="text" />
              <input type="submit" />
            </form>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="box_2">
          <div className="col-md-5 grid_3">
            <div className="row_1">
              <div className="col-md-6 grid_4">
                <a href="single.html">
                  <div className="grid_2">
                    <img
                      src={featured[0].image}
                      className="img-responsive"
                      alt=""
                    />
                    <div className="caption1">
                      <ul className="list_3">
                        <li>
                          <i className="icon5"> </i>
                          <p>{featured[0].likes}</p>
                        </li>
                      </ul>
                      <i className="icon4"> </i>
                      <p className="m_3">{featured[0].title}</p>
                    </div>
                  </div>
                  <div className="grid_2 col_1">
                    <img
                      src={featured[1].image}
                      className="img-responsive"
                      alt=""
                    />
                    <div className="caption1">
                      <ul className="list_3">
                        <li>
                          <i className="icon5"> </i>
                          <p>{featured[1].likes}</p>
                        </li>
                      </ul>
                      <i className="icon4"> </i>
                      <p className="m_3">{featured[1].title}</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 grid_7">
                <div className="col_2">
                  <ul className="list_4">
                    <li>
                      <i className="icon1"> </i>
                      <p>2,548</p>
                    </li>
                    <li>
                      <i className="icon2"> </i>
                      <p>215</p>
                    </li>
                    <li>
                      <i className="icon3"> </i>
                      <p>546</p>
                    </li>
                    <li>
                      Rating : &nbsp;&nbsp;
                      <p>
                        <img src={"/images/rating1.png"} alt="" />
                      </p>
                    </li>
                    <li>
                      Release Date : &nbsp;
                      <span className="m_4">Mar 15, 2015</span>{" "}
                    </li>
                    <div className="clearfix"> </div>
                  </ul>
                  <div className="m_5">
                    <a href="single.html">
                      <img
                        src={"/images/pic3.jpg"}
                        className="img-responsive"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="row_2">
              <a href="single.html">
                <img
                  src={"/images/pic4.jpg"}
                  className="img-responsive"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-md-5 content_right">
            <div className="row_3">
              <div className="col-md-6 content_right-box">
                <a href="single.html">
                  <div className="grid_2">
                    <img
                      src={"/images/pic6.jpg"}
                      className="img-responsive"
                      alt=""
                    />
                    <div className="caption1">
                      <ul className="list_5">
                        <li>
                          <i className="icon5"> </i>
                          <p>3,548</p>
                        </li>
                      </ul>
                      <i className="icon4 icon6"> </i>
                      <p className="m_3">Guardians of the Galaxy</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 grid_5">
                <a href="single.html">
                  <div className="grid_2">
                    <img
                      src={"/images/pic7.jpg"}
                      className="img-responsive"
                      alt=""
                    />
                    <div className="caption1">
                      <ul className="list_5">
                        <li>
                          <i className="icon5"> </i>
                          <p>3,548</p>
                        </li>
                      </ul>
                      <i className="icon4 icon6"> </i>
                      <p className="m_3">Guardians of the Galaxy</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="video">
              <iframe
                width="100%"
                height=""
                src="https://www.youtube.com/embed/s1QeoSedWmM"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="row_5">
              <div className="col-md-6">
                <div className="col_2">
                  <ul className="list_4">
                    <li>
                      <i className="icon1"> </i>
                      <p>2,548</p>
                    </li>
                    <li>
                      <i className="icon2"> </i>
                      <p>215</p>
                    </li>
                    <li>
                      <i className="icon3"> </i>
                      <p>546</p>
                    </li>
                    <li>
                      Rating : &nbsp;&nbsp;
                      <p>
                        <img src={"/images/rating1.png"} alt="" />
                      </p>
                    </li>
                    <div className="clearfix"> </div>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 m_6">
                <a href="single.html">
                  <img
                    src={"/images/pic8.jpg"}
                    className="img-responsive"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2 grid_6">
            <div className="m_7">
              <a href="single.html">
                <img
                  src={"/images/pic9.jpg"}
                  className="img-responsive"
                  alt=""
                />
              </a>
            </div>
            <div className="caption1">
              <ul className="list_5">
                <li>
                  <i className="icon5"> </i>
                  <p>3,548</p>
                </li>
              </ul>
              <i className="icon4 icon6"> </i>
              <p className="m_3">Guardians of the Galaxy</p>
            </div>
            <div className="col_2 col_3">
              <ul className="list_4">
                <li>
                  <i className="icon1"> </i>
                  <p>2,548</p>
                </li>
                <li>
                  <i className="icon2"> </i>
                  <p>215</p>
                </li>
                <li>
                  <i className="icon3"> </i>
                  <p>546</p>
                </li>
                <li>
                  Rating : &nbsp;&nbsp;
                  <p>
                    <img src={"/images/rating1.png"} alt="" />
                  </p>
                </li>
                <li>
                  Release : &nbsp;<span className="m_4">Mar 15, 2015</span>{" "}
                </li>
                <div className="clearfix"> </div>
              </ul>
              <div className="m_8">
                <a href="single.html">
                  <img
                    src={"/images/pic10.jpg"}
                    className="img-responsive"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}
