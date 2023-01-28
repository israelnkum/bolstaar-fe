import React from 'react'
import ContactUs from './contact-us'
import Company from './company'
import Updates from './updates'

function Footer () {
  return (
        <div className={'bg-black-200 py-14'}>
            <div className={'flex items-start justify-between w-[1175px] mx-auto'}>
                <ContactUs/>
                <Company/>
                <Updates/>
            </div>
        </div>
  )
}

export default Footer
