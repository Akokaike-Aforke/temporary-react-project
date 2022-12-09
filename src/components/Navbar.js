import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Images/logo.svg'

const Navbar = () => {
  return (
    <div>
        <Link to='/'><img src={logo} alt='logo' /></Link>
        <NavLink to='/'>home</NavLink>
        <NavLink to='about'>about</NavLink>
    </div>
  )
}

export default Navbar
