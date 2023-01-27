import React from 'react'
import LandingHeader from './landing-header'
import SearchTools from './search-tools'

function Landing () {
  return (
        <div className={''}>
            <div className={'h-screen w-full bg-hero-image bg-cover bg-no-repeat'}>
                <div className={'text-white-000'}>
                    <LandingHeader/>
                    <div className={'text-center mx-auto mt-[110px]'}>
                        <h1 className={'font-bold text-[76px] leading-[95px] mb-[25px]'}>
                            Search and rent tools <br/> the simplest way!
                        </h1>
                        <h6 className={'text-lg leading-[27px]'}>
                            In need of tools for your agricultural work? Look for further, we got <br/>
                            you covered! We delivery the tools at your doorstep.
                        </h6>
                    </div>
                </div>
            </div>
            <SearchTools/>
        </div>
  )
}

export default Landing
