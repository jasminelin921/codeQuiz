import { useState } from 'react'
import { DIFFICULTY_LABEL, DIFFICULTY_STARS, DIFFICULTY_STYLE } from '@/views/Home/constant'
import { type BookmarkItem } from '@/views/Bookmark/controller'

interface BookmarkCardProps {
  item: BookmarkItem
  onRemove: (questionId: string) => void
}

const BookmarkCard = ({ item, onRemove }: BookmarkCardProps) => {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <div className="bg-card-bg border-border mb-3 rounded-xl border p-3">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`text-hint rounded-md px-2 py-0.5 font-medium ${DIFFICULTY_STYLE[item.difficulty]}`}
          >
            {DIFFICULTY_LABEL[item.difficulty]}
          </span>
          <span className="text-hint text-text-placeholder">
            {DIFFICULTY_STARS[item.difficulty]}
          </span>
        </div>
        <button
          onClick={() => onRemove(item.questionId)}
          className="text-hint text-text-placeholder hover:text-primary transition-colors"
        >
          ✕ 移除
        </button>
      </div>

      <p className="text-label text-text-base mb-2 leading-snug font-medium">{item.questionText}</p>

      {item.code && (
        <pre className="text-wrap text-hint mb-3 overflow-x-auto rounded-lg bg-[#1e2a3a] p-3 font-mono leading-relaxed text-[#d4e6f1]">
          {item.code}
        </pre>
      )}

      {!isRevealed ? (
        <button
          onClick={() => setIsRevealed(true)}
          className="border-border text-hint text-text-muted hover:border-primary hover:text-primary w-full rounded-lg border border-dashed py-1.5 transition-colors"
        >
          ▷ 顯示答案與解說
        </button>
      ) : (
        <div>
          <div className="mb-2 flex items-baseline gap-2">
            <span className="text-hint text-text-muted shrink-0 whitespace-nowrap">正確答案</span>
            <span className="text-hint rounded-md bg-[#effae2] px-2 py-0.5 leading-snug font-medium text-[#394d21]">
              {item.correctAnswer}
            </span>
          </div>

          <p className="text-hint text-text-muted border-primary border-l-3 pl-2 leading-relaxed">
            {item.explanation}
          </p>

          <button
            onClick={() => setIsRevealed(false)}
            className="text-hint text-text-placeholder hover:text-text-muted mt-1 w-full text-right transition-colors"
          >
            收起 ↑
          </button>
        </div>
      )}
    </div>
  )
}

export default BookmarkCard
