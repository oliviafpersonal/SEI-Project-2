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
      <div className="container-rated-jokes">
        <h1>Here are the latest jokes you have rated</h1>
        <br></br>
        <p>
          {ratedJokes.map(joke =>
            <div className="box hover" key={joke}>

              <p key={joke} >{joke}</p>
            </div>

          )}
        </p>
      </div>
    </>
  )
}

export default RatedJokes
