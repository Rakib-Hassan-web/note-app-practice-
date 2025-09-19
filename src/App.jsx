import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Route, Router, RouterProvider } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import Home from './components/Home'
import RegisterPage from './pages/RegisterPage'

function App() {
  const [count, setCount] = useState(0)

  const myrout =createBrowserRouter(createRoutesFromElements(

    <Route >

      <Route index element={<Home/>} />
      <Route path='/Register' element={<RegisterPage/>} />

    </Route>
  ))

  return (
    <>

    <RouterProvider router={myrout}/>
    
      
    </>
    
  )
}

export default App
