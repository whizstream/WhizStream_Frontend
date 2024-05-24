import React from 'react'

//Router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// pages
import Home from './pages/Home'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import Video from './pages/Video'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/auth" element= {<Auth/>}/>
        <Route path = "/" element= {<Home/>}/>
        <Route path = "/video" element= {<Video/>}/>
        <Route path = "/profile" element= {<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App