import './style/index.css'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'

const App = () => {
  return <div className="App">{useRoutes(routes)}</div>
}

export default App
