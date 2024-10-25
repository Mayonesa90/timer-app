import AbortBtn from './AbortBtn'
import {motion} from 'framer-motion'

export default function Analog({countDown, handleDigitalOpen, handleStop, handleSetTimeOpen}) { 

    const handleClick = () => {
        handleDigitalOpen()
        handleStop()
        handleSetTimeOpen()
    }
   
    return (
       
        <motion.main 
        className='min-w-[375px] mx-auto  bg-transparent flex flex-col items-center justify-center gap-y-16 relative'
        animate={{
            opacity: [0, 1],
            transition: { duration: 0.75 }
        }}
        >
            <section className='flex gap-[42px] items-center'>
                <h1 className=' font-PTSans text-[80px] text-gray-300 font-semibold'>
                    {countDown}
                </h1>
            </section>
            <AbortBtn handleClick={handleClick}/>
         </motion.main>
    );
}