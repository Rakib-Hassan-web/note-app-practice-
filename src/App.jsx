import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Route, Router, RouterProvider } from 'react-router'
import { createRoutesFromElements } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  const myrout =createBrowserRouter(createRoutesFromElements(

    <Route >

      <Route index element={'/Home'} />

    </Route>
  ))

  return (
    <>

    <RouterProvider router={myrout}/>
    
      
    </>
    
  )
}

export default App
