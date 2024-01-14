// 
import React, { useState, useEffect } from 'react';
import CakeCard from './CakeCard';
// import './StylePerlinim.css';
import pageImage from '../images/About.png'; // תחליף עם נתיב התמונה שלך
import sweet from '../images/sweet.png';
import Personal_customization from '../images/Personal customization.png';
import perlinim from '../images/perlinim.png';
import AddToCard from './AddToCard';
import { Route } from 'react-router-dom';

const Sweet = () => {
    const images = [
        sweet,
        pageImage,
        Personal_customization,
        sweet,

    ];

  


    return (
        <div>
            {images.map((image, index) => (
                <CakeCard
                    key={index}
                    title={`Cake ${index + 1}`}
                    description={`Description for Cake ${index + 1}`}
                    imageSrc={image} to={`/AddToCard`} />
            ))}
            <h1>Welcome to My Cake sweet</h1>

            {/* השתמשי במספר גם בתוך הקומפוננטה AddToCard */}
        </div>
    );
};
export default Sweet;
