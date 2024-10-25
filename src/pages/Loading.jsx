import LogoVertical from '../assets/logoVertical.svg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import {motion} from 'framer-motion'

export default function Loading(){

    return (
        <div className='wrapper w-full min-h-svh bg-gray-900 grid items-center justify-center'>
        <main>
          <Link to='/main'>
            <motion.img 
              src={LogoVertical} 
              alt="logo" 
              className='logo w-9 mx-auto mb-2' 
              animate={{
                // Keyframes for scale, outline and outlineOffset 
                // to make the user understand they need to click on 
                // icon to continue
                scale: [1, 1, 0.9, 1, 0.9, 1, 1, 1, 1, 1],  
                outline: [
                  "3px solid #35A7FF", 
                  "3px solid #111827", 
                  "3px solid #111827", 
                  "3px solid #111827", 
                  "3px solid #111827", 
                  "3px solid #111827", 
                  "3px solid #35A7FF", 
                  "3px solid #35A7FF",
                  "3px solid #35A7FF", 
                  "3px solid #35A7FF", 
                  ],
                outlineOffset: [
                  "6px",
                  "0px",
                  "0px",
                  "0px",
                  "0px",
                  "0px",
                  "6px",
                  "6px",
                  "6px",
                  "6px",

                ],
                borderRadius: [
                  "20%",
                  "10%",
                  "10%",
                  "0%",
                  "10%",
               
                
                
                ]
              }}
              transition={{
                duration: 4,  // Total duration of the animation cycle
                ease: "easeInOut",
                repeat: Infinity,  // Infinite repetition
                repeatType: "loop" // Looping behavior
              }}
            />
          </Link>
          <h1 className=' tracking-widest text-gray-50 text-xl font-RighteousFont text-center'>INTERVAL</h1>
          <p className='text-gray-50 tracking-widest text-sm font-PTSans'>For all your timing needs</p>
        </main>
      </div>
    )
}