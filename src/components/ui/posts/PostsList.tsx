import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { fetchPosts } from '../../../store/ActionCreators'
import PostCard from './PostCard'

const PostsList = () => {
  const dispatch = useAppDispatch()
  const { posts, loading, error } = useAppSelector((state) => state.post)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div className='d-flex flex-column flex-grow-1'>
      {loading && (
        <p className='d-flex  justify-content-center mt-4'>Loading Posts...</p>
      )}
      {error && <p className='text-danger'>Something went wrong...</p>}
      <div className='justify-content-center align-items-center flex-column'>
        {posts?.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export default PostsList
