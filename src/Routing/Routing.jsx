import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recover from '../Components/recover/Recover'
import SignIn from '../Components/SignIn/SignIn'
import Dash from '../Components/Dashboard/Dash'

const Routing = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reset' element={<Recover/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/dash' element={<Dash/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing
