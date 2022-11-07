import { useEffect } from 'react'
import { fetchUsers } from '../store/ActionCreators'
import { useAppDispatch, useAppSelector } from './redux'

const UsersLoader = ({ children }: any) => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector((state) => state.user)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  if (isLoading) return <p>Loading...</p>
  return children
}

export default UsersLoader
