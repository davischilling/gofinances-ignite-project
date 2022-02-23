import React, { useEffect } from 'react'
import { HightlighCard, Transaction, TransactionCard } from '../../components'
import styles from './styles'
import {
  // deleteCollectionAsyncStorage,
  getCollectionAsyncStorage, GoFinancesKeys
} from '../../utils'

const {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  UserGreetings,
  Greeting,
  Name,
  LogoutButton,
  LogoutIcon,
  HightlightCardList,
  TransactionsWrapper,
  SessionTitle,
  TransactionList
} = styles

export interface DataProps extends Transaction {
  id: string
}

export function Dashboard() {
  const data: DataProps[] = [{
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de Site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '13/04/2020'
  },
  {
    id: '2',
    type: 'negative',
    title: 'Hamburgueria Pizzy',
    amount: 'R$ 59,00',
    category: {
      name: 'Alimentacao',
      icon: 'coffee'
    },
    date: '10/04/2020'
  },
  {
    id: '3',
    type: 'negative',
    title: 'Aluguel do apartamento',
    amount: 'R$ 1.200,00',
    category: {
      name: 'Casa',
      icon: 'shopping-bag'
    },
    date: '05/05/2020'
  }]

  useEffect(() => {
    const loadData = async () => {
      console.log(await getCollectionAsyncStorage(GoFinancesKeys.transactions));
    }
    loadData()
    // const removeCollection = async () => {
    //   await deleteCollectionAsyncStorage(dataKey)
    // }
    // removeCollection()
  }, [])

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/87915811?v=4' }} />
            <UserGreetings>
              <Greeting>Ola,</Greeting>
              <Name>Davi</Name>
            </UserGreetings>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <LogoutIcon name='power' />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <HightlightCardList>
        <HightlighCard
          type='up'
          title='Entradas'
          amount='R$17.400,00'
          lastTransaction='Ultima entrada dia 13 de abril'
        />
        <HightlighCard
          type='down'
          title='Saidas'
          amount='R$1.259,00'
          lastTransaction='Ultima saida dia 03 de abril'
        />
        <HightlighCard
          type='total'
          title='Total'
          amount='R$16.141,00'
          lastTransaction='01 a 16 de abril'
        />
      </HightlightCardList>
      <TransactionsWrapper>
        <SessionTitle>Listagem</SessionTitle>
        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />

      </TransactionsWrapper>
    </Container>
  )
}