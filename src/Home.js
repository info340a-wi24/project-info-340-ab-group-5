import React, { useState } from 'react'; //import React Component
import Background from './img/home_background.jpg';

export default function HomePage(props) {
    const homeStyle = {
        backgroundImage: `linear-gradient(rgba(169,169,169,0.9),rgba(169,169,169,0.9)), url(${Background})`
    };

    return (
        <div style={homeStyle}>
            <main>
                <div className="homefeed">
                    <h1>Today's Summary</h1>
                    <h2>Calories: 1764/2500</h2>
                    <h2>Protein (g): 65/95</h2>
                    <h2>Fats (g): 12/30</h2>
                    <h2>Carbohydrates (g): 102/130</h2>
                </div>
            </main>
    
            <footer>
                <p>&copy; 2024 Group 5. All rights reserved.</p>
            </footer>
        </div>
    );
}