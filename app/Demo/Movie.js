/**
 * Created by Administrator on 2017/6/3.
 */
import React,{Component} from 'react';

import TabNavigator from 'react-native-tab-navigator';
import Featured from '../Demo/Components/Featured';
import Search from './Components/Search';
import Hot from '../Demo/Components/Hot';
import Mine from './Components/Mine';
import {Navigator} from 'react-native-deprecated-custom-components';
import {

    Image,
    View,
    StyleSheet
} from 'react-native';
import MyView from "./Components/MyView";

//底部导航
export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedTab:'推荐电影'
        }
    }

    //渲染listView组件
    render() {
        return (
            <TabNavigator tabBarStyle={{backgroundColor:"darkslateblue"} }>
               {/* --推荐电影--
                {this.renderTabBarItem('推荐电影',unpress_star,press_star,'推荐电影','推荐电影',MovieList)}
                --北美票房--
                {this.renderTabBarItem('北美票房',unpress_hot,press_hot,'北美票房','北美票房',USBox)}*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === '推荐电影'}
                    title="推荐电影"
                    selectedTitleStyle={{color:'white'}}
                    titleStyle={{color:'rgba(255,255,255,0.3)'}}
                    renderIcon={() => <Image source={require('./image/ios7-star-outline.png')} style={styles.unPressIconColors }/>}
                    renderSelectedIcon={() =><Image source={require('./image/ios7-star.png')} style={styles.pressIconColors}/>}
                    //badgeText="1"
                    onPress={() => this.setState({ selectedTab: '推荐电影' })}>
                    <Featured/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '北美票房'}
                    title="北美票房"
                    selectedTitleStyle={{color:'white'}}
                    titleStyle={{color:'rgba(255,255,255,0.3)'}}
                    renderIcon={() =><Image source={require('./image/hot_unpressed.png')} style={styles.unPressIconColors}/>}
                    renderSelectedIcon={() => <Image source={require('./image/hot_pressed.png')} style={styles.pressIconColors}/>}
                    //renderBadge={() => <USBox />}
                    onPress={() => this.setState({ selectedTab: '北美票房' })}>

                    <Hot/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '搜索'}
                    title="搜索"
                    selectedTitleStyle={{color:'white'}}
                    titleStyle={{color:'rgba(255,255,255,0.3)'}}
                    renderIcon={() =><Image source={require('./image/ios7-search.png')} style={styles.unPressIconColors}/>}
                    renderSelectedIcon={() => <Image source={require('./image/ios7-search-strong.png')} style={styles.pressIconColors}/>}
                    //renderBadge={() => <USBox />}
                    onPress={() => this.setState({ selectedTab: '搜索' })}>

                    <Search/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '我的'}
                    title="我的"
                    selectedTitleStyle={{color:'white'}}
                    titleStyle={{color:'rgba(255,255,255,0.3)'}}
                    renderIcon={() =><Image source={require('./image/ios7-person.png')} style={styles.unPressIconColors}/>}
                    renderSelectedIcon={() => <Image source={require('./image/ios7-person-outline.png')} style={styles.pressIconColors}/>}
                    //renderBadge={() => <USBox />}
                    onPress={() => this.setState({ selectedTab: '我的' })}>

                    <MyView/>
                </TabNavigator.Item>
            </TabNavigator>

        );
    }
    renderTabBarItem(title,iconName,selectedIconName,selectedTab,componentName,component,badgeText){
        return(
        <TabNavigator.Item
            selected={this.state.selectedTab===selectedTab}
            title={title}
            titleStyle={{color:'white'}}
            selectedTitleStyle={styles.selectedTitleStyle} //tabBarItem选中的文字样式
            renderIcon={()=>
                <Image source={require(iconName)} style={styles.iconColors }/>
            }
            renderSelectedIcon={()=>
                <Image source={require(selectedIconName)} style={styles.iconColors }/>
            }
            onPress={() => this.setState({ selectedTab: selectedTab })}>

        >
            <Navigator
                initialRoute={{name: componentName, component:component}}
                configureScene={()=>{
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) =>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator} />
                }}
            />
        </TabNavigator.Item>
        )
    }

}
{/*<TabNavigator.Item
    selected={this.state.selectedTab === '推荐电影'}
    title="推荐电影"
    titleStyle={{color:'white'}}
    renderIcon={() => <Image source={require('./image/ios7-star-outline.png')} style={styles.iconColors }/>}
    renderSelectedIcon={() =><Image source={require('./image/ios7-star.png')} style={styles.iconColors}/>}
    //badgeText="1"
    onPress={() => this.setState({ selectedTab: '推荐电影' })}>
    <Featured/>
</TabNavigator.Item>
<TabNavigator.Item
selected={this.state.selectedTab === '北美票房'}
title="北美票房"
titleStyle={{color:'white'}}
renderIcon={() =><Image source={require('./image/hot_unpressed.png')} style={styles.iconColors}/>}
renderSelectedIcon={() => <Image source={require('./image/hot_pressed.png')} style={styles.iconColors}/>}
//renderBadge={() => <USBox />}
onPress={() => this.setState({ selectedTab: '北美票房' })}>

<USBox/>
</TabNavigator.Item>*/}
let styles=StyleSheet.create({
    renderIcon:{
        paddingTop:6

    },
    unPressIconColors:{
        tintColor:'rgba(255,255,255,0.3)',
        width:28,
        height:28,
        //backgroundColor:'white'
        marginTop:6
    },
    pressIconColors:{
        tintColor:'white',
        width:28,
        height:28,
        //backgroundColor:'white'
        marginTop:6
    },
    featuredRecommend:{

    },
    featuredHot:{
      //zIndex:'hot'
    },
    item:{

    },
    container:{

    }
});