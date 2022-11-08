import React from "react";
import "./about.css";
import ME from "../../assets/RAHUL.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>5+</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>5+</small>
            </article>
          </div>
          <p>
            I'm React and Front End Developer from Pali, Rajasthan. I enjoy
            turning complex problems into simple beautiful and intuitive
            interface designs. When t'm not coding or pushing poxels. youll find
            me in the gym or on the court shooting hoops.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
