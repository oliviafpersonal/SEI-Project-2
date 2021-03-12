import React from 'react'

const RatedJokes = () => {

  const ratedJokes = []
  const show10RatedJokes = () => {
    for (let i = 0; i < 20; i++) {
      const joke = localStorage.getItem(`joke${i}`)
      if (joke !== null) {
        ratedJokes.push(joke)
      }
    }
  }
  show10RatedJokes()

  const clearJoke = () => {
    localStorage.clear()
    location.reload()
  }

  return (
    <>
      <div className="container-rated-jokes">
        <h1>Here are the latest jokes you have rated</h1>
        <div className='button clearJokes'>
          <button onClick={() => clearJoke()}>Clear Jokes</button>
        </div>
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
