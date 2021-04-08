import React from 'react'

export default function Greatings() {
    return (
        <div>
            <p className="font-normal text-blue-600 mt-8" data-aos="fade-up"     data-aos-mirror="true"
>Hi, my name is </p>
            <p className="text-4xl font-semibold text-gray-800 mt-5" data-aos="fade-down"     data-aos-offset="200">ISHIMWE Bernard.</p>
            <p className="text-4xl font-thin text-gray-500 mt-3" data-aos="fade-up">I build things for the web and mobile</p>
            <p className="text-xl font-normal text-gray-500 mt-3 leading-6" data-aos="fade-up">
                I am a Rwanda-based software engineer who specializes in building and designing exceptional digital experiences. Currently, I'm a developer at <span className="text-blue-600 leading-sm">Andela</span> focused on building accessible, human-centered products
            </p>
            <button className="mt-14 p-5 border-2 border-blue-600 text-blue-600 focus:bg-gray-200 focus:outline-none" data-aos="fade-up">Get In Touch</button>
        </div>
    )
}
