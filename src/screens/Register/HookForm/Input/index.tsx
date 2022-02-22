import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import { Input as InputBase } from '../../../../components'
import styles from './styles'

const {
  Container
} = styles

interface InputProps extends TextInputProps {
  control: Control
  name: string
  error: string
}

export function Input({
  control,
  name,
  error,
  ...rest
}: InputProps) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value }}) => (
          <InputBase
            onChangeText={onChange}
            value={value}
            error={error}
            {...rest}
          />
        )}
        name={name}
      />
    </Container>
  )
}