import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import Request from '../server/Request.js'
import {SHOW_TASK} from '../server/EndPoints.js'
import Item from '../components/Item.js'
class ListTask extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
        }
    }
    componentDidMount(){
        var request = new Request('get',SHOW_TASK,{}, (response)=>{
            if(response.status==200){
                this.setState({
                    list:response.data,
                })
            }
            request.start();
        })  
    }
    render(){
        return(
            <View>
                <FlatList
                    data={this.state.list}
                    renderItem={({item})=>{
                        <Item 
                            name={item.name}
                            path={item.path}
                            id={item._id}
                            ondelete={(id)=>{
                                this.removeData(id);
                            }} />
                    }}
                    keyExtractor={(item)=> item.id}
                />

            </View>
        )
    }
}
export default ListTask