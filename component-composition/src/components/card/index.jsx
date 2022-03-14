import { Component } from 'react'
import './style.css'
import CardHeader from './cardHeader'
import CardFooter from './cardFooter'

class Card extends Component {
  render() {
    return(
      <div className="card-wrapper">
        <CardHeader>
          <h3>{ this.props.title }</h3>
        </CardHeader>
        <hr />
        <div className='card-content'>
          { this.props.children }
        </div>
        <hr />
        <CardFooter>
          { this.props.footer }
        </CardFooter>
      </div>
    )
  }
}

export default Card
