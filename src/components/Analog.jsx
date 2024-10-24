import {motion} from 'framer-motion'
import Clock from '../assets/clockMinutes.svg'
import Handle from '../assets/clockHandle.svg'
import {useState, useEffect} from 'react'
import AbortBtn from './AbortBtn'

export default function Analog({totalDurationInSeconds, countDown, handleAnalogOpen, handleSetTimeOpen, handleStop}) { 
    
    const handleClick = () => {
        handleAnalogOpen()
        handleSetTimeOpen()
        handleStop()
    }

    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        // Calculate rotation based on remaining countdown
        const elapsedTime = totalDurationInSeconds - countDown;
        
        // Every second, the handle should rotate 6 degrees
        const newRotation = elapsedTime * 6;

        // Update the rotation state
        setRotation(newRotation);

    }, [countDown, totalDurationInSeconds]);

   
    return (
        <main 
            className='min-w-[375px] mx-auto  bg-transparent  flex flex-col items-center justify-center gap-y-16 relative'
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
            <AbortBtn handleClick={handleClick}/>
            {/* <section className='flex flex-col gap-y-4'>
                <motion.button 
                    className='h-[41px] w-[132px] font-PTSans text-[16px] font-semibold tracking-widest border border-gray-900 rounded-md text-gray-50'
                    initial={{scale: 1}}
                    whileTap={{scale: 0.95}}
                    transition={{duration: 0.1, ease: 'easeIn'}}
                    onClick={handleClick}
                >ABORT TIMER</motion.button>
            </section> */}
        </main>
    );
}