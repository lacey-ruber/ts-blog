import { oneUserSlice } from './slices/oneUserSlice'
import { onePostSlice } from './slices/onePostSlice'
import { postSlice } from './slices/postSlice'
import { authSlice } from './slices/authSlice'
import { userSlice } from './slices/userSlice'
import {
  IAuth,
  IAuthResponse,
  IComment,
  IPost,
  IUserInfo,
  ServerResponseComments,
  ServerResponsePosts,
  ServerResponseUsers,
} from './../models/modelsUsers'
import { AppDispatch, RootState } from './index'
import axios from 'axios'
import { commentSlice } from './slices/commentSlice'

export const fetchUsers = (limit = 4) => {
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  const skip = getRandomInt(1, 80)

  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.userFetching())
      const response = await axios.get<ServerResponseUsers>(
        `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
      )
      dispatch(
        userSlice.actions.userFetchingSuccess({
          users: response.data.users,
          limit: response.data.limit,
        })
      )
    } catch (error) {
      dispatch(userSlice.actions.userFetchingError(error as Error))
    }
  }
}

export const fetchOneUser = (userId: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(oneUserSlice.actions.oneUserFetching())
      const response = await axios.get<IUserInfo>(
        `https://dummyjson.com/users/${userId}`
      )
      dispatch(oneUserSlice.actions.oneUserFetchingSuccess(response.data))
    } catch (e) {
      dispatch(oneUserSlice.actions.oneUserFetchingError(e as Error))
    }
  }
}

export const fetchPosts = (limit = 20) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(postSlice.actions.postFetching())
      const response = await axios.get<ServerResponsePosts>(
        `https://dummyjson.com/posts?limit=${limit}`
      )
      dispatch(
        postSlice.actions.postFetchingSuccess({
          posts: response.data.posts,
          limit: response.data.limit,
        })
      )
    } catch (error) {
      dispatch(postSlice.actions.postFetchingError(error as Error))
    }
  }
}

export const fetchPostsUser = (userId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(postSlice.actions.postFetching())
      const response = await axios.get<ServerResponsePosts>(
        `https://dummyjson.com/users/${userId}/posts`
      )
      dispatch(
        postSlice.actions.postFetchingSuccess({
          posts: response.data.posts,
          limit: response.data.limit,
        })
      )
    } catch (error) {
      dispatch(postSlice.actions.postFetchingError(error as Error))
    }
  }
}

export const fetchOnePost = (postId: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(onePostSlice.actions.onePostFetching())
      const response = await axios.get<IPost>(
        `https://dummyjson.com/posts/${postId}`
      )
      dispatch(onePostSlice.actions.onePostFetchingSuccess(response.data))
    } catch (error) {
      dispatch(onePostSlice.actions.onePostFetchingError(error as Error))
    }
  }
}

export const fetchComments = (postId: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(commentSlice.actions.commentFetching())
      const response = await axios.get<ServerResponseComments>(
        `https://dummyjson.com/comments/post/${postId}`,
        {
          params: { limit: 10 },
        }
      )
      dispatch(
        commentSlice.actions.commentFetchingSuccess(response.data.comments)
      )
    } catch (e) {
      dispatch(commentSlice.actions.commentFetchingError(e as Error))
    }
  }
}

export const removeComment = (id: any) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const token = getState().auth.token
      await axios.delete<IComment>(`https://dummyjson.com/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      dispatch(commentSlice.actions.removeComment(id))
    } catch (e) {
      console.log(e)
    }
  }
}

export const login = (data: IAuth) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<IAuthResponse>(
        `https://dummyjson.com/auth/login`,
        data
      )
      dispatch(
        authSlice.actions.loginSuccess({
          token: response.data.token,
          username: data.username,
          userId: response.data.id,
        })
      )
    } catch (e) {
      console.log('Error Login', e)
    }
  }
}
