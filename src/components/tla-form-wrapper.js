import React from 'react'
import { Button, Form } from 'antd'
import PropTypes from 'prop-types'
import { TlaError, TlaSuccess } from '../utils/messages'
import { useNavigate } from 'react-router-dom'

function TlaFormWrapper (props) {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const { onSubmit, initialValues, children, file, btnBlock, buttonText, afterSubmit } = props

  const submit = (values) => {
    const formData = new FormData()

    // eslint-disable-next-line no-unused-expressions
    file !== null ? formData.append('file', file) : ''

    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        formData.append(key, values[key])
      }
    }

    onSubmit(formData).then(() => {
      TlaSuccess()
      form.resetFields()
      afterSubmit && navigate(afterSubmit)
    }).catch((error) => {
      TlaError(error.response.data.error.message)
    })
  }

  return (
        <Form
            form={form}
            onFinish={(values) => {
              submit(values)
            }}
            layout="vertical"
            name="formName"
            requiredMark={false}
            initialValues={initialValues}>
            {children}
            <div>
                <Button
                    size={'large'}
                    block={btnBlock}
                    className={'btn-success'}
                    htmlType="submit">
                    {buttonText}
                </Button>
            </div>
        </Form>
  )
}

TlaFormWrapper.defaultProps = {
  file: null,
  width: 520,
  btnBlock: true,
  afterSubmit: null
}

TlaFormWrapper.propTypes = {
  initialValues: PropTypes.object,
  submitValues: PropTypes.object,
  formTitle: PropTypes.string,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
  file: PropTypes.any,
  width: PropTypes.any,
  btnBlock: PropTypes.bool,
  afterSubmit: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  children: PropTypes.any
}

export default TlaFormWrapper
