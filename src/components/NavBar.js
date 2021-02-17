import React from 'react';
import { NavLink } from 'react-router-dom';


const navLink = {
  display: 'inline-block',
  margin: '0 0.5em',
  textDecoration: 'none',
  border: '5px solid blue'
}

const NavBar = () => {
  return (
    <div className="navbar">
      {/*{code here}*/}
      <NavLink style={navLink} to="/">Home</NavLink>
      <NavLink style={navLink} to="/movies">Movies</NavLink>
      <NavLink style={navLink} to="/directors">Directors</NavLink>
      <NavLink style={navLink} to="/actors">Actors</NavLink>
    </div>
  );
};

export default NavBar;
