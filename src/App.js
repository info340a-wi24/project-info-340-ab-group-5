import React, { useState } from 'react'; //import React Component
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

// Importing Other Components Here
import Home from './Home';
import Food from './Food';
import Profile from './Profile';
import SignIn from './SignIn';
import Workout from './Workout';
import { NavBarLayout } from './NavBar';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref} from 'firebase/database';
import { firebaseConfig } from './Config';
import { getAuth } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();
const foodRef = ref(db, 'food');
const workoutRef = ref(db, 'workout');

function App(props)
{
    // State Variables for Food.js
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fats, setFats] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [foodSubmitted, setFoodSubmitted] = useState(false);
    const [currentFood, setCurrentFood] = useState({
        foodName: '',
        quantity: 1,
        calories: '',
        protein: '',
        carbs: '',
        fats: '',
        timeOfConsumption: '',
    });
    
    // State Variables for Workout.js
    const [workoutTime, setWorkoutTime] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [currentWorkout, setCurrentWorkout] = useState({
        workoutType: '',
        duration: '',
        distance: '',
        sets: '',
        reps: '',
    });

    // State Variables for SignIn.js
    const [showSignIn, setShowSignIn] = useState(true);
    const [currentUser, setCurrentUser] = useState({
        username: "",
        gender: "",
        height: "",
        weight: "",
        weightGoal: "",
        dailyCalorieGoal: "",
    });

    function RequireSignIn(props)
    {
        if (showSignIn)
        {
            return <SignIn signedIn={showSignIn} setSignedIn={setShowSignIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        }
        else
        {
            return <Outlet />
        }
    }
    
    return (
        <main>
            <div>
                <Routes>
                    <Route element={<RequireSignIn />} >
                        <Route element={<NavBarLayout />} >
                            <Route path='profile' element={<Profile />} />
                            <Route path='home' element={<Home workout={workoutTime} calories={calories} protein={protein} fats={fats} carbs={carbs} />} />
                            <Route path='food' element={<Food calories={calories} setCalories={setCalories} protein={protein} setProtein={setProtein} fats={fats} setFats={setFats} carbs={carbs} setCarbs={setCarbs} submitted={foodSubmitted} setSubmitted={setFoodSubmitted} currentFood={currentFood} setCurrentFood={setCurrentFood} foodRef={foodRef} />} />
                            <Route path='workout' element={<Workout setWorkout={setWorkoutTime} workout={workoutTime} setSubmitted={setSubmitted} submitted={submitted} currentWorkout={currentWorkout} setCurrentWorkout={setCurrentWorkout} workoutRef={workoutRef} />} />
                            <Route path="*" element={<Navigate to="/home" />} />
                        </Route>
                    </Route>
                    <Route path='signin' element={<SignIn signedIn={showSignIn} setSignedIn={setShowSignIn} />} currentUser={currentUser} setCurrentUser={setCurrentUser} />
                </Routes>
            </div>
        </main>
    );
}

export default App;