import React, { useContext } from "react";
import "./Services.css";
import "../Experience/Experience.css";
import Card from "../Card/Card";
import IitGuwahatiLogo from "../../img/iitGuwahatiLogo.png";
import IiestShibpurLogo from "../../img/iiestShibpurLogo.png";
import BZSlogo from "../../img/bzs.png";
import PMHSlogo from "../../img/pmhs.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Educational</span>
        <span>Background</span>
        <spane>
          This is from where I belong
        </spane>
        <a href={Resume} download>
          {/* <button className="button s-button">Download CV</button> */}
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "34rem" ,top: "4rem" }}
          whileInView={{ left: "-2rem" }}
          transition={transition}
        >
          <Card 
            emoji={IitGuwahatiLogo}
            heading={"IIT Guwahati"}
            detail={"MTech in Fluids & Thermal Engineering "}
            duration={"2021-present"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "22rem" ,top: "5rem"  }}
          whileInView={{ left: "10rem" }}
          transition={transition}
        >
          <Card
            emoji={IiestShibpurLogo}
            heading={"IIEST Shibpur"}
            detail={"BTech  in Mechanical Engineering "}
            duration={"2016-2020"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{left: "10rem" ,top: "4rem"  }}
          whileInView={{ left: "22rem" }}
          transition={transition}
        >
          <Card
            emoji={BZSlogo}
            heading={"Bankura Zilla School"}
            detail={"Higher Secondary"}
            duration={"2014-2016"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 4th */}
        <motion.div
          initial={{ left: "0rem" ,top: "5rem"  }}
          whileInView={{ left: "34rem" }}
          transition={transition}
        >
          <Card
            emoji={PMHSlogo}
            heading={"Patharmora High School"}
            detail={"Secondary"}
            duration={"2014"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
      
    </div>
  );
};
export default Services;
