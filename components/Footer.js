import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <footer id="footer">
        <div id="footer-3d">
          <div className="gp-container">
            <span className="first-widget-bend"></span>
          </div>
        </div>
        <div id="footer-widgets" className="gp-footer-larger-first-col">
          <div className="gp-container">
            <div className="footer-widget footer-1">
              <div className="wpb_wrapper">
                <img src={"/images/f_logo.png"} alt="" />
              </div>
              <br />
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </p>
              <p className="text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
            </div>
            <div className="footer_box">
              <div className="col_1_of_3 span_1_of_3">
                <h3>Categories</h3>
                <ul className="first">
                  <li>
                    <a href="#">Dance</a>
                  </li>
                  <li>
                    <a href="#">History</a>
                  </li>
                  <li>
                    <a href="#">Specials</a>
                  </li>
                </ul>
              </div>
              <div className="col_1_of_3 span_1_of_3">
                <h3>Information</h3>
                <ul className="first">
                  <li>
                    <a href="#">New products</a>
                  </li>
                  <li>
                    <a href="#">top sellers</a>
                  </li>
                  <li>
                    <a href="#">Specials</a>
                  </li>
                </ul>
              </div>
              <div className="col_1_of_3 span_1_of_3">
                <h3>Follow Us</h3>
                <ul className="first">
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Youtube</a>
                  </li>
                </ul>
                <div className="copy">
                  <p>
                    &copy; 2015 Template by{" "}
                    <a href="http://w3layouts.com" target="_blank">
                      {" "}
                      w3layouts
                    </a>
                  </p>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
