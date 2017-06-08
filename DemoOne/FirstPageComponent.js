/**
 * Created by admin on 2017/6/2.
 */
import React ,{Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

import SecondPageComponent from '../DemoOne/SecondPageComponent';
export default class FirstPageComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'这是title'
        }
    }
    clickJump(){      //固定写法
        const {navigator} =this.props;
        let that=this;
        if(navigator){
            navigator.push({
                name:'SecondPageComponent',
                component:SecondPageComponent,
                params:{
                    title:this.state.title,
                    id:123,
                    getUser:function (user) {
                        that.setState({
                            user:user
                        })

                    }
                }
            })
        }
    }
    render(){
        return(
            <View style={firstStyles.container}>
                <Text style={{color:'blue'}}>我是第一个界面</Text>
                <TouchableHighlight onPress={this.clickJump.bind(this)} style={firstStyles.touchableHighlight}>
                    <Text style={{color:'red'}}>
                        我是第二个界面
                    </Text>
                </TouchableHighlight>
                <Text style={{color:'blue'}}>第二个界面返回:{this.state.user}</Text>
            </View>
        );
    }
}

const firstStyles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    touchableHighlight:{
        margin:20,
      textAlign:'center',
      alignSelf:'center'
    },
})