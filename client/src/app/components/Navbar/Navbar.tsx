import React from 'react'
import './Navbar.scss'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav>
        <ul className="nav__left">
            <h1>Logo</h1>
        </ul>
        <ul className="nav__right">
            <button className="nav__btn">Register</button>
            <button className="nav__btn">Login</button>
            <button className="nav__btn">About</button>
        </ul>

    </nav>
  )
}

export default Navbar