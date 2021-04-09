import React, { useState } from 'react'
import Header from './Header'
import Greatings from './Greatings'
import Activities from './Activities'
import SomeThingsIHaveBuilt from './SomeThingsIHaveBuilt'
import GetInTouch from './GetInTouch'
import Footer from './Footer'
import FloaterMapper from './FloaterMapper'

export default function Main() {
    const [toggleOn, setToggle] = useState(false)
    const onTogglePressed = () => {
        setToggle(!toggleOn)
    }
    return ( 
        <div className="bg-gray-100">
            <Header toggleOn={toggleOn} togglePressed={onTogglePressed}   />
            <Greatings />
            <Activities />
            <SomeThingsIHaveBuilt />
            <GetInTouch />
            <Footer />
            <FloaterMapper toggleOn={toggleOn} togglePressed={setToggle}  />
        </div>
    )
}
