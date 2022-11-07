// @ts-nocheck
import { IUserInfo } from '../../models/modelsUsers'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  users: IUserInfo[]
  limit: number
  isLoading: boolean
  error: string
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  limit: 0,
}

interface UserPayload {
  users: IUserInfo[]
  limit: number
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true
    },
    userFetchingSuccess(state, action: PayloadAction<UserPayload>) {
      state.error = ''
      state.users = action.payload.users
      state.limit = action.payload.limit
      state.isLoading = false
    },
    userFetchingError(state, action: PayloadAction<Error>) {
      state.isLoading = false
      state.error = action.payload.message
    },
  },
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
