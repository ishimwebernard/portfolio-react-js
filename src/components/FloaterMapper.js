import React from 'react'

export default function FloaterMapper({ toggleOn, togglePressed }) {
    const scrollToId = (id) => {
        // eslint-disable-next-line default-case
        switch (id){
            case 1:
                scroll('about');
                break
            case 2:
                scroll('experience');   
                break
            case 3:
                scroll('work');
                break
            case 4:
                scroll('contact');
                break
            default:              
        }
    }
    const scroll = (elementId) => {
        const element = document.getElementById(elementId);
        togglePressed();
        element.scrollIntoView({ behavior: 'smooth'});

    }
    return (
        <div className={`fixed top-0 w-full h-full bg-gray-400 bg-opacity-60 ${toggleOn ? 'block':'hidden'}`}>
            <div className="w-2/3 h-full absolute right-0 bg-gray-200 flex flex-col py-4">
            <svg onClick={()=>{togglePressed()}} xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 absolute right-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div onClick={()=>scrollToId(1)} className="mt-24 text-center w-full">
            <span className="text-sm text-blue-600">01</span>   
            <p className="font-normal text-gray-800 text-2xl">About</p>
            </div>
            <div onClick={()=>scrollToId(2)} className="mt-12 text-center w-full">
            <span className="text-sm text-blue-600">02</span>   
            <p className="font-normal text-gray-800 text-2xl">Experience</p>
            </div>
            <div onClick={()=>scrollToId(3)} className="mt-12 text-center w-full">
            <span className="text-sm text-blue-600">03</span>   
            <p className="font-normal text-gray-800 text-2xl">Work</p>
            </div>
            <div onClick={()=>scrollToId(4)} className="mt-12 text-center w-full">
            <span className="text-sm text-blue-600">04</span>   
            <p className="font-normal text-gray-800 text-2xl">Contact</p>
            </div>
            <button className="mt-14 p-5 border-2 border-blue-600 text-blue-600 focus:bg-gray-200 focus:outline-none mx-6">Resume</button>
            </div>
            
        </div>
    )
}
