import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { authService } from '@/services/auth.service'
import { useForm } from 'react-hook-form'
import type { FormValues } from '@/views/Auth/types'
import type { User } from '@/types'
import { useAuthContext } from '@/context'

const useController = () => {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState('')
  const [tab, setTab] = useState<'login' | 'register'>('login')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()
  const { login } = useAuthContext()
  const year = new Date().getFullYear()
  const [searchParams] = useSearchParams()
  const redirect = searchParams.get('redirect')

  function onLogin(data: FormValues) {
    const users = authService.getUsers() ?? {}
    const user = users[data.username]
    if (!user || user.password !== data.password) {
      setErrorMsg('帳號或密碼錯誤')
      return
    }
    authService.setSession(data.username)
    login(data.username)
    navigate(redirect ?? '/home')
  }

  function onRegister(data: FormValues) {
    const users = authService.getUsers() ?? {}
    if (users[data.username]) {
      setErrorMsg('帳號已存在')
      return
    }
    const newUser: User = {
      username: data.username,
      password: data.password,
      createdAt: new Date().toISOString()
    }
    users[data.username] = newUser
    authService.setUsers(users)
    authService.setSession(data.username)
    login(data.username)
    navigate(redirect ?? '/home')
  }

  useEffect(() => {
    authService.initDefaultUsers() // 初始化測試帳號
  }, [])

  return {
    register,
    handleSubmit,
    errors,
    errorMsg,
    tab,
    setTab,
    onLogin,
    onRegister,
    year
  }
}

export default useController
