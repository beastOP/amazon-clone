import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './css/Navigation.css'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase'

// eslint-disable-next-line
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function Navigation() {
  // eslint-disable-next-line
  const [{ user, items }] = useStateValue()
  const logout = () => {
    if(user) auth.signOut()
  }
  let name
  if(user) name = user.email.substring(0, 5)
  return (
    <nav className="Navbar">
      <div className='Navbar_logo'>
        <Link to="/"><img className="logo" width="100px" src={logo} alt="Amazon" /></Link>
      </div>
      <SearchBar />
      <div className="nav-signIn-container">
        <p>Hello, {user ? name.capitalize() + '!' : 'Guest'}</p>
        <Link to={!user && "/sign-in"} onClick={logout}><h4>{ user ? 'Sign Out' : 'Sign In' }</h4></Link>
      </div>
      <div className="nav-signIn-container">
        <p>Returns</p>
        <Link to={'/orders'}><h4 className="hide">& Orders</h4></Link>
      </div>
      <div className="cart-container">
        <Link to='/cart'>
          <img height="40px" alt="cart" src={cart} align="right" />
          <span style={ 10 <= items ? { left: '13.5px'} : null}>{items}</span>
        </Link>
      </div>
    </nav>
  )
}

const SearchBar = () => {
  const location = useLocation()
  const [input, setInput] = useState('')
  const search = e => {
    e.preventDefault()
  }
  useEffect(() => {
    const ar = location.pathname.split('/')
    if('categories' === ar[1]) setInput(ar[2])
    else setInput('')
  }, [location])

  return (
    <form className="search-form">
      <input className="search" value={input} onChange={e => setInput(e.target.value)} />
      <button type="submit" onClick={search}>
        <img width="25px" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png" alt="search" />
      </button>
    </form>
  )
}


export default Navigation
