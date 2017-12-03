import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/campuses">
        <button>Campuses</button>
      </NavLink>
      <NavLink to="/students">
        <button>Students</button>
      </NavLink>
    </div>
  )
}
