/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MyProject extends Component {
  render() {
    return (
     <View style={styles.container}>
       <Text style={styles.title}> 练习</Text>
       <View>
         <View style={[styles.item,styles.itemOne]}>
            <Text style={styles.itemText}>1</Text>
         </View>
         <View style={[styles.item,styles.itemTwo]}>
           <Text style={styles.itemText}>我<Text style={styles.inner}>是</Text>谁</Text>
         </View>
         <View style={[styles.item,styles.itemThree]}>
           <Text style={styles.itemText}>3</Text>
         </View>
       </View>
     </View>

    );
  }
}

const styles = StyleSheet.create({
    inner:{
      fontSize:50,
        color:'#f00',
        fontWeight:'600',
    },
    item:{
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#6435c9',
        margin:6,

    },
    itemOne:{
      alignSelf:'flex-start'
    },
    itemTwo:{
      alignSelf:'center'
    },
    itemThree:{
      alignSelf:'flex-end'
    },
    itemText:{
      fontFamily:'Helvetica Neue',
      fontSize:33,
        fontWeight:'200',
        color:'#6435c9',
        padding:10,
    },
    title:{
      fontSize:26,
        color:'#6435c9',
        //文字的对齐方式
        textAlign:'center',
        //文字的样式
        fontStyle:'italic',
        //字间距
        letterSpacing:2,
        //行间距
        lineHeight:33,
        //改变文字的字体
        fontFamily:'Helvetica Neue',
        //文字的粗细100最细，900最粗
        fontWeight:'bold',
        //在文字的下面添加一条下划线
        textDecorationLine:'underline',
        //在文字的下方添加线的样式
        textDecorationStyle:'double',
    },
      container: {
          //垂直方向
         // justifyContent:'center',
          //水平方向,默认是拉伸的stretch
         // alignItems:'center',
          //alignItems:'flex-start',
        flex: 1,
        backgroundColor:'#eae7ff',
        margin:30,
          //边框的颜色
          borderColor:'#6435c9',
          borderWidth:1,
          //边框的圆角
          borderRadius:16,
          //阴影的颜色
          shadowColor:'#6435c9',
          //阴影的不透明度，值是0-1之间
          shadowOpacity:0.6,
          //阴影的扩散程度
          shadowRadius:2,
          //阴影的偏移，他的值是一个对象
          shadowOffset:{
              height:1,
              width:0,
          },




  },

});

/*AppRegistry.registerComponent('MyProject', () => MyProject);*/
