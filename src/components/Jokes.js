import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

  const [joke, setJoke] = useState([])
  const [ratingSelected, setRatingSelected] = useState(false)
  const [jokeIndex, setJokeIndex] = useState(0)
  const [currentCategory, setCurrentCategory] = useState(null)

  useEffect(() => {
    setRatingSelected(false)
    getJoke('any')
  }, [])

  const getJoke = (category) => {
    const getData = async () => {
      const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
      setJoke(response.data)
    }
    getData()
    setRatingSelected(false)
    console.log('getjoke catagory is', category)
    setCurrentCategory(category)
  }


  const rateJoke = (rating) => {
    if (!joke.joke) {
      localStorage.setItem(`joke${jokeIndex}`, `Rating: ${rating} - ${joke.setup} ${joke.delivery}`)
      setJokeIndex(jokeIndex + 1)
    } else {
      localStorage.setItem(`joke${jokeIndex}`, `Rating: ${rating} - ${joke.joke}`)
      setJokeIndex(jokeIndex + 1)
      console.log(jokeIndex)
    }
    setRatingSelected(true)
  }



  return (
    <div className="joke-page">
      <div className="container">
        <div className="categoryDiv">
          <p className="jokeText">Choose a category:</p>

          <div className='category-buttons'>
            <button className="button is-focused" onClick={() => getJoke('any')}>Random Joke</button>
            <button className="button is-primary is-focused" onClick={() => getJoke('spooky')}>Spooky Joke</button>
            <button className="button is-link is-focused" onClick={() => getJoke('misc')}>Other Joke</button>
          </div>
          <div className='category-buttons'>
            <button className="button is-info is-focused" onClick={() => getJoke('programming')}>Programming Joke</button>
            <button className="button is-success is-focused " onClick={() => getJoke('christmas')}>Christmas Joke</button>
            <button className="button is-warning is-focused " onClick={() => getJoke('pun')}>Pun Joke</button>
          </div>

          <p className='joke-container'>
            {(!joke.joke) ?
              <div>
                <p> {joke.setup} </p>
                <p> {joke.delivery} 🤣 </p>
              </div>
              :
              <p> {joke.joke} </p>
            }
          </p>
          <div className='flex-box-rating-whole'>
            {(ratingSelected === false) ?
              <div className='flex-box-inner-rating'>
                <p>Rate this joke out of 5 ?</p>
                <div className='rating-buttons'>
                  <p className='button rating' onClick={() => rateJoke(1)}>1</p>
                  <p className='button rating' onClick={() => rateJoke(2)}>2</p>
                  <p className='button rating' onClick={() => rateJoke(3)}>3</p>
                  <p className='button rating' onClick={() => rateJoke(4)}>4</p>
                  <p className='button rating' onClick={() => rateJoke(5)}>5</p>
                </div>
              </div>
              :
              <div className='flex-box-inner-rating'>
                <p>Rated!</p>
                <div className='rating-buttons'>
                  <p className='rated button' onClick={() => getJoke(currentCategory)}>Next Joke</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
