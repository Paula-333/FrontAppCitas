import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = props => {
    return ( 
    <header className="header">
        <NavLink to="/" className="home">Home</NavLink>
        <NavLink to="/login" className="login">Log in</NavLink>
        <NavLink to="/register" className="register">Register</NavLink>
    </header>) 
}



export default Header;