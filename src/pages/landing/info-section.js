import React from 'react'
import WavyLine from '../../components/wavy-line'

function InfoSection () {
  return (
        <div className={'bg-white'}>
            <div className={'flex justify-center'}>
                <WavyLine/>
            </div>

            <div className={'text-center'}>
                <h3 className={'mt-10 font-bold text-[37px] leading-[50px] text-black-100'}>
                    Distance is not a barrier. We get <br/> your tools delivered to you easily .
                </h3>
                <p className={'text-gray-600 text-[18px] mt-7 mb-[190px]'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                    Suspendisse varius enim in eros elementum tristique. Duis <br/>
                    cursus, mi quis viverra ornare, eros dolor
                </p>
            </div>
        </div>
  )
}

export default InfoSection
