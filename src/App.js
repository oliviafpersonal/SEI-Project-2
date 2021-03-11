import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// set up routing for the website

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/jokes/Random">
          <Random />
        </Route>
        <Route exact path="/jokes/Misc">
          <Misc />
        </Route>
        <Route path="/jokes/Programming">
          <Programing />
        </Route>
        <Route path="/jokes/Pun">
          <Pun />
        </Route>
        <Route path="/jokes/Spooky">
          <Spooky />
        </Route>
      </Switch>
    </BrowserRouter>
  )

}

export default App
