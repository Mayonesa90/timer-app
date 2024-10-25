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

    const [rotation, setRotation] = useState(0) //rotation for handle

    useEffect(() => {
        // Calculate rotation based on remaining countdown
        const elapsedTime = totalDurationInSeconds - countDown;
        
        // Every second, the handle should rotate 6 degrees
        const newRotation = elapsedTime * 6;

        // Update the rotation state
        setRotation(newRotation);

    }, [countDown, totalDurationInSeconds]);

   
    return (
        <motion.main 
            className='min-w-[375px] mx-auto  bg-transparent  flex flex-col items-center justify-center gap-y-16 relative'
            animate={{
                opacity: [0, 1],
                transition: { duration: 0.75 }
            }}
            >
            <section className='flex gap-[42px] items-center'>
               <img src={Clock} alt="clock" />
                <motion.img 
                    src={Handle}
                    className='absolute top-[3.55%] left-[49.525%]  '
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
        </motion.main>
    );
}