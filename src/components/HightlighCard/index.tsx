import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

export type CardTypeProps = {
  type: 'up' | 'down' | 'total'
}

interface HightlighCardProps {
    title: string
    amount: string
    lastTransaction: string
    type: CardTypeProps['type']
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export function HightlighCard({
  type,
  title,
  amount,
  lastTransaction
}: HightlighCardProps) {
  return (
    <View style={styles({ type }).container}>
      <View style={styles({ type }).header}>
        <Text style={styles({ type }).title}>{title}</Text>
        <Feather
          style={styles({ type }).icon}
          name={icon[type] as any}
        />
      </View>

      <Text style={styles({ type }).amount}>{amount}</Text>
      <Text style={styles({ type }).lastTransaction}>{lastTransaction}</Text>
    </View>
  )
}