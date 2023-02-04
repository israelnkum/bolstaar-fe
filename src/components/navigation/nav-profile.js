import React from 'react'
import { Dropdown } from 'antd'
import { RiUser6Line } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'
import Boot from '../../assets/images/boot.png'
import { Link } from 'react-router-dom'

const items = [
  {
    key: 'account',
    label: (
            <Link to={'/my-profile/general'}>
                My Account
            </Link>
    ),
    icon: <RiUser6Line className={'h-4 w-4'}/>
  },
  {
    key: 'logOut',
    label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Logout
            </a>
    ),
    icon: <FiLogOut className={'h-4 w-4'}/>
  }
]
const NavProfile = () => (
    <Dropdown placement={'bottomRight'} menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
            <img src={Boot} alt="Boot" className={'h-12 w-12 rounded-full cursor-pointer'}/>
        </a>
    </Dropdown>
)
export default NavProfile
