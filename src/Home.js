import React, { useState } from 'react'; //import React Component

export default function HomePage(props)
{
    return (
        <div>
            
            <main>
                <div className="homefeed">
                    <h1>Health Info</h1>
                    <h2>Calories:</h2>
                    <h2>Protein:</h2>
                    <h2>Fat:</h2>
                    <h2>Carbohydrates:</h2>
                </div>

            </main>
    
            <footer>
                <p>&copy; 2024 Group 5. All rights reserved.</p>
            </footer>
        </div>
    );
}