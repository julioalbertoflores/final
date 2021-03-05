import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native';

class Item extends Component{
    constructor(props){
        super(props)
    }
    onDelete(id){
        const {ondelete} = this.props;
        ondelete(id);
    }
    render(){
        return(
            <View style={styles.containerList}>
                <View style={styles.textstyle}>
                    <Text>{this.props.name} </Text>
                </View>
                <View>
                    <Button 
                        title='Borrar'
                        onPress={()=>{
                            this.onDelete(this.props.id)
                        }}
                     />
                </View>
            </View>
        )
    }

}

const styles=StyleSheet.create({
    image:{
        width:100,
        height:100,
    },
    containerList:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 5,
        padding:10,
        borderRadius: 10,
        elevation:4,
    },
    textstyle:{
        justifyContent: 'flex-start',
        width: '70%'
    }
})

export default Item;