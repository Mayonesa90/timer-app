import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

import LogoHorizontalBlack from '../assets/logoHorizontalBlack.svg'
import LogoHorizontalWhite from '../assets/logoHorizontalWhite.svg'


export default function Menu({analogOpen, digitalOpen, textOpen, showSetTime, handleAnalogOpen, handleSetTimeOpen, handleDigitalOpen, handleTextOpen}){

    //The state of the menu
    const [menuOpen, setMenuOpen] = useState(false) 
    
    // FUnction to toggle menu
    function toggleMenu(){
        setMenuOpen(!menuOpen)
    }

    //Animation variants for smooth entry
    const menuVariants = {
        open: {
            opacity: 1,
            transition: { duration: 0.35 }
        },
        closed: {
            opacity: 0,
            transition: { duration: 0.35 }
        }
    }

    const handleAnalogClick = () => {
        toggleMenu()

        if(!analogOpen){
            handleAnalogOpen()
        }

        if(digitalOpen){
            handleDigitalOpen()
        }

        if(showSetTime){
            handleSetTimeOpen()
        }

        if(textOpen){
            handleTextOpen()
        }
    }

    const handleDigitalClick = () => {
        toggleMenu()

        if(!digitalOpen){
            handleDigitalOpen()
        }

        if(analogOpen){
            handleAnalogOpen()
        }

        if(showSetTime){
            handleSetTimeOpen()
        }

        if(textOpen){
            handleTextOpen()
        }

    }

    const handleTextClick = () => {
        toggleMenu()

        if(!textOpen){
            handleTextOpen()
        }

        if(analogOpen){
            handleAnalogOpen()
        }

        if(showSetTime){
            handleSetTimeOpen()
        }

        if(digitalOpen) {
            handleDigitalOpen()
        }
    }   


    return (
        <AnimatePresence>
        {menuOpen ? (
            <motion.nav 
                className='menu-open z-40 min-w-[374px] h-full bg-gray-900 grid items-center justify-center absolute'
                key={'menu-open'}
                initial='closed'
                animate='open'
                exit='closed'
                variants={menuVariants}
                >
                <img src={LogoHorizontalWhite} onClick={toggleMenu}alt="logo" className='w-9 pt-3 ml-4 absolute top-3 hover:cursor-pointer ' />
                <ul className=' font-PTSans tracking-widest font-bold text-2xl text-gray-300 flex flex-col gap-8  '>
                    <li onClick={handleAnalogClick} className='hover:cursor-pointer hover:text-gray-50'>ANALOG TIMER</li>
                    <li onClick={handleDigitalClick} className='hover:cursor-pointer hover:text-gray-50'>DIGITAL TIMER</li>
                    <li onClick={handleTextClick} className='hover:cursor-pointer hover:text-gray-50'>TEXT TIMER</li>
                </ul>
            </motion.nav>
        ) : (
            <motion.nav 
                className='hover:cursor-pointer menu-closed min-w-[374px] bg-gray-50 shadow-2xl absolute top-3'
                key={'menu-closed'}
                initial='closed'
                animate='open'
                exit='closed'
                variants={menuVariants}
            >
                <img src={LogoHorizontalBlack} onClick={toggleMenu} alt="logo" className='w-9 pt-3  ml-4 absolute  ' />
                <h1 className=' tracking-widest text-gray-50 text-xl font-RighteousFont absolute top-3 left-[40%]'>interval</h1>
            </motion.nav>
        )
            }
        </AnimatePresence>
    )

}