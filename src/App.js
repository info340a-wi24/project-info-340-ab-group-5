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
import { firebaseConfig } from './Config';
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App(props)
{
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fats, setFats] = useState(0);
    const [carbs, setCarbs] = useState(0);
    
    const [workoutTime, setWorkoutTime] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [currentWorkout, setCurrentWorkout] = useState({
        workoutType: '',
        duration: '',
        distance: '',
        sets: '',
        reps: '',
    });

    function RequireSignIn(props)
    {
        if (!auth)
        {
            return <SignIn />
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
                            <Route path='food' element={<Food />} />
                            <Route path='workout' element={<Workout setWorkout={setWorkoutTime} workout={workoutTime} setSubmitted={setSubmitted} submitted={submitted} currentWorkout={currentWorkout} setCurrentWorkout={setCurrentWorkout} />} />
                            <Route path="*" element={<Navigate to="/home" />} />
                        </Route>
                    </Route>
                    <Route path='signin' element={<SignIn />} />
                </Routes>
            </div>
        </main>
    );
}

export default App;