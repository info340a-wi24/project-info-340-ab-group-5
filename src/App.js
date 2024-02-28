import React, { useState } from 'react'; //import React Component
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';

// Importing Other Components Here
import Home from './Home';
import Food from './Food';
import Profile from './Profile';
import SignIn from './SignIn';
import Workout from './Workout';

function NavBar(props)
{
    return (
        <nav>
          <ul className='nav-list'>
            <li className='nav-item'><NavLink to="/home">Home</NavLink></li>
            <li className='nav-item'><NavLink to="/food">Food</NavLink></li>
            <li className='nav-item'><NavLink to="/workout">Workout</NavLink></li>
            <li className='nav-item'><NavLink to="/profile">Profile</NavLink></li>
          </ul>
        </nav>
      );
}

let userIsLoggedIn = false;

function RequireSignIn(props)
{
    if (!userIsLoggedIn)
    {
        return <p>Do You Have A LogIn?</p>
    }
    else
    {
        return <Outlet />
    }
}

function App(props)
{
    const [calories, setCalories] = useState(0);
    const [workoutTime, setWorkoutTime] = useState(0);

    return (
        <main>
            <div>
                <NavBar />
            </div>
            <div>
                <Routes>
                    <Route element={<RequireSignIn />} >
                        <Route path='profile' element={<Profile />} />
                        <Route path='home' element={<Home />} />
                        <Route path='food' element={<Food />} />
                        <Route path='workout' element={<Workout />} />
                        <Route path='*' element={<Home />} />
                    </Route>
                    <Route path='signin' element={<SignIn />} />
                </Routes>
            </div>
        </main>
    );
}

export default App;