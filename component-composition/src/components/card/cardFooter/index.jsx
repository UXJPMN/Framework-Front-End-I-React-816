import { Component } from 'react'

class CardFooter extends Component {
  render() {
    return(
      <div className="card-footer">
        { this.props.children }
      </div>
    )
  }
}

export default CardFooter
