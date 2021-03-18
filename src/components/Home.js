import React from 'react'
import { Link } from 'react-router-dom'
import laugh from '../../src/assets/laugh2.gif'


const Home = () => {
  return (
    <>
      <div>
        <div className="wrapper">
          <p className="disclaimer"> A Olivia Flynn and Michael Henderson Website </p>
          <p className="disclaimer"> While we have put on a safe mode, we cannot gaurentee that all jokes are SFW </p>
          <p className="disclaimer"> Do you dare enter?</p>

          <Link to="./Jokes" className="accept button is-danger" >Take me to the jokes</Link>

          <img className='laughing-gif' src={laugh} alt="laughing gif" />
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
