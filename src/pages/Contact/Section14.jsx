import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Burger from "../../assets/logo/burger-cartoon.png";
import { Link } from "react-router-dom";

const Section14 = () => {
  return (
    <>
      <section className="contact_page_section">
        <div className="contact_screen"></div>
        <Container>
          <h2>CONTACT US</h2>
        </Container>
      </section>

      <section className="contact">
        <Container>
          <Row>
            {/* Left */}
            <Col sm={6} lg={5} className="mb-3">
              <div className="border-left shadow-lg p-4">
                <div className=" location mb-3">
                  <div className="col-lg-2 icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="col-lg-10">
                    5505 Waterford District Dr, Miami, FL 33126 United States
                  </div>
                </div>

                <div className=" email mb-3">
                  <div className="col-lg-2 icon">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="col-lg-10">ptastyburgers69@gmail.com</div>
                </div>

                <div className=" mobile_num mb-3">
                  <div className="col-lg-2 icon">
                    <i className="bi bi-phone"></i>
                  </div>
                  <div className="col-lg-10">999-888-7777</div>
                </div>

                {/* Map */}
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.393831854111!2d-80.301098!3d25.778146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9175d3d8a65%3A0x12cf94d34db4739!2s5505%20Waterford%20District%20Dr%2C%20Miami%2C%20FL%2033126%2C%20USA!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                  width="100%"
                  height="310px"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
            {/* Right */}
            <Col sm={6} lg={7} className="column">
              <div className="border-right shadow-lg p-4">
                <div className="d-flex justify-content-center">
                  <img src={Burger} alt="" />
                </div>
                <div className="right_content">
                  <h4>Stay in the Burger Loop!</h4>
                  <p>
                    Hungry for more? Subscribe to our newsletter and be the
                    first to know about our mouthwatering menu updates,
                    irresistible deals, and the latest stories from our burger
                    blog. From exclusive recipes to behind-the-scenes insights,
                    we've got everything a true burger lover needs!
                  </p>
                  <p className="font-italic">
                    Don’t miss out—sign up now and join the burger-loving
                    community!
                  </p>
                </div>

                <div className="text-center mt-4">
                  <form>
                    <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="form-control"
                      />
                    </div>
                    <Link to="/">
                      <button type="button" className="btn btn_red">
                        SUBSCRIBE
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section14;
