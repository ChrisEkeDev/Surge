import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import type { RootState } from '../store'

import { thunkSignIn, getUser } from '../store/session'

export function useSignIn() {
    const dispatch = useAppDispatch()
    const data = useAppSelector(state => getUser(state))

    const isUninitialized = status === null
    const isLoading = status === 'pending' || status === null
    const isError = status === 'rejected'
    const isSuccess = status === 'fulfilled'

    return { data, isUninitialized, isLoading, isError, isSuccess }
}
