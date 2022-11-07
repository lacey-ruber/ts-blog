import { Routes, Route } from 'react-router-dom'
import NavBar from './components/ui/NavBar'
import Auth from './layouts/Auth'
import Home from './layouts/Home'
import Search from './layouts/Search'
import UserPage from './components/pages/UserPage'
import PostPage from './components/pages/PostPage'
import UsersLoader from './hooks/UsersLoader'

function App() {
  return (
    <UsersLoader>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path='auth' element={<Auth />} />
        <Route path='users/:id' element={<UserPage />} />
        <Route path='posts/:postId' element={<PostPage />} />
      </Routes>
    </UsersLoader>
  )
}

export default App
