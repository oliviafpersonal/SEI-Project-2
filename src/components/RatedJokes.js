import React from 'react'

const RatedJokes = () => {
  const ratedJokes = []
  const show10RatedJokes = () => {
    for (let i = 0; i < 20; i++) {
      const joke = localStorage.getItem(`joke${i}`)
      ratedJokes.push(joke)
    }
  }
  show10RatedJokes()

  return (
    <>
      <div className="container">
        <p>Here are the latest jokes you have rated</p>
        <br></br>
        <p>
          {ratedJokes.map( joke =>
            <p key={joke} >{joke}</p>
          )}
        </p>
      </div>
    </>
  )
}

export default RatedJokes
