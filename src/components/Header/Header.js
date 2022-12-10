import React from 'react'
import './header.css'
import kirjamaailmalogo from './kirjamaailmalogo.png'

export default function Header() {
  return (
    <div>
      <img className="logo" src={kirjamaailmalogo} alt='logo'></img>
    </div>
  )
}
