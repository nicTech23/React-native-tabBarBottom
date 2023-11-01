import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Details = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:24, fontWeight:'bold'}} onPress={()=>navigation.navigate('home')}>Details!</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})