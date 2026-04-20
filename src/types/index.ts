export interface User {
  username: string
  password: string
  createdAt: string
}

export interface QuestionResult {
  questionId: string
  questionText: string
  selectedIndex: number | null
  selectedAnswer: string | null
  correctAnswer: string
  isCorrect: boolean
  isTimeout: boolean
  timeUsed: number
}

export interface QuizRecord {
  quizId: string
  correctCount: number
  totalCount: number
  accuracy: number
  avgTime: number
  completedAt: string
}

export interface BookmarkedQuestion {
  questionId: string
}