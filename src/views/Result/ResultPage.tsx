import { Breadcrumb } from '@/components/ui'
import useController from './controller'

const ResultPage = () => {
  const {
    quizTitle,
    breadcrumbItem,
    detailItems,
    statItems,
    getResultMeta,
    handleGoHome,
    handleRetry,
    isValidState,
    bookmarkedIds,
    handleToggleBookmark
  } = useController()
  const { emoji, title } = getResultMeta()

  if (!isValidState) {
    return (
      <div className="mx-auto max-w-2xl p-5 md:p-6.5 lg:p-8">
        <p className="text-label text-text-muted mb-4">請從測驗頁完成測驗後再查看結果。</p>
        <button onClick={handleGoHome} className="text-hint text-primary hover:underline">
          ← 返回首頁
        </button>
      </div>
    )
  }
  return (
    <div className="mx-auto max-w-2xl p-5 md:p-6.5 lg:p-8">
      <Breadcrumb items={breadcrumbItem} />

      <div className="mb-6 text-center">
        <div className="mb-3 text-4xl md:text-5xl">{emoji}</div>
        <h1 className="text-logo-title text-text-base mb-1 font-medium">{title}</h1>
        <p className="text-hint text-text-muted">
          {quizTitle} · 完成於 {new Date().toLocaleDateString('zh-TW')}
        </p>
      </div>

      <div className="mb-5 grid grid-cols-3 gap-2">
        {statItems.map((item) => (
          <div
            key={item.label}
            className="bg-card-bg border-border rounded-xl border p-2.5 md:p-3 text-center"
          >
            <p className={`text-title mb-0.5 font-medium ${item.color}`}>{item.num}</p>
            <p className="text-hint text-text-muted">{item.label}</p>
          </div>
        ))}
      </div>

      <p className="text-hint text-text-muted mb-3 font-medium">題目明細</p>
      <div className="mb-3 md:mb-4 flex flex-col gap-2">
        {detailItems.map((item, index) => (
          <div key={index} className="bg-card-bg border-border mb-1 rounded-xl border p-3">
            <div className="mb-2 flex items-start justify-between gap-3">
              <p className="text-label text-text-base flex-1 leading-snug font-medium">
                Q{index + 1}. {item.questionText}
              </p>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleToggleBookmark(item.questionId)}
                  className={`group relative pr-1 transition-colors ${
                    bookmarkedIds.includes(item.questionId)
                      ? 'text-primary hover:text-primary-hover'
                      : 'text-text-muted hover:text-text-base'
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={bookmarkedIds.includes(item.questionId) ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 2h10v13l-5-3-5 3V2z" />
                  </svg>
                  {/* Tooltip */}
                  <span className="bg-text-muted text-hint pointer-events-none absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 rounded-md px-2 py-1 whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {bookmarkedIds.includes(item.questionId) ? '取消收藏' : '加入收藏'}
                  </span>
                </button>
                <span
                  className={`text-hint shrink-0 rounded-md px-2 py-0.5 font-medium ${
                    item.isTimeout
                      ? 'bg-page-bg text-text-muted'
                      : item.isCorrect
                        ? 'bg-green-50 text-green-800'
                        : 'bg-red-50 text-red-800'
                  }`}
                >
                  {item.isTimeout ? '超時' : item.isCorrect ? '答對' : '答錯'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-hint text-text-muted">
                {item.isCorrect ? item.selectedAnswer : `正確答案：${item.correctAnswer}`}
              </p>
              <p className="text-hint text-text-placeholder ml-3 shrink-0">{item.timeUsed} 秒</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-end gap-2"> */}
      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">

        <button
          onClick={handleGoHome}
          className="text-button text-text-muted border-border hover:border-text-muted h-9 rounded-lg border px-4 transition-colors"
        >
          ← 返回首頁
        </button>
        <button
          onClick={handleRetry}
          className="bg-primary text-button hover:bg-primary-hover h-9 rounded-lg px-4 font-medium text-white"
        >
          ↻ 再做一次
        </button>
      </div>
    </div>
  )
}

export default ResultPage
