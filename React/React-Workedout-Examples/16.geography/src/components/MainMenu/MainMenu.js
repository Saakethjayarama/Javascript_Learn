import React from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.css'

export default function MainMenu() {
    return (
        <nav className="MainMenu">
            <ul><Link   to="/all">Display all Countries</Link></ul>
            <ul><Link   to="/search">Search</Link></ul>
            <ul><Link   to="/continent">Countries by continent</Link></ul>
        </nav>
    )
}
