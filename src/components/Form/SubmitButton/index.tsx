import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import styles from './styles'

const {
  Main,
  Container,
  Title
} = styles

export interface SubmitButtonProps extends RectButtonProps {
  title: string
  onPress: () => void
}

export function SubmitButton({ title, onPress, ...rest }: SubmitButtonProps) {
  return (
    <Main>
      <Container onPress={onPress} {...rest}>
        <Title>{ title }</Title>
      </Container>
    </Main>
  )
}