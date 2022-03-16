import { Component } from 'react'

export default class DepositForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      bank: '',
      amount: 0,
      validations: {
        name: true,
        bank: true,
        amount: true
      }
    }
    this.changeName = this.changeName.bind(this)
    this.changeBank = this.changeBank.bind(this)
    this.changeAmount = this.changeAmount.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  changeName($event) {
    this.setState({
      name: $event.target.value
    })
  }

  changeBank($event) {
    this.setState({
      bank: $event.target.value
    })
  }

  changeAmount($event) {
    this.setState({
      amount: $event.target.value
    })
  }

  clearForm() {
    this.setState({
      name: '',
      bank: '',
      amount: 0
    })
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
              className={ validations.name ? '' : 'error' }
            />
          </fieldset>
          <fieldset>
            <label htmlFor="bank">Banco</label>
            <br />
            <select
              name="bank"
              id="bank"
              value={ bank }
              onChange={ this.changeBank }
            >
              { bankList.map((bank) =>
                <option key={ bank.value } value={ bank.value }>{ bank.text }</option>
              )}
            </select>
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
            />
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
