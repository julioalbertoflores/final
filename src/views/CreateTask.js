import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Button} from 'react-native'
import Color from '../layout/colors.js'
import VectorIcons from 'react-native-vector-icons/AntDesign'
import TextCustomImput from '../components/TextCustomImput.js'
import CustomButttons from '../components/CustomButtons.js'
import Request from '../server/Request.js'
import {CREATE_TASK} from '../server/EndPoints.js'
class CreateTask extends Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            //descripsion: "",
            //fecha:'',
            //hora: ''
        }
    }
    componentDidMount(){
    }
    registerData(){
        console.log(this.state);
        var req=new Request("post", CREATE_TASK, this.state,(reponse)=>{
            if(reponse.status==200){
                alert('tareas registradas')
            }
        })
        req.start()
    }
    render(){
        return(
            <View style={styles.container}>
                <TextCustomImput 
                    iconname="rightcircleo" 
                    nameplaceholder='Nombre de tarea'
                    onChangeText={(txt)=>{
                        this.setState({
                            name: txt,
                        })
                    }} />
                <TextCustomImput iconname="rightcircleo" nameplaceholder='descripsiom' />
                <TextCustomImput iconname="rightcircleo" nameplaceholder='fecha' />
                <TextCustomImput iconname="rightcircleo" nameplaceholder='hora' />
                <CustomButttons title="Crear Tarea" iconname="meh" onPress={()=>
                    this.registerData()
                } />
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Color[Color.key].maincolor,
        padding: 50,
        alignItems: 'center'
    },
}) 
export default CreateTask