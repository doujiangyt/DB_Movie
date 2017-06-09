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
    StyleSheet,
    ActivityIndicator,
    TouchableHighlight,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import EditNameView from '../lib/EditNameView';
import EditPasswordView from '../lib/EditPasswordView';
import LoginButton from '../lib/LoginButton';
import Movie from '../Demo/Movie';
import Login from './Login';
export default class Register extends Component{
    constructor(props){
        super(props);
        this.userName=''
        this.passWord=''
    }
//<Text style={{color:'#3281dd'}}>返回</Text>
    render(){
       return(
           <View style={RegisterStyles.registerView}>

               <TouchableOpacity  onPress={this.reverseBack.bind(this)}>
                   <Text style={{color:'#3281dd'}}>返回</Text>
               </TouchableOpacity>

               <Text style={RegisterStyles.registerText}>新用户注册</Text>
               <View style={{marginTop:20}}>
                   <EditNameView name='输入用户名' onChangeText={(text)=>{     //相当于是自定义一个EditText
                       this.userName=text;}
                   }/>
                   <EditPasswordView  name='输入密码' onChangeText={(text)=>{
                       this.passWord=text;
                   }}/>
               </View>
               <LoginButton name='注册' onPressCallback={this.onPressCallback.bind(this)}/>

           </View>
       );
    }
    reverseBack(){
        this.props.navigator.replace({
            name:'Login',
            component:Login,
        });
    }
    //点击注册后，将数据存储在AsyncStorage中，
    onPressCallback(){
        //1，提交之前，先要判断用户名和密码是否不为空
       // this.userName&&this.passWord?this.searchUsers.bind(this):this.hint.bind(this);
        if(this.userName===''||this.passWord===''){
            this.hint()
        }else{
            this.searchUsers()
        }
    }
    searchUsers(){
        //将从输入框中得到的数据，到AsyncStorage中去查询，如果有就提示用户名已注册。没有就存储。
        AsyncStorage.getAllKeys((error,keys)=>{

            if(!error){
                try {
                    keys.indexOf(this.userName)!==-1?this.hasKey():this.toSaveUser()
                }catch (e){

                }
            }else{

            }
        })

    }

    hint(){
        alert('用户名或密码不能为空！')
    }

    hasKey(){
        alert('用户名已经存在，请重新输入用户名！')
    }
    toSaveUser(){
        //对新用户进行存储

        AsyncStorage.setItem(this.userName,this.passWord,(error)=>{
            if(!error){
                try{
                    //存储后提示成功，并跳转。
                    this.registerSuccess();
                    alert('注册成功！')
                }catch(error){
                    alert(`注册失败${error}！`)
                }
            }else{
                alert('注册失败！')
            }
        })


    }

    registerSuccess(){

        this.props.navigator.replace({
            name:'Movie',
            component:Movie,
        });
    }
}
let RegisterStyles=new StyleSheet.create({
    registerView:{
        flex:1,

        padding:30
    },
    registerText:{
        textAlign:'center',
        fontSize:18,
        color:'#3281dd',
        fontWeight:'300',
        fontFamily:'Helvetica Neue',
        marginTop:60,
    },

});