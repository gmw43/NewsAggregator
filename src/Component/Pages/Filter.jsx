import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Input, message, Space } from 'antd'
import { Calendar } from 'react-calendar'
import { DataToPass } from './GlobalData'

const onClick = ({ key }) => {
  if (key === '1') {
    message.info(<Calendar />)
  } else if (key === '3') {
    message.info(<Input placeholder="Filled" variant="filled" />)
  } else {
    message.info(`Click on item ${key}`)
  }
}

const items = [
  {
    label: 'Date',
    key: '1',
  },
  {
    label: 'Category',
    key: '2',
  },
  {
    label: 'Source',
    key: '3',
  },
]

const Filter = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a>
      <Space style={{ color: 'white', marginLeft: '10px' }}>
        Filter By
        <DownOutlined
          style={{ fontSize: '12px' }}
          onClick={(e) => e.preventDefault()}
        />
      </Space>
    </a>
  </Dropdown>
)

export default Filter
