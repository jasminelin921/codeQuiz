import { Navigate, Outlet } from 'react-router-dom'
import { LayoutContainer } from '@/components/container/LayoutContainer'
import AuthPage from '@/views/Auth'
import HomePage from '@/views/Home'
import QuizPage from '@/views/Quiz/QuizPage'
import ResultPage from '@/views/Result/ResultPage'
import BookmarkPage from '@/views/Bookmark'
import ProtectedRoute from './ProtectedRoute'

const routes = [
  {
    path: '/auth',
    element: <AuthPage />
  },
  {
    path: '/',
    element: (
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    ),
    children: [
      { path: '/home', element: <HomePage /> },
      {
        path: '/quiz',
        element: (
          <ProtectedRoute>
            <QuizPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/result',
        element: (
          <ProtectedRoute>
            <ResultPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/bookmark',
        element: (
          <ProtectedRoute>
            <BookmarkPage />
          </ProtectedRoute>
        )
      },
    ]
  },
  {
    path: '*',
    element: <Navigate to="/home" replace />
  }
]

export default routes
