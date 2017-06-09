/**
 * Created by admin on 2017/6/1.
 */
import React,{Component} from 'react';
import {
    PixelRatio,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';

import EditNameView from '../lib/EditNameView';
import EditPasswordView from '../lib/EditPasswordView';
import LoginButton from '../lib/LoginButton';
import ForgetPassword from './ForgetPassword';
import Movie from '../Demo/Movie';
import NetUitl from '../lib/NetUtil';
import Register from './Register';
export default class LoginActivity extends Component{
    constructor(props){
        super(props);
        this.userName="";
        this.passWord="";

    }
    render(){
        return(
            <View style={LoginStyles.loginview}>
                <View style={{flexDirection:'row',height:100,paddingTop:30,justifyContent:'center',alignItems:'flex-start'}}>
                    <Image source={require('../Demo/image/favicon.jpg')} style={LoginStyles.image}/>
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
                <View style={LoginStyles.textAll}>
                    <TouchableOpacity style={LoginStyles.leftText} onPress={this.forgetPassword.bind(this)}>
                        <Text style={{color:'#4a90e2'}}>忘记密码？</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={LoginStyles.rightText} onPress={this.newUserRegister.bind(this)}>
                        <Text style={{color:'#4a90e2'}}>新用户注册</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    //新用户注册的按钮，点击后跳转到注册界面
    newUserRegister(){
        this.props.navigator.replace({
            name:'Register',
            component:Register,
        });
    }


    //忘记密码的按钮
    forgetPassword(){
        this.props.navigator.replace({
            name:'ForgetPassword',
            component:ForgetPassword
        });
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
       // this.onLoginSuccess();
        if(this.userName===''||this.passWord===''){
            this.hint()
        }else{
            this.searchUsers()
        }

    };
    searchUsers(){
        //登录之前，先要从AsyncStorage中取出userName与用户当前输入的userName进行匹配。
        AsyncStorage.getAllKeys((error,keys)=>{

            if(!error){
                try {
                    keys.indexOf(this.userName)!==-1?this.hasKey():this.unExist()
                }catch (e){

                }
            }else{

            }
        })
    }
    hint(){
        alert('用户名或密码不能为空！')
    }
    unExist(){
        alert('您输入的用户名不存在,请重新输入！')
    }
    hasKey(){
        AsyncStorage.getItem(this.userName,(error,result)=>{
            if(!error){
                try {
                    result===this.passWord?this.onLoginSuccess():this.wrongPassword();
                }catch (e){

                }
            }else{

            }

        })
    }
    wrongPassword(){
        alert('您输入的用户名或密码错误，请重新输入！')
    }
    onLoginSuccess(){
        const {navigator}=this.props;//从navigator.js中将navigator取出来。
        if(navigator){
            navigator.replace({
                name:'Movie',
                component:Movie,
            });
        }
    }
}


const LoginStyles=StyleSheet.create({
    leftText:{
        paddingLeft:10,
        flex:1,

    },
    rightText:{
        paddingRight:10,
        flex:1,
        alignItems:'flex-end',

    },
    textAll:{
        flexDirection:'row',
        marginTop:10
    },
    loginview:{
        flex:1,
        padding:30,
        backgroundColor:'#ffffff',
    },
    loginline:{

    },
    image:{

        width:90,
        height:90,
        borderRadius:90/PixelRatio.get(),    //得到原形图片的方法
    },
});