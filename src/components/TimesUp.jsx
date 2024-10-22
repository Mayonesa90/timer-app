import Alarm from '../assets/alarm.svg'
import {motion} from 'framer-motion'

export default function TimesUp({handleReset}){
    
    const rippleVariants = {
        animate: {
            // scale: [1, 1.1, 1.2],   // Scale the circles over time
            opacity: [1, 0],    // Fade out as they expand
            
            transition: {
                duration: 3,    // Ripple effect duration
                repeat: Infinity, // Repeat infinitely
                ease: "easeInOut", // Smooth easing
                staggerChildren: 0.5,// Delay between ripples
                repeatType: "reverse"
            },
        },
    }

    return (
        <div className='screen bg-gray-900 absolute w-full h-full z-10 overflow-hidden flex items-center justify-center'>
            <motion.div 
                className='circle-1 rounded-full bg-[#ffffff05] w-[74vh] h-[74vh] absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                variants={rippleVariants} 
                animate="animate"
                >
                <motion.div 
                    className='z-20 circle-2 rounded-full bg-[#ffffff05]  w-[51vh] h-[51vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    variants={rippleVariants} 
                    >
                    <motion.div 
                        className='z-30 circle-3 rounded-full bg-[#ffffff05]  w-[35vh] h-[35vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        variants={rippleVariants} 
                        >
                        <motion.div 
                            className='z-40 circle-4 rounded-full bg-[#ffffff05]  w-[23vh] h-[23vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                            variants={rippleVariants} 
                        />                            
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.button 
                    className='h-[51px] w-[279px] font-PTSans text-[#ffffff99] text-[24px] font-semibold tracking-widest border border-[#ffffff99] rounded-md bg-transparent absolute bottom-[49px] left-[20%] transform -translate-x-1/2  '
                    initial={{scale: 1}}
                    whileTap={{scale: 0.95}}
                    transition={{duration: 0.1, ease: 'easeIn'}}  
                    onClick={handleReset}      
            >
                SET NEW TIMER
            </motion.button>
            <motion.div 
                className='z-50 absolute flex flex-col items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap'
                animate={{opacity: [0, 1]}}
                transition={{duration: 0.5, ease: 'easeIn'}}
            >
                <motion.img animate='none' src={Alarm} className=' max-w-[85px]'/>
                <p className='text-[36px] text-gray-50 font-bold tracking-widest'>Times up!</p>
            </motion.div>                  
        </div>
    )
}