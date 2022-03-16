export const nameValidator = (value) => {
  const errors = []

  if (!value) {
    errors.push('Insira um nome!')
  }
  if (/\d/.test(value)) {
    errors.push('Um nome não pode conter números!')
  }

  return errors
}

export const bankValidator = (value) => {
  const errors = []

  if (!value) {
    errors.push('Escolha um banco!')
  }

  return errors
}

export const amountValidator = (value) => {
  const errors = []

  if (parseFloat(value) <= 0) {
    errors.push('Insira um valor maior que zero!')
  }

  return errors
}
