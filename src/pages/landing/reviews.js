import React from 'react'
import Farmer from '../../assets/images/reviews/farmer.png'
import Stars from '../../assets/images/reviews/stars.png'

function Reviews () {
  return (
        <div className={'bg-white mb-[214px]'}>
            <div className={'w-[104px] mx-auto bg-primary-100 rounded-[50px] h-10 flex justify-center' +
                ' items-center uppercase text-violet-200 text-sm font-medium'}>
                Reviews
            </div>

            <h3 className={'text-5xl font-bold leading-[58px] text-black-100 text-center mt-[26px] mb-[87px]'}>
                Here’s what our amazing <br/> clients are saying
            </h3>

            <div className={'flex flex-wrap gap-10 bg-reviews-bg bg-no-repeat z-[99] bg-center justify-center'}>
                <div className={'w-[530px] bg-white-000 px-[42px] py-12'}>
                    <div className={'flex gap-x-5'}>
                        <img src={Farmer} alt="Farmer" height={88} className={'rounded-[50px]'}/>
                        <div>
                            <h3 className={'text-2xl font-bold text-black-100'}>Shaun Stevens</h3>
                            <h6 className={'text-base text-gray-600'}>Founder @CraftLab</h6>
                            <img src={Stars} alt="Stars"/>
                        </div>
                    </div>
                    <div>
                        <p className={'text-gray-600 text-[18px] mt-10'}>
                            &quot;This app did a great job! My new website is so much more professional,
                            good looking and easier to work with than my old site.&quot;
                        </p>
                    </div>
                </div>
                <div className={'w-[530px] bg-white-000 px-[42px] py-12'}>
                    <div className={'flex gap-x-5'}>
                        <img src={Farmer} alt="Farmer" height={88} className={'rounded-[50px]'}/>
                        <div>
                            <h3 className={'text-2xl font-bold text-black-100'}>Shaun Stevens</h3>
                            <h6 className={'text-base text-gray-600'}>Founder @CraftLab</h6>
                            <img src={Stars} alt="Stars"/>
                        </div>
                    </div>
                    <div>
                        <p className={'text-gray-600 text-[18px] mt-10'}>
                            &quot;This app did a great job! My new website is so much more professional,
                            good looking and easier to work with than my old site.&quot;
                        </p>
                    </div>
                </div>
                <div className={'w-[530px] bg-white-000 px-[42px] py-12'}>
                    <div className={'flex gap-x-5'}>
                        <img src={Farmer} alt="Farmer" height={88} className={'rounded-[50px]'}/>
                        <div>
                            <h3 className={'text-2xl font-bold text-black-100'}>Shaun Stevens</h3>
                            <h6 className={'text-base text-gray-600'}>Founder @CraftLab</h6>
                            <img src={Stars} alt="Stars"/>
                        </div>
                    </div>
                    <div>
                        <p className={'text-gray-600 text-[18px] mt-10'}>
                            &quot;This app did a great job! My new website is so much more professional,
                            good looking and easier to work with than my old site.&quot;
                        </p>
                    </div>
                </div>
                <div className={'w-[530px] bg-white-000 px-[42px] py-12'}>
                    <div className={'flex gap-x-5'}>
                        <img src={Farmer} alt="Farmer" height={88} className={'rounded-[50px]'}/>
                        <div>
                            <h3 className={'text-2xl font-bold text-black-100'}>Shaun Stevens</h3>
                            <h6 className={'text-base text-gray-600'}>Founder @CraftLab</h6>
                            <img src={Stars} alt="Stars"/>
                        </div>
                    </div>
                    <div>
                        <p className={'text-gray-600 text-[18px] mt-10'}>
                            &quot;This app did a great job! My new website is so much more professional,
                            good looking and easier to work with than my old site.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Reviews
