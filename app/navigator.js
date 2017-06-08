/**
 * Created by admin on 2017/6/1.
 */
import React ,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,

} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import Splash from '../app/ui/Splash';
export default class navigator extends Component{
    constructor(props){
        super(props);

    }
    render(){
        let defaultName='Splash';
        let defaultComponent=Splash;
        return(
            <Navigator
                initialRoute={{name:defaultName,component:defaultComponent}}
                configureScene={(route)=>{
                return Navigator.SceneConfigs.FloatFromRight;
            }}
            renderScene={(route,navigator)=>{
                let Component =route.component;
                return <Component{...route.params} navigator={navigator}/>//通过这个讲navigator传递出去。
            }}
            ></Navigator>
        );
    }
};