export type Topic = 'typescript' | 'react' | 'javascript' | 'html' | 'css' | 'browser'
export type Difficulty = 'easy' | 'medium' | 'hard'
export type TabType = 'all' | 'completed'

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  easy: '初級',
  medium: '中級',
  hard: '高級'
}

export const DIFFICULTY_OPTIONS: Array<{ value: Difficulty | 'all'; label: string }> = [
  { value: 'all', label: '全部難度' },
  { value: 'easy', label: '初級' },
  { value: 'medium', label: '中級' },
  { value: 'hard', label: '高級' }
]

export const DIFFICULTY_STYLE: Record<string, string> = {
  easy: 'bg-[#e7f8f0] text-[#1c5c3e]',
  medium: 'bg-amber-50 text-amber-800',
  hard: 'bg-primary-tint text-primary'
}

export const DIFFICULTY_STARS: Record<string, string> = {
  easy: '★☆☆',
  medium: '★★☆',
  hard: '★★★'
}

export const TOPIC_ORDER: Topic[] = ['javascript', 'typescript', 'react', 'html', 'css', 'browser']

export const TOPIC_LABEL: Record<Topic, string> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  html: 'HTML',
  css: 'CSS',
  browser: '瀏覽器'
}

export const TOPIC_TAG: Record<Topic, string> = {
  typescript: 'TS',
  react: 'RCT',
  javascript: 'JS',
  html: 'HTML',
  css: 'CSS',
  browser: 'WEB'
}

export const TAB_OPTIONS: Array<{ value: TabType; label: string }> = [
  { value: 'all', label: '全部測驗' },
  { value: 'completed', label: '已完成' }
]

export const TOPIC_STYLE: Record<string, string> = {
  typescript: 'bg-teal-100 text-teal-800',      // 青綠
  react: 'bg-sky-100 text-sky-800',              // 天藍
  javascript: 'bg-indigo-100 text-indigo-800',   // 靛藍
  html: 'bg-emerald-100 text-emerald-800',       // 翠綠
  css: 'bg-cyan-100 text-cyan-800',              // 青藍
  browser: 'bg-violet-100 text-violet-800',      // 紫
}

export interface Quiz {
  id: string
  topic: Topic
  title: string
  questionCount: number
  difficulty: Difficulty
}

export const QUIZZES: Quiz[] = [
  // JavaScript
  {
    id: 'js-1',
    topic: 'javascript',
    title: 'JavaScript 初級測驗 1',
    questionCount: 6,
    difficulty: 'easy'
  },
  {
    id: 'js-2',
    topic: 'javascript',
    title: 'JavaScript 初級測驗 2',
    questionCount: 6,
    difficulty: 'easy'
  },
  {
    id: 'js-3',
    topic: 'javascript',
    title: 'JavaScript 中級測驗 1',
    questionCount: 8,
    difficulty: 'medium'
  },
  {
    id: 'js-4',
    topic: 'javascript',
    title: 'JavaScript 中級測驗 2',
    questionCount: 8,
    difficulty: 'medium'
  },
  {
    id: 'js-5',
    topic: 'javascript',
    title: 'JavaScript 高級測驗 1',
    questionCount: 6,
    difficulty: 'hard'
  },
  // TypeScript
  {
    id: 'ts-1',
    topic: 'typescript',
    title: 'TypeScript 初級測驗 1',
    questionCount: 6,
    difficulty: 'easy'
  },
  {
    id: 'ts-2',
    topic: 'typescript',
    title: 'TypeScript 初級測驗 2',
    questionCount: 6,
    difficulty: 'easy'
  },
  {
    id: 'ts-3',
    topic: 'typescript',
    title: 'TypeScript 中級測驗 1',
    questionCount: 8,
    difficulty: 'medium'
  },
  // React
  {
    id: 'react-1',
    topic: 'react',
    title: 'React 初級測驗 1',
    questionCount: 6,
    difficulty: 'easy'
  },
  {
    id: 'react-2',
    topic: 'react',
    title: 'React 初級測驗 2',
    questionCount: 6,
    difficulty: 'easy'
  },
  {
    id: 'react-3',
    topic: 'react',
    title: 'React 中級測驗 1',
    questionCount: 8,
    difficulty: 'medium'
  },
  {
    id: 'react-4',
    topic: 'react',
    title: 'React 中級測驗 2',
    questionCount: 8,
    difficulty: 'medium'
  },
  {
    id: 'react-5',
    topic: 'react',
    title: 'React 高級測驗 1',
    questionCount: 6,
    difficulty: 'hard'
  },
  // HTML
  { id: 'html-1', topic: 'html', title: 'HTML 初級測驗 1', questionCount: 6, difficulty: 'easy' },
  { id: 'html-2', topic: 'html', title: 'HTML 初級測驗 2', questionCount: 6, difficulty: 'easy' },
  { id: 'html-3', topic: 'html', title: 'HTML 中級測驗 1', questionCount: 8, difficulty: 'medium' },
  // CSS
  { id: 'css-1', topic: 'css', title: 'CSS 初級測驗 1', questionCount: 6, difficulty: 'easy' },
  { id: 'css-2', topic: 'css', title: 'CSS 初級測驗 2', questionCount: 6, difficulty: 'easy' },
  { id: 'css-3', topic: 'css', title: 'CSS 中級測驗 1', questionCount: 8, difficulty: 'medium' },
  // 瀏覽器
  {
    id: 'browser-1',
    topic: 'browser',
    title: '瀏覽器 初級測驗 1',
    questionCount: 6,
    difficulty: 'easy'
  },
  {
    id: 'browser-2',
    topic: 'browser',
    title: '瀏覽器 中級測驗 1',
    questionCount: 8,
    difficulty: 'medium'
  },
  {
    id: 'browser-3',
    topic: 'browser',
    title: '瀏覽器 高級測驗 1',
    questionCount: 6,
    difficulty: 'hard'
  }
]
