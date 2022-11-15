import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Bluetooth from './src/Bluetooth/index'

const App = ({ }) => {
  return <Bluetooth />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;