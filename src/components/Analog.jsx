import {motion} from 'framer-motion'
import Clock from '../assets/clockMinutes.svg'
import Handle from '../assets/clockHandle.svg'
import {useState, useEffect} from 'react'

export default function Analog({totalDurationInSeconds, countDown, handleAnalogOpen, handleSetTimeOpen, handleStop}) { 
    
    const handleClick = () => {
        handleAnalogOpen()
        handleSetTimeOpen()
        handleStop()
    }

    const [rotation, setRotation] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState('#F3F4F6')

    useEffect(() => {
        // Calculate rotation based on remaining countdown
        const elapsedTime = totalDurationInSeconds - countDown;
        
        // Every second, the handle should rotate 6 degrees
        const newRotation = (elapsedTime * 6) % 360;

        // Update the rotation state
        setRotation(newRotation);

    }, [countDown, totalDurationInSeconds]);


    
    
    // console.log(rotation);
    // console.log(oneMinuteRotation);
    

   
    return (
        <motion.main 
            className='min-w-[375px] mx-auto  bg-gray-50 shadow-2xl flex flex-col items-center justify-center gap-y-16 relative'
            initial={{ backgroundColor: '#F3F4F6' }} // Initial background color
            animate={{ backgroundColor }} // Animate to the background color based on state
            transition={{
                duration: 3, // Smooth transition for the blink effect
                repeatType: 'reverse', // Reverse blink effect
            }}
            >
            <section className='flex gap-[42px] items-center'>
               <img src={Clock} alt="clock" />
                <motion.img 
                    src={Handle}
                    className='absolute top-[3.5%] left-[49.55%]  '
                    style={{ transformOrigin: 'bottom center' }}  
                    animate={{
                        rotate: rotation
                    }}
                    transition={{
                        ease: 'linear',
                    }}
                />
            </section>
            <section className='flex flex-col gap-y-4'>
                <motion.button 
                    className='h-[41px] w-[132px] font-PTSans text-[16px] font-semibold tracking-widest border border-gray-900 rounded-md text-gray-500'
                    initial={{scale: 1}}
                    whileTap={{scale: 0.95}}
                    transition={{duration: 0.1, ease: 'easeIn'}}
                    onClick={handleClick}
                >ABORT TIMER</motion.button>
            </section>
        </motion.main>
    );
}