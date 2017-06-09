/**
 * Created by admin on 2017/6/7.
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
} from 'react-native';

import OtherLogin from './OtherLogin';
export default class Mine extends Component{
    constructor(props){
        super(props);
    }

    render(){
       return(
           <View style={{flex:1}}>
               <OtherLogin/>
           </View>
       );
    }
}
