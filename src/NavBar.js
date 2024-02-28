import React from 'react'; //import React Component
import {  NavLink, Outlet } from 'react-router-dom';

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

export function NavBarLayout(props)
{
    return (
        <div>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </div>
    );
}