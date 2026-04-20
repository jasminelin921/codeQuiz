import type {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  SubmitHandler
} from 'react-hook-form'
import type { FormValues } from '@/views/Auth/types'

interface AuthFormProps {
  register: UseFormRegister<FormValues>
  handleSubmit: UseFormHandleSubmit<FormValues>
  errors: FieldErrors<FormValues>
  errorMsg: string
  tab: 'login' | 'register'
  setTab: (tab: 'login' | 'register') => void
  onLogin: SubmitHandler<FormValues>
  onRegister: SubmitHandler<FormValues>
}

const AuthForm = ({
  register, handleSubmit, errors, errorMsg, tab, setTab, onLogin, onRegister
}: AuthFormProps) => {
  return (
    <div className="bg-card-bg border-border rounded-2xl border p-6">

      {/* Tab */}
      <div className="border-border mb-6 flex border-b">
        <button
          type="button"
          onClick={() => setTab('login')}
          className={`text-tab flex-1 border-b-2 pb-2.5 transition-colors ${
            tab === 'login'
              ? 'text-primary border-primary font-medium'
              : 'text-text-muted border-transparent'
          }`}
        >
          登入
        </button>
        <button
          type="button"
          onClick={() => setTab('register')}
          className={`text-tab flex-1 border-b-2 pb-2.5 transition-colors ${
            tab === 'register'
              ? 'text-primary border-primary font-medium'
              : 'text-text-muted border-transparent'
          }`}
        >
          註冊
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(tab === 'login' ? onLogin : onRegister)}>
        <div className="space-y-4">

          {errorMsg && (
            <p className="bg-primary-tint text-primary mb-4 w-full rounded-lg border border-border-hint px-3 py-2 text-hint">
              ⚠️ {errorMsg}
            </p>
          )}

          <div>
            <label htmlFor="username" className="text-label text-text-muted mb-1.5 block">
              帳號
            </label>
            <input
              id="username"
              type="text"
              placeholder={tab === 'login' ? '輸入帳號' : '設定帳號（至少4個字元）'}
              {...register('username', {
                required: '請輸入帳號',
                minLength: { value: 4, message: '帳號至少需要4個字元' }
              })}
              className={`border-border placeholder:text-text-placeholder focus:border-primary w-full rounded-lg border px-3 py-2 text-input outline-none ${
                errors.username ? 'bg-primary-tint' : 'bg-white'
              }`}
            />
            {errors.username && (
              <p className="text-hint text-primary mt-1">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="text-label text-text-muted mb-1.5 block">
              密碼
            </label>
            <input
              id="password"
              type="password"
              placeholder={tab === 'login' ? '輸入密碼' : '設定密碼（至少4個字元）'}
              {...register('password', {
                required: '請輸入密碼',
                minLength: { value: 4, message: '密碼至少需要4個字元' }
              })}
              className={`border-border placeholder:text-text-placeholder focus:border-primary w-full rounded-lg border px-3 py-2 text-input outline-none ${
                errors.password ? 'bg-primary-tint' : 'bg-white'
              }`}
            />
            {errors.password && (
              <p className="text-hint text-primary mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover mt-2 w-full rounded-lg py-2.5 text-button font-medium text-white"
          >
            {tab === 'login' ? '登入' : '註冊'}
          </button>

        </div>
      </form>

      <p className="text-hint text-text-muted mt-4 text-center">
        測試帳號：<span className="font-medium">demo</span> / 密碼：
        <span className="font-medium">1234</span>
      </p>

    </div>
  )
}

export default AuthForm