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
    this.processGame = this.processGame.bind(this)
    this.checkEndGame = this.checkEndGame.bind(this)
    this.clearBoard = this.clearBoard.bind(this)
  }

  clearBoard() {
    this.setState({
      currentPlayer: 1,
      currentGrid: [['', '', ''], ['', '', ''], ['', '', '']]
    })
  }

  checkEndGame() {
    const { currentGrid } = this.state
    const xLine = currentGrid.some((line) => line.every((item) => item === 'X'))
    const circleLine = currentGrid.some((line) => line.every((item) => item === 'O'))
    const colValues = [[], [], []]
    currentGrid.forEach((line) => {
      line.forEach((item, index) => {
        colValues[index].push(item)
      })
    })
    const xCol = colValues.some((line) => line.every((item) => item === 'X'))
    const circleCol = colValues.some((line) => line.every((item) => item === 'O'))
    const xLeftDiagonal = currentGrid[0][0] === 'X' && currentGrid[1][1] === 'X' && currentGrid[2][2] === 'X'
    const xRightDiagonal = currentGrid[0][2] === 'X' && currentGrid[1][1] === 'X' && currentGrid[2][0] === 'X'
    const circleLeftDiagonal = currentGrid[0][0] === 'O' && currentGrid[1][1] === 'O' && currentGrid[2][2] === 'O'
    const circleRightDiagonal = currentGrid[0][2] === 'O' && currentGrid[1][1] === 'O' && currentGrid[2][0] === 'O'
    const filledGrid = currentGrid.every((line) => line.every((item) => item !== ''))
    
    if (xLine || xCol || xLeftDiagonal || xRightDiagonal) {
      window.alert('X ganhou')
      this.clearBoard()
    } else if (circleLine || circleCol || circleLeftDiagonal || circleRightDiagonal) {
      window.alert('O ganhou')
      this.clearBoard()
    } else if (filledGrid) {
      window.alert('Deu velha')
      this.clearBoard()
    }
  }

  processGame(position) {
    const currentGrid = this.state.currentGrid
    const currentPlayer = this.state.currentPlayer === 1 ? 2 : 1

    currentGrid[position[0]][position[1]] = this.state.currentPlayer === 1 ? 'X' : 'O'
    this.setState({ currentGrid, currentPlayer })

    this.checkEndGame()
  }

  render() {
    const { currentGrid } = this.state
    return(
      <div className="grid">
        <div className="line">
          <Square
            click={this.processGame}
            content={currentGrid[0][0]}
            position={[0,0]}
          />
          <Square
            click={this.processGame}
            content={currentGrid[0][1]}
            position={[0,1]}
          />
          <Square
            click={this.processGame}
            content={currentGrid[0][2]}
            position={[0,2]}
          />
        </div>
        <div className="line">
          <Square
            click={this.processGame}
            content={currentGrid[1][0]}
            position={[1,0]}
          />
          <Square
            click={this.processGame}
            content={currentGrid[1][1]}
            position={[1,1]}
          />
          <Square
            click={this.processGame}
            content={currentGrid[1][2]}
            position={[1,2]}
          />
        </div>
        <div className="line">
          <Square
            click={this.processGame}
            content={currentGrid[2][0]}
            position={[2,0]}
          />
          <Square
            click={this.processGame}
            content={currentGrid[2][1]}
            position={[2,1]}
          />
          <Square
            click={this.processGame}
            content={currentGrid[2][2]}
            position={[2,2]}
          />
        </div>
      </div>
    )
  }
}

export default Grid
