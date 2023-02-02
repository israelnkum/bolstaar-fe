import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CompleteCheckout } from '../../pages/search-results/complete-checkout'

export const ModalRoute = () => {
  return (
        <Routes>
            <Route path={'/categories/:item/checkout'}>
                <Route element={<CompleteCheckout/>} path={'complete'}/>
            </Route>
        </Routes>
  )
}
