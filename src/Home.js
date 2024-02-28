import React, { useState } from 'react'; //import React Component

export default function HomePage(props)
{
    return (
        <div>
            <main>
                <div className="home-container">
                    <h2>Calories Consumed</h2>
                    <p>{props.calories}</p>
                    <h2>Protein</h2>
                    <p>152g</p>
                    <h2>Fats</h2>
                    <p>16g</p>
                    <h2>Carbohydrates</h2>
                    <p>45g</p>
                    <h2>Time Spent Exercising</h2>
                    <p>{props.workout + " minutes"}</p>
                </div>
            </main>
    
            <footer>
                <p>&copy; 2024 Group 5. All rights reserved.</p>
            </footer>
        </div>
    );
}