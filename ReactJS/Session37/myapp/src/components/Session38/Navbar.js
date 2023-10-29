import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul className='nav'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/asyncstate">Asyncstate</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/asyncapi">Asyncapi</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/counter">Counter</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/greeting">Greeting</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/tooglebtn">Tooglebtn</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar