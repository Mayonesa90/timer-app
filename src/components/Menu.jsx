import { useState } from 'react'
import {motion, useAnimate, AnimatePresence} from 'framer-motion'

import LogoHorizontalBlack from '../assets/logoHorizontalBlack.svg'
import LogoHorizontalWhite from '../assets/logoHorizontalWhite.svg'


export default function Menu(){

    const [menuOpen, setMenuOpen] = useState(false) 
    // const [scope, animate] = useAnimate()

    function toggleMenu(){
        setMenuOpen(!menuOpen)
    }

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

    return (
        <AnimatePresence>
        {menuOpen ? (
            <motion.nav 
                className='menu-open min-w-[375px] h-full bg-gray-900 grid items-center justify-center absolute'
                key={'menu-open'}
                initial='closed'
                animate='open'
                exit='closed'
                variants={menuVariants}
                >
                <img src={LogoHorizontalWhite} onClick={toggleMenu}alt="logo" className='w-9 pt-3 ml-4 absolute top-3' />
                <ul className=' font-PTSans tracking-widest font-bold text-2xl text-gray-50 flex flex-col gap-8 '>
                    <li>ANALOG TIMER</li>
                    <li>DIGITAL TIMER</li>
                    <li>VISUAL TIMER</li>
                    <li>TEXT TIMER</li>
                    <li>CIRCLES TIMER</li>
                </ul>
            </motion.nav>
        ) : (
            <motion.nav 
            className='menu-closed min-w-[375px] bg-gray-50 shadow-2xl absolute top-3'
            key={'menu-closed'}
            initial='closed'
            animate='open'
            exit='closed'
            variants={menuVariants}
            >
            <img src={LogoHorizontalBlack} onClick={toggleMenu} alt="logo" className='w-9 pt-3  ml-4 absolute ' />
            <h1 className=' tracking-widest text-gray-400 text-xl font-RighteousFont absolute top-3 left-[40%]'>interval</h1>
            </motion.nav>
        )
            }
        </AnimatePresence>
    )

    // if (menuOpen){
    //     return (
    //         <motion.nav 
    //             className='menu-open min-w-[375px] h-full bg-gray-900 grid items-center justify-center absolute'
    //             animate='open'
    //             initial='closed'
    //             exit='closed'
    //             variants={menuVariants}
    //             >
    //             <img src={LogoHorizontalWhite} onClick={toggleMenu}alt="logo" className='w-9 pt-3 ml-4 absolute top-3' />
    //             <ul className=' font-PTSans tracking-widest font-bold text-2xl text-gray-50 flex flex-col gap-8 '>
    //                 <li>ANALOG TIMER</li>
    //                 <li>DIGITAL TIMER</li>
    //                 <li>VISUAL TIMER</li>
    //                 <li>TEXT TIMER</li>
    //                 <li>CIRCLES TIMER</li>
    //             </ul>
    //         </motion.nav>
    //     )
    // } else {
    //     return (
    //         <motion.nav 
    //             className='menu-closed min-w-[375px] bg-gray-50 shadow-2xl absolute top-3'
    //             animate='open'
    //             initial='closed'
    //             exit='closed'
    //             variants={menuVariants}
    //             >
    //             <img src={LogoHorizontalBlack} onClick={toggleMenu} alt="logo" className='w-9 pt-3  ml-4 absolute ' />
    //             <h1 className=' tracking-widest text-gray-400 text-xl font-RighteousFont absolute top-3 left-[40%]'>interval</h1>
    //         </motion.nav>
    //     )
    // }

}