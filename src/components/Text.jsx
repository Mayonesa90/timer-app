import { toWords } from 'number-to-words'
import {motion} from 'framer-motion'

export default function Text({hours, minutes, seconds, handleTextOpen, handleStop, handleSetTimeOpen}) { 

    const handleClick = () => {
        handleTextOpen()
        handleStop()
        handleSetTimeOpen()
    }
    
    const hoursInText = toWords(hours)
    const minutesInText = toWords(minutes)
    const secondsInText = toWords(seconds)
    
    return (
       
        <main className='min-w-[375px]  mx-auto  bg-gray-50 shadow-2xl flex flex-col items-center justify-center gap-y-16 relative'>
            <section className='flex gap-[42px] items-center max-w-[350px]'>
                <h1 className=' font-PTSans text-[30px] font-semibold text-wrap'>
                    {hours === 1 ? `${hoursInText} hour` : null}
                    {hours > 1 ? `${hoursInText} hours` : null}
                    {minutes === 1 ? ` ${minutesInText} minute` : null}
                    {minutes > 1 ? ` ${minutesInText} minutes` : null}
                    {secondsInText ? ` ${secondsInText} seconds` : null}
                </h1>
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