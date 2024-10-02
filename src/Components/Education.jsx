import React from 'react'
import { EDUCATION } from '../constants'

export default function Education() {
    return (
        <section className='py-8' id='education'>
            <h2 className='text-center text-3xl mb-4 font-bold'>
                Education
            </h2>
            {EDUCATION.map((edu, index) => (
                <div className="mb-6 p-8" key={index}>
                    <h3 className='text-xl font-semibold '>{edu.degree}</h3>
                    <p className='text-lg'>{edu.institution}</p>
                    <p className='text-sm text-stone-300'>{edu.duration}</p>
                    <p className='mt-2'>{edu.description}</p>
                </div>
            ))}
        </section>
    )
}
