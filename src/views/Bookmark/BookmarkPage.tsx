import useController from './controller'
import { BookmarkCard } from './components'
import { TOPIC_LABEL, type Topic, type Difficulty } from '@/views/Home/constant'
import { Loading, ConfirmModal } from '@/components/ui'

const SELECT_STYLE = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888780' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 6px center'
}

const BookmarkPage = () => {
  const {
    isLoading,
    bookmarks,
    filteredBookmarks,
    groupedBookmarks,
    groupedTopics,
    availableTopics,
    availableDifficulties,
    selectedTopic,
    selectedDifficulty,
    setSelectedTopic,
    setSelectedDifficulty,
    handleRemove,
    handleGoHome,
    modalInfo,
    setModalInfo
  } = useController()
  return (
    <>
      <div className="mx-auto max-w-2xl p-5 md:p-6.5 lg:p-8">
        {isLoading ? (
          <Loading />
        ) : bookmarks.length === 0 ? (
          <div className="py-16 text-center">
            <div className="mb-4 text-6xl">📚</div>
            <h1 className="text-logo-title text-text-base mb-1 font-medium">還沒有收藏的題目</h1>
            <p className="text-subtitle text-text-muted">
              完成測驗後，在結果頁點擊收藏 <br />
              將題目加入複習清單！
            </p>
            <button
              onClick={handleGoHome}
              className="bg-primary text-button hover:bg-primary-hover mt-4 h-9 rounded-lg px-4 font-medium text-white"
            >
              來去測驗
            </button>
          </div>
        ) : (
          <>
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <h1 className="text-logo-title text-text-base mb-1 font-medium">收藏題目</h1>
                <p className="text-sub text-text-muted">
                  共 {filteredBookmarks.length} 題，在面試前快速複習吧！
                </p>
              </div>

              <div className="flex shrink-0 gap-2">
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value as Topic | 'all')}
                  className="border-border bg-card-bg text-button text-text-base flex-1 appearance-none rounded-lg border py-1 pr-6.5 pl-3 outline-none sm:flex-none sm:field-sizing-content"
                  style={SELECT_STYLE}
                >
                  <option value="all">所有主題</option>
                  {availableTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {TOPIC_LABEL[topic]}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
                  className="border-border bg-card-bg text-button text-text-base flex-1 appearance-none rounded-lg border py-1 pr-6.5 pl-3 outline-none sm:flex-none sm:field-sizing-content"
                  style={SELECT_STYLE}
                >
                  {availableDifficulties.map((difficulty) => (
                    <option key={difficulty.value} value={difficulty.value}>
                      {difficulty.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredBookmarks.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-label text-text-base mb-1 font-medium">沒有符合條件的題目</p>
                <p className="text-hint text-text-muted">試著調整篩選條件</p>
              </div>
            ) : (
              groupedTopics.map((topic) => (
                <div key={topic}>
                  <div className="mt-4 mb-2 flex items-center first:mt-0">
                    <span className="text-hint text-text-muted font-medium">
                      {TOPIC_LABEL[topic]}
                    </span>
                    <span className="text-text-muted text-hint ml-2 flex h-5 w-5 items-center justify-center rounded bg-white">
                      {groupedBookmarks[topic].length}
                    </span>
                  </div>

                  {groupedBookmarks[topic].map((item) => (
                    <BookmarkCard key={item.questionId} item={item} onRemove={handleRemove} />
                  ))}
                </div>
              ))
            )}
          </>
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

export default BookmarkPage
