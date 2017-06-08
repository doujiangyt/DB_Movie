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
export default class Mine extends Component{
    constructor(props){
        super(props);
    }

    render(){
       return(
           <View style={styles.container}>
               <Text>Mine</Text>
           </View>
       );
    }
}
