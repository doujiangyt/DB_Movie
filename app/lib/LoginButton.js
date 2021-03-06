/**
 * Created by admin on 2017/6/1.
 */
import React,{Component} from 'react';
import {
    ToolbarAndroid,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
export default class LoginButton extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <TouchableOpacity onPress={this.props.onPressCallback} style={LoginStyles.loginTextView}>
                <Text style={LoginStyles.loginText}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        );
    }
}

const LoginStyles=StyleSheet.create({
    loginTextView:{
        marginTop:10,
        height:50,
        backgroundColor:'#3281dd',
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    loginText:{
        color:'#ffffff',
        fontWeight:'bold',
        width:30,
    }
});