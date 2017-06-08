/**
 * Created by admin on 2017/6/1.
 */
import React ,{Component} from 'react';
import {
    View,

    TouchableOpacity,

    Text
} from 'react-native';

export default class LoginSuccess extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    onJump(){
        const {navigator}=this.props;
        console.log(navigator);
        if(navigator){
            navigator.pop();
        }
    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={this.onJump.bind(this)}>
                    <Text style={{justifyContent:'center',textAlign:'center',color:'#f00',textDecorationLine:'underline'}}>登录成功，点击返回登录页面</Text>
                </TouchableOpacity>
            </View>
        );
    }
}