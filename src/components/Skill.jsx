import React from 'react'
import SkillCard from './SkillCard'

export default function Skill(props) {
    
    const skillItem = [
            {
                imgSrc: '/spss.svg',
                label: 'IBM SPSS Statistics',
            },
            {
                imgSrc: '/jamovi.svg',
                label: 'Jamovi',
            },
            {
                imgSrc: '/eeg.svg',
                label: 'EEG',
            },
            {
                imgSrc: '/Neurofeedback.svg',
                label: 'Neurofeedback',
            },
            {
                imgSrc: '/biofeedback.svg',
                label: 'biofeedback',
            },
            {
                imgSrc: '/eyetracking.svg',
                label: 'Eye Tracking',
            },
            {
                imgSrc: '/interpretation.svg',
                label: ' Data Interpretation',
            },
            {
                imgSrc: '/cleaning.svg',
                label: 'Data Cleaning',
            },
            {
                imgSrc: '/tableau.svg',
                label: 'Tableau',
            },
            {
                imgSrc: '/excel.svg',
                label: 'Excel',
            },    
    ]

    return (
        <>
            <section className='mt-5' id='skills'>
                <div className='container mt-20 px-4 mx-auto lg:px-8 xl:max-w-6xl'>

                    <h2 className='headline-2 text-3xl lg:text-4xl lg:leading-tight font-semibold'>
                        My Skills
                    </h2>
                    <br />
                    <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                        {
                            skillItem.map(({ imgSrc, label }, key) => (
                                <SkillCard
                                imgSrc={imgSrc}
                                label={label}
                                key={key}
                                />
                            ))
                        }
                    </div>

                </div>
            </section>
        </>
    )
}
