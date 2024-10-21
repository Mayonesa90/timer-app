import Menu from '../components/Menu'
import ArrowLeft from '../assets/arrowLeft.svg'
import ArrowRight from '../assets/arrowRight.svg'
import {useState} from 'react'

export default function SetTimerPage(){

    const [time, setTime] = useState(10)

    const handleIncrement = () => {
        setTime(time + 5)
    }

    const handleDecrement = () => {
        if (time > 5){
            setTime(time - 5)
        }
    }

    return (
        <div className='wrapper w-full min-h-svh grid bg-gray-300'>
        <main className='min-w-[375px] mx-auto  bg-gray-50 shadow-2xl flex flex-col items-center justify-center gap-y-16 relative'>
            <Menu />
            <section className='flex gap-[42px] items-center'>
                <img 
                    src={ArrowLeft} 
                    alt="add five minutes" 
                    className='left-10' 
                    onClick={handleDecrement} 
                />
                <section className='flex flex-col items-center'>
                    <h1 className=' font-PTSans text-[80px] font-semibold'>{time}</h1>
                    <p className=' font-PTSans text-[16px] text-gray-500'>minutes</p>
                </section>
                <img 
                    src={ArrowRight} 
                    alt="reduce five minutes" 
                    className='right-10' 
                    onClick={handleIncrement}
                />
            </section>
            <section className='flex flex-col gap-y-4'>
                <section className='flex gap-x-4 '>
                    <input type="checkbox" name='intervals' id='intervals'/>
                    <label htmlFor="intervals" className='text-gray-500 font-PTSans font-xs tracking-widest' >intervals</label>
                </section>
                <section className='flex gap-x-4'>
                    <input type="checkbox" name='break' id='break' />
                    <label htmlFor="break" className='text-gray-500 font-PTSans font-xs tracking-widest'>5 min break / interval</label>
                </section>
                <button className='h-[51px] w-[279px] font-PTSans text-[24px] font-semibold tracking-widest border border-gray-900 rounded-md'>START TIMER</button>
            </section>
        </main>
      </div>
    )
}