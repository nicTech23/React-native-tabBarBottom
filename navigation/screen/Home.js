import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:24, fontWeight:'bold'}} onPress={()=>navigation.navigate('settings')}>home!</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})