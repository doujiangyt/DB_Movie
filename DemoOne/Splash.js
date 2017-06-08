/**
 * Created by admin on 2017/6/2.
 */
import React,{Component} from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Navigator from '../app/navigator';
export default class Splash extends Component{

    componentDidMount(){
        var navigator=this.props.navigator;
        setInterval(()=>{
            navigator.replace({
                id:'Navigator',
            });
        },2000);
    }

    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:'http://img3.douban.com/view/photo/photo/public/p2191398861.jpg'}}>
                    <View style={styles.header}>
                        <Text style={styles.headerTextUp}>机器人总动员</Text>
                        <Text style={styles.headerSubTextUp}>Wall.E(2008)</Text>
                    </View>
                </Image>
            </View>

        );
    }
}
let styles = StyleSheet.create({
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
        backgroundColor:'rgba(0,0,0,0.3)',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{

      flex:1,
      resizeMode:'cover',

    },
})