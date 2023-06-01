import React from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.css'

export default function MainMenu() {
    return (
        <nav className="MainMenu">
            <ul><Link   to="/all">Display all Employees</Link></ul>
            <ul><Link   to="/search">Search</Link></ul>
            <ul><Link   to="/gender">Employees By Gender</Link></ul>
            <ul><Link   to="/dept">Employees By Department</Link></ul>
        </nav>
    )
}
