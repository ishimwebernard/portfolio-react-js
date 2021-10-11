import React from 'react'
import Scroll from 'react-scroll'
import Logo from '../assets/logo.png'

var Element  = Scroll.Element;
var scroller = Scroll.scroller;

export default function Header({  changeVisibility}) {
    return (
        <div className="flex py-16  px-5">
        <img src={Logo} className="h-8 mt-auto md:h-12" alt="ISHIMWE Bernard"/>
        <div className=" space-x-2 absolute right-0 mx-5 px-auto hidden ">
     
        </div>
        <svg onClick={()=>{
            changeVisibility()
        }} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 absolute right-0 mr-5 md:hidden " fill="none" viewBox="0 0 24 24" stroke="#374151">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </div>
    )
}
