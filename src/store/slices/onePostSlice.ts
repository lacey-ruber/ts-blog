import { IPost } from './../../models/modelsUsers'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OnePostState {
  post: IPost | null
  loading: boolean
  error: string
}

const initialState: OnePostState = {
  post: null,
  loading: false,
  error: '',
}

export const onePostSlice = createSlice({
  name: 'onePost',
  initialState,
  reducers: {
    onePostFetching(state) {
      state.loading = true
    },
    onePostFetchingSuccess(state, action: PayloadAction<IPost>) {
      state.loading = false
      state.error = ''
      state.post = action.payload
    },
    onePostFetchingError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    },
  },
})

export const onePostReducer = onePostSlice.reducer
