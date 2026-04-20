import { useAuthContext } from '@/context'
import { QUIZZES, TOPIC_ORDER, type Difficulty, type Quiz, type TabType } from './constant'
import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { authService } from '@/services/auth.service'

const useController = () => {
  const navigate = useNavigate()
  const { isLoggedIn, username, stats } = useAuthContext()
  const [completedQuizIds, setCompletedQuizIds] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [collapsedTopics, setCollapsedTopics] = useState<string[]>([])
  const [searchParams, setSearchParams] = useSearchParams()

  const selectedTab = (searchParams.get('tab') as TabType) ?? 'all'
  const selectedDifficulty = (searchParams.get('difficulty') as Difficulty | 'all') ?? 'all'

  const filteredQuizzes = QUIZZES.filter((quiz) => {
    const diffMatch = selectedDifficulty === 'all' || quiz.difficulty === selectedDifficulty
    const tabMatch = selectedTab === 'all' || completedQuizIds.includes(quiz.id)
    return diffMatch && tabMatch
  })

  const groupedQuizzes = filteredQuizzes.reduce<Record<string, Quiz[]>>((group, quiz) => {
    if (!group[quiz.topic]) group[quiz.topic] = []
    group[quiz.topic].push(quiz)
    return group
  }, {})

  const topics = TOPIC_ORDER.filter((topic) => groupedQuizzes[topic])

  function setSelectedTab(tab: TabType) {
    setSearchParams((prev) => {
      prev.set('tab', tab)
      return prev
    })
  }

  function setSelectedDifficulty(difficulty: Difficulty | 'all') {
    setSearchParams((prev) => {
      if (difficulty === 'all') {
        prev.delete('difficulty')
      } else {
        prev.set('difficulty', difficulty)
      }
      return prev
    })
  }

  function toggleTopic(topic: string) {
    setCollapsedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    )
  }

  function isTopicCollapsed(topic: string): boolean {
    return collapsedTopics.includes(topic)
  }

  function isCompleted(quizId: string): boolean {
    return completedQuizIds.includes(quizId)
  }

  function handleLogin() {
    navigate('/auth')
  }

  function handleStartQuiz(quizId: string) {
    if (!isLoggedIn) {
      navigate(`/auth?redirect=/quiz?id=${quizId}`)
      return
    }
    navigate(`/quiz?id=${quizId}`)
  }

  useEffect(() => {
    if (!username) {
      setIsLoading(false)
      return
    }
    const records = authService.getQuizRecords(username)
    setCompletedQuizIds(records.map((r) => r.quizId))
    setIsLoading(false)
  }, [username])

  return {
    isLoggedIn,
    isLoading,
    username,
    topics,
    groupedQuizzes,
    handleLogin,
    handleStartQuiz,
    isCompleted,
    selectedDifficulty,
    setSelectedDifficulty,
    selectedTab,
    setSelectedTab,
    completedQuizIds,
    stats,
    toggleTopic,
    isTopicCollapsed
  }
}

export default useController
