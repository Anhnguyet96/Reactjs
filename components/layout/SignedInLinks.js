import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className ='right'>
            <li><NavLink to ='/'> New Project</NavLink></li>
            <li><NavLink to ='/'>LogOut</NavLink></li>
            <li><NavLink to ='/' className ='btn btn-floating blue lighten-1'>NN</NavLink></li>

        </ul>
    );
}
export default SignedInLinks;