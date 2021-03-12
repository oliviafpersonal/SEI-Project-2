import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/Jokes" className="navbar-item">Jokes!</Link>
            <Link to="/RatedJokes" className="navbar-item">Rated Jokes</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
