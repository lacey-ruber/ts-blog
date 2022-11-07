import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'

export const useAppDispatch = () => useDispatch<any>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
