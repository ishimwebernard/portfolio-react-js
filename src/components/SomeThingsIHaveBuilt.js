import React from 'react'
import Title from './Title'
import Card from './ThingCard'

export default function SomeThingsIHaveBuilt() {
    return (
        <div>
            <Title number="03" text="Some things I've built"/>
            <Card type="Personal Project" title="English Kinyarwanda Dictionary" languages={['Java', 'XML']} description="Wondered how you could get immediate, offline and helpful English-Kinyarwanda dictionary? This is your right choice. The app does not require internet access or extra utilities to perform. It uses the phone's storage to store meanings and fetch them when you search for them." official="https://play.google.com/store/apps/details?id=com.bluefishapps.englishkinyarwandadictionary" />
            <Card type="Featured Project" title="Barefoot Nomad" languages={['React', 'Express']} description="Make company global travel and accommodation easy and convenient for the strong work force of savvy members of staff, by leveraging the modern web." official="https://play.google.com/store/apps/details?id=com.bluefishapps.englishkinyarwandadictionary" />
        </div>
    )
}
