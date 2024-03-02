import React from 'react'; //import React Component
import {  NavLink, Outlet } from 'react-router-dom';

function NavBar(props) {
  /*
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }));
  */

  return (
    <nav>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/home" className="nav-link">Health and Fitness Tracker</NavLink>
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/food" className="nav-link">Food</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/workout" className="nav-link">Workout</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">Profile</NavLink>
          </li>
        </ul>

        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

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