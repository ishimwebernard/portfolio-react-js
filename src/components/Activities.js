import React from 'react'
import Title from './Title'
import List from './List'
import Experience from './Experience'


export default function Activities() {
    return (
        <div className="mt-40  px-5">
           <div className=" mt-32 md:ml-40">
           <Title  key="about" number="01." text="About Me"  />
            <p className="mt-8 text-gray-500">
                Hello! My name is Bernard and I enjoy creating thungs that live in the internet. My interest in web development started back in 2016 when I was learning Computer Science and web development as well.
                <br></br>

            </p>
            <List items={['JavaScript', 'NodeJs', 'React', 'React Native', 'Java', 'C/C++']} vertical={false}/>
           </div>
           <div className="md:ml-60">
           <Title id="experience" number="02." text="Where I worked" />
            <Experience />
           </div>
        </div>
    )
}
