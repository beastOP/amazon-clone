import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { auth } from '../firebase'
import './Amazon.css'
import PageRenderer from './page-renderer'
import Home from './pages/index'
import Categories from './pages/categories'
import Product from './pages/product'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { useStateValue } from '../StateProvider'
import ScrollToTop from './scrollToTop'

function Amazon() {
  const [,dispatch] = useStateValue()
  const location = useLocation()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])
  return (
    <div className='Main'>
      { location.pathname === '/sign-in' 
        || location.pathname === '/sign-up' 
        ? null
        : <Navigation /> 
      }
      <div className='Cont'>
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact  path='/:page' component={PageRenderer} />
            <Route path='/categories/:slug' component={Categories} />
            <Route path='/products/:id' component={Product} />
            <Route component={() => 404} />
          </Switch>
        </ScrollToTop>
      </div>
      { location.pathname === '/sign-in' 
        || location.pathname === '/sign-up' 
        ? null
        : <Footer /> 
      }
    </div>
  )
}
export default Amazon
