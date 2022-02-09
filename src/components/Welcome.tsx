import { View, Text } from 'react-native'
import React from 'react'

type WelcomeProps = {
    title: string
}

export function Welcome({ title }: WelcomeProps) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}