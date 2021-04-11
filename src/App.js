import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Footer from './components/Footer'
import NavBar from './components/NavBar'
import AboutPage from './pages/AboutPage'
import Homepage from './pages/Homepage'
function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
          <Route exact path="/">
             <Homepage/>
          </Route>
          <Route  path="/about">
             <AboutPage/>
          </Route>
      </Switch>
      
      <Footer/>
   

    </Router>
  )
}

export default App

