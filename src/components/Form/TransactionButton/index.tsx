import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import styles from './styles'
const {
  Container,
  Button,
  Icon,
  Title
} = styles

export type IsBtnActive = {
  isActive: boolean
}

interface TransactionButtonProps extends RectButtonProps {
  title: string
  type: 'up' | 'down'
  isActive: IsBtnActive['isActive']
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

export function TransactionButton({ title, type, isActive, ...rest }: TransactionButtonProps) {
  return (
    <Container isActive={isActive} type={type as any}>
      <Button {...rest}>
        <Icon name={icons[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  )
}