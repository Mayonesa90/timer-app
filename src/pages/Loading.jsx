import LogoVertical from '../assets/logoVertical.svg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


export default function Loading(){
    return (
        <div className='wrapper w-full min-h-svh bg-gray-900 grid items-center justify-center'>
        <main>
          <Link to='/main'>
            <img src={LogoVertical} alt="logo" className='w-9 mx-auto mb-2' />
          </Link>
          <h1 className=' tracking-widest text-gray-50 text-xl font-RighteousFont text-center'>INTERVAL</h1>
          <p className='text-gray-50 tracking-widest text-sm font-PTSans'>For all your timing needs</p>
        </main>
      </div>
    )
}