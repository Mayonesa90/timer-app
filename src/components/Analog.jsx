import {motion} from 'framer-motion'
import Clock from '../assets/clockMinutes.svg'
import HourHandle from '../assets/clockHourHandle.svg'
import MinuteHandle from '../assets/clockMinuteHandle.svg'
import Handle from '../assets/clockHandle.svg'

export default function Analog({countDown, handleAnalogOpen, handleSetTimeOpen, handleStop}) { 

    const parseCount = (countDown) => {
        const parts = countDown.split(':');
        const hours = parseInt(parts[0], 10);
        const minutes = parseInt(parts[1], 10);
        const seconds = parseInt(parts[2], 10);
        // Convert everything to total seconds
        return (hours * 3600) + (minutes * 60) + seconds;
    }

    const totalDurationInSeconds = parseCount(countDown);


    const handleClick = () => {
        handleAnalogOpen()
        handleSetTimeOpen()
        handleStop()
    }
   
    return (
        <main className='min-w-[375px] mx-auto  bg-gray-50 shadow-2xl flex flex-col items-center justify-center gap-y-16 relative'>
            <section className='flex gap-[42px] items-center'>
               <img src={Clock} alt="clock" />
                <motion.img 
                    src={Handle}
                    className='absolute top-[4%] left-[50%]  '
                    style={{ transformOrigin: 'bottom center' }}  
                    animate={{
                        rotate: [0, 360] // Rotate from 0 to 360 degrees
                    }}
                    transition={{
                        duration: totalDurationInSeconds, // Total animation time
                        ease: 'linear',
                        repeat: Infinity // Keep spinning every second
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
        </main>
    );
}