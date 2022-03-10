import { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
    this.plusOne = this.plusOne.bind(this)
  }

  plusOne() {
    let { counter } = this.state

    counter++
    this.setState({ counter })
  }

  render() {
    const { counter } = this.state

    return(
      <>
        <h1>Contador: { counter }</h1>
        <button onClick={ this.plusOne }>Incrementa 1</button>
        { counter > 10
          ? <h2>Maior que 10</h2>
          : <h2>Menor que 10</h2>
        }
      </>
    )
  }
}

export default Counter
