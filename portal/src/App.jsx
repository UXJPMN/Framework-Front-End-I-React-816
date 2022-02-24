import './App.css'
import Header from './components/header'
import SideNews from './components/sideNews'
import HighlightList from './components/highlightList'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="page-wrapper">
        <SideNews />
        <HighlightList />
        <SideNews />
      </div>
    </div>
  )
}

export default App
