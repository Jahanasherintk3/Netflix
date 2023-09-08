import React from 'react'
import './Navbar.css'
import avatar from '../../Assets/avatar.jpeg'
import netflix from '../../Assets/netflix.png'
function Navbar() {
  return (
    <div className='navbar'>
      <img className='netflix'src={netflix} alt="netflix-logo" />
      <img className='avatar' src={avatar} alt="avatar" />
    </div>
  )
}

export default Navbar
