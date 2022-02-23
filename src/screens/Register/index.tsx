import React, { useState } from 'react'
import {
  Modal,
  Keyboard,
  Alert
} from 'react-native'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import uuid from 'react-native-uuid'
import { useNavigation } from '@react-navigation/native'

import {
  CategorySelectButton,
  SubmitButton,
  TransactionButton
} from '../../components'
import { CategoriesModal } from './CategoriesModal'
import { Input, schema } from './HookForm'
import styles from './styles'
import {
  saveItemDataAsyncStorage,
  GoFinancesKeys
} from '../../utils'

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

type NavigationProps = {
  navigate:(screen:string) => void;
}

export function Register() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const navigation = useNavigation<NavigationProps>()

  const [transactionType, setTransactionType] = useState<'up' | 'down' | ''>('')
  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false)
  const [category, setCategory] = useState({ key: 'category', name: 'Categoria' })

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  const handleCloseCategoryModal = () => {
    setCategoryModalOpen(false)
  }

  const handleOpenCategoryModal = () => {
    setCategoryModalOpen(true)
  }

  const handleFormSubmit = async (form: FormData) => {
    if (!transactionType)
      return Alert.alert('Selecione o tipo da transação')
    if (category.key === 'category')
      return Alert.alert('Selecione a categoria')

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date()
    }
    
    try {
      await saveItemDataAsyncStorage(GoFinancesKeys.transactions, newTransaction)
      reset()
      setTransactionType('')
      setCategory({ key: 'category', name: 'Categoria' })
      navigation.navigate('Listagem')
    } catch(err) {
      console.log(err);
      Alert.alert("Nao foi possivel salvar")
    }
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
