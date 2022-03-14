import { Component } from 'react'

class WelcomeMessage extends Component {
  render() {
    return(
      <h2>Bem vindo, { this.props.name }</h2>
    )
  }
}

export default WelcomeMessage
