/**
 * Created by admin on 2017/6/1.
 */
import React,{Component} from 'react';
import {

    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import EditNameView from '../lib/EditNameView';
import EditPasswordView from '../lib/EditPasswordView';
import LoginButton from '../lib/LoginButton';
import LoginSuccess from '../ui/LoginSuccess';
import Movie from '../Demo/Movie';
import NetUitl from '../lib/NetUtil';
export default class LoginActivity extends Component{
    constructor(props){
        super(props);
        this.userName="";
        this.passWord="";
    }
    render(){
        return(
            <View style={LoginStyles.loginview}>
                <View style={{flexDirection:'row',height:100,marginTop:1,justifyContent:'center',alignItems:'flex-start'}}>
                    <Image source={require('../img/favicon.jpg')}/>
                </View>
                <View style={{marginTop:80}}>
                    <EditNameView name='输入用户名/注册手机号' onChangeText={(text)=>{     //相当于是自定义一个EditText
                    this.userName=text;}
                    }/>
                    <EditPasswordView  name='输入密码' onChangeText={(text)=>{
                        this.passWord=text;
                    }}/>
                </View>
                <LoginButton name='登陆' onPressCallback={this.onPressCallback}/>
                <TouchableOpacity><Text style={{color:'#4a90e2',textAlign:'center',marginTop:10}}>忘记密码？</Text></TouchableOpacity>
            </View>
        );
    }
    onPressCallback=()=>{
       /* let formData=new FormData();
        formData.append('loginName',this.userName);
        formData.append('password',this.passWord);
        let url='http://localhost:8080/loginApp';
        NetUitl.postJson(url,formData,(responseText)=>{
            alert(responseText);
            this.onLoginSuccess();
        })*/
        this.onLoginSuccess();
    };
    onLoginSuccess(){
        const {navigator}=this.props;//从navigator.js中将navigator取出来。
        if(navigator){
            navigator.replace({
                name:'Movie',
                component:Movie,
            });
        }
      /*  navigator.push({
            name:'LoginSuccess',
            component:LoginSuccess,})*/
    }
}

class LogLineView extends Component{
    render(){
        return(
            <Text style={styles.loginline}>没有账号</Text>
        );
    }
}

const LoginStyles=StyleSheet.create({
    loginview:{
        flex:1,
        padding:30,
        backgroundColor:'#ffffff',
    },
    loginline:{

    }
});