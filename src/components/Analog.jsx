import {motion} from 'framer-motion'
import Menu from './Menu'


export default function Analog({countDown, handleAnalogOpen, handleSetTimeOpen, handleStop}) { 

    const handleClick = () => {
        handleAnalogOpen()
        handleSetTimeOpen()
        handleStop()
    }
   
    return (
        <motion.div 
            className='wrapper w-full min-h-svh grid bg-gray-900 text-gray-900'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.01}}
        >
            {countDown ? <p className='absolute text-white'>{countDown}</p> : null}
        <main className='min-w-[375px] mx-auto  bg-gray-50 shadow-2xl flex flex-col items-center justify-center gap-y-16 relative'>
            <Menu />
            <section className='flex gap-[42px] items-center'>
               
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
      </motion.div>
    );
}