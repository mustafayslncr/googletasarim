import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <div className="navbaralt">
            <span style={{margin:'10px',cursor:'pointer'}}>Gmail</span>
            <span style={{margin:'10px',cursor:'pointer'}}>Görseller</span>
            <span style={{margin:'10px',cursor:'pointer'}} class="material-icons">apps</span>
            <button style={{margin:'10px'}} className="btn btn-primary">Oturum aç</button>
        </div>
        </>
    )
}

export default Navbar
