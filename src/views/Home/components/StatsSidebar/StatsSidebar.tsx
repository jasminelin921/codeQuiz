interface StatsSidebarProps {
  completed: number
  total: number
  correct: number
  wrong: number
  totalQuestions: number
  accuracy: number
}

const StatsSidebar = ({
  completed,
  total,
  correct,
  wrong,
  totalQuestions,
  accuracy
}: StatsSidebarProps) => {
  const pct = Math.round((completed / total) * 100)
  const circumference = 2 * Math.PI * 78
  const offset = circumference - circumference * (pct / 100)

  const STAT_ITEMS = [
    { num: correct, label: '答對題數' },
    { num: wrong, label: '答錯題數' },
    { num: totalQuestions, label: '總題數' },
    { num: `${accuracy}%`, label: '正確率' }
  ]

  return (
    <div className="hidden p-5 md:block md:p-6.5 lg:p-8">
      <p className="text-title text-text-base mb-4 font-medium">
        測驗總覽
        <span className="text-subtitle text-text-muted ml-3 lg:hidden">
          {completed} / {total} 完成
        </span>
      </p>

      <div className="flex gap-5 lg:block items-center">
        <div className="lg:mb-8 flex flex-col items-center">
          <div className="relative">
            <svg className="h-20 w-20 md:h-25 md:w-25 lg:h-45 lg:w-45" viewBox="0 0 180 180">
              <circle cx="90" cy="90" r="78" fill="none" stroke="#e5ebe7" strokeWidth="13" />
              <circle
                cx="90"
                cy="90"
                r="78"
                fill="none"
                stroke="#aa0a41"
                strokeWidth="13"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform="rotate(-90 90 90)"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-primary text-2xl lg:text-[35px] font-medium">{pct}%</span>
            </div>
          </div>
          <p className="text-subtitle text-text-muted mt-4 hidden lg:block">
            {completed} / {total} 完成
          </p>
        </div>

        <div className="grid h-22 w-full grid-cols-4 gap-5 lg:h-auto lg:grid-cols-2 lg:gap-3">
          {STAT_ITEMS.map((item) => (
            <div
              key={item.label}
              className="bg-card-bg border-border flex w-auto flex-col justify-between rounded-xl border p-3"
            >
              <p className="text-text-base text-2xl mb-1 font-medium">{item.num}</p>
              <p className="text-label lg:text-hint text-text-muted leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatsSidebar
