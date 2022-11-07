import React from 'react'
import { Link } from 'react-router-dom'
import { IUserInfo } from '../../../models/modelsUsers'

interface UserCardProps {
  user: IUserInfo
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Link
      to={`/users/${user.id}`}
      className='m-3 border-bottom text-decoration-none'
    >
      <li className='list-group-item d-flex p-2'>
        <div className='d-flex justify-content-between align-items-center rounded p-1'>
          <img
            className='rounded-circle img-responsive'
            width='70'
            height='70'
            style={{ objectFit: 'cover' }}
            src={user?.image}
            alt={user?.firstName}
          />
        </div>
        <div className='d-flex flex-column flex-grow-1'>
          <div>
            <h5 className='text-dark'>
              {user?.firstName} {user?.lastName}
            </h5>
          </div>
          <span className='text-dark'>Gender: {user?.gender}</span>
          <div className='text-dark'>{user?.company.title}</div>
        </div>
      </li>
    </Link>
  )
}

export default UserCard
