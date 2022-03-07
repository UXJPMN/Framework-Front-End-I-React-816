import { Component } from 'react'
import './style.css'

class Square extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.props.content === '') {
      this.props.click(this.props.position)
    }
  }

  render() {
    return (
      <div className="square" onClick={this.handleClick}>
        { this.props.content }
      </div>
    )
  }
}

export default Square
