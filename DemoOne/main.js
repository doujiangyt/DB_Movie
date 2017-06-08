/**
 * Created by admin on 2017/6/2.
 */
import React ,{Component} from 'react';
import {

StyleSheet,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import FirstPageComponent from './/FirstPageComponent';
export default class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        //导航器必须的配置
        let defaultName='firstPageName';
        let defaultComponent=FirstPageComponent;
        return(
            <Navigator

                //初始化路由。defaultName和defaultComponent存放的就是你要render的第一个Scene
                initialRoute={{name:defaultName,component:defaultComponent}}
                //安装场景。这里定义了跳转的过渡动画
                configureScene={
                    (route)=>{
                        return Navigator.SceneConfigs.FloatFromRight
                    }
                }
                //渲染场景
                renderScene={//这个段代码执行过后，就将你的“defaultComponent”渲染出来了，其中route.componet就是在initialRoute里写进去的component。
                    (route,navigator)=>{
                    let Component =route.component;
                    return<Component {...route.params} navigator={navigator}/>
                }

                }
            >

            </Navigator>
        );
    }
}
