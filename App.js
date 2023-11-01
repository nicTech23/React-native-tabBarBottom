import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import Settings from './navigation/screen/Settings';
import Home from './navigation/screen/Home';
import Details from './navigation/screen/Details';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default Apps = () => {
  const Tab = createBottomTabNavigator()
  
  //screen names
  const homeName = 'Home'
  const settingsName = 'Settings'
  const detailsName = 'Details'

return (
  <View style={{flex:1}}>
    <MainContainer/>
  </View>
)
}



const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }
  
})


