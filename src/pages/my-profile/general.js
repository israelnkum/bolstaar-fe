import React from 'react'
import { Col, Form, Input, Row } from 'antd'
import ShadowButton from '../../components/shadow-button'

function General () {
  return (
        <Form layout={'vertical'}>
            <Row>
                <Col span={24} className={'mb-6'}>
                    <Form.Item label={'Fullname'} help={'This name will be showed on your profile'}>
                        <Input size={'large'}/>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        rules={[{
                          type: 'email',
                          message: 'Invalid Email'
                        }]}
                        label={'Email'}>
                        <Input size={'large'}/>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <div className={'flex justify-end'}>
                        <div className={'w-fit'}>
                            <ShadowButton buttonText={'Save Changes'} buttonType={'submit'}/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Form>
  )
}

export default General
