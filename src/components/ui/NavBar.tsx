import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import NavProfile from './NavProfile'

const NavBar = () => {
  const { isAuth } = useAppSelector((state) => state.auth)

  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid'>
        <ul className='navbar-nav me-auto mb-2 flex-row'>
          <li className='nav-item' style={{ marginRight: '20px' }}>
            <Link to='/' className='nav-link'>
              <i className='bi bi-house-door'></i>
            </Link>
          </li>
          <li className='nav-item' style={{ marginRight: '20px' }}>
            <Link to='/search' className='nav-link'>
              <i className='bi bi-search'></i>
            </Link>
          </li>

          {isAuth && (
            <li className='nav-item' style={{ marginRight: '20px' }}>
              <Link to='/favourites' className='nav-link'>
                <i className='bi bi-heart'></i>
              </Link>
            </li>
          )}
        </ul>
        {isAuth ? (
          <NavProfile />
        ) : (
          <div className='nav-item m-2'>
            <Link to='/auth' className='nav-link text-light'>
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
