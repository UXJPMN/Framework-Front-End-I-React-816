import { Component } from 'react'
import RelevantInformation from './relevantInformation'

class UserArea extends Component {
  render() { 
    return(
      <>
        <RelevantInformation />
        { this.props.children }
      </>
    )
  }
}

export default UserArea
