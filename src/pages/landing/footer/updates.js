import React from 'react'
import { Form, Input } from 'antd'
import { RiSendPlaneLine } from 'react-icons/ri'

function Updates () {
  return (
      <div className={'w-[407px] text-white-200'}>
          <h6 className={'text-base font-bold text-white-000 mb-7'}>
              Updates
          </h6>
          <div className={'text-sm'}>
              Sign up for our  updates and to get more events, promotions & news from us!
          </div>
          <div>
              <Form>
                  <Form.Item>
                      <Input size={'large'}
                             placeholder={'Enter your email'}
                             className={'email-input'}
                             suffix={<RiSendPlaneLine/>}
                      />
                  </Form.Item>
              </Form>
          </div>
      </div>
  )
}

export default Updates
