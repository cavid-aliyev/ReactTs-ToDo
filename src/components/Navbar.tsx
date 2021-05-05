import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
  <nav className="indigo accent-4">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">
        React Ts
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">ToDo List</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
