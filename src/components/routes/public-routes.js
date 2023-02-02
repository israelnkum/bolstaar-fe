import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../../pages/auth/sign-in'
import Register from '../../pages/auth/register'
import ForgotPassword from '../../pages/auth/forgot-password'
import ResetPassword from '../../pages/auth/reset-password'
import Landing from '../../pages/landing'
import SearchResults from '../../pages/search-results'
import NoResults from '../../pages/search-results/no-results'
import Checkout from '../../pages/checkout'
import SearchResultLayout from '../../pages/search-results/search-result-layout'
import Products from '../../pages/products'

export const PublicRoutes = () => {
  return (
        <>
            <Routes>
                <Route exact element={<Landing/>} path="/"/>
                <Route exact element={<SignIn/>} path="/sign-in"/>
                <Route element={<Register/>} path={'/sign-up'}/>
                <Route element={<ForgotPassword/>} path={'/forgot-password'}/>
                <Route element={<ResetPassword/>} path={'/reset-password'}/>
                <Route path={'/products'} element={<SearchResultLayout/>}>
                    <Route element={<Products/>} index/>
                    <Route element={<SearchResults/>} path={':item'}/>
                    <Route element={<Checkout/>} path={':item/checkout'}/>
                </Route>
                <Route element={<NoResults/>} path={'/nothing-found'}/>
                <Route path={'*'} element={<>not found</>}>
                </Route>
            </Routes>
        </>
  )
}
