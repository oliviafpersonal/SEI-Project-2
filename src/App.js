import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Jokes from './components/Jokes'
import RatedJokes from './components/RatedJokes'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/jokes">
          <Jokes />
        </Route>
        <Route exact path="/RatedJokes">
          <RatedJokes />
        </Route>
        <Route exact path="/Footer">
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  )

}

export default App
