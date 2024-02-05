import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './views/Main'
import { BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Update from './components/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          

      <BrowserRouter>
        <Routes>
            <Route path = "*" element ={<Main/>} default/>
            <Route path = "/authors/:id/edit" element ={<Update/>}/>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
