import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import styles from './styles'

const {
  Container,
  Title
} = styles

export interface SubmitButtonProps extends RectButtonProps {
  title: string
  onPress: () => void
}

export function SubmitButton({ title, ...rest }: SubmitButtonProps) {
  return (
    <Container {...rest}>
      <Title>{ title }</Title>
    </Container>
  )
}