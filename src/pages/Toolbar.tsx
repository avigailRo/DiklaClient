// Toolbar.js

import React from 'react';
import './StyleToolbar.css';
import { Link, useNavigate } from 'react-router-dom';
import pageImage from '../images/home.png'; // תחליף עם נתיב התמונה שלך
import { Button } from '@mui/material';
const Toolbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="toolbar">
                <Link to="/Payment" style={{ textDecoration: 'none' }}>
                </Link>
                <a href="/Login">להתחבר</a>
                <a onClick={() =>navigate(`/Shopping`)}>סל הקניות שלי </a>
        
                <Link to="/Shop">חנות</Link>                {/* <a href="#">מי אנחנו?</a> */}
                <Link to="/about-us">מי אנחנו?</Link>
                <Link to="/Home">ראשי</Link>
                
            </div>
            {/* <img className="page-image" src={pageImage} alt="Page Image" /> */}
            
        </div>
        
    );
}

export default Toolbar;
