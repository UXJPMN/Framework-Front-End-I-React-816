import { Component } from 'react'
import './style.css'

class CustomInput extends Component {
  render() {
    return(
      <form-group className="custom-input">
        <label htmlFor={ this.props.id } className="custom-label">
          { this.props.label }
        </label>
        <input
          type="text"
          name={ this.props.id }
          id={ this.props.id }
          placeholder={ this.props.placeholder }
          value={ this.props.value }
          onChange={ this.props.handleChange }
        />
      </form-group>
    )
  }
}

export default CustomInput
