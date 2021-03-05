import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import VectorIcons from 'react-native-vector-icons/AntDesign'
import Color from '../layout/colors.js'

class CustonButtons extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {title, iconname, onPress}= this.props
        var icon = iconname
        if(icon == null){
            icon = 'check'
        }
        return(
            <TouchableOpacity style={styles.btnsyles} onPress={()=>{onPress()}} >
                <VectorIcons name={icon} size={24} color={Color[Color.key].fourtcolor} />
                <Text style={styles.txt}>{title} </Text>
            </TouchableOpacity>
        )
    }
}
const styles=StyleSheet.create({
    btnsyles:{
        backgroundColor: Color[Color.key].threecolor,
        flexDirection: 'row',
        padding: 10,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt:{
        color: Color[Color.key].fourtcolor,
        marginLeft: 10,
    }
})
export default CustonButtons