import React from 'react'; // Import React Component
import profileImage from './img/profile_image.jpg';

export default function Home(props) {
    return (
        <div>
            <main>
                <div className="profile-container">
                    <img src={profileImage} alt="Blank profile" />
                    <h1 id="username">Welcome, {props.currentUser.username}</h1>
                    <h1 id="demographic">Demographic Information</h1>
                    <ul>
                        <li>Gender: {props.currentUser.gender}</li>
                        <li>Height: {props.currentUser.height}</li>
                        <li>Weight: {props.currentUser.weight}</li>
                        <li>Weight Goal: {props.currentUser.weightGoal}</li>
                        <li>Daily Calorie Goal: {props.currentUser.dailyCalorieGoal}</li>
                    </ul>
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Group 5. All rights reserved.</p>
            </footer>
        </div>
    );
}