// Toolbar.js

import React from 'react';
import './StyleToolbar.css';
import { Link } from 'react-router-dom';
import pageImage from '../images/home.png'; // תחליף עם נתיב התמונה שלך
import { Button } from '@mui/material';
const Toolbar = () => {
    return (
        <div>
            <div className="toolbar">
                <Link to="/Payment" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{
                            backgroundColor: '#DAA520',
                            color: 'white',
                            fontSize: '1.5rem', // Adjust the font size as needed
                            padding: '12px 24px', // Adjust the padding as needed
                        }}
                    >
                        תשלום
                    </Button>
                </Link>
                <a href="/Login">להתחבר</a>
                <a href="/Shopping">סל הקניות שלי </a>
        
                <Link to="/Shop">חנות</Link>                {/* <a href="#">מי אנחנו?</a> */}
                <Link to="/about-us">מי אנחנו?</Link>
                <Link to="/Home">ראשי</Link>
                
            </div>
            {/* <img className="page-image" src={pageImage} alt="Page Image" /> */}
            
        </div>
        
    );
}

export default Toolbar;
