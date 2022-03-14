import { Component } from 'react'
import './style.css'
import Todo from './todo'

class TodoList extends Component {
  render() {
    const { todos } = this.props
    return(
      <ul className="todo-list">
        { todos.map((todo) => 
          <li key={ todo.id }>
            <Todo
              text={ todo.text }
              id={ todo.id }
              done={ todo.done }
              handleDelete={ this.props.deleteTodo }
              handleReady={ this.props.readyTodo }
            />
          </li>
        )}
      </ul>
    )
  }
}

export default TodoList
