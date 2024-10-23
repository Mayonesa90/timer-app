import {motion} from 'framer-motion'

export default function Analog({countDown, handleAnalogOpen, handleSetTimeOpen, handleStop}) { 

    const handleClick = () => {
        handleAnalogOpen()
        handleSetTimeOpen()
        handleStop()
    }
   
    return (
        <main className='min-w-[375px] mx-auto  bg-gray-50 shadow-2xl flex flex-col items-center justify-center gap-y-16 relative'>
            <section className='flex gap-[42px] items-center'>
               I'm analog
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