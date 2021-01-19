import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
import './css/sign-in.css'

const SignIn = () => {
  return (
    <div className="cc">
      <Link to='/'>
        <img className="loogoo" src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png" alt="Amazon" />
      </Link>
      <div className="sign-container">
        <h2> Sign In </h2>
        <SignInForm />
      </div>
    </div>
  )
}

const SignInForm = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleClick = async e => {
    e.preventDefault()
    try {
      const loggedIn = await auth.signInWithEmailAndPassword(email, password)
      if( loggedIn ) history.push('/')
    } catch (err) {
      alert(err)
    }
  }
  return (
    <form className="SignIn-container">
      <label>Email
        <input type="text" value={email} onChange={e => setEmail(e.target.value) } />
      </label>
      <label>Password
        <input type="password" value={password} onChange={e => setPassword(e.target.value) } />
      </label>
      <button type="submit" onClick={handleClick}> Sign In </button>
      <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
      <Link to='/sign-up'> Register? </Link>
    </form>
  )
}

export default SignIn
