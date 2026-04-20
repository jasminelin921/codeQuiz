import { Loading } from '@/components/ui'
import { Navbar } from './components'
import { useAuthContext } from '@/context'

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
  const { isInitialized } = useAuthContext()

  if (!isInitialized) {
    return <Loading />
  }

  return (
    <div className="bg-page-bg min-h-screen">
      <Navbar />
      <main className="pt-14">
        {children}
      </main>
    </div>
  )
}

export default LayoutContainer
