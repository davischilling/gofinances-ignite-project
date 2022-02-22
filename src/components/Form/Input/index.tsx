import { TextInputProps } from 'react-native'
import React from 'react'

import styles from './styles'
const {
  Container,
  Error
} = styles

type Props = TextInputProps & {
  error: string
}

export function Input({ error, ...rest }: Props) {
  return (
    <>
      <Container {...rest} />
      {error && <Error>{error}</Error>}
    </>
  )
}
