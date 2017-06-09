/**
 * Created by admin on 2017/6/9.
 */
import React,{Component} from 'react';
import {
    Image,
    TextInput,
    ListView,
    Text,
    View,
    WebView,
    ActivityIndicator,
    TouchableHighlight,
} from 'react-native';

export default class OtherLogin extends Component{
    constructor(props){
        super(props);
        let api={
            key:'05b2e24806124f0f1118a6d81236ed2d',
            secret:'132f022db4330578'
        }
        let oAuth = {
            authBaseUrl:'https://www.douban.com/service/auth2/auth',
            tokenBaseUrl:'https://www.douban.com/service/auth2/token',
            redirectUrl:'https://github.com/doujiangyt/DB_Movie',
            responseType:'code',
            grantType:'authorization_code',
            scope:'douban_basic_common,movie_basic,movie_basic_r,movie_basic_w'
        }
        this.state={
            authCode:''
        }
        this.authUrl=`${oAuth.authBaseUrl}
        ?client_id=${api.key}
        &redirect_uri=${oAuth.redirectUrl}
        &response_type=${oAuth.responseType}
        &scope=${oAuth.scope}`.replace(/(\r\n|\r|\n| )/gm,'');   //替换，gm是正则表达式。


    }
    // source={{uri:this.authUrl}}
    navigationStateChange(state){
        console.log(state)
    }
    render(){
       return(
        <WebView
           // source={{uri:this.authUrl}}
            source={{uri:'https://github.com/doujiangyt'}}
            //source={{uri:'https://www.baidu.com'}}
            startInLoadingState={true}
            onNavigationStateChange={this.navigationStateChange.bind(this)}
        >

        </WebView>
       );
    }
}
