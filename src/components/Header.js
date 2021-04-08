import React from 'react'
import Logo from '../assets/logo.png'

export default function Header() {
    return (
        <div className="flex py-5">
        <img src={Logo} className="h-8 " alt="ISHIMWE Bernard"/>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 absolute right-0 mr-5 " fill="none" viewBox="0 0 24 24" stroke="#374151">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </div>
    )
}
