import { Component } from 'react'
import './App.css'
import Modal from './components/modal'
import CustomButton from './components/customButton'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isModalOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({
      isModalOpen: true
    })
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.isModalOpen &&
          <Modal>
            <h1>Título do modal</h1>
            <p>Texto qualquer do modal</p>
            <CustomButton handleClick={ this.closeModal }>
              Ok
            </CustomButton>
          </Modal>
        }
        <CustomButton handleClick={ this.openModal }>
          Abrir modal
        </CustomButton>
      </div>
    )
  }
}

export default App
