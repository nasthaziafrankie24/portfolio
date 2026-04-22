import React from 'react'
import { ButtonPrimary ,ButtonOutline} from './Button'

export default function Home(props) {
    

    return (
        <>
           <section
           className='pt-28 lg:pt-36'
           id='home'
           >

                <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10 px-4 mx-auto lg:px-8
                xl:max-w-6xl mt-8'>

                    <div >
                        <div className="flex items-center gap-3">
                            {/* <figure className='img-box w-9 h-9 rounded-lg bg-zinc-700 overflow-hidden'>
                                <img 
                                src="./avatar-1.jpg"
                                width={40}
                                height={40}
                                className='img-cover w-full h-full object-cover'
                                />
                            </figure> */}

                            <div className="flex items-center gap-1.5 text-zinc-400 text-sm  tracking-wide">
                                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                    <span className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping">

                                    </span>
                                </span>

                                Available for work
                            </div>
                        </div>

                        <h2 className="headline-1 text-5xl leading-tight font-semibold lg:text-[55px]
                        lg:leading-[1.15] max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                            Hi, I'm <br />Nasthazia Frankie <br /> 
                            Neuro Psychologist <br /> 
                        </h2>
                        <div className="flex items-center gap-4 cursor-pointer">
                            <ButtonPrimary
                                href='./resume.pdf'
                                target='_blank'
                                label="Download CV"
                                icon='download'
                                download = {true}
                            />
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <figure className="w-full max-w-[430px] ml-auto bg-gradient-to-t from-sky-300
                        via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                            <img 
                            src="./person-3.png"
                            width={656}
                            height={800}
                            className=''
                            />
                        </figure>
                    </div>

                </div>

            </section> 
        </>
    )
}
