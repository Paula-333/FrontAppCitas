/* eslint-disable no-useless-constructor */
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
const Header = (props) => {
    const logout = ()=>{
        localStorage.removeItem('token')
        props.setUser(null)
    }
    return (
        <header className="header">
            <NavLink to="/" className="home">Home</NavLink>
            <div className="user">
                {props.user ?
                    <>
                        <span>{props.user?.email}</span>
                        <span onClick={logout}>Logout</span>
                    </> :
                    <>
                        <NavLink to="/login" className="login">Log in</NavLink>
                        <NavLink to="/register" className="register">Register</NavLink>
                    </>
                }
            </div>
        </header>
    )
}
export default Header