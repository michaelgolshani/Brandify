import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const LandingPage = () => {



  return (
   <div>
      <h1>The Global commerce platform</h1>
      <h2>Build your business with Brandify to sell online, offline, and everywhere in between.</h2>
      <NavLink to= "/login">
        <button>Sign Up</button>
        </NavLink>

      <h2>Discover why millions of entrepreneurs chose Shopify to build their business — from hello world to IPO.</h2>
   </div>
  )
}

export default LandingPage
