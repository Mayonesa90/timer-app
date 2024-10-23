import { toWords } from 'number-to-words'
import {motion} from 'framer-motion'

export default function Text({countDown, handleTextOpen, handleStop, handleSetTimeOpen}) { 

    const handleClick = () => {
        handleTextOpen()
        handleStop()
        handleSetTimeOpen()
    }

    //Parse the countdown into total seconds
    const parseCountDown = (countDown) => {
        const parts = countDown.split(':');
        const hours = parseInt(parts[0], 10);
        const minutes = parseInt(parts[1], 10);
        const seconds = parseInt(parts[2], 10);
        return (hours * 3600) + (minutes * 60) + seconds;

    };
    
    const numberToWords = toWords(parseCountDown(countDown));
    

    return (
       
        <main className='min-w-[375px] mx-auto  bg-gray-50 shadow-2xl flex flex-col items-center justify-center gap-y-16 relative'>
            <section className='flex gap-[42px] items-center'>
                <h1 className=' font-PTSans text-[30px] font-semibold text-wrap'>
                    {numberToWords} seconds
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