import LoginForm from '../components/ui/LoginForm'

const Auth = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 p-4 position-relative'>
          <h3 className='d-flex justify-content-center mb-4'>Login</h3>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Auth
