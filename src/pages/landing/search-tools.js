import React from 'react'
import { Button, DatePicker, Form, Input } from 'antd'
import { FiSearch, FiHelpCircle } from 'react-icons/fi'

function SearchTools () {
  return (
        <Form layout="vertical">
            <div className={'rounded-lg bg-white-000 h-[130px] flex justify-between w-[1163px] items-center' +
                ' shadow-3xl -mt-[75px] px-8 gap-x-6 mx-auto'}>
                <div>
                    <Form.Item label={'Name of tool'}>
                        <Input.Search
                            style={{ width: '100%' }}
                            size={'large'}
                            placeholder={'Which tool do you want to rent ?'}
                            className={'bolstaar-search'}
                            prefix={<FiSearch/>}
                            suffix={<FiHelpCircle/>}/>
                    </Form.Item>
                </div>
                <div className={'w-[190px]'}>
                    <Form.Item label={'Pickup date'}>
                        <DatePicker
                            style={{ width: '100%' }}
                            size={'large'}/>
                    </Form.Item>
                </div>
                <div className={'w-[190px]'}>
                    <Form.Item label={'Pickup date'}>
                        <DatePicker
                            style={{ width: '100%' }}
                            size={'large'}/>
                    </Form.Item>
                </div>
                <div>
                    <div className={'relative'}>
                        <Button className={'btn-success-landing'} size={'large'}>
                            Search now
                        </Button>
                        <div className={'absolute'} style={{
                          background: 'rgba(56, 245, 86, 0.14)',
                          filter: 'blur(27px)',
                          borderRadius: '10px',
                          height: '100%',
                          width: '100%',
                          left: '10px'
                        }}>&nbsp;</div>
                    </div>
                </div>
            </div>
        </Form>
  )
}

export default SearchTools
