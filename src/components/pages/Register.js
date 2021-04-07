import React, { useState } from "react"
import {Link} from 'react-router-dom'
import '../Register.css'

const Register = () => {

  
const [name, setName] = useState("")
const [gender, setGender] = useState("")
const [age, setAge] = useState("")
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  
  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleAge = (e) => {
    setAge(e.target.value)
  }

  const handleGender = (e) => {
    setGender(e.target.value)
  }
  
  return (
    <>
      <div className="rightt contentt">
        <div className="blockk">
          <div className="mainQuotee">
            Register
          </div>
          <form className="nameBarr">
            <input className="nameFieldd" type="text" name="name" placeholder="Name" onChange={handleName}/>
          </form>
          <form className="ageBarr">
            <input className="ageFieldd" type="text" name="password" placeholder="Age" onChange={handleAge}/>
          </form>
          <form className="genderBarr">
          <input className="genderFieldd" type="text" name="gender" placeholder="Gender" onChange={handleGender}/>
          </form>
          <form className="userBarr">
            <input className="usernameFieldd" type="text" name="username" placeholder="Email" onChange={handleUsername}/>
          </form>
          <form className="passBarr">
            <input className="passwordFieldd" type="password" name="password" placeholder="Password" onChange={handlePassword}/>
          </form>
          <Link className="loginBtnn" type="button" to="/vr">
            Register
          </Link>
        </div>
      </div>
      <div className="leftt contentt">
      </div>

    </>
  )
}

export default Register
