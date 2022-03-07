import { Component } from 'react'
import './style.css'
import Square from './square'

class Grid extends Component {
  constructor() {
    super()
    this.state = {
      currentPlayer: 1,
      currentGrid: [['', '', ''], ['', '', ''], ['', '', '']]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(position) {
    console.log('position', position)
    const currentGrid = this.state.currentGrid
    const currentPlayer = this.state.currentPlayer === 1 ? 2 : 1

    currentGrid[position[0]][position[1]] = this.state.currentPlayer === 1 ? 'X' : 'O'
    this.setState({ currentGrid, currentPlayer })
  }

  render() {
    const { currentGrid } = this.state
    return(
      <div className="grid">
        <div className="line">
          <Square
            click={this.handleClick}
            content={currentGrid[0][0]}
            position={[0,0]}
          />
          <Square
            click={this.handleClick}
            content={currentGrid[0][1]}
            position={[0,1]}
          />
          <Square
            click={this.handleClick}
            content={currentGrid[0][2]}
            position={[0,2]}
          />
        </div>
        <div className="line">
          <Square
            click={this.handleClick}
            content={currentGrid[1][0]}
            position={[1,0]}
          />
          <Square
            click={this.handleClick}
            content={currentGrid[1][1]}
            position={[1,1]}
          />
          <Square
            click={this.handleClick}
            content={currentGrid[1][2]}
            position={[1,2]}
          />
        </div>
        <div className="line">
          <Square
            click={this.handleClick}
            content={currentGrid[2][0]}
            position={[2,0]}
          />
          <Square
            click={this.handleClick}
            content={currentGrid[2][1]}
            position={[2,1]}
          />
          <Square
            click={this.handleClick}
            content={currentGrid[2][2]}
            position={[2,2]}
          />
        </div>
      </div>
    )
  }
}

export default Grid
