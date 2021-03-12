import React from 'react'
// import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div className='container-about'>
        <div className='person'>
          <h1> Olivia Flynn</h1>
          <div className='info'>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF6x3r13kR2Rg/profile-displayphoto-shrink_200_200/0/1615162371959?e=1620864000&v=beta&t=R1LTPi3GqqCzFrhhZx4TOWdWjPjyJuQcjU4wCGzmkFU" alt="olivia-img" />
            <p>Software Engineer from London.</p>
            <p>Likes: Prosecco, Kate Bush, Adventure Time, and long walks in forests.</p>
            <p>Fun Fact: Color blind but can solve a Rubiks Cube.</p>
            <p><a href='https://www.linkedin.com/in/olivia-flynn-061518150/' target="blank">LinkedIn</a> | <a href='https://github.com/oliviafpersonal' target='blank'>GitHub</a></p>
          </div>
        </div>
        <div className='person'>
          <h1> Michael Henderson</h1>
          <div className='info'>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGMEdWdBetqYg/profile-displayphoto-shrink_200_200/0/1613654052738?e=1620864000&v=beta&t=A1slZ-XvNW9tTMhe7cZOtMf2j-Iti8hPeLm0rupa2l0" alt="michael-img" />
            <p>Software Engineer from London.</p>
            <p>Likes: Prosecco, Kate Bush, Sun Ra, and long walks in forests.</p>
            <p>Fun Fact: Color blind but can solve a Rubiks Cube.</p>
            <p><a href='https://www.linkedin.com/in/mhenderson24/' target="blank">LinkedIn</a> | <a href='https://github.com/Awyssa' target='blank'>GitHub</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home