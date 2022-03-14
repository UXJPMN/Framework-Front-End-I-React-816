import { Component } from 'react'
import './App.css'
import CustomInput from './components/customInput'
import CustomButton from './components/customButton'
import TodoList from './components/todoList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: JSON.parse(localStorage.getItem('todoList')) || [],
      currentInput: ''
    }
    this.createTodo = this.createTodo.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.readyTodo = this.readyTodo.bind(this)
  }

  createTodo(text, done = false) {
    const { todos } = this.state

    this.setState({
      todos: [
        ...this.state.todos,
        { text, done, id: (todos[todos.length - 1]?.id + 1) || 0 }
      ],
      currentInput: ''
    })

    localStorage.setItem('todoList', JSON.stringify(this.state.todos))
  }

  handleInput($event) {
    this.setState({
      ...this.state,
      currentInput: $event.target.value
    })
  }

  handleClick() {
    this.createTodo(this.state.currentInput)
  }

  deleteTodo(id) {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => todo.id !== id)
    })

    localStorage.setItem('todoList', JSON.stringify(this.state.todos))
  }

  readyTodo(id) {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    })

    localStorage.setItem('todoList', JSON.stringify(this.state.todos))
  }

  render() {
    return (
      <div className="App">
        <h1>Meus afazeres</h1>
        <div className='input-area'>
          <CustomInput
            id="inputTodo"
            label="Insira aqui o seu ToDo"
            placeholder="Texto do seu afazer"
            handleChange={ this.handleInput }
            value={ this.currentInput }
          />
          <CustomButton
            text="Adicionar a lista"
            handleClick={ this.handleClick }
          />
        </div>
        <TodoList
          todos={ this.state.todos }
          deleteTodo={ this.deleteTodo }
          readyTodo={ this.readyTodo }
        />
      </div>
    )
  }
}

export default App
