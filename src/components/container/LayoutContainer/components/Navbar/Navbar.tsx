import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '@/context/AuthContext'
import logo from '@/assets/svg/logo.svg'
import { useDropdown } from '@/hooks/useDropdown'
import { authService } from '@/services/auth.service'
import { ConfirmModal } from '@/components/ui'
import { useState } from 'react'

const Navbar = () => {
  const navigate = useNavigate()
  const { isLoggedIn, username, logout, stats } = useAuthContext()
  const { isOpen, ref, toggleDropdown, closeDropdown } = useDropdown()
  const [modalInfo, setModalInfo] = useState<{
    title: string
    description: string
    confirmLabel: string
    onConfirm: () => void
  } | null>(null)

  const avatarText = username ? username[0].toUpperCase() : ''
  const recordCount = username ? stats.completed : 0

  const STAT_ITEMS = [
    { num: stats.correct, label: '答對題數' },
    { num: stats.wrong, label: '答錯題數' },
    { num: stats.totalQuestions, label: '總題數' },
    { num: `${stats.accuracy}%`, label: '正確率' }
  ]

  function handleLogout() {
    closeDropdown()
    logout()
    navigate('/auth')
  }

  function handleClearRecords() {
    closeDropdown()
    setModalInfo({
      title: '清除測驗紀錄',
      description: '確定要清除所有測驗紀錄嗎？此操作無法復原。',
      confirmLabel: '清除',
      onConfirm: () => {
        if (!username) return
        authService.clearQuizRecords(username)
        setModalInfo(null)
        window.location.reload()
      }
    })
  }

  function handleDeleteAccount() {
    closeDropdown()
    if (username === 'demo') {
      window.alert('測試用帳號無法刪除。')
      return
    }
    setModalInfo({
      title: '刪除帳號',
      description: '確定要刪除使用者帳號嗎？此操作無法復原。',
      confirmLabel: '刪除',
      onConfirm: () => {
        if (!username) return
        authService.deleteUser(username)
        logout()
        navigate('/auth')
      }
    })
  }

  function handleGoHome() {
    if (location.pathname === '/quiz') {
      setModalInfo({
        title: '離開測驗',
        description: '確定要離開測驗嗎？目前進度將不會儲存。',
        confirmLabel: '離開',
        onConfirm: () => {
          setModalInfo(null)
          navigate('/home')
        }
      })
      return
    }
    navigate('/home')
  }

  return (
    <>
      <nav className="bg-card-bg fixed top-0 left-0 z-50 flex h-14 w-full items-center justify-between px-5 shadow-sm md:px-6.5 lg:px-8">
        <button onClick={handleGoHome} className="flex cursor-pointer items-center gap-2">
          <img src={logo} alt="CodeQuiz" className="h-7 w-7" />
          <span className="text-logo-title text-text-base font-medium">CodeQuiz</span>
        </button>

        {isLoggedIn ? (
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('/bookmark')}
              className="text-label text-text-muted hover:text-primary hidden items-center gap-1 transition-colors md:flex"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 2h10v13l-5-3-5 3V2z" />
              </svg>
              收藏題目
            </button>

            <div ref={ref} className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-primary-tint text-primary text-hint hover:bg-primary flex h-8 w-8 items-center justify-center rounded-full font-medium transition-colors hover:text-white"
              >
                {avatarText}
              </button>

              {isOpen && (
                <div className="bg-card-bg border-border absolute top-10 right-0 z-50 w-50 rounded-xl border py-1.5 shadow-sm">
                  <div className="border-border mb-1 border-b p-3 md:hidden">
                    <p className="text-hint text-text-base mb-1 font-medium">測驗總覽</p>
                    <div className="grid grid-cols-2 gap-2 md:hidden">
                      {STAT_ITEMS.map((item) => (
                        <div key={item.label} className="bg-page-bg rounded-md p-2">
                          <p className="text-label text-text-base font-medium">{item.num}</p>
                          <p className="text-hint text-text-muted text-nowrap">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      navigate('/bookmark')
                      closeDropdown()
                    }}
                    className="text-hint text-text-base hover:bg-page-bg flex w-full items-center gap-2 px-4 py-2 transition-colors md:hidden"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="opacity-50"
                    >
                      <path d="M3 2h10v13l-5-3-5 3V2z" />
                    </svg>
                    收藏題目
                  </button>

                  <div className="border-border my-1 border-t md:hidden" />

                  <button
                    onClick={handleClearRecords}
                    disabled={recordCount === 0}
                    className={`text-hint text-text-base flex w-full items-center gap-2 px-4 py-2 transition-colors ${
                      recordCount === 0
                        ? 'text-text-placeholder cursor-not-allowed'
                        : 'text-text-base hover:bg-page-bg'
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="opacity-50"
                    >
                      <path
                        d="M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10"
                        strokeLinecap="round"
                      />
                    </svg>
                    清除測驗紀錄
                  </button>

                  <button
                    onClick={handleDeleteAccount}
                    className="text-hint text-text-base hover:bg-page-bg flex w-full items-center gap-2 px-4 py-2 transition-colors"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="opacity-50"
                    >
                      <path d="M8 2a3 3 0 100 6 3 3 0 000-6z" strokeLinecap="round" />
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3z" strokeLinecap="round" />
                      <path d="M12 6l3 3M15 6l-3 3" strokeLinecap="round" />
                    </svg>
                    刪除帳號
                  </button>

                  <div className="border-border my-1 border-t" />

                  <button
                    onClick={handleLogout}
                    className="text-hint text-primary hover:bg-primary-tint flex w-full items-center gap-2 px-4 py-2 transition-colors"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#aa0a41"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M6 14H2V2h4M11 11l3-3-3-3M14 8H6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    登出
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/auth')}
            className="bg-primary text-button hover:bg-primary-hover h-8 rounded-lg px-4 font-medium text-white"
          >
            登入
          </button>
        )}
      </nav>

      {modalInfo && (
        <ConfirmModal
          title={modalInfo.title}
          description={modalInfo.description}
          confirmLabel={modalInfo.confirmLabel}
          onConfirm={modalInfo.onConfirm}
          onCancel={() => setModalInfo(null)}
        />
      )}
    </>
  )
}

export default Navbar
