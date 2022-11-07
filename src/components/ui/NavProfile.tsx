import { authSlice } from '../../store/slices/authSlice'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchOneUser } from '../../store/ActionCreators'
import { IUserInfo } from '../../models/modelsUsers'
import axios from 'axios'

const NavProfile = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { userId } = useAppSelector((state) => state.auth)
  const [user, setUser] = useState<IUserInfo>()
  const [loading, setLoading] = useState(true)
  const [isOpen, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen((prevState) => !prevState)
  }

  useEffect(() => {
    dispatch(fetchOneUser(userId))
    setLoading(false)
  }, [dispatch, userId])

  async function searchUsers(userId: string) {
    const response = await axios.get<IUserInfo>(
      `https://dummyjson.com/users/${userId}`
    )
    setUser(response.data)
    setLoading(false)
  }

  useEffect(() => {
    searchUsers(userId)
  }, [userId])

  const handleLogOut = () => {
    dispatch(authSlice.actions.logout())
    navigate('/')
  }

  if (loading) return <h2>Loading...</h2>
  return (
    <div className='dropdown' onClick={toggleMenu}>
      <div className='btn d-flex align-items-center'>
        <img
          src={user?.image}
          alt={user?.firstName}
          height='40'
          width='40'
          style={{ objectFit: 'cover' }}
          className='img-responsive rounded-circle'
        />
      </div>
      <div
        className={
          'dropdown-menu dropdown-menu-start end-0' + (isOpen ? ' show' : '')
        }
      >
        <Link to={`/users/${userId}`} className='dropdown-item'>
          Profile
        </Link>
        <Link to='/' className='dropdown-item'>
          Edit
        </Link>
        <button onClick={handleLogOut} className='dropdown-item'>
          Log out
        </button>
      </div>
    </div>
  )
}

export default NavProfile
