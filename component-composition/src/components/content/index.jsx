import { Component } from 'react'

class Content extends Component {
  render() {
    return(
      <>
        <h2>Content</h2>
        { this.props.children }
      </>
    )
  }
}

export default Content
