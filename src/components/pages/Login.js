import React, { useState } from "react"
import auth from "../../services/firebase-auth"
import '../Login.css'
import {Link, Route} from 'react-router-dom'
import Register from './Register'

const Login = ({ setSession }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const checkAccount = async () => {
    try {
      const response = await auth.signInWithEmailAndPassword(username, password)
      const { user } = response
      
      setSession({
        isLoggedIn: true,
        currentUser: user,
      })
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.errorMessage,
      })
    }
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  return (
    <>

      <div className="right content">
        <div className="mainQuote">
          Welcome Back
        </div>
        <form className="userBar">
          <input className="usernameField" type="text" name="username" placeholder="Email" onChange={handleUsername}/>
        </form>
        <form className="passBar">
          <input className="passwordField" type="password" name="password" placeholder="Password" onChange={handlePassword}/>
        </form>
        <button className="loginBtn" type="button" onClick={checkAccount}>
          Login
        </button>
        &nbsp;&nbsp;
        <Link className="registerBtn" type="button" to="/register">
          
          Register
        </Link>
        <div className='boxes'/>
      </div>
      <div className="left content">
      </div>
      {/* <Route path='/register' component={() => <Register/>}/> */}
    </>
    
  )
}

export default Login