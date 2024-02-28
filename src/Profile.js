import React, { useState } from 'react'; //import React Component

export default function Home(props)
{
    return (
        <div>
            <main>
                <div class="profile-container">
                    <h1 id="username">Name</h1>
                    <h1 id="demographic">Demographic Information</h1>
                    <ul>
                        <li>Gender</li>
                        <li>Height</li>
                        <li>Weight</li>
                        <li>Weight Goal</li>
                    </ul>
                    <h1 id="setting">Settings</h1>
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Group 5. All rights reserved.</p>
            </footer>
        </div>
    );
}