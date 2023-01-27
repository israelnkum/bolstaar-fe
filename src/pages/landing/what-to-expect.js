import React from 'react'
import SideImage from '../../assets/images/what-to-expect/side-image.svg'

/**
 *
 * @param icon
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
const InfoItem = ({ icon, title }) => (
    <div className={'flex px-7 w-[271px] bg-white-000 py-[35px] items-center'}>
        <div className={`h-12 w-[82px] bg-no-repeat ${icon} mr-9`}></div>
        <div className={''}>
            <h3 className={'text-violet-100 text-[18px] font-bold'}>{title}</h3>
        </div>
    </div>
)

InfoItem.propTypes = {
  icon: 'string',
  title: 'string'
}

function WhatToExpect () {
  return (
        <div className={'relative'}>
            <div className={'flex justify-center gap-[42px] mb-[23px]'}>
                <div className={'w-[471px]'}>
                    <img src={SideImage} alt="" className={'absolute w-[471px] h-[640px]'}/>
                </div>
                <div className={'w-[566px]'}>
                    <h3 className={'font-bold text-5xl leading-[58px] text-black-100'}>
                        What to expect
                    </h3>
                    <p className={'text-gray-600 text-[18px] leading-[29px] mt-[33px]'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                </div>
            </div>
            <div className={'flex justify-center gap-[42px] bg-white-200 h-[343px]'}>
                <div className={'w-[471px]'}>
                </div>
                <div className={'w-[566px] mt-[35px]'}>
                    <div className={'flex flex-wrap gap-[23px]'}>
                        <InfoItem icon={'bg-clock'} title={'Free to Get Started'}/>
                        <InfoItem icon={'bg-finance'} title={'Affordable Prices'}/>
                        <InfoItem icon={'bg-laptop'} title={'Delivery Included'}/>
                        <InfoItem icon={'bg-secured'} title={'Highly Secured'}/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default WhatToExpect
