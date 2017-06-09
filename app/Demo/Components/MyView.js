/**
 * Created by ${豆浆} on 2017/6/3.
 */
import React,{Component} from 'react';

import {
    TouchableOpacity,
    Image,
    StyleSheet,
    View,
    Text,

} from 'react-native';

import MovieList from '../Components/MovieList';
import Mine from './Mine';
import {Navigator} from 'react-native-deprecated-custom-components';


export  default class MyView extends Component{
    render(){
        let defaultName ="我的";
        let defaultComponent = Mine;



       return (
           <Navigator
           initialRoute={{name:defaultName,component:defaultComponent,id:'Mine'}}
           renderScene={this.renderScene.bind(this)}
           navigationBar={
                <Navigator.NavigationBar style={{backgroundColor: 'darkslateblue', alignItems: 'center'}}
                                 routeMapper={NavigationBarRouteMapper} />
           } />


        )
    }



    renderScene(route,navigator){
        return (
            <route.component navigator={navigator}  {...route.passProps} />
        );


    }
}

var NavigationBarRouteMapper = {

    LeftButton(route, navigator, index, navState) {

        if (route.id === 'Mine') {
            return null;
        }
        var previousRoute = navState.routeStack[index - 1];
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={{marginTop:12}}>
                <Image source={require('../image/arror.png')}  />
            </TouchableOpacity>
        );


    },
    RightButton(route, navigator, index, navState) {
        return null;
    },
    Title(route, navigator, index, navState) {
        return (
        <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={featuredStyles.title}>
                    {route.name}
                </Text>
        </View>
        );
    }

};
const featuredStyles=StyleSheet.create({

    title:{
        color: 'white', marginTop: 16,marginBottom:10, fontSize: 16,marginLeft:100
    },
})
