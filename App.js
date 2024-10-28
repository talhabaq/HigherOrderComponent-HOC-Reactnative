import { View, Text } from 'react-native'
import React from 'react'
import OnClick from './screens/OnClick'
import OnMouseOver from './screens/OnMouseOver'

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <OnClick/>
      <OnMouseOver/>
    </View>
  )
}

export default App
