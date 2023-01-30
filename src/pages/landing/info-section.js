import React from 'react'
import WavyLine from '../../components/wavy-line'

function InfoSection () {
  return (
        <div className={'bg-white'}>
            <div className={'flex justify-center mt-[57px] md:mt-[130px] mb-[31px] md:mb-[41px]'}>
                <WavyLine/>
            </div>
            <div className={'text-center'}>
                <h3 className={'font-semibold md:font-bold text-[20px] md:text-[37px] leading-[30px]' +
                    ' md:leading-[50px] tracking-[-1.92px] text-black-100 max-w-[601px] mx-8 md:mx-auto'}>
                    Distance is not a barrier. We get your tools delivered to you easily .
                </h3>
                <p className={'text-gray-600 text-sm md:text-[18px] mt-3 md:mt-7 mb-9 md:mb-[190px]' +
                    ' max-w-[553px] mx-8 md:mx-auto'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor
                </p>
            </div>
        </div>
  )
}

export default InfoSection
