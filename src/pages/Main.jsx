import Menu from '../components/Menu'
import {useState, useEffect} from 'react'
import useTimer from 'easytimer-react-hook'
import {motion} from 'framer-motion'
import TimesUp from '../components/TimesUp'
import SetTime from '../components/SetTime'
import Analog from '../components/Analog'
import Digital from '../components/Digital'
import Text from '../components/Text'

export default function SetTimerPage(){

    //Timer settings
    const [time, setTime] = useState(1)
    const [timer, isTargetAchieved] = useTimer()
    const [intervals, setIntervals] = useState(false)
    const [fiveMinBreak, setFiveMinBreak] = useState(false)

    //Components to show
    const [showTimesUp, setShowTimesUp] = useState(false)
    const [showSetTime, setShowSetTime] = useState(true)
    const [analogOpen, setAnalogOpen] = useState(false)
    const [digitalOpen, setDigitalOpen] = useState(false)
    const [textOpen, setTextOpen] = useState(false)
    
    const handleReset = () => {
        setShowTimesUp(false)
    }
    function handleSetTimeOpen() {
        setShowSetTime(!showSetTime)
    }
    function handleAnalogOpen() {
        setAnalogOpen(!analogOpen)
    }
    function handleDigitalOpen() {
        setDigitalOpen(!digitalOpen)
    }
    function handleTextOpen() {
        setTextOpen(!textOpen)
    }

    //Time helper functions
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
        handleSetTimeOpen()
        handleAnalogOpen()
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

    const handleStop = () => {
        timer.stop()
    }
    
    const countDown = timer.getTimeValues().toString()


    let totalDurationInSeconds = time * 60
   


    return (
        <motion.div 
            className='wrapper w-full min-h-svh grid bg-gray-900 text-gray-900'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.01}}
        >
            {timer ? <p className='absolute text-white'>{countDown}</p> : null}
            {showTimesUp ? 
                <TimesUp 
                    analogOpen={analogOpen}
                    digitalOpen={digitalOpen}
                    showSetTime={showSetTime}
                    textOpen={textOpen}
                    handleReset={handleReset} 
                    handleAnalogOpen={handleAnalogOpen} 
                    handleSetTimeOpen={handleSetTimeOpen}
                    handleDigitalOpen={handleDigitalOpen}
                    handleTextOpen={handleTextOpen}
                /> : null}
        <main className='min-w-[375px] mx-auto  bg-gray-50 shadow-2xl flex flex-col items-center justify-center gap-y-16 relative'>
            <Menu 
                analogOpen={analogOpen}
                digitalOpen={digitalOpen}
                textOpen={textOpen}
                showSetTime={showSetTime}
                handleAnalogOpen={handleAnalogOpen} 
                handleSetTimeOpen={handleSetTimeOpen}
                handleDigitalOpen={handleDigitalOpen}
                handleTextOpen={handleTextOpen}
            />
            {showSetTime ? 
                <SetTime 
                    handleStart={handleStart} 
                    time={time} 
                    handleIncrement={handleIncrement} 
                    handleDecrement={handleDecrement} 
                    handleIntervals={handleIntervals} 
                    handleFiveMinBreak={handleFiveMinBreak} 
                /> : null}
            {analogOpen ? 
                <Analog 
                    totalDurationInSeconds={totalDurationInSeconds} 
                    countDown={countDown}
                    handleAnalogOpen={handleAnalogOpen} 
                    handleSetTimeOpen={handleSetTimeOpen}
                    handleStop={handleStop}
                /> : null}
            {digitalOpen ?
                <Digital
                    countDown={countDown}
                    handleDigitalOpen={handleDigitalOpen}
                    handleStop={handleStop}
                    handleSetTimeOpen={handleSetTimeOpen}
                /> : null}
            {textOpen ?
                <Text
                    countDown={countDown}
                    handleTextOpen={handleTextOpen}
                    handleStop={handleStop}
                    handleSetTimeOpen={handleSetTimeOpen}
                /> : null}
        </main>
      </motion.div>
    )

}