import React from 'react'
import Logo from '../assets/logo.png'

export default function Header({ toggleOn, togglePressed}) {
    return (
        <div className="flex py-16  px-5">
        <img src={Logo} className="h-8 mt-auto md:h-12" alt="ISHIMWE Bernard"/>
        <div className=" space-x-2 absolute right-0 mx-5 px-auto hidden md:flex">
        <div  className=" text-center flex space-x-4">
            <span className="font-thin text-gray-800 text-md text-blue-600">01</span>   
            <p className="font-normal text-gray-800 text-md">About</p>
        </div>
        <div  className=" text-center flex space-x-2">
            <span className="font-thin text-gray-800 text-md text-blue-600">02</span>   
            <p className="font-normal text-gray-800 text-md">Experience</p>
        </div>
        <div  className=" text-center flex space-x-2">
            <span className="font-thin text-gray-800 text-md text-blue-600">03</span>   
            <p className="font-normal text-gray-800 text-md">Work</p>
        </div>
        <div  className=" text-center flex space-x-2">
            <span className="font-thin text-gray-800 text-md text-blue-600">04</span>   
            <p className="font-normal text-gray-800 text-md">Contact</p>
        </div>
        {/* <button className=" p-5 border-2 border-blue-600 text-blue-600 focus:bg-gray-200 focus:outline-none">Get In Touch</button> */}

        </div>
        <svg onClick={()=>{togglePressed(!toggleOn)}} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 absolute right-0 mr-5 md:hidden " fill="none" viewBox="0 0 24 24" stroke="#374151">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </div>
    )
}
