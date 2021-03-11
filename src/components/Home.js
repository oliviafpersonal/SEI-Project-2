import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

  const [joke, setJoke] = useState([])

  /*
  useEffect(() => {
    const getData = async() => {
      const response = await axios.get('https://v2.jokeapi.dev/joke/Any')
      setJoke(response.data)
      console.log('response', response)
    }
    getData()
  },[])
*/
  const newJoke = () => {
    useEffect(() => {
      const getData = async() => {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any')
        setJoke(response.data)
        console.log('response', response)
      }
      getData()
    },[])
    
  }

  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
            <p> joke: {joke.joke} </p>
            <p> Set Up: {joke.setup} </p>
            <p> Delivery: {joke.delivery} </p>
            <button onClick={() => newJoke()}>New Joke</button>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Home
