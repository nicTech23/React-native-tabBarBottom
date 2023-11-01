import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './navigation/screen/Home'
import Settings from './navigation/screen/Settings'
import Details from './navigation/screen/Details'
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainContainer = () => {
    
    const homeName = 'home'
    const settingsName = 'settings'
    const detailsName = 'details'

    const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
     <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route})=>({
          tabBarIcon: ({focused, color, size})=>{
              let iconName
              let rn = route.name
              if(rn === homeName) {
                  iconName = focused ? "home" : "home-outline"
              } else if (rn === settingsName){
                  iconName = focused ? 'settings' : "settings-outline"
              } else if (rn === detailsName){
                  iconName = focused ? 'list' : "list-outline"
              }
              return <Ionicons name={iconName} size={size} color={color}/>
          }
      })}
      >
          <Tab.Screen name={homeName} component={Home}/>
          <Tab.Screen name={settingsName} component={Settings}/>
          <Tab.Screen name={detailsName} component={Details}/>
      </Tab.Navigator> 
  </NavigationContainer>
)
}

export default MainContainer

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
    
})