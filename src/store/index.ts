import { oneUserReducer } from './slices/oneUserSlice'
import { onePostReducer } from './slices/onePostSlice'
import { commentReducer } from './slices/commentSlice'
import { postReducer } from './slices/postSlice'
import { authReducer } from './slices/authSlice'
import { userReducer } from './slices/userSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    post: postReducer,
    comment: commentReducer,
    onePost: onePostReducer,
    oneUser: oneUserReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<any>
export type AppDispatch = AppStore['dispatch']
