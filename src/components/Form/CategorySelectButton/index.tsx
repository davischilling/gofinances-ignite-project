import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import styles from './styles'
const {
  Main,
  Container,
  Category,
  Icon
} = styles

interface CategorySelectButtonProps extends RectButtonProps {
  title: string
}

export function CategorySelectButton({ title, ...rest }: CategorySelectButtonProps) {
  return (
    <Main>
      <Container
        {...rest}
        activeOpacity={0.7}
      >
        <Category>{ title }</Category>
        <Icon name="chevron-down" />
      </Container>
    </Main>
  )
}