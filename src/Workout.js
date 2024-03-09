import React, { useState } from 'react';
import Background from './img/workout_background.jpg';

import { getDatabase, ref, push } from 'firebase/database';

const db = getDatabase();
const workoutRef = ref(db, 'workout');

export default function Workout(props) {
  const [workoutData, setWorkoutData] = useState({
    workoutType: '',
    duration: '',
    distance: '',
    sets: '',
    reps: '',
  });
  const today = new Date().toLocaleDateString();

  const handleChange = (event) => {
    setWorkoutData({
      ...workoutData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', workoutData);
    const workout = {
      workoutType: workoutData.workoutType,
      duration: workoutData.duration,
      distance: workoutData.distance,
      sets: workoutData.sets,
      reps: workoutData.reps,
    };
    push(workoutRef, workout)
      .then(() => props.setWorkout(props.workout + parseInt(workout.duration)))
      .then(() => props.setCurrentWorkout({
        workoutType: workout.workoutType,
        duration: workout.duration,
        distance: workout.distance,
        sets: workout.sets,
        reps: workout.reps,
      }))
      .then(() => props.setSubmitted(true));
  };

  /*
  const sendTweet = () => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      const tweet = {
        user: currentUser.displayName,
        timestamp: Date.now(),
        text: tweetText,
        likes: 0,
      };

      push(tweetsRef, tweet)
        .then(() => setTweetText(''))
        .catch((error) => console.log('Error: ', error));
    }
  };
  */

  const clearForm = () => {
    setWorkoutData({
      workoutType: '',
      duration: '',
      distance: '',
      sets: '',
      reps: '',
    });
    props.setSubmitted(false);
  };

  const workoutStyle = {
    backgroundImage: `linear-gradient(rgba(169,169,169,0.9),rgba(169,169,169,0.9)), url(${Background})`
  };

  return (
    <div className="workout-container" style={workoutStyle}>
      <div className="top-background"></div>
      <section className="content-container">
      {props.submitted ? (
        <section className="submitted-info">
          <h2>Your Workout Information</h2>
          <p>Date: {today}</p>
          <p>Workout Type: {props.currentWorkout.workoutType}</p>
          <p>Duration: {props.currentWorkout.duration} minutes</p>
          <p>Distance: {props.currentWorkout.distance}</p>
          <p>Sets: {props.currentWorkout.sets}</p>
          <p>Reps: {props.currentWorkout.reps}</p>
          <button onClick={clearForm}>Clear Form</button>
        </section>
      ) : (
        <main>
          <section>
            <h2>Track Your Workout</h2>
            <form id="workout-input-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="workout-type">Workout Type:</label>
                <input
                  type="text"
                  id="workout-type"
                  name="workoutType"
                  value={workoutData.workoutType}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="duration">Duration (minutes):</label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={workoutData.duration}
                  onChange={handleChange}
                  min="0"
                />
              </div>
              <div className="form-group">
                <label htmlFor="distance">Distance (if applicable):</label>
                <input
                  type="number"
                  id="distance"
                  name="distance"
                  value={workoutData.distance}
                  onChange={handleChange}
                  min="0"
                />
              </div>
              <div className="form-group">
                <label htmlFor="sets">Number of Sets (if applicable):</label>
                <input
                  type="number"
                  id="sets"
                  name="sets"
                  value={workoutData.sets}
                  onChange={handleChange}
                  min="0"
                />
              </div>
              <div className="form-group">
                <label htmlFor="reps">Number of Reps (if applicable):</label>
                <input
                  type="number"
                  id="reps"
                  name="reps"
                  value={workoutData.reps}
                  onChange={handleChange}
                  min="0"
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </section>
        </main>
      )}
      </section>
      <footer>
        <p>&copy; 2024 Group 5. All rights reserved.</p>
      </footer>
    </div>
  );
}
