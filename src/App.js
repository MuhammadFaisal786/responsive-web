import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Navbar from './Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import Footer from './Footer'

const App = ()  => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/service" component={Service}/>
        <Route path="/contact" component={Contact}/>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;