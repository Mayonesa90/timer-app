import Menu from '../components/Menu'
import {useState, useEffect} from 'react'
import useTimer from 'easytimer-react-hook'
import {motion} from 'framer-motion'
import TimesUp from '../components/TimesUp'
import SetTime from '../components/SetTime'
import Analog from '../components/Analog'
import Digital from '../components/Digital'
import Text from '../components/Text'
import Pause from '../components/Pause'

export default function SetTimerPage(){

    //Timer settings
    const [time, setTime] = useState(1)
    const [timer, isTargetAchieved] = useTimer()
    const [intervals, setIntervals] = useState(false)
    const [fiveMinBreak, setFiveMinBreak] = useState(false)
    // const [pauseTimer, setPauseTimer] = useState(null)

    //Components to show
    const [showTimesUp, setShowTimesUp] = useState(false)
    const [showSetTime, setShowSetTime] = useState(true)
    const [analogOpen, setAnalogOpen] = useState(false)
    const [digitalOpen, setDigitalOpen] = useState(false)
    const [textOpen, setTextOpen] = useState(false)
    const [pauseOpen, setPauseOpen] = useState(false)

    //Function to set time
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
    function handlePauseOpen() {
        setPauseOpen(!pauseOpen)
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
        setFiveMinBreak(false)
        setIntervals(false)
    }

    const handleTimeReset = () => {
        timer.reset()
    }

    //Separate start-functions

    // const handleSimpleStart = () => {

    //     if(showSetTime){
    //         handleSetTimeOpen()
    //     }

    //     if(!analogOpen){
    //         handleAnalogOpen()
    //     }

    //     timer.removeEventListener('targetAchieved');

    //     timer.start({
    //         precision: 'seconds',
    //         startValues: {minutes: time},
    //         target: {minutes: 0},
    //         countdown: true,
    //         updateWhenTargetAchieved: true
    //     })

    //     timer.addEventListener('targetAchieved', () => {
    //         // Perform your actions here when the timer finishes
    //         setShowTimesUp(true)
    //         console.log('Countdown finished. No intervals or breaks.');
    //     });

    // }

    // const handleIntervalStart = () => {

    //     handleSetTimeOpen(false)

    //     if (!analogOpen && !digitalOpen && !textOpen){
    //         setAnalogOpen(true)
    //     }

    //     timer.removeEventListener('targetAchieved');

    //     timer.start({
    //         precision: 'seconds',
    //         startValues: {minutes: time},
    //         target: {minutes: 0},
    //         countdown: true,
    //         updateWhenTargetAchieved: true
    //     })

    //     timer.addEventListener('targetAchieved', () => {
    //         // Perform your actions here when the timer finishes
    //         timer.reset();
    //         console.log('Timer resets!');
    //     })    
    // };

    // const handleIntervalWithPauseStart = () => {

    //     handleSetTimeOpen(false)

    //     if (!analogOpen && !digitalOpen && !textOpen){
    //         setAnalogOpen(true)
    //     }

    //     timer.removeEventListener('targetAchieved');

    //     timer.start({
    //         precision: 'seconds',
    //         startValues: {minutes: time},
    //         target: {minutes: 0},
    //         countdown: true,
    //         updateWhenTargetAchieved: true
    //     })

    //     timer.addEventListener('targetAchieved', () => {

    //         // Perform your actions here when the timer finishes
    //         setPauseOpen(true)

    //         // Start a 5-minute break
    //         timer.pause({
    //             target: {minutes: 2}, //ÄNDRA TILL 5
    //         })

    //         // After 5 minutes, reset the pause state and timer
    //         timer.addEventListener('targetAchieved', () => {
    //             setPauseOpen(false);
    //             setPauseTimer(null);
            
    //             // Reset and restart the original timer
    //             timer.start({ 
    //                 precision: 'seconds',
    //                 startValues: {minutes: time},
    //                 target: {minutes: 0},
    //                 countdown: true,
    //                 updateWhenTargetAchieved: true
    //             });
    //         })
            
    //     });
    // }

    // const [handleSeparateStart, setHandleSeparateStart] = useState(handleSimpleStart)


    // useEffect(()=> {
    //     if (intervals && !fiveMinBreak) {
    //         setHandleSeparateStart(() => handleIntervalStart);
    //     } else if (intervals && fiveMinBreak) {
    //         setHandleSeparateStart(() => handleIntervalWithPauseStart);
    //     } else {
    //         setHandleSeparateStart(() => handleSimpleStart);
    //     }
    // }, [intervals, fiveMinBreak]);

    // console.log(handleSeparateStart);
    

    //Start function to handle start of timer 
    
    const handleStart = () => {

        if(showSetTime){
            setAnalogOpen(true)
            setShowSetTime(false)
        }

        if(digitalOpen || textOpen || analogOpen){
            setShowSetTime(false)
        }

       
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
                setPauseOpen(true)
             
                // Clear previous event listeners
                timer.removeEventListener('targetAchieved');

                // Start a 5-minute break
                timer.start({
                    startValues: {seconds: 30},
                    target: {minutes: 0}, //ändra till 5
                    countdown: true,
                    updateWhenTargetAchieved: true
                })                

                // After 5 minutes, reset the pause state and timer
                timer.addEventListener('targetAchieved', () => {
                    setPauseOpen(false);
                    // setPauseTimer(null);
                
                    // Restart the original timer  
                                   
                    return handleStart()
                    
                    
                });
                return
            } else if (intervals && !fiveMinBreak) {
                timer.reset();
                console.log('Timer resets!');
                return;
                
            } else if (!intervals && !fiveMinBreak) {
                setShowTimesUp(true)
                console.log('Countdown finished. No intervals or breaks.');
                return
            }
        });
    }    

    
    const countDown = timer.getTimeValues().toString()
    let totalDurationInSeconds = time * 60
    let hours = null
    let minutes = null
    let seconds = null
    console.log(countDown);
    
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
            {pauseOpen ?
                <Pause
                    handleTimeReset={handleTimeReset}
                    handlePauseOpen={handlePauseOpen}
                    handleStart={handleStart} 
                /> : null}
        <motion.main 
            className='w-full mx-auto  shadow-2xl flex flex-col items-center justify-center gap-y-16 relative'
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
                    fiveMinBreak={fiveMinBreak}
                    intervals={intervals}
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