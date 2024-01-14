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

const Perlinim = () => {
    const j="kk"
    const images = [
        sweet,
        pageImage,
        Personal_customization,
    ];

    interface CakeCardProps {
        // ...
        j: string; // הוספת הפרמטר 'j' לפרופס
    }  

 

    return (
        <div>
            <h1>Welcome to My Cake Website</h1>
            {images.map((image, index) => (
                <CakeCard
                    key={index}
                    title={`Cake ${index + 1}`}
                    description={`Description for Cake ${index + 1}`}
                    imageSrc={image} to={`/AddToCard`}                />
            ))}
            {/* השתמשי במספר גם בתוך הקומפוננטה AddToCard */}
               </div>
    );
};
export default Perlinim;
