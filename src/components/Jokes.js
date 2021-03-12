import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

  const [joke, setJoke] = useState([])
  const [ratingSelected, setRatingSelected] = useState(false)
  const [jokeIndex, setJokeIndex] = useState(localStorage.length)
  const [currentCategory, setCurrentCategory] = useState(null)

  console.log('current storage', localStorage.length)

  useEffect(() => {
    setRatingSelected(false)
    getJoke('any')
  }, [])

  const getJoke = (category) => {
    setJoke([])
    const getData = async () => {
      const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
      setJoke(response.data)
    }
    getData()
    setRatingSelected(false)
    setCurrentCategory(category)
  }


  const rateJoke = (rating) => {
    if (!joke.joke) {
      localStorage.setItem(`joke${jokeIndex}`, `Rating: ${rating} - ${joke.setup} ${joke.delivery}`)
      setJokeIndex(jokeIndex + 1)
    } else {
      localStorage.setItem(`joke${jokeIndex}`, `Rating: ${rating} - ${joke.joke}`)
      setJokeIndex(jokeIndex + 1)
    }
    setRatingSelected(true)
  }

  // CAN BE USED FOR TIMEOUT FOR ONCE JOKE IS RATED
  // console.log('current catagory is', currentCategory)
  // setTimeout(() => getJoke(currentCategory), 1000);

  return (
    <div className="container flex-box-all">
      <p className="jokeText">Choose a category:</p>

      <div className='category-buttons'>
        <button className="button is-link is-focused" onClick={() => getJoke('any')}><span>Random Joke</span></button>
        <button className="button is-primary is-focused" onClick={() => getJoke('spooky')}><span>Spooky Joke</span></button>
        <button className="button is-focused" onClick={() => getJoke('misc')}><span>Other Joke</span></button>
      </div>
      <div className='category-buttons'>
        <button className="button is-info is-focused" onClick={() => getJoke('programming')}><span>Programming Joke</span></button>
        <button className="button is-success is-focused " onClick={() => getJoke('christmas')}><span>Christmas Joke</span></button>
        <button className="button is-warning is-focused " onClick={() => getJoke('pun')}><span>Pun Joke</span></button>
      </div>

      <p className='joke-container'>
        {(joke.length !== 0) ?
          (!joke.joke) ?
            <div>
              <p> {joke.setup} </p>
              <p> {joke.delivery} 🤣 </p>
            </div>
            :
            <p> {joke.joke} </p>
          :
          <p>Loading...</p>
        }
      </p>

      <div className='flex-box-rating-whole'>
        {(ratingSelected === false) ?
          <div className='flex-box-inner-rating'>
            <p>Rate this joke out of 5 ?</p>
            <div className='rating-buttons'>
              <p className='button rating glow-button' onClick={() => rateJoke(1)}>🌟 </p>
              <p className='button rating glow-button' onClick={() => rateJoke(2)}>🌟 🌟 </p>
              <p className='button rating glow-button' onClick={() => rateJoke(3)}>🌟 🌟 🌟 </p>
              <p className='button rating glow-button' onClick={() => rateJoke(4)}>🌟 🌟 🌟 🌟 </p>
              <p className='button rating glow-button' onClick={() => rateJoke(5)}>🌟 🌟 🌟 🌟 🌟 </p>
            </div>
          </div>
          :
          <div className='flex-box-inner-rating'>
            <p>Rated!</p>
            <div className='rating-buttons'>
              <p className='rated-button' onClick={() => getJoke(currentCategory)}>Next Joke</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Home