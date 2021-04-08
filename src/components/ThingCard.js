import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

export default function ThingCard({ type, title, description, languages, github, official}) {
    const rows = [];

    languages.forEach((language) => {
        rows.push(
           <p>{language}</p>
        )
    });
    return (
        <div className="bg-white px-5 py-8 mt-8 rounded-md" data-aos="fade-up">
            <p className="font-thin text-blue-600">{type}</p>
            <p className="font-semibold text-gray-800 text-2xl">{title}</p>
            <p className="text-gray-500 mt-4 w-full">{description}</p>
            <div className="flex space-x-2 font-thin mt-4">
                {rows}
            </div>
            <Router>
            <div>
            <Link to={official}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            </Link>
            </div>
            </Router>
        </div>
    )
}
ThingCard.defaultProps = {
    type: 'Featured Project',
    title: 'Barefoot Nomad',
    description: 'A good booking service',
    languages: ['Express.js', 'React', 'TailwindCSS']
}
