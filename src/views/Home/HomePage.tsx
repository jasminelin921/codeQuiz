import { Loading } from '@/components/ui'
import { QuizCard, StatsSidebar } from './components'
import { TOPIC_LABEL, DIFFICULTY_OPTIONS, QUIZZES, TAB_OPTIONS } from './constant'
import useController from './controller'

const HomePage = () => {
  const {
    isLoading,
    isLoggedIn,
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
    isTopicCollapsed,
    toggleTopic
  } = useController()

  if (isLoading) return <Loading />

  return (
    <div className="mx-auto max-w-6xl">
      <div className={`${isLoggedIn ? 'lg:grid lg:grid-cols-[1fr_300px]' : ''}`}>
        <div className="p-5 md:p-6.5 lg:p-8">
          <div className="mb-6">
            <h1 className="text-logo-title text-text-base mb-1 font-medium">
              {isLoggedIn ? `歡迎回來，${username}！` : '測驗你的程式能力'}
            </h1>
            <p className="text-subtitle text-text-muted">
              {isLoggedIn ? '選擇主題，開始今天的練習。' : '登入後即可開始練習，提升你的程式能力！'}
            </p>
          </div>

          {!isLoggedIn && (
            <div className="bg-primary-tint border-border mb-6 flex w-full items-center justify-between rounded-xl border p-3.5">
              <p className="text-label text-text-muted">
                登入後可儲存測驗成績、查看完成進度與個人統計。
              </p>
              <button
                onClick={handleLogin}
                className="text-hint bg-primary hover:bg-primary-hover ml-3 h-7 shrink-0 rounded-lg px-2.5 font-medium text-white"
              >
                立即登入
              </button>
            </div>
          )}

          {isLoggedIn && (
            <div className="border-border mb-4 flex border-b">
              {TAB_OPTIONS.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedTab(tab.value)}
                  className={`text-tab mr-4 border-b-2 pb-2.5 transition-colors ${
                    selectedTab === tab.value
                      ? 'border-primary text-primary font-medium'
                      : 'text-text-muted border-transparent'
                  }`}
                >
                  {tab.label}
                  <span
                    className={`text-tab ml-1 inline-flex h-6 w-6 items-center justify-center rounded-sm font-medium ${
                      selectedTab === tab.value
                        ? 'bg-primary text-white'
                        : 'bg-page-bg text-text-muted'
                    }`}
                  >
                    {tab.value === 'all' ? QUIZZES.length : completedQuizIds.length}
                  </span>
                </button>
              ))}
            </div>
          )}

          <div className="scrollbar-none mb-4 flex gap-2 overflow-x-auto pb-1">
            {DIFFICULTY_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedDifficulty(option.value)}
                className={`text-button shrink-0 rounded-full border px-3 py-1 transition-colors ${
                  selectedDifficulty === option.value
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-card-bg text-text-muted hover:border-text-muted'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {topics.length > 0 ? (
            topics.map((topic) => (
              <div key={topic} className={isTopicCollapsed(topic) ? 'mb-0' : 'mb-6'}>
                <button onClick={() => toggleTopic(topic)} className="mb-3 flex items-center">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 18 14"
                    fill="currentColor"
                    stroke="none"
                    className={`text-text-muted hover:text-primary mr-0.5 transition-transform duration-300 ${
                      isTopicCollapsed(topic) ? '-rotate-90' : ''
                    }`}
                  >
                    <path d="M3 6l5 5 5-5" />
                  </svg>
                  <span className="text-label text-text-muted flex items-center font-medium">
                    {TOPIC_LABEL[topic]}
                  </span>
                  <span className="text-hint text-text-muted ml-2 flex h-5 w-5 items-center justify-center rounded bg-white">
                    {groupedQuizzes[topic].length}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isTopicCollapsed(topic) ? 'max-h-0 opacity-0' : 'max-h-500 opacity-100'
                  }`}
                >
                  <div
                    className={`grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 ${isLoggedIn ? 'xl:grid-cols-4' : 'lg:grid-cols-4 xl:grid-cols-5'}`}
                  >
                    {groupedQuizzes[topic].map((quiz) => (
                      <QuizCard
                        key={quiz.id}
                        quiz={quiz}
                        isCompleted={isCompleted(quiz.id)}
                        onStart={() => handleStartQuiz(quiz.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-label text-text-muted">沒有符合條件的測驗</p>
          )}
        </div>

        {isLoggedIn && (
          <div className="lg:border-border lg:border-l">
            <StatsSidebar {...stats} />
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
