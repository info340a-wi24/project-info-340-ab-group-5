import React, { useState } from 'react'; //import React Component

export default function Home(props)
{
    return (
        <div>
            <main>
                <div className="profile-container">
                    <h1 id="username">Welcome, USERNAME</h1>
                    <h1 id="demographic">Demographic Information</h1>
                    <ul>
                        <li>Gender: Male</li>
                        <li>Height: 5'10"</li>
                        <li>Weight: 150 lbs</li>
                        <li>Weight Goal: 130 lbs</li>
                        <li>Daily Calorie Goal: 2000 cal</li>
                    </ul>
                    <h1 id="setting">Settings</h1>
                    <ul>
                        <li><button>Change Demographic Information</button></li>
                        <li><button>Delete Account</button></li>
                    </ul>
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Group 5. All rights reserved.</p>
            </footer>
        </div>
    );
}