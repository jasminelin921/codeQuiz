import { createContext, useContext, useState, useEffect } from 'react'
import { authService } from '@/services/auth.service'
import { QUIZZES } from '@/views/Home/constant'

interface AuthContextType {
  isLoggedIn: boolean
  isInitialized: boolean
  username: string | null
  login: (username: string) => void
  logout: () => void
  stats: {
    completed: number
    total: number
    correct: number
    wrong: number
    totalQuestions: number
    accuracy: number
  }
  refreshStats: (username: string) => void
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  isInitialized: false,
  username: null,
  login: () => {},
  logout: () => {},
  stats: {
    completed: 0,
    total: 0,
    correct: 0,
    wrong: 0,
    totalQuestions: 0,
    accuracy: 0
  },
  refreshStats: () => {}
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<string | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const [stats, setStats] = useState({
    completed: 0,
    total: QUIZZES.length,
    correct: 0,
    wrong: 0,
    totalQuestions: 0,
    accuracy: 0
  })

  function refreshStats(username: string) {
    const records = authService.getQuizRecords(username)
    const completed = records.length
    const correct = records.reduce((acc, r) => acc + r.correctCount, 0)
    const totalQuestions = records.reduce((acc, r) => acc + r.totalCount, 0)
    const wrong = totalQuestions - correct
    const accuracy = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0
    setStats({ completed, total: QUIZZES.length, correct, wrong, totalQuestions, accuracy })
  }

  function login(username: string) {
    setUsername(username)
  }

  function logout() {
    authService.clearSession()
    setUsername(null)
  }

  // 初始化時讀取登入狀態
  useEffect(() => {
    const session = authService.getSession()
    if (session) {
      setUsername(session)
    }
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (username) refreshStats(username)
  }, [username])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: username !== null,
        isInitialized,
        username,
        login,
        logout,
        stats,
        refreshStats
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}
