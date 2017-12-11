import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <h2>MHIA Academy</h2>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li className="active"><NavLink to="/">Home</NavLink></li>
        <li className="active"><NavLink to="/campuses">Campuses</NavLink></li>
        <li className="active"><NavLink to="/students">Students</NavLink></li>
      </ul>
    </nav>
  )
}
