import React from 'react'
import ShadowButton from '../../components/shadow-button'
import WavyLine from '../../components/wavy-line'

function RentToolsSection () {
  return (
        <div className={'bg-white relative'}>
            <div className={'flex justify-center gap-x-[106px] mb-[370px]'}>
                <div className={'w-[463px]'}>
                    <WavyLine/>
                    <div>
                        <h3 className={'mt-10 font-bold text-[37px] leading-[50px] text-black-100'}>
                            Rent tools that help <br/> your business grow
                        </h3>
                        <div>
                            <p className={'mt-4 l-item'}>
                                Just log in to our platform
                            </p>
                            <p className={'my-4 l-item'}>
                                Search for the tool you want
                            </p>
                            <p className={'mb-[38px] l-item'}>
                                Rent the tool and it will be delivered to you.
                            </p>
                        </div>
                        <div>
                            <ShadowButton buttonText={'Try it out'}/>
                        </div>
                    </div>
                </div>
                <div className={'w-[530px]'}>
                    <div className={'pt-[26px]'}>
                        <div className={'bg-coloured-banner bg-no-repeat mt-[130px] w-[382px] mx-auto'}>
                            &nbsp;
                        </div>
                        <div className={'bg-white-300 h-[421px] flex items-center justify-center mt-[52px]'}>
                            <div className={'shadow-4xl py-12 px-[42px] w-[530px]'}>
                                <p className={'text-gray-600 text-[18px]'}>
                                    &quot;Agriculture is our wisest pursuit, because it will in <br/>
                                    the end contribute most to real wealth, good <br/>
                                    morals & happiness&quot;.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'bg-locations w-[530px] h-full bg-no-repeat absolute top-[539px] left-[600px]'}>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default RentToolsSection
