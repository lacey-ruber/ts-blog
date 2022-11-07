import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuth: boolean
  token: string
  username: string
  userId: number | any
}

const ACCESS_KEY = 'dc-access'
const USERNAME_KEY = 'dc-username'
const EXPIRES_KEY = 'dc-expires'
const USERID_KEY = 'dc-userid'

function getInitialState(): AuthState {
  const expiresIn = localStorage.getItem(EXPIRES_KEY) ?? null

  if (expiresIn && new Date() > new Date(expiresIn)) {
    return {
      isAuth: false,
      token: '',
      username: '',
      userId: null,
    }
  }

  return {
    isAuth: Boolean(localStorage.getItem(ACCESS_KEY) ?? ''),
    token: localStorage.getItem(ACCESS_KEY) ?? '',
    username: localStorage.getItem(USERNAME_KEY) ?? '',
    userId: localStorage.getItem(USERID_KEY) ?? null,
  }
}

const initialState: AuthState = getInitialState()

interface AuthPayload {
  token: string
  username: string
  userId: number | any
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false
      state.token = ''
      state.username = ''
      localStorage.removeItem(ACCESS_KEY)
      localStorage.removeItem(USERNAME_KEY)
      localStorage.removeItem(EXPIRES_KEY)
      localStorage.removeItem(USERID_KEY)
    },
    loginSuccess(state, action: PayloadAction<AuthPayload>) {
      state.token = action.payload.token
      state.username = action.payload.username
      state.isAuth = Boolean(action.payload.token)
      state.userId = action.payload.userId

      const tokenExpires = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)

      localStorage.setItem(ACCESS_KEY, action.payload.token)
      localStorage.setItem(USERNAME_KEY, action.payload.username)
      localStorage.setItem(EXPIRES_KEY, tokenExpires.toString())
      localStorage.setItem(USERID_KEY, action.payload.userId)
    },
  },
})

export const authReducer = authSlice.reducer
