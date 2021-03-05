import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CreateTask from './src/views/CreateTask'
import ListTask from './src/views/ListTask'


import Color from './src/layout/colors.js'
import VectorIcons from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator();

class App extends Component{
  constructor(props){
    super(props)
  }
  /*HomeScreen(){
    return (
      <View>
      <VectorIcons name="customerservice" size={50} color='#000000' />
      <Text>Vista Home</Text>
    </View>
    )
  }
  SettingsScreen(){
    return (
      <View>
      <VectorIcons name="addusergroup" size={50} color='#000000' />
      <Text>Vista Settings</Text>
    </View>
    )
  }*/

  listTask(){
    return <ListTask/>
  }
  createTask(){
    return <CreateTask/>
  }
  render(){
    return (
      <NavigationContainer >
        <Tab.Navigator
          screenOptions={({route})=>({
            tabBarIcon: ({focused, color, size})=>{
              let iconName;
              switch (route.name){
                case "Lista de Tareas": {
                  if(focused){
                    return (
                      <VectorIcons 
                    name='bars' size={23} 
                    color={Color.option1.threecolor} />
                    )
                  }else{
                    return <VectorIcons 
                    name='bars' 
                    size={23} 
                    color={Color.option1.secondcolor} />
                  }
                }
                case "crear tareas": {
                  if(focused){
                    return (
                      <VectorIcons 
                    name="addusergroup" 
                    size={23} 
                    color={Color[Color.key].secondcolor} />
                    )
                  }else{
                    return <VectorIcons 
                    name="addusergroup"
                     size={23} 
                     color={Color[Color.key].secondcolor} />
                  }
                }
                
              }
            }
          })}
        >
          <Tab.Screen name='Lista de Tareas' component={this.listTask} />
          <Tab.Screen name='Crear Tareas' component={this.createTask} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default App