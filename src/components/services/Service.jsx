import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

const Service = () => {
  return (
    <section id="service">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3> UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Content structure </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Clean design patterns</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Thoughtful interactions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>User Research</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3> Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Web Designing </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Scripts and FrameWork </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Cloud Computing Integration </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>DataBase Creation </p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX Design */}

        {/* <article className="service">
          <div className="service__head">
            <h3> Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem IPSUM SIT AMET </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem IPSUM SIT AMET </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem IPSUM SIT AMET </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem IPSUM SIT AMET </p>
            </li>
          </ul>
        </article> */}

        {/* END OF UI/UX Design */}
      </div>
    </section>
  );
};

export default Service;
