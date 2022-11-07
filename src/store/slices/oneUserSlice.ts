import { IUserInfo } from './../../models/modelsUsers'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OneUserState {
  user: IUserInfo | null
  loading: boolean
  error: string
}

const initialState: OneUserState = {
  user: null,
  loading: false,
  error: '',
}

export const oneUserSlice = createSlice({
  name: 'oneUser',
  initialState,
  reducers: {
    oneUserFetching(state) {
      state.loading = true
    },
    oneUserFetchingSuccess(state, action: PayloadAction<IUserInfo>) {
      state.loading = false
      state.error = ''
      state.user = action.payload
    },
    oneUserFetchingError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    },
  },
})

export const oneUserReducer = oneUserSlice.reducer
