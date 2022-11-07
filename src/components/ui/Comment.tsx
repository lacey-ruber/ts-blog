import { useAppSelector } from '../../hooks/redux'
import { IComment } from '../../models/modelsUsers'

interface CommentProps {
  comment: IComment
  onRemove: any
}

const Comment = ({ comment, onRemove }: CommentProps) => {
  const { userId } = useAppSelector((state) => state.auth)

  return (
    <div className='bg-light card-body'>
      <div className='row'>
        <div className='col'>
          <div className='d-flex flex-start '>
            <div className='flex-grow-1 flex-shrink-1'>
              <div className='mb-2'>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='mb-1 '>
                    <b>{comment.user.username}</b>
                  </p>
                  {userId === String(comment.user.id) && (
                    <button
                      className='btn btn-sm text-dark d-flex align-items-center'
                      onClick={() => onRemove(comment.user.id)}
                    >
                      <i className='bi bi-x-lg'></i>
                    </button>
                  )}
                </div>
                <p className='small mb-0'>{comment.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment
