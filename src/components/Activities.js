import React from 'react'
import Title from './Title'
import List from './List'
import Experience from './Experience'
import ME from '../assets/ME.jpeg'


export default function Activities() {
    return (
        <div className="mt-40  px-5 mr-40 items-center" data-aos="fade-up">
           <div className=" mt-32 md:grid md:grid-cols-3 md:ml-40 md:space-x-4">
            <div className="col-span-2">
            <Title  key="about" number="01." text="About Me"  />
            <p className="mt-8 text-gray-500">
                Hello! My name is Bernard and I enjoy creating thungs that live in the internet. My interest in web development started back in 2016 when I was learning Computer Science and web development as well.
                <br></br>

            </p>
            <List items={['JavaScript', 'NodeJs', 'React', 'React Native', 'Java', 'C/C++']} vertical={false}/>
            </div>
            <img src={ME} className="h-96 w-96 rounded-xl object-cover self-center mt-20 shadow-2xl" />
           </div>
           <div className="md:ml-60">
           <Title id="experience" number="02." text="Where I worked" />
            <Experience />
           </div>
        </div>
    )
}
