import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div className="wrapper">
        <p className="disclaimer"> An Olivia Flynn and Michael Henderson Website </p>
        <p className="disclaimer"> While we have put on a safe mode, we cannot gaurentee that all jokes are safe </p>
        <p className="disclaimer"> Please forfeit your right to place any blame on the creators</p>

        <Link to="./Jokes" className="accept button is-danger" >I forfeit my rights</Link>
      </div>

      <img src="https://i.pinimg.com/originals/93/cd/da/93cdda3f3ded29563c371d1dcd2c58e1.gif" alt="laughing gif" />
    </>
  )
}

export default Home
