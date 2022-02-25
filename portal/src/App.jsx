import './App.css'
import Header from './components/header'
import SideNews from './components/sideNews'
import HighlightList from './components/highlightList'
import { firstNews, secondNews } from './shared/news'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="page-wrapper">
        <SideNews news={ firstNews } />
        <HighlightList />
        <SideNews news={ secondNews } />
      </div>
    </div>
  )
}

export default App
