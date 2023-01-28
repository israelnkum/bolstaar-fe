import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../../pages/auth/sign-in'
import Register from '../../pages/auth/register'
import ForgotPassword from '../../pages/auth/forgot-password'
import ResetPassword from '../../pages/auth/reset-password'
import Landing from '../../pages/landing'

export const PublicRoutes = () => {
  return (
        <>
            <Routes>
                <Route exact element={<Landing/>} path="/"/>
                <Route exact element={<SignIn/>} path="/sign-in"/>
                <Route element={<Register/>} path={'/sign-up'}/>
                <Route element={<ForgotPassword/>} path={'/forgot-password'}/>
                <Route element={<ResetPassword/>} path={'/reset-password'}/>
                <Route path={'*'} element={<>not found</>}>
                </Route>
            </Routes>
        </>
  )
}
