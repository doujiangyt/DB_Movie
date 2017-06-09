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
import styles from '../Styles/Main';
import OtherLogin from './OtherLogin';
export default class Mine extends Component{
    constructor(props){
        super(props);
    }

    render(){
       return(
           <View style={styles.container}>
               <OtherLogin/>
           </View>
       );
    }
}
