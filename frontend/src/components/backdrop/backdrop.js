import React from 'react'
import "./backdrop.css";

const Backdrop = ({ click, show }) => {
    return show && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;