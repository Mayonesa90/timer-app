import './App.css'
import {Routes, Route} from 'react-router-dom'
import Loading from './pages/Loading'
import SetTimer from './pages/SetTimer'
import Analog from './pages/Analog'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Loading />}></Route>
      <Route path='/set-timer' element={<SetTimer />}></Route>
      <Route path='/analog' element={<Analog />}></Route>
    </Routes>
  )
}

export default App
