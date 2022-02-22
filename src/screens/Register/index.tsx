import React, { useState } from 'react'
import {
  Modal,
  Keyboard,
  Alert
} from 'react-native'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import {
  CategorySelectButton,
  SubmitButton,
  TransactionButton
} from '../../components'
import { CategoriesModal } from './CategoriesModal'
import { Input, schema } from './HookForm'
import styles from './styles'

const {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionWrapper
} = styles

interface FormData {
  [name: string]: any
}

export function Register() {
  const [transactionType, setTransactionType] = useState<'up' | 'down' | ''>('')
  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  const handleCloseCategoryModal = () => {
    setCategoryModalOpen(false)
  }

  const handleOpenCategoryModal = () => {
    setCategoryModalOpen(true)
  }

  const handleFormSubmit = (form: FormData) => {
    if (!transactionType)
      return Alert.alert('Selecione o tipo da transação')
    if (category.key === 'category')
      return Alert.alert('Selecione a categoria')

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data);
  }


  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      containerStyle={{ flex: 1 }}
      style={{ flex: 1 }}
    >
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <Input
              name='name'
              control={control}
              placeholder='Nome'
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <Input
              name='amount'
              control={control}
              placeholder='Preco'
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
            />

            <TransactionWrapper>
              <TransactionButton
                title='Income'
                type='up'
                onPress={() => handleTransactionTypeSelect('up')}
                isActive={transactionType === 'up'}
              />
              <TransactionButton
                title='Outcome'
                type='down'
                onPress={() => handleTransactionTypeSelect('down')}
                isActive={transactionType === 'down'}
              />
            </TransactionWrapper>

            <CategorySelectButton
              title={category.name}
              onPress={handleOpenCategoryModal}
            />
          </Fields>
          <SubmitButton
            title="Enviar"
            onPress={handleSubmit(handleFormSubmit)}
          />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategoriesModal
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}
