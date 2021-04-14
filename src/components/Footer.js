import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="items-center mt-10 border-t-2 border-blue-600 py-4   w-full">
            <p className="text-center font-thin text-blue-600" >Designed and built by ISHIMWE Bernard</p>
            <p className="text-center text-sm">Copyright 2021</p>

       <Router>
       <Link
            to='#'
            onClick={(e) => {
                window.location = 'mailto:isbernard2001@gmail.com'
                e.preventDefault();
            }}
        >
        <p className="w-full items-center text-center mt-10">
        <span className="mt-14 p-5 border-2 border-blue-600 text-blue-600 focus:bg-gray-200 focus:outline-none mx-6">Get In touch</span>

        </p>
        </Link>
       </Router>
        </div>
    )
}
