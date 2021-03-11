import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

  const [joke, setJoke] = useState([])

  useEffect(() => {
    randomJoke()
    spookyJoke()
    miscJoke()
    christmasJoke()
    punJoke()
  },[])

  const randomJoke = () => {
    const getData = async() => {
      const response = await axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode')
      setJoke(response.data)
    }
    getData()
  }

  const spookyJoke = () => {
    const getData = async() => {
      const response = await axios.get('https://v2.jokeapi.dev/joke/spooky')
      setJoke(response.data)
    }
    getData()
  }

  const miscJoke = () => {
    const getData = async() => {
      const response = await axios.get('https://v2.jokeapi.dev/joke/misc')
      setJoke(response.data)
    }
    getData()
  }
  
  const programmingJoke = () => {
    const getData = async() => {
      const response = await axios.get('https://v2.jokeapi.dev/joke/programming')
      setJoke(response.data)
    }
    getData()
  }

  const christmasJoke = () => {
    const getData = async() => {
      const response = await axios.get('https://v2.jokeapi.dev/joke/christmas')
      setJoke(response.data)
    }
    getData()
  }

  const punJoke = () => {
    const getData = async() => {
      const response = await axios.get('https://v2.jokeapi.dev/joke/pun')
      setJoke(response.data)
    }
    getData()
  }

  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
            {(!joke.joke) ?
              <p>
                <p> Set Up: {joke.setup} </p>
                <p> Delivery: {joke.delivery} </p>
              </p>
              :
              <p> joke: {joke.joke} </p>
            }
            <button onClick={() => randomJoke()}>New Joke</button>
            <button onClick={() => spookyJoke()}>Spooky Joke</button>
            <button onClick={() => miscJoke()}>Other Joke</button>
            <button onClick={() => programmingJoke()}>Programming Joke</button>
            <button onClick={() => christmasJoke()}>Christmas Joke</button>
            <button onClick={() => punJoke()}>Pun Joke</button>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Home
