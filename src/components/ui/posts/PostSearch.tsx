import axios from 'axios'
import { ChangeEvent, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from '../../../hooks/debounce'
import { IPost, ServerResponsePosts } from '../../../models/modelsUsers'

const PostSearch = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [items, setItems] = useState<IPost[]>([])
  const [dropdown, setDropdown] = useState(false)
  const debounced = useDebounce(value, 400)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  async function searchPosts(search: string) {
    const response = await axios.get<ServerResponsePosts>(
      `https://dummyjson.com/posts/search?q=${search}`
    )
    setItems(response.data.posts)
  }

  useEffect(() => {
    if (debounced.length > 3) {
      searchPosts(debounced).then(() => setDropdown(true))
    } else {
      setDropdown(false)
    }
  }, [debounced])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 p-4 position-relative'>
          <div className='d-flex justify-content-center mt-5'>
            <div className='w-100 position-relative'>
              <form className='form-inline'>
                <input
                  className='form-control mr-sm-2'
                  value={value}
                  type='search'
                  placeholder='Enter the title of the article...'
                  onChange={handleChange}
                  aria-label='Search'
                />
              </form>
              {dropdown && (
                <ul
                  className='position-absolute bg-light w-100 list-group'
                  style={{
                    zIndex: '10',
                    maxHeight: '250px',
                  }}
                >
                  {items.map((post) => (
                    <li
                      onClick={() => navigate(`/posts/${post.id}`)}
                      className='list-group-item list-group-item-action'
                      style={{ cursor: 'pointer' }}
                      key={post.id}
                    >
                      {post.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostSearch
