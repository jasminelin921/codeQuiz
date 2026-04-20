import logo from '@/assets/svg/logo.svg'
import githubIcon from '@/assets/svg/github_icon.svg'
import { AuthForm } from './components'
import useController from './controller'

const AuthPage = () => {
  const { year, register, handleSubmit, errors, errorMsg, tab, setTab, onLogin, onRegister } = useController()
  return (
    <div className="bg-primary flex h-screen flex-col items-center justify-center p-5 md:p-6.5 lg:p-8">
      <div className="bg-page-bg w-full max-w-sm rounded-3xl p-6.5 md:p-8 lg:p-10 shadow-lg">
        <div className="mb-8 text-center">
          <img src={logo} alt="Code Quiz Logo" className="mx-auto mb-2 h-20 w-20" />
          <h1 className="text-text-base text-logo-title font-semibold">Code Quiz</h1>
          <p className="text-text-muted mt-1 text-subtitle">程式技能測驗平台</p>
        </div>
        <AuthForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          errorMsg={errorMsg}
          tab={tab}
          setTab={setTab}
          onLogin={onLogin}
          onRegister={onRegister}
        />
      </div>

      <div className="mt-3 text-center">
        <p className="text-footer text-gray-300">
          Code Quiz © {year} <img src={githubIcon} alt="GitHub Icon" className="inline h-4.5 w-4.5 mb-1 mx-1" /><a href="https://jasminelin921.github.io/codeQuiz/" className='underline'>Jasmine Lin</a>
        </p>
      </div>
    </div>
  )
}

export default AuthPage
