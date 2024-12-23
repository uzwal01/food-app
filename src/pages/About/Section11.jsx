import React from "react";
import { Container } from "react-bootstrap";
const Section11 = () => {
  return (
    <>
      <section className="about_page_banner">
        <div className="about_screen"></div>
        <Container>
          <h2>About Us</h2>
        </Container>
      </section>
      <section className="about_page_content">
        <Container>
          <div className="py-5">
            <p>
              At Tasty Burger, our journey began with a simple dream: to serve
              the most delicious, handcrafted burgers made with love and the
              freshest ingredients. From humble beginnings, we've grown to be a
              favorite among burger lovers in Miami.
            </p>
            <p>
              We believe that great burgers start with great ingredients. That's
              why we source the freshest produce, premium-grade meat, and
              artisan buns to craft every burger to perfection. No shortcuts, no
              compromises.
            </p>

            <p>
              Our secret lies in our special sauces, creative recipes, and a
              grilling technique that locks in the flavors. Whether you're a
              classic burger lover or crave adventurous toppings, we've got
              something for everyone.
            </p>

            <p>
              We're more than just a burger joint; we're part of the Good Food
              family. We take pride in supporting local farmers and adopting
              eco-friendly practices wherever we can.
            </p>
            <p>
              So, whether you're looking for a quick lunch, a family dinner, or
              just a reason to indulge, Tasty Burger is here to satisfy your
              cravings. Come taste the difference today!
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Section11;
