import React from 'react'; // Import React Component
import Background from './img/profile_background.jpg';

export default function Home(props) {
    // Placeholder function for updating demographic information
    const updateDemographicInfo = () => {
        // This function can open a modal or navigate to a page where the user can update their info
        // After updating, you should fetch the updated information and use setUser to update the state
        alert("Update Demographic Information");
    };

    // Placeholder function for deleting account
    const deleteAccount = () => {
        // Implement functionality to handle account deletion
        // Ensure to properly manage user's session and data cleanup
        alert("Account Deletion");
    };

    const profileStyle = {
        backgroundImage: `linear-gradient(rgba(169,169,169,0.9),rgba(169,169,169,0.9)), url(${Background})`
    };

    return (
        <div style={profileStyle}>
            <main>
                <div className="profile-container">
                    <h1 id="username">Welcome, {props.currentUser.username}</h1>
                    <h1 id="demographic">Demographic Information</h1>
                    <ul>
                        <li>Gender: {props.currentUser.gender}</li>
                        <li>Height: {props.currentUser.height}</li>
                        <li>Weight: {props.currentUser.weight}</li>
                        <li>Weight Goal: {props.currentUser.weightGoal}</li>
                        <li>Daily Calorie Goal: {props.currentUser.dailyCalorieGoal}</li>
                    </ul>
                    <h1 id="setting">Settings</h1>
                    <ul>
                        <li><button onClick={updateDemographicInfo}>Change Demographic Information</button></li>
                        <li><button onClick={deleteAccount}>Delete Account</button></li>
                    </ul>
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Group 5. All rights reserved.</p>
            </footer>
        </div>
    );
}
