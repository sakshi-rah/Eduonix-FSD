import React from 'react'
import UserDetails from './UserDetails'
// import './Header.css'
function Header() {
  return (
    <div className='headerSection bg-success text-white p-2 m-5'>
        <h2>  This is Header Section. </h2>
        <UserDetails/>
    </div>
  )
}

export default Header