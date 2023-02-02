import React from 'react'
import DesktopNav from '../landing/navigation/desktop-nav'
import PageCrumbs from '../../components/page-crumbs'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../landing/footer'

function SearchResultLayout () {
  const location = useLocation()

  return (
        <div className={'bg-white-600'}>
            <DesktopNav/>
            <div className={'mx-4 md:mx-[110px] mb-[300px]'}>
                {
                    location.pathname !== '/nothing-found' &&
                    <div className="mt-[30px] mb-[58px]">
                        <PageCrumbs/>
                    </div>
                }
                <Outlet/>
            </div>
            <Footer/>
        </div>
  )
}

export default SearchResultLayout
