import useController from './controller'
import { TOPIC_STYLE, TOPIC_TAG, DIFFICULTY_LABEL } from '@/views/Home/constant'
import { Breadcrumb, ConfirmModal } from '@/components/ui'

const QuizPage = () => {
  const {
    quizInfo,
    quizTitle,
    breadcrumbItem,
    currentIndex,
    currentQuestion,
    totalQuestions,
    selectedOption,
    isAnswered,
    isLastQuestion,
    isWarning,
    timeLeft,
    progressPct,
    handleSelectOption,
    handleNextQuestion,
    handleGoHome,
    modalInfo,
    setModalInfo
  } = useController()

  if (!currentQuestion) {
    return (
      <div className="mx-auto max-w-2xl p-5 md:p-6.5 lg:p-8">
        <p className="text-label text-text-muted">找不到題目，請返回首頁重新選擇。</p>
        <button onClick={handleGoHome} className="text-hint text-primary mt-4 hover:underline">
          ← 返回首頁
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="mx-auto max-w-2xl p-5 md:p-6.5 lg:p-8">
        <div className="hidden md:block">
          <Breadcrumb items={breadcrumbItem} />
        </div>

        <div className="mb-5 flex items-center gap-6 md:gap-4">
          <div className="flex-1">
            <div className="mb-1.5 flex justify-between">
              <span className="text-hint text-text-muted md:hidden">{quizTitle}</span>
              <span className="text-hint text-text-muted hidden md:block">
                第 {currentIndex + 1} 題，共 {totalQuestions} 題
              </span>
              <span className="text-hint text-text-muted md:hidden">
                第 {currentIndex + 1} / {totalQuestions} 題
              </span>
              <span className="text-hint text-text-muted hidden md:block">{progressPct}%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-border mr-2 h-1.5 w-full overflow-hidden rounded-full md:m-0 md:h-2">
                <div
                  className="bg-primary h-full rounded-full transition-all"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <span className="text-hint text-text-muted md:hidden">{progressPct}%</span>
            </div>
          </div>

          <div
            className={`text-hint flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[2.5px] font-medium md:h-9 md:w-9 md:border-3 ${
              isWarning ? 'border-border-warning text-text-warning' : 'border-primary text-primary'
            }`}
          >
            {timeLeft}
          </div>
        </div>

        <div className="bg-card-bg border-border mb-4 rounded-2xl border p-5">
          <div className="mb-3 flex items-center gap-2">
            <span
              className={`text-hint rounded-md px-2 py-0.5 font-medium ${TOPIC_STYLE[quizInfo.topic]}`}
            >
              {TOPIC_TAG[quizInfo.topic]}
            </span>
            <span className="text-hint text-text-muted bg-page-bg rounded-md px-2 py-0.5">
              {DIFFICULTY_LABEL[quizInfo.difficulty]}
            </span>
          </div>

          <p className="text-label text-text-base mb-3 leading-relaxed font-medium">
            {currentQuestion.text}
          </p>

          {currentQuestion.code && (
            <pre className="text-hint mb-4 overflow-x-auto rounded-xl bg-[#1e2a3a] p-4 font-mono leading-relaxed text-[#d4e6f1]">
              {currentQuestion.code}
            </pre>
          )}

          <div className="flex flex-col gap-2">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(index)}
                className={`text-label rounded-xl border px-4 py-2.5 text-left transition-colors ${
                  !isAnswered
                    ? 'border-border bg-card-bg hover:border-text-muted'
                    : index === currentQuestion.answer
                      ? 'border-green-600 bg-green-50 text-green-800'
                      : selectedOption === index
                        ? 'border-border-warning bg-bg-hint text-text-warning'
                        : 'border-border bg-card-bg text-text-muted'
                }`}
              >
                {String.fromCharCode(65 + index)}. {option}
              </button>
            ))}
          </div>

          {isAnswered && (
            <div className="bg-page-bg border-primary mt-3.5 rounded-r-xl border-l-4 px-3 py-2.5">
              <p className="text-hint text-text-muted leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
          )}
        </div>

        {isAnswered && (
          <div className="flex justify-end">
            <button
              onClick={handleNextQuestion}
              className="bg-primary text-button hover:bg-primary-hover h-9 rounded-lg px-4 font-medium text-white"
            >
              {isLastQuestion ? '查看結果 →' : '下一題 →'}
            </button>
          </div>
        )}
      </div>
      {modalInfo && (
        <ConfirmModal
          title={modalInfo.title}
          description={modalInfo.description}
          confirmLabel={modalInfo.confirmLabel}
          onConfirm={modalInfo.onConfirm}
          onCancel={() => setModalInfo(null)}
        />
      )}
    </>
  )
}

export default QuizPage
