import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div>
        <div className="wrapper">
          <p className="disclaimer"> An Olivia Flynn and Michael Henderson Website </p>
          <p className="disclaimer"> While we have put on a safe mode, we cannot gaurentee that all jokes are safe </p>
          <p className="disclaimer"> Please forfeit your right to place any blame on the creators</p>

          <Link to="./Jokes" className="accept button is-danger" >I forfeit my rights</Link>

          <img className='laughing-gif' src="https://i.pinimg.com/originals/93/cd/da/93cdda3f3ded29563c371d1dcd2c58e1.gif" alt="laughing gif" />
        </div>


        <div className="footerDiv">
          <p className="footer">
            We know you are probably not reading this but it must be said either way.
            By clicking the button, you are accepting that you may indeed be offended by either a distateful joke, or an outright ******* **** one.
            By accepting to forfeit your rights you are agreeing to not place any blame on either Olivia Flynn or Michael Henderson.
            You will not be able to blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.
            Thank you for reading our terms and conditions 😇
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
