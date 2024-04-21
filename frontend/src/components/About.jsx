import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            We invite you to come savor the flavors, experience the atmosphere, and become part of the  family.
            We believe in the power of food to bring people together.
            we don't just serve food, we serve happiness. Our greatest satisfaction comes from seeing smiles on our customers' faces,
             knowing we've played a part in creating a positive and memorable experience.
            </p>
            <Link to={"/exploremenu"}>
              Explore Menu{""}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
