/**
 * Created by admin on 2017/6/2.
 */
import React,{Component} from 'react';
import {
    TouchableOpacity,
    Image,
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Login from './Login';
export default class Splash extends Component{
    constructor(props){
        super(props);
        this.state={
            time:3,
        }
    }
    //组件渲染完成之后进行调用
    componentDidMount(){

        //定时跳转界面
          this.time_interval= setInterval(()=>{
              if(this.state.time>0) {
                  this.setState({time: this.state.time - 1});
              }
              if(this.state.time<1){
                  this.time_interval&&clearInterval(this.time_interval);
                  this.JumpMovie();
              }
            },1000)

    }
    //当如果用户手动点击了跳转界面，将定时任务清空。
    jumpMovieByUser=()=>{
        this.JumpMovie();
        this.time_interval&&clearInterval(this.time_interval);
    }

    JumpMovie(){
        const {navigator}=this.props;//从navigator.js中将navigator取出来。
        if(navigator) {
            navigator.replace({              //如果是使用push的话，会出现0秒
                name: 'Login',
                component: Login,
            });
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:'http://img3.douban.com/view/photo/photo/public/p2191398861.jpg'}}>
                    <View style={styles.header}>
                        <View style={{flex:1,alignItems:'center',marginLeft:65}}>
                            <Text style={styles.headerTextUp}>机器人总动员</Text>
                            <Text style={styles.headerSubTextUp}>Wall.E(2008)</Text>
                        </View>

                            <TouchableOpacity style={styles.splashRightView} onPress={this.jumpMovieByUser}>
                                <Text style={styles.splashRightText}>
                                    跳 过 {this.state.time}
                                </Text>
                            </TouchableOpacity>


                    </View>
                </Image>
            </View>

        );
    }
}
let styles = StyleSheet.create({
    splashRightView:{
        marginBottom:40,
        flexDirection:'row',
        marginRight:5,
        width:60,
        height:30,
        borderWidth:1,
        borderRadius:6,
        backgroundColor:'rgba(255,255,255,0.1)'
    },
    splashRightText:{
        padding:3,
        paddingLeft:8,
        fontSize:14,
        color:'white'
    },
    rightHeader:{

       /* justifyContent:'flex-start',
        alignItems:'flex-end',*/

    },
    headerTextUp:{
        marginTop:10,
        fontSize:33,
        fontFamily:'Helvetica Neue',
        fontWeight:'300',
        color:'#fff'
    },
    headerSubTextUp:{
        marginBottom:10,
      fontSize:26,
        fontWeight:'300',
        color:'#fff'
    },
    container:{
        flex:1,
        flexDirection:'row',

    },
    header:{
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,0.3)',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{

      flex:1,
      resizeMode:'cover',

    },
})