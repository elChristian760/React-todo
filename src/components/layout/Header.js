import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle} class="bg-purple-900">
            <h1>TodoList</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link> | <Link to="/services" style={linkStyle}>Services</Link>
        </header>
    )
}
const headerStyle = {
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
const linkStyle = {
    color: '#fff'
}