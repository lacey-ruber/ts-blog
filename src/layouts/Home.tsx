import _ from 'lodash'
import PostSearch from '../components/ui/posts/PostSearch'
import PostsList from '../components/ui/posts/PostsList'
import UsersList from '../components/ui/users/UsersList'

const Posts = () => {
  return (
    <div className='container'>
      <PostSearch />
      <div className='d-flex'>
        <PostsList />
        <UsersList />
      </div>
    </div>
  )
}

export default Posts
