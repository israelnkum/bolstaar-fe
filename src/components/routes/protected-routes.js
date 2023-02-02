import React from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { ModalRoute } from './modal-route'
import Landing from '../../pages/landing'
import SignIn from '../../pages/auth/sign-in'
import Register from '../../pages/auth/register'
import ForgotPassword from '../../pages/auth/forgot-password'
import ResetPassword from '../../pages/auth/reset-password'
import SearchResultLayout from '../../pages/search-results/search-result-layout'
import SearchResults from '../../pages/search-results'
import Checkout from '../../pages/checkout'
import NoResults from '../../pages/search-results/no-results'

export const ProtectedRoutes = () => {
  const location = useLocation()
  const background = location.state && location.state.background

  return (
        <>
            <Routes location={background || location}>
                <Route exact element={<Landing/>} path="/"/>
                <Route exact element={<SignIn/>} path="/sign-in"/>
                <Route element={<Register/>} path={'/sign-up'}/>
                <Route element={<ForgotPassword/>} path={'/forgot-password'}/>
                <Route element={<ResetPassword/>} path={'/reset-password'}/>
                <Route path={'/categories'} element={<SearchResultLayout/>}>
                    <Route element={<SearchResults/>} path={'wallington-boots'}/>
                    <Route element={<Checkout/>} path={':item/checkout'}/>
                </Route>
                <Route element={<NoResults/>} path={'/nothing-found'}/>
                <Route path={'*'} element={<>not found</>}>
                </Route>
            </Routes>

            { background && (<><ModalRoute/> <Outlet/></>) }
        </>
  )
}
