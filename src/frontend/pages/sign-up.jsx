import React, { useState } from 'react'
import {Link, useHistory } from 'react-router-dom'
// import logo from '../assets/logo.png'
import {auth, db} from '../../firebase'
import './css/sign-in.css'

const SignUp = () => {
  return (
    <div className="cc">
      <Link to='/'>
        <img className="loogoo" src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png" alt="Amazon" />
      </Link>
      <div className="sign-container">
        <h2> Sign Up </h2>
        <SignUpForm />
      </div>
    </div>
  )
}

const SignUpForm = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const handleClick = async e => {
    e.preventDefault()
    try {
      const registered = await auth.createUserWithEmailAndPassword(email, password)
      if( registered ) {
        db.collection('Users').add({
          uid: registered.user.uid,
          'First Name': name,
          'Last Name': lastName,
          Email: email,
        })
        history.push('/')
      }
    } catch (err) {
      alert(err)
    }
  }
  return (
    <form className="SignIn-container">
      <label>First Name
        <input required type="text" value={name} onChange={e => setName(e.target.value) } />
      </label>
      <label>Last Name
        <input required type="text" value={lastName} onChange={e => setLastName(e.target.value) } />
      </label>
      <label>Email
        <input type="text" value={email} onChange={e => setEmail(e.target.value) } />
      </label>
      <label>Password
        <input type="password" value={password} onChange={e => setPassword(e.target.value) } />
      </label>
      <button type="submit" onClick={handleClick}> Sign In </button>
      <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
      <Link to='sign-in'> Already Signed Up</Link>
    </form>
  )
}

export default SignUp
