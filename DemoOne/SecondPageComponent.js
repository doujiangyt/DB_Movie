/**
 * Created by admin on 2017/6/2.
 */
import React,{Component} from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,

} from 'react-native';

export  default class SecondPageComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            id:null
        }
    }

    clickJump(){
        if(this.props.getUser){
            this.props.getUser("大海");
        }
        const {navigator} =this.props;
        if(navigator){
            navigator.pop();
        }
    }

    componentDidMount(){
        this.setState({
            title:this.props.title,
            id:this.props.id
        })
    }
    render(){
        return(
            <View style={SecondStyles.container}>
                <Text style={SecondStyles.other}>我是第二个界面</Text>
                <TouchableHighlight onPress={this.clickJump.bind(this)} style={SecondStyles.touchableHighlights}>
                    <Text style={SecondStyles.middle}>点击返回第一个界面</Text>
                </TouchableHighlight>
                <Text style={SecondStyles.other}>第一个界面的传入的参数:{this.state.title}</Text>
            </View>
        );
    }
}

const SecondStyles=StyleSheet.create({
    other:{
        color:'blue'
    },
    middle:{
        color:'red'
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    touchableHighlights:{
        margin:20,
        alignSelf:'center'
    },
})

