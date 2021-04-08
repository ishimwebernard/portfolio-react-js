import React from 'react'

export default function Title({ number, text }) {
    return (
        <div className="flex space-x-2 mt-10" data-aos="fade-right">
            <span className="text-sm text-blue-600">{number}</span>   
            <p className="font-semibold text-gray-800 text-2xl">{text}</p>
        </div>
    )
}
