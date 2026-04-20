import { useEffect, useState } from 'react'
import {
  DIFFICULTY_OPTIONS,
  TOPIC_ORDER,
  TOPIC_LABEL,
  DIFFICULTY_LABEL,
  type Topic,
  type Difficulty
} from '@/views/Home/constant'
import { QUESTIONS } from '@/data/questions.db'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '@/context'
import { authService } from '@/services/auth.service'

export interface BookmarkItem {
  questionId: string
  questionText: string
  code?: string | undefined
  correctAnswer: string
  topic: Topic
  topicLabel: string
  difficulty: Difficulty
  difficultyLabel: string
  explanation: string
}

const DIFFICULTY_ORDER = { easy: 0, medium: 1, hard: 2 }

const useController = () => {
  const navigate = useNavigate()
  const { username } = useAuthContext()
  const [selectedTopic, setSelectedTopic] = useState<'all' | Topic>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | Difficulty>('all')
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [modalInfo, setModalInfo] = useState<{
    title: string
    description: string
    confirmLabel: string
    onConfirm: () => void
  } | null>(null)

  const filteredBookmarks = bookmarks
    .filter((item) => {
      const topicMatch = selectedTopic === 'all' || item.topic === selectedTopic
      const difficultyMatch = selectedDifficulty === 'all' || item.difficulty === selectedDifficulty
      return topicMatch && difficultyMatch
    })
    .sort((a, b) => DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty])

  const groupedBookmarks = TOPIC_ORDER.reduce<Record<string, typeof bookmarks>>((groups, topic) => {
    const items = filteredBookmarks.filter((item) => item.topic === topic)
    if (items.length > 0) groups[topic] = items
    return groups
  }, {})

  const groupedTopics = Object.keys(groupedBookmarks) as Topic[]

  const availableTopics = TOPIC_ORDER.filter((topic) => bookmarks.some((b) => b.topic === topic))
  const availableDifficulties = DIFFICULTY_OPTIONS.filter(
    (opt) => opt.value === 'all' || bookmarks.some((b) => b.difficulty === opt.value)
  )

  function loadBookmarks() {
    if (!username) return
    const savedBookmarks = authService.getBookmarkedQuestions(username)
    const items: BookmarkItem[] = savedBookmarks.flatMap((b) => {
      const question = QUESTIONS.find((q) => q.id === b.questionId)
      if (!question) return []
      return [
        {
          questionId: question.id,
          questionText: question.text,
          code: question.code,
          correctAnswer: question.options[question.answer],
          topic: question.topic,
          topicLabel: TOPIC_LABEL[question.topic],
          difficulty: question.difficulty,
          difficultyLabel: DIFFICULTY_LABEL[question.difficulty],
          explanation: question.explanation
        }
      ]
    })

    setBookmarks(items)
    setIsLoading(false)
  }

  function handleRemove(questionId: string) {
    if (!username) return
    setModalInfo({
      title: '移除收藏題目',
      description: '確定要移除這道題目嗎？',
      confirmLabel: '移除',
      onConfirm: () => {
        authService.removeBookmark(username, questionId)
        setBookmarks((prev) => prev.filter((b) => b.questionId !== questionId))
        setModalInfo(null)
      }
    })
  }

  function handleGoHome() {
    navigate('/home')
  }

  useEffect(() => {
    if (!username) return
    loadBookmarks()
  }, [username])

  return {
    isLoading,
    bookmarks,
    selectedTopic,
    setSelectedTopic,
    selectedDifficulty,
    setSelectedDifficulty,
    filteredBookmarks,
    groupedBookmarks,
    groupedTopics,
    availableTopics,
    availableDifficulties,
    handleRemove,
    handleGoHome,
    modalInfo,
    setModalInfo
  }
}

export default useController
