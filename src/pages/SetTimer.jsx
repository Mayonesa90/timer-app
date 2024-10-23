import Menu from '../components/Menu'
import ArrowLeft from '../assets/arrowLeft.svg'
import ArrowRight from '../assets/arrowRight.svg'
import {useState, useEffect} from 'react'
import useTimer from 'easytimer-react-hook'
import {motion} from 'framer-motion'
import TimesUp from '../components/TimesUp'
import { useTimerContext } from '../helpers/TimerContext'

export default function SetTimerPage(){

    // const [time, setTime] = useState(1)
    // const [timer, isTargetAchieved] = useTimer()
    const { timer, isTargetAchieved, time, setTime } = useTimerContext();
    const [intervals, setIntervals] = useState(false)
    const [fiveMinBreak, setFiveMinBreak] = useState(false)
    const [showTimesUp, setShowTimesUp] = useState(false)

    const handleIncrement = () => {
        setTime(time + 5)
    }

    const handleDecrement = () => {
        if (time > 5){
            setTime(time - 5)
        }
    }

    const handleIntervals = () => {
        setIntervals(!intervals)
    }

    const handleFiveMinBreak = () => {
        setFiveMinBreak(!fiveMinBreak)
    }
    
    const handleStart = () => {
        timer.removeEventListener('targetAchieved');
        timer.start({
            precision: 'seconds',
            startValues: {minutes: time},
            target: {minutes: 0},
            countdown: true,
            updateWhenTargetAchieved: true
        })
        timer.addEventListener('targetAchieved', () => {
            console.log('Target achieved!');
            // Perform your actions here when the timer finishes
            if (intervals && fiveMinBreak) {
                console.log('Starting 5-minute break');
                timer.start({
                    precision: 'seconds',
                    startValues: {minutes: 5},
                    countdown: true
                });
            } else if (intervals && !fiveMinBreak) {
                console.log('Timer resets!');
                timer.reset(); 
            } else {
                console.log('Countdown finished. No intervals or breaks.');
                setShowTimesUp(true)
            }
        });
    }
  
    
    
    // const countDown = timer.getTimeValues().toString()    
    

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


    const handleReset = () => {
        
        setShowTimesUp(false)
    }

    return (
        <motion.div 
            className='wrapper w-full min-h-svh grid bg-gray-900 text-gray-900'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.01}}
        >
            {/* {timer ? <p className='absolute text-white'>{countDown}</p> : null} */}
            {showTimesUp ? <TimesUp handleReset={handleReset} /> : null}
        <main className='min-w-[375px] mx-auto  bg-gray-50 shadow-2xl flex flex-col items-center justify-center gap-y-16 relative'>
            <Menu />
            <section className='flex gap-[42px] items-center'>
                <motion.img 
                    src={ArrowLeft} 
                    alt="add five minutes" 
                    className='left-10  hover:cursor-pointer  fill-gray-900 ' 
                    onClick={handleDecrement} 
                    whileTap={{scale: 0.9}}
                />
                <section className='flex flex-col items-center'>
                    <motion.h1 
                        className=' font-PTSans text-[80px] font-semibold'
                        key={time}
                        animate="visible"
                        initial='hidden'
                        exit='hidden'
                        variants={blinkVariants}
                    >
                        {time}
                    </motion.h1>
                    <p className=' font-PTSans text-[16px] text-gray-500'>minutes</p>
                </section>
                <motion.img 
                    src={ArrowRight} 
                    alt="reduce five minutes" 
                    className='right-10 hover:cursor-pointer  fill-gray-900 ' 
                    onClick={handleIncrement}
                    whileTap={{scale: 0.9}}
                />
            </section>
            <section className='flex flex-col gap-y-4'>
                <section className='flex gap-x-4 '>
                    <input 
                        type="checkbox" 
                        name='intervals' 
                        id='intervals'
                        onChange={handleIntervals}
                    />
                    <label htmlFor="intervals" className='text-gray-500 font-PTSans font-xs tracking-widest' >intervals</label>
                </section>
                <section className='flex gap-x-4'>
                    <input 
                        type="checkbox" 
                        name='break' 
                        id='break' 
                        onChange={handleFiveMinBreak}
                    />
                    <label htmlFor="break" className='text-gray-500 font-PTSans font-xs tracking-widest'>5 min break / interval</label>
                </section>
                <motion.button 
                    className='h-[51px] w-[279px] font-PTSans text-[24px] font-semibold tracking-widest border border-gray-900 rounded-md'
                    initial={{scale: 1}}
                    whileTap={{scale: 0.95}}
                    transition={{duration: 0.1, ease: 'easeIn'}}
                    onClick={handleStart}
                >START TIMER</motion.button>
            </section>
        </main>
      </motion.div>
    )
}