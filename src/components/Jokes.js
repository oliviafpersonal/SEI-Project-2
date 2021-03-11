import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

  const [joke, setJoke] = useState([])



  useEffect(() => {
    randomJoke()
  }, [])

  const randomJoke = () => {
    const getData = async () => {
      const response = await axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode')
      setJoke(response.data)
    }
    getData()
  }

  const spookyJoke = () => {
    const getData = async () => {
      const response = await axios.get('https://v2.jokeapi.dev/joke/spooky')
      setJoke(response.data)
    }
    getData()
  }

  const miscJoke = () => {
    const getData = async () => {
      const response = await axios.get('https://v2.jokeapi.dev/joke/misc')
      setJoke(response.data)
    }
    getData()
  }

  const programmingJoke = () => {
    const getData = async () => {
      const response = await axios.get('https://v2.jokeapi.dev/joke/programming')
      setJoke(response.data)
    }
    getData()
  }

  const christmasJoke = () => {
    const getData = async () => {
      const response = await axios.get('https://v2.jokeapi.dev/joke/christmas')
      setJoke(response.data)
    }
    getData()
  }

  const punJoke = () => {
    const getData = async () => {
      const response = await axios.get('https://v2.jokeapi.dev/joke/pun')
      setJoke(response.data)
    }
    getData()

  }




  return (
    <div className="joke-page">
      <div className="container">
        <div className="categoryDiv">
          <h3 className="jokeText">Choose a category:</h3>
          <button className="button is-focused" onClick={() => randomJoke()}>Random Joke</button>
          <button className="button is-primary is-focused" onClick={() => spookyJoke()}>Spooky Joke</button>
          <button className="button is-link is-focused" onClick={() => miscJoke()}>Other Joke</button>
          <button className="button is-info is-focused" onClick={() => programmingJoke()}>Programming Joke</button>
          <button className="button is-success is-focused " onClick={() => christmasJoke()}>Christmas Joke</button>
          <button className="button is-warning is-focused " onClick={() => punJoke()}>Pun Joke</button>
        </div>
        <h1 className="title is-1 has-text-centered">
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
        </h1>
        <div className="rating">
          <p>Rate Me</p>
          <button>1 🌟 </button>
          <button>2 🌟 </button>
          <button>3 🌟 </button>
          <button>3 🌟 </button>
          <button>5 🌟 </button>
        </div>
      </div>
    </div>
  )
}

export default Home
