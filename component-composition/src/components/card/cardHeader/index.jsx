import { Component } from 'react'

class CardHeader extends Component {
  render() {
    return(
      <h3 className="card-header">
        { this.props.children }
      </h3>
    )
  }
}

export default CardHeader
