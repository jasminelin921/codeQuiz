import { QUIZ_TIME_LIMIT } from './constant'
import { QUESTIONS, type Question } from '@/data/questions.db'
import { QUIZZES, TOPIC_LABEL, type Quiz } from '@/views/Home/constant'
import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { type QuestionResult } from '@/types'

const useController = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const quizId = searchParams.get('id') ?? ''
  const [modalInfo, setModalInfo] = useState<{
    title: string
    description: string
    confirmLabel: string
    onConfirm: () => void
  } | null>(null)

  const quizInfo = QUIZZES.find((q) => q.id === quizId) as Quiz
  const quizTitle = quizInfo?.title ?? ''
  const topicLabel = quizInfo ? TOPIC_LABEL[quizInfo.topic] : ''
  const quizQuestions = QUESTIONS.filter((q) => q.quizId === quizId)

  const breadcrumbItem = [
    { label: '首頁', onClick: handleGoHome },
    { label: topicLabel },
    { label: quizTitle }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME_LIMIT)
  const [results, setResults] = useState<QuestionResult[]>([])

  const currentQuestion: Question | undefined = quizQuestions[currentIndex]
  const totalQuestions = quizQuestions.length
  const isLastQuestion = currentIndex === totalQuestions - 1
  const progressPct =
    isLastQuestion && isAnswered ? 100 : Math.round((currentIndex / totalQuestions) * 100)
  const isWarning = timeLeft <= 10

  function handleTimeout() {
    if (!currentQuestion) return
    setIsAnswered(true)
    setResults((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        questionText: currentQuestion.text,
        selectedIndex: null,
        selectedAnswer: null,
        correctAnswer: `${String.fromCharCode(65 + currentQuestion.answer)}. ${currentQuestion.options[currentQuestion.answer]}`,
        isCorrect: false,
        isTimeout: true,
        timeUsed: QUIZ_TIME_LIMIT
      }
    ])
  }

  function handleSelectOption(index: number) {
    if (isAnswered || !currentQuestion) return
    const timeUsed = QUIZ_TIME_LIMIT - timeLeft
    setSelectedOption(index)
    setIsAnswered(true)
    setResults((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        questionText: currentQuestion.text,
        selectedIndex: index,
        selectedAnswer: `${String.fromCharCode(65 + index)}. ${currentQuestion.options[index]}`,
        correctAnswer: `${String.fromCharCode(65 + currentQuestion.answer)}. ${currentQuestion.options[currentQuestion.answer]}`,
        isCorrect: index === currentQuestion.answer,
        isTimeout: false,
        timeUsed
      }
    ])
  }

  function handleNextQuestion() {
    if (isLastQuestion) {
      navigate('/result', { state: { quizId, results } })
      return
    }
    setCurrentIndex((prev) => prev + 1)
    setSelectedOption(null)
    setIsAnswered(false)
    setTimeLeft(QUIZ_TIME_LIMIT)
  }

  function handleGoHome() {
    if (currentIndex === 0 && !isAnswered) {
      navigate('/home')
      return
    }
    setModalInfo({
      title: '離開測驗',
      description: '確定要離開測驗嗎？目前進度將不會儲存。',
      confirmLabel: '離開',
      onConfirm: () => {
        setModalInfo(null)
        navigate('/home')
      }
    })
  }

  // 計時器
  useEffect(() => {
    if (isAnswered) return
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleTimeout()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [currentIndex, isAnswered])

  return {
    quizInfo,
    quizTitle,
    breadcrumbItem,
    quizQuestions,
    currentIndex,
    currentQuestion,
    totalQuestions,
    selectedOption,
    isAnswered,
    isLastQuestion,
    isWarning,
    timeLeft,
    progressPct,
    results,
    handleSelectOption,
    handleNextQuestion,
    handleGoHome,
    modalInfo,
    setModalInfo
  }
}

export default useController
