import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Jokes from './components/Jokes'


// set up routing for the website

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
      </Switch>
    </BrowserRouter>
  )

}

export default App
