import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Settings = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{fontSize:24, fontWeight:'bold'}} onPress={()=>navigation.navigate('details')}>Settings!</Text>
  </View>
  )
}

export default Settings

const styles = StyleSheet.create({})