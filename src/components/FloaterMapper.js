import React, { useState, useEffect } from 'react'
import Scroll from 'react-scroll'
var Element  = Scroll.Element;
var scroller = Scroll.scroller;

function HideMenu(){

}

export default function FloaterMapper({ visible, changeVisibility }) {


    return (
        <div className={`fixed top-0 w-full h-full bg-gray-400 bg-opacity-60 ${visible ? 'block':'hidden'}`}>
            <div className="w-2/3 h-full absolute right-0 bg-gray-200 flex flex-col py-4">
            <svg onClick={()=>{
                changeVisibility()
              
            }} xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 absolute right-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div  onClick={()=>{
                changeVisibility()
                   scroller.scrollTo('aboutme', {
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: 50, // Scrolls to element + 50 pixels down the page
               
              })
            }} className="mt-24 text-center w-full">
            <span className="text-sm text-blue-600">01</span>   
            <p className="font-normal text-gray-800 text-2xl">About</p>
            </div>
            <div className="mt-12 text-center w-full" onClick={()=>{
                changeVisibility()
                   scroller.scrollTo('something', {
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: 50, // Scrolls to element + 50 pixels down the page
               
              })
            }}>
            <span className="text-sm text-blue-600">02</span>   
            <p className="font-normal text-gray-800 text-2xl">Experience</p>
            </div>
            <div onClick={()=>{
                  changeVisibility()
                   scroller.scrollTo('work', {
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: 50, // Scrolls to element + 50 pixels down the page
               
              })
            }} className="mt-12 text-center w-full">
            <span className="text-sm text-blue-600">03</span>   
            <p className="font-normal text-gray-800 text-2xl">Work</p>
            </div>
            <div onClick={()=>{
                      changeVisibility()
                       scroller.scrollTo('getInTouch', {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                    offset: 50, // Scrolls to element + 50 pixels down the page
                   
                  })
            }} className="mt-12 text-center w-full">
            <span className="text-sm text-blue-600">04</span>   
            <p className="font-normal text-gray-800 text-2xl">Contact</p>
            </div>
            <button className="mt-14 p-5 border-2 border-blue-600 text-blue-600 focus:bg-gray-200 focus:outline-none mx-6">Resume</button>
            </div>
            
        </div>
    )
}
