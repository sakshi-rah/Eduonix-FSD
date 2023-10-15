import React from 'react'
import UserDetails from './UserDetails'
import {Button} from 'react-bootstrap'
// import './Header.css'
function Header({ title }) {
    return (
        <div className='headerSection bg-success text-white p-2 m-5'>
            <h2>  This is Header Section. </h2>
            <p className='text-info fs-5'><span className='fs-4 text-warning'>Today Title:</span> {title}</p>
            <UserDetails />
            <Button variant='danger'>ReactBootstrap Btn</Button>
        </div>
    )
}

export default Header