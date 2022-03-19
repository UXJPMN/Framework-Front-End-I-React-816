import { Component } from 'react'
import './style.css'

export default class Movie extends Component {
  componentWillUnmount() {
    console.log(`O filme ${ this.props.title } saiu da lista`)
  }

  render() {
    return(
      <div className="movie-wrapper">
        <img src={ this.props.img } alt="" className="thumb" />
        <div className="info">
          <h2 className="title">
            { this.props.title }
          </h2>
          <h3 className="subtitle">
            { this.props.originalTitle }
          </h3>
          <p className="description">
            { this.props.description }
          </p>
          <p className="director">
            { this.props.director }
          </p>
        </div>
      </div>
    )
  }
}
