import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import auth from "./services/firebase-auth"

import Home from './components/pages/Home';
import EventForm from './components/pages/EventForm';
import ImageForm from './components/pages/ImageForm';
import Join from './components/pages/Join';
import Voting from './components/pages/Voting';
import VotingImage from './components/pages/VotingImage.js';
import Show from './components/pages/Show';
import Test from './components/pages/Test'
import Vr from './components/pages/Vr'
import Login from './components/pages/Login'
import ShowupVr from './components/pages/ShowupVr'
import VotingImageSelected from './components/pages/VotingImageSelected'

function App() {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null,
  })


  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null,
        })
      } else {
        setSession({
          isLoggedIn: false,
          currentUser: null,
          errorMessage: null,
        })
      }
    })
    return () => {
      handleAuth()
    }
  }, [])

  return (
    <div className="App">
      <Router>

      {session.isLoggedIn ? (
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/vr' component={() => <Vr/>} />
            <Route path='/event-form' component={() => <EventForm/>} />

            <Route path='/join' component={() => <Join/>} />
            <Route path={"/send/:eventId"} component={() => <ImageForm/>} />

            <Route path='/voting' component={() => <Voting/>} />
            <Route path={"/event/:eventId"} component={() => <VotingImage/>} />
            
            <Route path={"/selected/:eventId"} component={() => <VotingImageSelected/>} />

            <Route path='/show' component={() => <Show/>} />
            <Route path='/test' component={Test} />
            <Route path='/login' component={() => <Login/>} />
            <Route path="/work" component={() => <ShowupVr />} />

          </Switch>
        </div>
        ) : (
        <Login setSession={setSession} />
        
      )}
      </Router>
    </div>
  );
}

export default App;