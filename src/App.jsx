import './App.css'
import {Routes, Route} from 'react-router-dom'
import Loading from './pages/Loading'
import SetTimer from './pages/SetTimer'
import Main from './pages/Main'

function App() {


  return (
      <Routes>
        <Route path='/' element={<Loading />}></Route>
        <Route path='/set-timer' element={<SetTimer />}></Route>
        <Route path='/main' element={<Main />}></Route>
      </Routes>
    
  )
}

export default App
