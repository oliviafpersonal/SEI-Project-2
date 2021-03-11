import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <p> A Oliva Flynn and Michael Henderson Website </p>
      <p> While we have put on a safe mode, we cannot gaurentee that all jokes are safe </p>
      
      <Link to="./Jokes" className="accept">accept</Link>
    </>
  )
}

export default Home
