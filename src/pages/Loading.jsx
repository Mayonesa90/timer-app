import LogoVertical from '../assets/logoVertical.svg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import {motion, useAnimate, useInView} from 'framer-motion'
import { useEffect } from 'react'

export default function Loading(){

  // const [scope, animate] = useAnimate()
  // const isInView = useInView(scope)

  // useEffect(() => {
  //   if (isInView) {
  //     const enterAnimation = async () => {
  //       await animate(
  //         scope.current, 
  //         { 
  //           opacity: [1], 
  //           scale: [1] 
  //         }, 
  //         { 
  //           duration: 2,
  //           ease: "easeIn",

  //         }
  //       )
  //       await animate(
  //         scope.current, 
  //         { 
  //           opacity: [1], 
  //           scale: [0.9] 
  //         }, 
  //         { 
  //           duration: 1,
  //           ease: "easeIn",
  
  //         }
  //       )
  //       await animate(
  //         scope.current, 
  //         { 
  //           opacity: [1], 
  //           scale: [1] 
  //         }, 
  //         { 
  //           duration: 2,
  //           ease: "easeOut",

  //         }
  //       )
  //       await animate(
  //         scope.current, 
  //         { 
  //           opacity: [0.15], 
  //           scale: [1] 
  //         }, 
  //         { 
  //           duration: 1,
  //           ease: "easeIn",

  //         })
        
  //       await 
  //         animate(
  //           scope.current, 
  //           { 
  //             opacity: [1], 
  //             scale: [1] 
  //           }, 
  //           { 
  //             duration: 2,
  //             ease: "easeIn",

  //           }
  //         )

  //     }
  //     enterAnimation()
  //   }
  // }, [isInView])

    return (
        <div className='wrapper w-full min-h-svh bg-gray-900 grid items-center justify-center'>
        <main>
          <Link to='/main'>
            <motion.img 
              src={LogoVertical} 
              // ref={scope}
              alt="logo" 
              className='logo w-9 mx-auto mb-2' 
              initial={{opacity: 0.15}}
              animate={{
                opacity: [1, 1, 1, 1, 0.15, 1, 1],  // Keyframes for opacity
                scale: [1, 0.95, 1, 1, 1, 1, 1],     // Keyframes for scale
              }}
              transition={{
                duration: 4,  // Total duration of the animation cycle
                ease: "easeIn",
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