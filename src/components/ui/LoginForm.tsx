import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { IAuth } from '../../models/modelsUsers'
import { login } from '../../store/ActionCreators'
import TextField from '../common/form/TextField'

const LoginForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState<IAuth>({
    password: '0lelplR',
    username: 'kminchelle',
  })

  const isFormValid = () => {
    return form.password.trim().length && form.username.trim().length
  }

  const handleChange = (target: any) => {
    setForm((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isFormValid()) {
      await dispatch(login(form))
      await navigate(`/`)
    } else {
      alert('Form is invalid!')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Username'
        name='username'
        value={form.username}
        onChange={handleChange}
      />

      <TextField
        label='Password'
        type='password'
        name='password'
        value={form.password}
        onChange={handleChange}
      />
      <button className='btn btn-dark w-100 mx-auto' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default LoginForm
