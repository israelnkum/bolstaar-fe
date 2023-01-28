import React from 'react'
import { Collapse } from 'antd'
import { FiPlus } from 'react-icons/fi'

const { Panel } = Collapse
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
const FaqItems = () => {
  const onChange = (key) => {
    console.log(key)
  }

  const genExtra = () => (
        <FiPlus
            className={'text-success-100'}
            onClick={(event) => {
              event.stopPropagation()
            }}
        />
  )
  return (
        <Collapse bordered={false}
                  ghost
                  accordion onChange={onChange}>
            <Panel showArrow={false} header="When will I be able to rent?" key="1" extra={genExtra()}>
                <p>{text}</p>
            </Panel>
            <Panel showArrow={false} header="What do I need to get started?" key="2" extra={genExtra()}>
                <p>{text}</p>
            </Panel>
            <Panel showArrow={false} header="How can I use this app?" key="3" extra={genExtra()}>
                <p>{text}</p>
            </Panel>
            <Panel showArrow={false} header="What can I use this app for?" key="4" extra={genExtra()}>
                <p>{text}</p>
            </Panel>
            <Panel showArrow={false} header="How do I reset my password?" key="5" extra={genExtra()}>
                <p>{text}</p>
            </Panel>
        </Collapse>
  )
}
export default FaqItems
