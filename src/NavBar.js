import React, { useState } from 'react'; // Import useState hook
import { NavLink, Outlet } from 'react-router-dom';

function NavBar(props) {
  const [isActive, setIsActive] = useState(false); // State to manage hamburger menu

  // Toggle function for hamburger menu
  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/home" className="nav-link" onClick={() => setIsActive(false)}>Health and Fitness Tracker</NavLink>
        </div>

        <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink to="/home" className="nav-link" onClick={() => setIsActive(false)}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/food" className="nav-link" onClick={() => setIsActive(false)}>Food</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/workout" className="nav-link" onClick={() => setIsActive(false)}>Workout</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link" onClick={() => setIsActive(false)}>Profile</NavLink>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleHamburger}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </nav>
  );
}

export function NavBarLayout(props) {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
