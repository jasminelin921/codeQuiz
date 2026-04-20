import { type Quiz, DIFFICULTY_LABEL, DIFFICULTY_STYLE, DIFFICULTY_STARS } from '@/views/Home/constant'

interface QuizCardProps {
  quiz: Quiz
  isCompleted: boolean
  onStart: (quizId: string) => void
}

const QuizCard = ({ quiz, isCompleted, onStart }: QuizCardProps) => {
  return (
    <div className="bg-card-bg border-border flex flex-col justify-between rounded-xl border p-3">
      <div>
        <div className="mb-2 flex items-start justify-between">
          <span
            className={`text-hint rounded-md px-2 py-0.5 font-medium ${DIFFICULTY_STYLE[quiz.difficulty]}`}
          >
            {DIFFICULTY_LABEL[quiz.difficulty]}
          </span>
          <span className="text-[11px] text-text-placeholder tracking-widest">
            {DIFFICULTY_STARS[quiz.difficulty]}
          </span>
        </div>

        <p className="text-label text-text-base mt-1.5 mb-3 font-medium">{quiz.title}</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-hint text-text-muted">◎ {quiz.questionCount} 題</span>

        <button
          onClick={() => onStart(quiz.id)}
          className={`text-hint h-5.5 rounded-full px-3 font-medium ${
            isCompleted
              ? 'bg-primary-tint text-primary hover:bg-primary hover:text-white'
              : 'bg-primary hover:bg-primary-hover text-white'
          }`}
        >
          {isCompleted ? '↺ 重做' : '▶ 開始'}
        </button>
      </div>
    </div>
  )
}

export default QuizCard
