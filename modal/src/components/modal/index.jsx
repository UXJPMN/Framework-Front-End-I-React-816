import { Component } from 'react'
import './style.css'

class Modal extends Component {
  render() {
    return(
      <div className="modal-wrapper">
        <div className="modal">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Modal
