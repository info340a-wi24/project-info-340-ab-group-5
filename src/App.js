import React, { useState } from 'react'; //import React Component
import { Routes, Route } from 'react-router-dom';

// Importing Other Components Here
import Home from './Home';
import Food from './Food';
import Profile from './Profile';
import SignIn from './SignIn';
import Workout from './Workout';

function App(props)
{
    const [calories, setCalories] = useState(0);
    const [workoutTime, setWorkoutTime] = useState(0);

    return (
        <Routes>
            <Route path='home' element={<Home />} />
            <Route path='food' element={<Food />} />
            <Route path='workout' element={<Workout />} />
            <Route path='profile' element={<Profile />} />
        </Routes>
    );
}

export default App;