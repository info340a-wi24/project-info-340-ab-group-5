import React, { useEffect, useState } from 'react'; //import React Component
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
                    <h2>Calories: {props.calories}/2500</h2>
                    <h2>Protein (g): {props.protein}/95</h2>
                    <h2>Fats (g): {props.fats}/30</h2>
                    <h2>Carbohydrates (g): {props.carbs}/130</h2>
                    <h2>Workout Time: {props.workout} minutes</h2>
                </div>
            </main>
    
            <footer>
                <p>&copy; 2024 Group 5. All rights reserved.</p>
            </footer>
        </div>
    );
}