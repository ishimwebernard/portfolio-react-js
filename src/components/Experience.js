import React, { useState } from 'react'
import List from './List'

const Andela = ['Participate in open source projects','Write modern, performant, maintainable code for a diverse array of client and internal projects', 'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify','Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis']
const Intiti = ['Develop multiple websites using different technologies', 'Deal with different clients and be able to ship complete packages on the specified time','Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis']
const FreeLancer = ['Develop multiple mobile applications using Java, C/C++ and react native', 'Host multiple applications on google play store using android bundles ','Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis']

export default function Experience() {
    const [activeTab, setActiveTab] = useState(1);
    const toggleTab = (n) => {
        setActiveTab(n)
    }
    return (
        <div>
            <div className="grid grid-cols-3 tex-center bg-white cursor-pointer  border-2">
                <p onClick={()=>toggleTab(1)} className={`text-center py-1  ${activeTab === 1 ? 'text-gray-100 bg-blue-600':'text-gray-500 bg-white'}`}>Andela</p>
                <p onClick={()=>toggleTab(2)} className={`text-center py-1  ${activeTab === 2 ? 'text-gray-100 bg-blue-600':'text-gray-500 bg-white'}`}>Intiti Magazine</p>
                <p onClick={()=>toggleTab(3)} className={`text-center py-1  ${activeTab === 3 ? 'text-gray-100 bg-blue-600':'text-gray-500 bg-white'}`}>Freelancer</p>    
            </div>
            <div className={`mt-6 ${activeTab === 1 ? '':'hidden'}`}>
                <p>Trainee <span>@ Andela</span></p>
                <p>September 2020 - Present</p>
                <List items={Andela} />
            </div>
            <div className={`mt-6 ${activeTab === 2 ? '':'hidden'}`} >
                <p>Web Developer <span>@ Intiti Magazine</span></p>
                <p>December 2020 - Present</p>
                <List items={Intiti} />
            </div>
            <div className={`mt-6 ${activeTab === 3 ? '':'hidden'}`}>
            <p>Web Developer <span>@ Intiti Magazine</span></p>
                <p>December 2020 - Present</p>
                <List items={FreeLancer} />
            </div>
        </div>
    )
}
