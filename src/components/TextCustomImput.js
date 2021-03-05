import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import Color from '../layout/colors.js'
import VectorIcons from 'react-native-vector-icons/AntDesign'

class TextCustomImput extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {nameplaceholder,iconname, secureTextEntry, onChangeText}=this.props
        return(
            <View style={styles.inputtext}>
                <VectorIcons 
                name={iconname} 
                size={30} 
                color={Color[Color.key].threecolor} />
                <TextInput 
                    style={styles.textinputcolor}
                    placeholder={nameplaceholder}
                    onChangeText={(text)=>{
                        if(onChangeText !=null){
                            onChangeText(text);
                        }
                    }}
                  />
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
    inputtext:{
        flexDirection: 'row',
        padding: 5,
        backgroundColor: Color[Color.key].secondcolor,
        width: '80%',
        borderRadius: 10,
        elevation: 4,
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 10,
    },
    textinputcolor:{
        color: Color[Color.key].fourtcolor,
    }
})
export default TextCustomImput