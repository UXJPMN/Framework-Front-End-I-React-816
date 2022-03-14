import './App.css'
import Header from './components/header'
import Content from './components/content'
import UserArea from './components/content/userArea'
import WelcomeMessage from './components/content/userArea/welcomeMessage'
import News from './components/content/news'
import Card from './components/card'

function App() {
  const user = {
    login: 'JPNunes',
    name: 'João Paulo',
    email: 'joao.nunes@email.com'
  }

  return (
    <div className="App">
      <h1>App</h1>
      <Header />
      <Content>
        <UserArea>
          <WelcomeMessage name={ user.name } />
        </UserArea>
        <News>
          <Card
            title="Manchete Genérica"
            footer={ user.login }
          >
            <h3>Subtítulo aleatório</h3>
            <p>Conteúdo indiferente</p>
          </Card>
        </News>
      </Content>
    </div>
  )
}

export default App
