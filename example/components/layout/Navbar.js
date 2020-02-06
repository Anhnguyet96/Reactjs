import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedInOuts from './SignedInOuts'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className = "container">
                <Link to ='/' className ="brand-logo">Connectiv</Link>
                <SignedInLinks />
                <SignedInOuts />
                
            </div>

        </nav>
    );
}
export default Navbar;