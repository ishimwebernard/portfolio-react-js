import React, { useState } from 'react'
import Header from './Header'
import Greatings from './Greatings'
import Activities from './Activities'
import SomeThingsIHaveBuilt from './SomeThingsIHaveBuilt'
import GetInTouch from './GetInTouch'
import Footer from './Footer'
import FloaterMapper from './FloaterMapper'
import Scroll from 'react-scroll'
let Element = Scroll.Element;
let scroller = Scroll.scroller;

export default function Main() {
    const [visible, setVisible] = useState(false)
    const changeVisibility = () => {
        setVisible(!visible)
    }
    return ( 
        <div className="bg-gray-100">
            <Header visible={visible} changeVisibility={changeVisibility}   />
            <Element name='greatings'>
            <Greatings />
            </Element>
           <Element name='aboutme'>
           <Activities />
           </Element>
            <Element name='work'>
            <SomeThingsIHaveBuilt />
            </Element>
            <Element name='getInTouch'>
            <GetInTouch />
            </Element>
            <Footer />
            <FloaterMapper visible={visible} changeVisibility={changeVisibility} />
        </div>
    )
}
