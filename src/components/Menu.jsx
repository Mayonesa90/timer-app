import { useState } from 'react'

import LogoHorizontalBlack from '../assets/logoHorizontalBlack.svg'
import LogoHorizontalWhite from '../assets/logoHorizontalWhite.svg'


export default function Menu(){

    const [menuOpen, setMenuOpen] = useState(false) 

    function toggleMenu(){
        setMenuOpen(!menuOpen)
    }

    if (menuOpen){
        return (
            <nav className='min-w-[375px] h-full bg-gray-900 grid items-center justify-center absolute'>
                <img src={LogoHorizontalWhite} onClick={toggleMenu}alt="logo" className='w-9 pt-3 ml-4 absolute top-3' />
                <ul className=' font-PTSans tracking-widest font-bold text-2xl text-gray-50 flex flex-col gap-8 '>
                    <li>ANALOG TIMER</li>
                    <li>DIGITAL TIMER</li>
                    <li>VISUAL TIMER</li>
                    <li>TEXT TIMER</li>
                    <li>CIRCLES TIMER</li>
                </ul>
            </nav>
        )
    } else {
        return (
            <nav className='min-w-[375px] bg-gray-50 shadow-2xl absolute top-3'>
                <img src={LogoHorizontalBlack} onClick={toggleMenu} alt="logo" className='w-9 pt-3  ml-4 absolute ' />
                <h1 className=' tracking-widest text-gray-400 text-xl font-RighteousFont absolute top-3 left-[40%]'>interval</h1>
            </nav>
        )
    }

}