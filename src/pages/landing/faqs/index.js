import React from 'react'
import FaqItems from './faq-items'

function Index () {
  return (
        <div className={'bg-white mb-[235px]'}>
            <div className={'w-[104px] mx-auto bg-success-200 rounded-[50px] h-10 flex justify-center' +
                ' items-center uppercase text-success-100 text-sm font-medium'}>
                Faqs
            </div>

            <h3 className={'text-5xl font-bold leading-[58px] text-black-100 text-center mt-[26px] mb-[87px]'}>
                Frequently Asked <br/> Questions
            </h3>
            <div className={'mx-auto w-[870px] mb-[206px]'}>
                <FaqItems/>
            </div>
        </div>
  )
}

export default Index
