import { Component } from 'react'
import './style.css'
import CustomButton from '../../customButton'

class Todo extends Component {
  render() {
    const todoClass = this.props.done ? 'todo-text done' : 'todo-text'
    console.log('props', this.props)

    return(
      <div className="todo-item">
        <span className={ todoClass }>
          { this.props.text }
        </span>
        <CustomButton
          text="Pronto!"
          handleClick={ () => this.props.handleReady(this.props.id) }
        />
        <CustomButton
          text="Deletar"
          handleClick={ () => this.props.handleDelete(this.props.id) }
        />
      </div>
    )
  }
}

export default Todo
