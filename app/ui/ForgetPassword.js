/**
 * Created by admin on 2017/6/9.
 */
import React,{Component} from 'react';
import {
    Image,
    TextInput,
    ListView,
    Text,
    View,
    ActivityIndicator,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import LoginButton from '../lib/LoginButton';
import Register from './Register';
export default class ForgetPassword extends Component{
    constructor(props){
        super(props);
    }

    //如果有使用到this.props.的话，需要在前面的方法里面把this传递过来，否则界面将不会被展示。
    render(){
       return(
       <View style={ForgetPasswordStyle.container}>
           <Text style={ForgetPasswordStyle.content}>哥们，你还是去注册一个账号吧！</Text>
           <LoginButton name='返回' onPressCallback={this.onPressCallback.bind(this)} style={{padding:30}}/>
       </View>
       );
    }
    onPressCallback(){
        this.props.navigator.replace({
            name:'Register',
            component:Register
        });
    }
}

let ForgetPasswordStyle=new StyleSheet.create({
    container:{
        flex:1,
        padding:30
    },
    content:{

        color:'#6535c9',
        textAlign:'center',

        fontSize:18,
        fontWeight:'300',
        fontFamily:'Helvetica Neue',
        marginTop:60,
        marginBottom:60,
    },
});
