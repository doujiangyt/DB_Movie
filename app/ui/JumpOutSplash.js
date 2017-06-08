/**
 * Created by admin on 2017/6/6.
 */
import React,{Component} from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

class JumpOutSplash extends Component{
    constructor(props){
        super(props);
        this.state={
            time:3
        }
    }

    render(){
        return(
            <TouchableOpacity style={styles.splashRightView} onPress={this.JumpMovie()}>
                <Text style={styles.splashRightText}>
                    `跳过${this.state.time}
                </Text>

            </TouchableOpacity>
        );
    }
}

const  styles=StyleSheet.create({
    splashRightView:{
        width:16,
        height:8,
        borderWidth:1,
        borderRadius:6,
        backgroundColor:'rgba(255,255,255,0.3)'
    },
    splashRightText:{
        padding:3,

        fontSize:16,
        color:'white'
    },
});

export {JumpOutSplash as default};