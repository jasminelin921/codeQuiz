import { useNavigate, useLocation } from 'react-router-dom'
import { type QuestionResult, type QuizRecord } from '@/types'
import { QUIZZES, TOPIC_LABEL } from '@/views/Home/constant'
import { authService } from '@/services/auth.service'
import { useAuthContext } from '@/context'
import { useState, useEffect, useRef } from 'react'

interface ResultState {
  quizId: string
  results: QuestionResult[]
}

const useController = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { username } = useAuthContext()
  const hasSavedRecord = useRef(false)
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([])
  const state = location.state as ResultState | null

  const quizId = state?.quizId ?? ''
  const results = state?.results ?? []

  const quizInfo = QUIZZES.find((q) => q.id === quizId)
  const quizTitle = quizInfo?.title ?? ''
  const topicLabel = quizInfo ? TOPIC_LABEL[quizInfo.topic] : ''

  const breadcrumbItem = [
    { label: '首頁', onClick: handleGoHome },
    { label: topicLabel },
    { label: quizTitle },
    { label: '測驗結果' }
  ]

  const correctCount = results.filter((r) => r.isCorrect).length
  const totalCount = results.length
  const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0
  const avgTime =
    totalCount > 0 ? Math.round(results.reduce((sum, r) => sum + r.timeUsed, 0) / totalCount) : 0

  const getResultMeta = () => {
    if (accuracy >= 80) return { emoji: '🎉', title: '太厲害了！' }
    if (accuracy >= 60) return { emoji: '👍', title: '做得不錯！' }
    return { emoji: '📚', title: '繼續加油！' }
  }

  const detailItems = results.map((result) => ({
    questionId: result.questionId,
    questionText: result.questionText,
    isCorrect: result.isCorrect,
    isTimeout: result.isTimeout,
    selectedAnswer: result.selectedAnswer,
    correctAnswer: result.correctAnswer,
    timeUsed: result.timeUsed
  }))

  const statItems = [
    {
      num: `${correctCount} / ${totalCount}`,
      label: '答對題數',
      color: accuracy >= 60 ? 'text-green-800' : 'text-amber-800'
    },
    {
      num: `${accuracy}%`,
      label: '正確率',
      color: accuracy >= 60 ? 'text-green-800' : 'text-amber-800'
    },
    {
      num: `${avgTime} 秒`,
      label: '平均用時',
      color: 'text-text-base'
    }
  ]

  function handleToggleBookmark(questionId: string) {
    if (!username) return
    if (bookmarkedIds.includes(questionId)) {
      authService.removeBookmark(username, questionId)
      setBookmarkedIds((prev) => prev.filter((id) => id !== questionId))
    } else {
      authService.addBookmark(username, questionId)
      setBookmarkedIds((prev) => [...prev, questionId])
    }
  }

  function handleGoHome() {
    navigate('/home')
  }

  function handleRetry() {
    navigate(`/quiz?id=${quizId}`)
  }

  useEffect(() => {
    if (hasSavedRecord.current || !state || !username) return
    hasSavedRecord.current = true
    const record: QuizRecord = {
      quizId,
      correctCount,
      totalCount,
      accuracy,
      avgTime,
      completedAt: new Date().toISOString()
    }
    authService.saveQuizRecord(username, record)
  }, [state, username, quizId, correctCount, totalCount, accuracy, avgTime])

  useEffect(() => {
    if (!username) return
    const bookmarks = authService.getBookmarkedQuestions(username)
    setBookmarkedIds(bookmarks.map((b) => b.questionId))
  }, [username])

  return {
    quizTitle,
    breadcrumbItem,
    detailItems,
    statItems,
    getResultMeta,
    handleGoHome,
    handleRetry,
    isValidState: !!state,
    bookmarkedIds,
    handleToggleBookmark
  }
}

export default useController
