import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchOneUser, fetchPostsUser } from '../../store/ActionCreators'
import PostCard from '../ui/posts/PostCard'

const UserPage = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams<'id'>()
  const { user, loading } = useAppSelector((state) => state.oneUser)
  const { posts, loading: postsLoading } = useAppSelector((state) => state.post)
  const [details, setDetails] = useState(false)
  const { isAuth } = useAppSelector((state) => state.auth)

  const btnBgClassName = details ? 'btn btn-light' : 'btn btn-dark'
  const btnClasses = ['py-2 px-4 border', btnBgClassName]

  useEffect(() => {
    dispatch(fetchOneUser(id!))
    dispatch(fetchPostsUser(Number(id)!))
  }, [dispatch, id])

  if (loading) return <p>Loading...</p>
  return (
    <div className='justify-content-between mt-8 p-4 flex justify-center'>
      <div className='d-flex align-items-inherit align-items-md-start justify-content-center justify-content-md-start flex-column flex-md-row'>
        <div className='card m-2'>
          <div className='card-body'>
            <div className='d-flex justify-content-center flex-column align-items-center text-center'>
              <img
                src={user?.image}
                alt={user?.lastName}
                width='150'
                height='150'
                className='rounded-circle img-responsive'
              />
              <h1
                className='font-bold size text-3xl'
                style={{ marginTop: '20px' }}
              >
                {user?.firstName} {user?.lastName}
              </h1>
              {isAuth ? (
                <button
                  onClick={() => setDetails((prevState) => !prevState)}
                  className={btnClasses.join(' ')}
                >
                  {details ? 'Hide details' : 'Show details'}
                </button>
              ) : (
                <h4 className='text-danger'>Information hidden</h4>
              )}
            </div>
          </div>
        </div>

        {details && (
          <div className='d-flex flex-wrap bg-light p-1 m-2'>
            <div className='m-2'>
              <h4>Basic information</h4>
              <p>username: {user?.username}</p>
              <p>gender: {user?.gender}</p>
              <p>Birthday: {user?.birthDate}</p>
              <p>age: {user?.age}</p>
              <p>phone: {user?.phone}</p>
            </div>
            <div className='m-2'>
              <h4>Additionally</h4>
              <p>eyeColor: {user?.eyeColor}</p>
              <p>
                hair: {user?.hair.type}, {user?.hair.color}
              </p>
              <p>height: {user?.height}</p>
              <p>weight: {user?.weight}</p>
              <p>university: {user?.university}</p>
              <p>Blood group: {user?.bloodGroup}</p>
            </div>
            <div className='m-2'>
              <h4>Company</h4>
              <p>
                {user?.company.name}, {user?.company.department}
              </p>
              <p>Position: {user?.company.title}</p>
            </div>
          </div>
        )}
      </div>
      <div>
        {!postsLoading
          ? posts.map((post) => <PostCard post={post} key={post.id} />)
          : null}
      </div>
    </div>
  )
}

export default UserPage
