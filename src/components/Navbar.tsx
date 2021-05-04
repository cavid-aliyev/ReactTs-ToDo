import React from 'react'

const Navbar: React.FC = () => {
    return (
        <nav className="indigo accent-2">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">React Ts</a>

          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">Todo List</a></li>
            <li><a href="/">About</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
