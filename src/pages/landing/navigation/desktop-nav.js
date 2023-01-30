import React from 'react'
import { LandingPageMenus } from '../../../utils/menu-items'
import { Link } from 'react-router-dom'
import LogoWhite from '../../../assets/images/logo-white.png'

function DesktopNav () {
  return (
      <div className="hidden md:block">
          <div className={'mx-[170px] flex justify-between pt-10 items-center'}>
              <div>
                  <img src={LogoWhite} alt={'Bolstaar'}/>
              </div>
              <div className={'flex'}>
                  {
                      LandingPageMenus.map(({ link, title }, index) => (
                          <Link className={'mx-[38px]'} key={index} to={link}>{title}</Link>
                      ))
                  }
              </div>
              <div>
                  <Link to={'sign-in'} className={'mr-[52px] text-[15px]'}>Log in</Link>
                  <Link to={'sign-up'}
                        className={'btn-light text-success-100 text-[15px] font-bold'}>
                      Sign Up
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default DesktopNav
