import { Component } from 'react'
import './style.css'

class CustomButton extends Component {
  render() {
    return(
      <button className="custom-button" onClick={ this.props.handleClick }>
        { this.props.text }
      </button>
    )
  }
}

export default CustomButton
