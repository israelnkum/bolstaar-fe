import React from 'react'
import { Tabs } from 'antd'
import Reviews from './reviews'

function ReviewAndDescription () {
  const Description = () => (
        <div className={'text-base leading-[27px]'}>
            <h6 className={'mb-2 text-black-100 font-medium'}>About this tool</h6>
            <div className={'font-normal'}>
                Wallington boots are a type of boot that are typically made from high-quality leather and are designed
                for durability and comfort. They often have a sturdy sole and may have a waterproof or water-resistant
                upper to protect the feet from wet conditions. They are often used for outdoor activities such as hiking,
                hunting and working.
            </div>
        </div>
  )
  return (
      <div className={'max-w-[421px]'}>
          <Tabs
              defaultActiveKey="1"
              items={[
                {
                  label: 'Description',
                  key: 'description',
                  children: <Description/>
                },
                {
                  label: <>Reviews </>,
                  key: 'reviews',
                  children: <Reviews/>
                }
              ]}
          />
      </div>
  )
}

export default ReviewAndDescription
