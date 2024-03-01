import React, { useState } from 'react'; //import React Component
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

// Importing Other Components Here
import Home from './Home';
import Food from './Food';
import Profile from './Profile';
import SignIn from './SignIn';
import Workout from './Workout';
import { NavBarLayout } from './NavBar';

function App(props)
{
    const [calories, setCalories] = useState(0);
    const [workoutTime, setWorkoutTime] = useState(0);
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(true);

    function RequireSignIn(props)
    {
        if (!userIsLoggedIn)
        {
            return <SignIn logIn={userIsLoggedIn} setLogIn={setUserIsLoggedIn} />
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
                            <Route path='home' element={<Home workout={workoutTime} setWorkout={setWorkoutTime} calories={calories} setCalories={setCalories} />} />
                            <Route path='food' element={<Food />} />
                            <Route path='workout' element={<Workout />} />
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