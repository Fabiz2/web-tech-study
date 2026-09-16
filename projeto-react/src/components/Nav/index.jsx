import { Link } from 'react-router-dom'
import React from 'react'
import "./Nav.css"

export default function index() {
    return (
        <nav>
            <ul className='menu'>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/sobre">
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link to="/FAQ">
                        FAQ
                    </Link>
                </li>
                <li>
                    <Link to="/usuarios">
                        Usuarios
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
