import React from 'react'
import  Navbar  from './Navbar'
import { useState } from 'react'

export default function Header(props) {

    const[navOpen , setNavOpen] = useState(false)
    
    return (
        <>
            <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b
            from-zinc-900 to-zinc-900/0'>
                <div className='max-w-screen-2xl w-full mx-auto px-4
                flex justify-between items-center md:px-6 md:flex
                md:grid-cols-[1fr,3fr,1fr]'>

                    <h1>
                        <a 
                        href="/"
                        className='logo'
                        >
                            <img 
                            src="./logo.png" 
                            width={70}
                            height={70}
                            alt="Dhruv Moses" 
                            className='mt-2'/>
                        </a>
                    </h1>

                    <div className="relative md:justify-self-center mt-4">
                        <button
                        className='menu-btn md:hidden w-10 h-10 grid place-items-center bg-zinc-50/10
                        rounded-xl ring-inset ring-1 ring-zinc-50/[0.01] backdrop-blur-2xl hover:bg-zinc-50/15
                        transition-[transform,background-color] active:scale-95 cursor-pointer'
                        onClick={() => setNavOpen((prev) => !prev)}
                        > 
                            <span className="material-symbols-rounded w-[1em] h-[1em] overflow-hidden"
                            style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>
                                {navOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                        <Navbar navOpen={navOpen}/>
                    </div>

                    <a 
                    href="#contact"
                    className='contact-btn btn-secondary max-md:hidden md:justify-self-end max-w-max h-9 flex items-center 
                    gap-2 px-4 rounded-xl font-medium text-sm ring-1 ring-zinc-50/5 ring-inset transition-[background-color]
                    bg-zinc-50 text-zinc-900 active:bg-zinc-50/80;'
                    >
                        Contact Me
                    </a>

                </div>
            </header>
        </>
    )
}