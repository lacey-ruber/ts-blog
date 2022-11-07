import { useAppSelector } from '../../../hooks/redux'
import UserCard from './UserCard'

const UsersList = () => {
  const { users, error, isLoading } = useAppSelector((state) => state.user)

  return (
    <div className='flex-shrink-1 d-none d-md-block'>
      {isLoading && (
        <p className='d-flex flex-wrap justify-content-center mt-4'>
          Loading Users...
        </p>
      )}
      {error && <p className='text-danger'>Something went wrong...</p>}
      <div className='d-flex flex-column'>
        {users?.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  )
}

export default UsersList
