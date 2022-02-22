import * as Yup from 'yup'

export const schema = Yup.object().shape({
  name: Yup.string()
    .required('Nome é obrigatório'),
  amount: Yup.number()
    .typeError('Inform um valor numérico')
    .positive('O valor não pode ser negativo')
})

