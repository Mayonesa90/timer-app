import { toWords } from 'number-to-words'
import AbortBtn from './AbortBtn'

export default function Text({hours, minutes, seconds, handleTextOpen, handleStop, handleSetTimeOpen}) { 

    const handleClick = () => {
        handleTextOpen()
        handleStop()
        handleSetTimeOpen()
    }
    
    const hoursInText = toWords(hours)
    const minutesInText = toWords(minutes)
    const secondsInText = toWords(seconds)
    
    return (
       
        <main className='min-w-[375px]  mx-auto  bg-transparent flex flex-col items-center justify-center gap-y-16 relative'>
            <section className='flex gap-[42px] items-center max-w-[350px]'>
                <h1 className=' font-PTSans text-[30px] font-semibold text-wrap'>
                    {hours === 1 ? `${hoursInText} hour` : null}
                    {hours > 1 ? `${hoursInText} hours` : null}
                    {minutes === 1 ? ` ${minutesInText} minute and` : null}
                    {minutes > 1 ? ` ${minutesInText} minutes and` : null}
                    {secondsInText ? ` ${secondsInText} seconds left` : null}
                </h1>
            </section>
            <AbortBtn handleClick={handleClick}/>
         </main>
    );
}