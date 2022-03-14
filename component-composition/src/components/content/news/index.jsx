import { Component } from 'react'

class News extends Component {
  render() {
    return(
      <>
        <h2>News</h2>
        { this.props.children }
      </>
    )
  }
}

export default News
