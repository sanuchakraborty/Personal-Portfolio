import React, { useContext } from "react";
import "./Works.css";
import Javascript from "../../img/javascript-modified.png";
import HTML from "../../img/html.png";
import CPP from "../../img/C++.png";
import CSS from "../../img/css-modified.png";
import ReactJS from "../../img/react.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Javascript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={HTML} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={CPP} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={CSS} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ReactJS} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
      {/* left side */}
      <div className="w-left">
        

        {/* right side */}
      
      <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            My 
          </span>
          <span>Skills</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            Programming Languages<ul>C++, Javascript</ul>
            Web Technologies<ul>HTML, CSS, React</ul>
            Database Management<ul>MySQL</ul>
            Miscellaneous<ul>Node Js, Express Js, MS Office, Smartcontracts*, Blockchain*</ul>
            Operating System<ul>Windows, Ubuntu*</ul>
            <ul>*Elementary proficiency</ul>
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Works;
