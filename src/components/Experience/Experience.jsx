import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8.81</div>
        <span  style={{color: darkMode?'white':''}}>CGPA </span>
        <span>MTech</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>738</div>
        <span  style={{color: darkMode?'white':''}}>GATE </span>
        <span>Score</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8.95</div>
        <span  style={{color: darkMode?'white':''}}>CGPA </span>
        <span>BTech</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>95%</div>
        <span  style={{color: darkMode?'white':''}}>Higher </span>
        <span>Secondary</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>92%</div>
        <span  style={{color: darkMode?'white':''}}>Secondary</span>
        <span>Exam </span>
      </div>
    </div>
  );
};

export default Experience;
