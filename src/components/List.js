import React from 'react'


export default function List({ items, vertical }) {
    const rows = [];
    let index = 0;

    items.forEach(item => {
        index +=1;
        rows.push(
            <div className={`p-2 flex space-x-6 w-full ${(index % 2) === 0 ? 'bg-gray-200':''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hidden md:block" viewBox="0 0 20 20" fill="#2563EB">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
                <p>{item}</p>
            </div>
            );
    });
    return (
        <div className={`rounded-md mt-4 border-2 ${vertical ? '':'grid grid-cols-2 '}`}>
            {rows}
        </div>
    )
    
    
}
List.defaultProps = {
    vertical: true
}
