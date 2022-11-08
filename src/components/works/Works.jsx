import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../assets/Developer_Badge.png";
import Upwork1 from "../../assets/Developer_Badge.png";
import Upwork2 from "../../assets/Developer_Badge.png";
import Upwork3 from "../../assets/Developer_Badge.png";
import Upwork4 from "../../assets/Badge.png";
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

// import { themeContext } from "../../Context";

const Works = () => {
  // context
//   

  // transition
  return (
    <div className="container works works_container" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          
          <span>Certficates </span>
          {/* <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link> */}
          {/* <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div> */}
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 1.9, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Upwork2} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Upwork3} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Upwork4} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;