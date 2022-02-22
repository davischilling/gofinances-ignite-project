import React from 'react'

import styles from './styles'
const {
  Container, // View - 'react-native'
  Title, // Text - 'react-native'
  Amount, // Text - 'react-native'
  Footer, // View - 'react-native'
  Category, // View - 'react-native'
  Icon, // Feather - '@expo/vector-icons'
  CategoryName, // Text - 'react-native'
  Date // Text - 'react-native'
} = styles

type CategoryType = {
  name: string
  icon: string
}

export type TransactionType = {
  type: 'positive' | 'negative'
}

export type Transaction = {
  type: TransactionType['type']
  title: string
  amount: string
  category: CategoryType
  date: string
}

interface TransactionCardProps {
  data: Transaction
}

export function TransactionCard({ data }: TransactionCardProps) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount type={data.type}>
        {data.type === 'negative' ? `- ${data.amount}` : data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>      
    </Container>
  )
}