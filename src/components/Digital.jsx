import AbortBtn from './AbortBtn'

export default function Analog({countDown, handleDigitalOpen, handleStop, handleSetTimeOpen}) { 

    const handleClick = () => {
        handleDigitalOpen()
        handleStop()
        handleSetTimeOpen()
    }
   
    return (
       
        <main className='min-w-[375px] mx-auto  bg-transparent flex flex-col items-center justify-center gap-y-16 relative'>
            <section className='flex gap-[42px] items-center'>
                <h1 className=' font-PTSans text-[80px] text-gray-300 font-semibold'>
                    {countDown}
                </h1>
            </section>
            <AbortBtn handleClick={handleClick}/>
         </main>
    );
}