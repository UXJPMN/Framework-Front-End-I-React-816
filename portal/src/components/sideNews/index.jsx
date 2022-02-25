import { Component } from 'react'
import './style.css'

class SideNews extends Component {
  render() {
    const { title, paragraphs } = this.props.news

    return (
      <div className="side-news">
        <h2 className="news-title">{ title }</h2>
        <div>
          <p className="news-text">{ paragraphs[0] }</p>
          <p className="news-text">{ paragraphs[1] }</p>
        </div>
      </div>
    )
  }
}

export default SideNews
