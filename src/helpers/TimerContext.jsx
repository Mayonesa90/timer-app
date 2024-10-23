import { createContext, useContext, useState } from 'react';
import useTimer from 'easytimer-react-hook';

// Create TimerContext
const TimerContext = createContext();

// Custom hook to use the TimerContext
export function useTimerContext() {
    return useContext(TimerContext);
}

// TimerProvider component to wrap your app and provide the timer value
export function TimerProvider({ children }) {
    const [timer, isTargetAchieved] = useTimer();
    const [time, setTime] = useState(1); // Optional, if you want to provide `time` as well

    return (
        <TimerContext.Provider value={{ timer, isTargetAchieved, time, setTime }}>
            {children}
        </TimerContext.Provider>
    );
}