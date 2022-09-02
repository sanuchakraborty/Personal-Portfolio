import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail,duration, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <span>{duration}</span>
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default Card;
