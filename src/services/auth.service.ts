import { Storage } from '@/utils/storage.utils'
import type { User, QuizRecord, BookmarkedQuestion } from '@/types'

export type Users = Record<string, User>

export const authService = {
  getUsers: (): Users | null => {
    return Storage.getItem<Users>('users')
  },

  setUsers: (users: Users): void => {
    Storage.setItem('users', users)
  },

  clearUsers: (): void => {
    Storage.removeItem('users')
  },

  // 讀取目前登入者名稱
  getSession: (): string | null => {
    return Storage.getItem<string>('session')
  },

  // 儲存登入狀態
  setSession: (username: string): void => {
    Storage.setItem('session', username)
  },

  // 清除登入狀態
  clearSession: (): void => {
    Storage.removeItem('session')
  },

  // 初始化預設測試帳號
  initDefaultUsers: (): void => {
    let users = authService.getUsers()
    if (!users) {
      users = {}
    }
    if (!users['demo']) {
      users['demo'] = {
        username: 'demo',
        password: '1234',
        createdAt: new Date().toISOString()
      }
      authService.setUsers(users)
    }
  },

  // 刪除使用者帳號（包含測驗紀錄和收藏）
  deleteUser: (username: string): void => {
    const users = authService.getUsers()
    if (!users) return
    delete users[username]
    authService.setUsers(users)
    authService.clearQuizRecords(username)
    authService.removeAllBookmarks(username)
    authService.clearSession()
  },

  // 取得使用者所有測驗紀錄
  getQuizRecords: (username: string): QuizRecord[] => {
    return Storage.getItem<QuizRecord[]>(`quizRecords_${username}`) ?? []
  },

  // 清除使用者所有測驗紀錄
  clearQuizRecords: (username: string): void => {
    Storage.removeItem(`quizRecords_${username}`)
  },

  // 儲存一筆測驗紀錄
  saveQuizRecord: (username: string, record: QuizRecord): void => {
    const records = authService.getQuizRecords(username)
    const index = records.findIndex((r) => r.quizId === record.quizId)
    if (index !== -1) {
      records[index] = record
    } else {
      records.push(record)
    }
    Storage.setItem(`quizRecords_${username}`, records)
  },

  // 取得收藏題目列表
  getBookmarkedQuestions: (username: string): BookmarkedQuestion[] => {
    return Storage.getItem<BookmarkedQuestion[]>(`bookmarks_${username}`) ?? []
  },

  // 新增收藏
  addBookmark: (userName: string, questionId: string): void => {
    const bookmarks = authService.getBookmarkedQuestions(userName)
    const exists = bookmarks.some((b) => b.questionId === questionId)
    if (exists) return
    bookmarks.push({ questionId: questionId })
    Storage.setItem(`bookmarks_${userName}`, bookmarks)
  },

  // 移除收藏
  removeBookmark: (userName: string, questionId: string): void => {
    const bookmarks = authService.getBookmarkedQuestions(userName)
    const updatedBookmarks = bookmarks.filter((b) => b.questionId !== questionId)
    Storage.setItem(`bookmarks_${userName}`, updatedBookmarks)
  },

  // 移除使用者所有收藏
  removeAllBookmarks: (userName: string): void => {
    Storage.removeItem(`bookmarks_${userName}`)
  },

  // 檢查是否已收藏
  isBookmarked: (userName: string, questionId: string): boolean => {
    const bookmarks = authService.getBookmarkedQuestions(userName)
    return bookmarks.some((b) => b.questionId === questionId)
  }
}
