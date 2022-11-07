import { Link } from 'react-router-dom'
import { IPost } from '../../../models/modelsUsers'

interface UserCardProps {
  post: IPost
}

const PostCard = ({ post }: UserCardProps) => {
  return (
    <Link
      to={`/posts/${post.id}`}
      className='col card m-3 text-decoration-none'
    >
      <div className='card-body bg-dark d-flex justify-content-between align-items-center'>
        <div className='mt-3 d-flex flex-column justify-content-between'>
          <div>
            <h5 className='text-light'>{post?.title}</h5>
          </div>
          <div className='d-flex flex-wrap'>
            {post?.tags.map((tag, i) => (
              <button
                type='button'
                style={{ fontSize: '12px' }}
                key={i}
                className='btn btn-outline-info m-1'
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
