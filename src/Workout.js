import React, { useState } from 'react'; //import React Component

export default function Workout(props)
{
    return (
        <div>
            <main>
                <section>
                    <h2>Track Your Workout</h2>
                    <form id="workout-input-form">
                        <div class="form-group">
                            <label for="workout-type">Workout Type:</label>
                        </div>
                        <div class="form-group">
                            <label for="duration">Duration (minutes):</label>
                        </div>
                        <div class="form-group">
                            <label for="distance">Distance (if applicable):</label>
                        </div>
                        <div class="form-group">
                            <label for="sets">Number of Sets (if applicable):</label>
                        </div>
                        <div class="form-group">
                            <label for="reps">Number of Reps (if applicable):</label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Group 5. All rights reserved.</p>
            </footer>
        </div>
    );
}