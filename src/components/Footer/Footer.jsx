import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span><a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWstwPBRjGFWcSsmMTSDHCLVNxDcVvdTKShhxRQQCQZMhqCCSjWVwBqLqWxTNtxQmSTdGRxsL">sanuchakrabortty7@gmail.com</a></span>
        <div className="f-icons">
        <a href="https://www.instagram.com/sanu_chakrabortty/"><Insta color="white" size={"3rem"} /></a>
        <a href="https://www.facebook.com/sanu.chakrabortty.39/"><Facebook color="white" size={"3rem"} /></a>
        <a href="https://github.com/sanuchakraborty"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
