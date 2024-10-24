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

    const handleStop = () => {
        timer.stop()
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
            // Perform your actions here when the timer finishes
            if (intervals && fiveMinBreak) {
                console.log('Starting 5-minute break');
                timer.start({
                    precision: 'seconds',
                    startValues: {minutes: 5},
                    countdown: true
                });
            } 
            
            if (intervals && !fiveMinBreak) {
                console.log('Timer resets!');
                timer.reset(); 
            } 
            
            if (!intervals && !fiveMinBreak) {
                console.log('Countdown finished. No intervals or breaks.');
                setShowTimesUp(true)
            }
        });
    }

    
    const countDown = timer.getTimeValues().toString()
    let totalDurationInSeconds = time * 60
    let hours = null
    let minutes = null
    let seconds = null

    //Parse the countdown into total seconds
    const parseCountDown = (countDown) => {
        const parts = countDown.split(':');
        hours = parseInt(parts[0], 10);
        minutes = parseInt(parts[1], 10);
        seconds = parseInt(parts[2], 10);
        return (hours * 3600) + (minutes * 60) + seconds;
    };

    let countDownInSeconds = parseCountDown(countDown)

    //Background change
    const [backgroundColor, setBackgroundColor] = useState('#F3F4F6')

    useEffect(() => {
        if (countDownInSeconds === 0 || countDownInSeconds > 30) {
            setBackgroundColor('#43AA8B');
        } else if (countDownInSeconds <= 30 && countDownInSeconds > 15) {
            setBackgroundColor('#F46036');
        } else {
            setBackgroundColor('#DB504A');
        }
    }, [countDownInSeconds]);
    
    
    return (
        <motion.div 
            className='wrapper w-full  min-h-svh grid bg-gray-900 text-gray-900'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.01, staggerChildren: 3}}
            
        >
            {timer ? <p className='absolute text-gray-50'>{countDown}</p> : null}
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
        <motion.main 
            className='min-w-[375px] mx-auto  shadow-2xl flex flex-col items-center justify-center gap-y-16 relative'
            initial={{ backgroundColor: '#111827' }} // Initial background color
            animate={{ backgroundColor }} // Animate to the background color based on state
            transition={{
                duration: 3, // Smooth transition for the blink effect
                repeatType: 'reverse', // Reverse blink effect
            }}
        >
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
                    countDown={countDownInSeconds}
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
                    hours={hours} 
                    minutes={minutes} 
                    seconds={seconds}
                    handleTextOpen={handleTextOpen}
                    handleStop={handleStop}
                    handleSetTimeOpen={handleSetTimeOpen}
                /> : null}
        </motion.main>
      </motion.div>
    )

}