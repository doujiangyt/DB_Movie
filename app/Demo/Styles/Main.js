/**
 * Created by ${豆浆} on 2017/6/3.
 */
import React from 'react-native';
let {StyleSheet}=React;
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    loading:{
        marginTop:56,
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    image:{
        marginLeft:6,
        marginTop:6,
        width:60,
        height:100
    },
    item:{

        borderBottomWidth:1,
        borderColor:'rgba(100,53,201,0.3)',
        paddingBottom:6,

    },
    item_text:{
        fontSize:18,
        fontFamily:'Hlvetica Neue',
        fontWeight:'300',
        color:'rgba(0,0,0,0.8)',
        lineHeight:25
    },
    title:{
        fontSize:18,
        fontFamily:'Helvetica Neue',
        fontWeight:'300',
        color:'#6435c9',
        marginBottom:6
    },
    description:{
        fontSize:16,
        color:'rgba(0,0,0,0.6)',
        marginBottom:6
    },
    rating:{
        color:'#db2828',
        fontSize:15
    },
    textContent:{
        justifyContent:'center',

        marginLeft:6
    },

});

export { styles as default};