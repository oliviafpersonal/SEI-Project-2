import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            Home
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar
