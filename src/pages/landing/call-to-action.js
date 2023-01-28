import React from 'react'
import { Button } from 'antd'
import { FiChevronRight } from 'react-icons/fi'

function CallToAction () {
  return (
        <div className={'bg-white mb-[133px] flex items-center justify-between w-[900px] mx-auto'}>
            <div>
                <h3 className={'text-[40px] font-bold leading-[58px] text-black-100 mb-7'}>
                    Still Have Questions
                </h3>
                <p className={'text-gray-500'}>Can’t find the answer you’re looking for? Please <br/> chat to our friendly team.</p>
            </div>
            <div>
                <Button className={'rounded-[50px] bg-success-100 text-white-000 border-0 hover:!text-white-000' +
                    ' h-[60px] w-[220px] text-[13px] flex items-center gap-4 justify-center'}>
                    Send a chat now <FiChevronRight className={'text-lg'}/>
                </Button>
            </div>
        </div>
  )
}

export default CallToAction
