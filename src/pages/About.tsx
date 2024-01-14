 import './StyleToolbar.css';
import pageImage from '../images/About.png'; // תחליף עם נתיב התמונה שלך


import React from 'react';

const About = () => {
    
  
    return (
            <img className="page-image-About" src={pageImage} alt="Page Image" />
    );
};

export default About;