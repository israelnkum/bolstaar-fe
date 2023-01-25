import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../../pages/auth/sign-in'
import Register from '../../pages/auth/register'
import ForgotPassword from '../../pages/auth/forgot-password'
import ResetPassword from '../../pages/auth/reset-password'

export const PublicRoutes = () => {
  return (
        <>
            <Routes>
                <Route exact element={<SignIn/>} path="/"/>
                <Route element={<Register/>} path={'/sign-up'}/>
                <Route element={<ForgotPassword/>} path={'/forgot-password'}/>
                <Route element={<ResetPassword/>} path={'/reset-password'}/>
                <Route path={'*'} element={<>not found</>}>
                </Route>
            </Routes>
        </>
  )
}
