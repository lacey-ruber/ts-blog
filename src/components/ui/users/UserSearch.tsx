import axios from 'axios'
import { ChangeEvent, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from '../../../hooks/debounce'
import { IUserInfo, ServerResponseUsers } from '../../../models/modelsUsers'

const UserSearch = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [items, setItems] = useState<IUserInfo[]>([])
  const [dropdown, setDropdown] = useState(false)
  const debounced = useDebounce(value, 300)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  async function searchUsers(search: string) {
    const response = await axios.get<ServerResponseUsers>(
      `https://dummyjson.com/users/search?q=${search}`
    )
    setItems(response.data.users)
  }

  useEffect(() => {
    if (debounced.length > 3) {
      searchUsers(debounced).then(() => setDropdown(true))
    } else {
      setDropdown(false)
    }
  }, [debounced])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col p-4 position-relative'>
          <div className='d-flex justify-content-center mt-5'>
            <div className='w-100 position-relative'>
              <form className='form-inline'>
                <input
                  className='form-control mr-sm-2'
                  value={value}
                  type='search'
                  placeholder='Enter username...'
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
                  {items.map((user) => (
                    <li
                      onClick={() => navigate(`/users/${user.id}`)}
                      className='list-group-item list-group-item-action'
                      style={{ cursor: 'pointer' }}
                      key={user.id}
                    >
                      {user.firstName} {user.lastName}
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

export default UserSearch
