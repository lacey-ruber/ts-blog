import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchOnePost, removeComment } from '../../store/ActionCreators'
import { fetchComments } from '../../store/ActionCreators'
import Comment from '../ui/Comment'

const UserPage = () => {
  const { postId } = useParams<'postId'>()
  const { post, loading } = useAppSelector((state) => state.onePost)
  const dispatch = useAppDispatch()
  const { loading: commentLoading, comments } = useAppSelector(
    (state) => state.comment
  )

  useEffect(() => {
    dispatch(fetchOnePost(postId!))
    dispatch(fetchComments(postId!))
  }, [dispatch, postId])

  const handleRemoveComment = (id: number | null | undefined) => {
    if (window.confirm('Delete comment?')) {
      dispatch(removeComment(id))
    }
  }

  if (loading) return <p>Loading...</p>
  return (
    <div className='container mx-auto mt-8 p-4 flex justify-center'>
      <div>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        <p>Reactions: {post?.reactions}</p>
        <div className='mb-4'>
          {post?.tags.map((tag, i) => (
            <span
              style={{ fontSize: '14px' }}
              className='badge bg-info p-3 m-1'
              key={i}
            >
              {tag}
            </span>
          ))}
        </div>
        <>
          {commentLoading ? (
            <p>Comments Loading...</p>
          ) : comments.length ? (
            comments.map((comment) => (
              <div className='card mb-3'>
                <div className='card-body '>
                  <Comment
                    key={comment.id}
                    onRemove={handleRemoveComment}
                    comment={comment}
                  />
                </div>
              </div>
            ))
          ) : null}
        </>
      </div>
    </div>
  )
}

export default UserPage
