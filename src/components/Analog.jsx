import {motion} from 'framer-motion'
import Clock from '../assets/clockMinutes.svg'
import Handle from '../assets/clockHandle.svg'
import {useState, useEffect} from 'react'

export default function Analog({totalDurationInSeconds, countDown, handleAnalogOpen, handleSetTimeOpen, handleStop}) { 
    
    const [rotation, setRotation] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState('#F3F4F6')
    let countDownInSeconds = null;

    //Parse the countdown into total seconds
    const parseCountDown = (countDown) => {
        const parts = countDown.split(':');
        const hours = parseInt(parts[0], 10);
        const minutes = parseInt(parts[1], 10);
        const seconds = parseInt(parts[2], 10);
        return (hours * 3600) + (minutes * 60) + seconds;

    };

    useEffect(() => {
        // Recalculate the countdown in seconds every time `countDown` changes
        countDownInSeconds = parseCountDown(countDown);

        // Calculate elapsed time
        const newElapsedTime = totalDurationInSeconds - countDownInSeconds;

        // Calculate rotation based on elapsed time (fraction of total duration)
        const calculatedRotation = (newElapsedTime / totalDurationInSeconds) * 360;

        // Update rotation state
        setRotation(calculatedRotation);

        if (countDownInSeconds === 30) {
            setBackgroundColor('#FFA500'); // Blink orange when 30 seconds left
        } else if (countDownInSeconds === 15) {
            setBackgroundColor('#FF4500'); // Blink red when 15 seconds left
        } else {
            setBackgroundColor('#F3F4F6'); // Reset background color to gray
        }
    

    }, [countDown, totalDurationInSeconds]); // Re-run this effect when `countDown` or `totalDurationInSeconds` changes
    
    
    const handleClick = () => {
        handleAnalogOpen()
        handleSetTimeOpen()
        handleStop()
    }
   
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