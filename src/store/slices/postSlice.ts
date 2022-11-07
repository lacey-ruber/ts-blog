import { IPost } from '../../models/modelsUsers'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PostState {
  posts: IPost[]
  limit: number
  loading: boolean
  error: string
}

const initialState: PostState = {
  posts: [],
  limit: 0,
  loading: false,
  error: '',
}

interface postPayload {
  posts: IPost[]
  limit: number
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postFetching(state) {
      state.loading = true
    },
    postFetchingSuccess(state, action: PayloadAction<postPayload>) {
      state.error = ''
      state.posts = action.payload.posts
      state.limit = action.payload.limit
      state.loading = false
    },
    postFetchingError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    },
    addPost(state, action: PayloadAction<IPost>) {
      state.posts.push(action.payload)
    },
  },
})

export const postReducer = postSlice.reducer
