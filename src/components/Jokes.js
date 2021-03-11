import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

  const [joke, setJoke] = useState([])
  const [ratingSelected, setRatingSelected] = useState(false)

  useEffect(() => {
    getJoke('any')
    setRatingSelected(false)
  }, [])

  const getJoke = (category) => {
    const getData = async () => {
      const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
      setJoke(response.data)
    }
    getData()
    setRatingSelected(false)
    //console.log(joke)
  }


  const rateJoke = (rating) => {
    console.log(`you rated this joke ${joke.joke} a ${rating}`)
    setRatingSelected(true)
    //console.log('rating selcted', ratingSelected)
    if (ratingSelected === 5) {
      window.localStorage.setItem('joke', `${joke.joke}`)
      console.log(localStorage)
    }
  }



  return (
    <div className="joke-page">
      <div className="container">
        <div className="categoryDiv">
          <p className="jokeText">Choose a category:</p>
          <button className="button is-rounded is-focused" onClick={() => getJoke('any')}>Random Joke</button>
          <button className="button is-rounded is-primary is-focused" onClick={() => getJoke('spooky')}>Spooky Joke</button>
          <button className="button is-rounded is-link is-focused" onClick={() => getJoke('misc')}>Other Joke</button>
          <button className="button is-rounded is-info is-focused" onClick={() => getJoke('programming')}>Programming Joke</button>
          <button className="button is-rounded is-success is-focused " onClick={() => getJoke('christmas')}>Christmas Joke</button>
          <button className="button is-rounded is-warning is-focused " onClick={() => getJoke('pun')}>Pun Joke</button>
        </div>
        <p className="title is-1 has-text-centered">
          {(!joke.joke) ?
            <div className="jokeDiv">
              <p className="jokeText"> {joke.setup} </p>
              <br></br>
              <p className="jokeText"> {joke.delivery} 🤣 </p>
            </div>
            :
            <div className="jokeDiv">
              <p className="jokeText"> {joke.joke} </p>
            </div>
          }
        </p>
        {(ratingSelected === false) ?
          <div className='ratingButtons'>
            <p className='button is-rounded is-warning is-focused' onClick={() => rateJoke(1)}>1 </p>
            <p className='button is-rounded is-warning is-focused' onClick={() => rateJoke(2)}>2 </p>
            <p className='button is-rounded is-warning is-focused' onClick={() => rateJoke(3)}>3 </p>
            <p className='button is-rounded is-warning is-focused' onClick={() => rateJoke(4)}>4 </p>
            <p className='button is-rounded is-warning is-focused' onClick={() => rateJoke(5)}>5 </p>
          </div>
          :
          <div className='you-rated-the-joke'>
            <p>Rated!</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Home
