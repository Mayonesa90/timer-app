import ArrowLeft from '../assets/arrowLeft.svg'
import ArrowRight from '../assets/arrowRight.svg'
import {motion} from 'framer-motion'

export default function SetTimerPage(props){

    const blinkVariants = {
        visible: {
          opacity: 1,
          transition: { duration: 0.2, ease: "easeInOut" }, // Duration of the blink
        },
        hidden: {
          opacity: 0,
          transition: { duration: 0.2, ease: "easeInOut" },
        },
      };

    return (
        <>
            <section className='flex gap-[42px] items-center'>
                <motion.img 
                    src={ArrowLeft} 
                    alt="add five minutes" 
                    className='left-10  hover:cursor-pointer  fill-gray-900 ' 
                    onClick={props.handleDecrement} 
                    whileTap={{scale: 0.9}}
                />
                <section className='flex flex-col items-center'>
                    <motion.h1 
                        className=' font-PTSans text-[80px] font-semibold'
                        key={props.time}
                        animate="visible"
                        initial='hidden'
                        exit='hidden'
                        variants={blinkVariants}
                    >
                        {props.time}
                    </motion.h1>
                    <p className=' font-PTSans text-[16px] text-gray-500'>minutes</p>
                </section>
                <motion.img 
                    src={ArrowRight} 
                    alt="reduce five minutes" 
                    className='right-10 hover:cursor-pointer  fill-gray-900 ' 
                    onClick={props.handleIncrement}
                    whileTap={{scale: 0.9}}
                />
            </section>
            <section className='flex flex-col gap-y-4'>
                <section className='flex gap-x-4 '>
                    <input 
                        type="checkbox" 
                        name='intervals' 
                        id='intervals'
                        onChange={props.handleIntervals}
                    />
                    <label htmlFor="intervals" className='text-gray-500 font-PTSans font-xs tracking-widest' >intervals</label>
                </section>
                <section className='flex gap-x-4'>
                    <input 
                        type="checkbox" 
                        name='break' 
                        id='break' 
                        onChange={props.handleFiveMinBreak}
                    />
                    <label htmlFor="break" className='text-gray-500 font-PTSans font-xs tracking-widest'>5 min break / interval</label>
                </section>
                <motion.button 
                    className='h-[51px] w-[279px] font-PTSans text-[24px] font-semibold tracking-widest border border-gray-900 rounded-md'
                    initial={{scale: 1}}
                    whileTap={{scale: 0.95}}
                    transition={{duration: 0.1, ease: 'easeIn'}}
                    onClick={props.handleStart}
                >START TIMER</motion.button>
            </section>
        </>
    )
}