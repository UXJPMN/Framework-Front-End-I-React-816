import { Component } from 'react'
import './style.css'
import { amountValidator, bankValidator, nameValidator } from './validators'

export default class DepositForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      bank: '',
      amount: 0,
      validations: {
        name: {
          isDirty: false,
          errors: []
        },
        bank: {
          isDirty: false,
          errors: []
        },
        amount: {
          isDirty: false,
          errors: []
        }
      }
    }
    this.changeName = this.changeName.bind(this)
    this.changeBank = this.changeBank.bind(this)
    this.changeAmount = this.changeAmount.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.dirtyComponent = this.dirtyComponent.bind(this)
  }

  changeName($event) {
    const errors = nameValidator($event.target.value)

    this.setState({
      name: $event.target.value,
      validations: {
        ...this.state.validations,
        name: {
          ...this.state.validations.name,
          errors
        }
      }
    })
  }

  changeBank($event) {
    const errors = bankValidator($event.target.value)

    this.setState({
      bank: $event.target.value,
      validations: {
        ...this.state.validations,
        bank: {
          ...this.state.validations.bank,
          errors
        }
      }
    })
  }

  changeAmount($event) {
    const errors = amountValidator($event.target.value)

    this.setState({
      amount: $event.target.value,
      validations: {
        ...this.state.validations,
        amount: {
          ...this.state.validations.amount,
          errors
        }
      }
    })
  }

  clearForm() {
    this.setState({
      name: '',
      bank: '',
      amount: 0
    })
  }

  dirtyComponent($event) {
    const { validations } = this.state
    const { id, value } = $event.target
    let errors

    switch(id) {
      case 'name':
        errors = nameValidator(value)
        break
      case 'bank':
        errors = bankValidator(value)
        break
      case 'amount':
        errors = amountValidator(value)
        break
      default:
        errors = []
        break
    }

    validations[id].isDirty = true
    validations[id].errors = errors
    this.setState({ validations })
  }

  render() {
    const bankList = [
      { value: '', text: '' },
      { value: 'itau', text: 'Itaú' },
      { value: 'santander', text: 'Santander' },
      { value: 'caixa', text: 'Caixa' },
      { value: 'bb', text: 'Banco do Brasil' },
    ]
    const { name, bank, amount, validations } = this.state

    return(
      <>
        <form className="deposit-form">
          <fieldset className="form-group">
            <label htmlFor="name">Nome do destinatário</label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              value={ name }
              onChange={ this.changeName }
              onBlur={ this.dirtyComponent }
            />
            <br />
            { validations.name.isDirty && validations.name.errors.map((error, index) =>
              <p key={index} className='error-message'>{ error }</p>
            )}
          </fieldset>
          <fieldset>
            <label htmlFor="bank">Banco</label>
            <br />
            <select
              name="bank"
              id="bank"
              value={ bank }
              onChange={ this.changeBank }
              onBlur={ this.dirtyComponent }
            >
              { bankList.map((bank) =>
                <option key={ bank.value } value={ bank.value }>{ bank.text }</option>
              )}
            </select>
            <br />
            { validations.bank.isDirty && validations.bank.errors.map((error, index) =>
              <p key={index} className='error-message'>{ error }</p>
            )}
          </fieldset>
          <fieldset>
            <label htmlFor="amount">Valor</label>
            <br />
            <input
              type="number"
              name="amount"
              id="amount"
              value={ amount }
              onChange={ this.changeAmount }
              onBlur={ this.dirtyComponent }
            />
            <br />
            { validations.amount.isDirty && validations.amount.errors.map((error, index) =>
              <p key={index} className='error-message'>{ error }</p>
            )}
          </fieldset>
        </form>
        <button onClick={ this.clearForm }>Limpar Formulário</button>
        <h2>Nome: { name }</h2>
        <h2>Banco: { bank } </h2>
        <h2>Valor: { amount }</h2>
      </>
    )
  }
}
