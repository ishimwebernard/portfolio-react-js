import React from 'react'
import Header from './Header'
import Greatings from './Greatings'
import Activities from './Activities'
import SomeThingsIHaveBuilt from './SomeThingsIHaveBuilt'
import GetInTouch from './GetInTouch'
import Footer from './Footer'

export default function Main() {
    return (
        <div className="bg-gray-100 px-5">
            <Header />
            <Greatings />
            <Activities />
            <SomeThingsIHaveBuilt />
            <GetInTouch />
            <Footer />
        </div>
    )
}
