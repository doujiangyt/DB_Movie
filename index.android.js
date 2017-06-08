/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*import React,{Component} from 'react';
import {AppRegistry,Text} from 'react-native';

class HelloWorldApp extends Component{
    render(){
        return(
            <Text>Hello World!</Text>
        );
    }
 //AppRegistry.registerComponent('MyProject',()=>HelloWorldApp);
}*/
/*import React,{ Component } from 'react';
import { AppRegistry , Image} from 'react-native';
class  Bananas extends Component {
    render(){
        let pic = {
            uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return(
            <Image source={pic} style={{width:300,height:300}}/>
        );
    }
}
 AppRegistry.registerComponent('MyProject', () => Bananas);*/
/*
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}



                class LotsOfGreetings extends Component {
                    render() {
                    return (
                    <View style={{alignItems: 'center'}}>
                    <Greeting name='Rexxar' />
                    <Greeting name='Jaina' />
                    <Greeting name='Valeera' />
                    </View>
                    );
                }
                }

                AppRegistry.registerComponent('MyProject', () => LotsOfGreetings);*/
/*import React,{ Component } from 'react';
import { AppRegistry ,Text , Image,View } from 'react-native';

class Greeting extends Component{
    render(){
        let pic = {
            uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        <Image source={pic} style={{width:300,height:300}}/>
        return (
        <Text>Hello {this.props.name}!</Text>

        );
    }

}
class LotsOfGreeting extends Component{
    render(){
        return(
        <View style={{alignItems:'center'}}>
            <Greeting name='张三' />
            <Greeting name='李四'/>
            <Greeting name='王五'/>
        </View>
        );
    }
}
AppRegistry.registerComponent("MyProject",()=>LotsOfGreeting);*/

/*
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
    //构造
    constructor(props) {
        super(props);
        this.state = { showText: true };
        //延时，同setTimeOut
        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }
    //渲染Text控件
    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}*/


/*import React ,{ Component } from 'react';
import { AppRegistry,Text ,StyleSheet,View} from 'react-native';

class LotsOfStyles extends Component{

    render(){
        return(
            <View>
                <Text style={styles.red} >just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue,styles.red]}>bigblue,then red</Text>
                <Text style={[styles.red,styles.bigblue]}>red,then bigblue</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});*/
/*
//导入其他的.js文件
import HelloWorldApp from ' ./src/HelloWord.js';
import React ,{Component} from 'react';
import { AppRegistry } from 'react-native';*/

/*import React,{ Component } from 'react';
import { AppRegistry ,Text,TouchableHighlight,View} from 'react-native';*/


/*class FixedDimensionBasic extends Component{
    render(){
        return(
            <View style={{flex:1,

                flexDirection:'row',
                //justifyContent:'space-between',
                justifyContent:'center',
                alignItems:'stretch',
            }} >
             {/!* <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
              <View style={{width:100,height:100,backgroundColor:'skyblue'}}/>
                <View style={{width:150,height:150,backgroundColor:'steelblue'}}/>*!/}
                <View style={{width:50,height:50 ,backgroundColor:'powderblue'}}/>
                <View style={{width:50,height:50,backgroundColor:'red'}}/>
                <View style={{width:50,height:50,backgroundColor:'steelblue'}}/>
            </View>
        );
    }
}*/
//处理文本输入
/*class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};

    }

    render() {
        return (
            <View style={{padding: 10}}>
                < TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && ':cake').join(' ')}
                </Text>
            </View>
        );


    }
}*/
//使用ScrollView
/*class IScrolledDownAndWhatHappenedNextShockedMe extends Component{
    render(){
        return(
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Image source={require('./img/favicon.jpg')}/>
                <Text style={{fontSize:80}}>React Native</Text>

            </ScrollView>
        );
    }
}*/
//使用listView
/*class ListViewBasics extends Component{
    //初始化数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['John', 'Joel', 'Jimmy', 'Jackson',
                'Jillian', 'Julie', 'Devin','John', 'Joel', 'Jimmy', 'Jackson',
                'Jillian', 'Julie', 'Devin','John', 'Joel', 'Jimmy', 'Jackson',
                'Jillian', 'Julie', 'Devin','John', 'Joel', 'Jimmy', 'Jackson',
                'Jillian', 'Julie', 'Devin','John', 'Joel', 'Jimmy', 'Jackson',
                'Jillian', 'Julie', 'Devin','John', 'Joel', 'Jimmy', 'Jackson',
                'Jillian', 'Julie', 'Devin'])
        };
    }
        render(){
            return (
                <View style={{flex:1,paddingTop:22}}>  //根布局
                    <ListView                           //控件
                    dataSource={this.state.dataSource}  //数据
                    renderRow={(rowData)=><Text style={{fontSize:40}}>{rowData}</Text>}  //条目
                    />
                </View>
            );
        }


}*/
//从某个地址请求数据，以及指定请求方式，请求头，请求体等,他的请求天然就是异步的
/*fetch('https://mywebsite.com/endpoint/',{
    method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        firstParam:'yourValue',
        secondParam:'yourOtherValue',
    })
})

var myRequest =new Request('http://localhost/flowers.jpg',{
    method:'POST',
    headers:{
        'Accept':'application/json'
    }
});
var myURL =myRequest.url;
var myMethod=myRequest.method;
var myCard =myRequest.credentials;

fetch(myRequest)
    .then(function (response) {
    return response.blob();
})
    .then(function (response) {
        var objectURL =URL.createObjectURL(response);
        myImage.src=objectURL;
    })
//*/
/*class NetWorkRequest extends Component{


    render(){
       let json= getMoviesFromApiAsync(){
            return fetch('http://facebook.github.io/react-native/movies.json')
                .then((response)=>response.json())
                .then((responseJson)=>{
                    return responseJson.movies;
                })
                .catch((error)=>{
                    console.error(error);
                });
        }


        return(
            <View>
                <Text style={{alignItems:'flex-start'}}>json </Text>
            </View>
        );

    }*/
//可以点击的组件
/*class MyButton extends  Component{
    _onPressButton(){
        console.log("You tapped the button!");
    }

    render(){
        return(
            <TouchableHighlight onPress={this._onPressButton()}>
                <Text style={{alignItems:'center' ,justifyContent:'center'}}>Button</Text>
            </TouchableHighlight>
        );
    }
}*/
/*'use strict'
import React ,{ Component } from 'react'
import {AppRegistry,StyleSheet,Image,Text,View,ListView} from 'react-native';
import {FadeInView} from './src/Animate/FadeInView';*/
/*var REQUEST_URL='https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var styles=new StyleSheet.create({
    container:{
        flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#f5fcff'
    },
    thumbnail:{
        width:100,height:80
    },
    rightContainer:{
        flex:1,

    },
    title:{
        fontSize:20,marginBottom:8,textAlign:'center'
    },
    year:{
        textAlign:'center'
    },

});

class ReactNativeTest extends Component{
    constructor(props){
        super(props);

        this.state ={
            movies:null,
        };
    }

    render(){
        if(!this.state.movies){
            return this.renderLoadingView();
        }
        var movies =this.state.movies[1];
        return this.renderMovies(movies);
    }

    fetchData(){
        fetch(REQUEST_URL,{
            method:'GET',
        })
            .then((response)=>response.json())
            .then((responseData)=>{
            this.setState({
                movies:responseData.movies,
            });
            })
            .catch((error)=>{
                console.error(error);
            });


    }


    componentDidMount(){
        this.fetchData();
    }

    renderLoadingView(){
        return (
            <View style={styles.container}>
                <Text>
                    正在加载电影数据......
                </Text>
            </View>
        );
    }

    renderMovies(movie){
        return(
            <View style={styles.container}>
                <Image source={{uri:movie.posters.thumbnail}} style={styles.thumbnail}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }


}*/

/*let REQUEST_URL='https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'  //请求的地址
let styles = new StyleSheet.create({         //用到的样式表
    container:{
        flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#888888'
    },
    thumbnail:{
      width:100,height:80,
        marginLeft:30
    },
    rightContainer:{
      flex:1
    },
    title:{
        fontSize:20,marginBottom:8,
       textAlign:'center',
    },
    year:{
      textAlign:'center'
    },
    mpaa_rating:{
      fontSize:16,
      color:'#770000'
    }
});

class ReactNativeRequestNetWork extends Component{
   /!* //初始化数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['John', 'Joel', 'Jimmy', 'Jackson',
                'Jillian', 'Julie', 'Devin','John', 'Joel', 'Jimmy', 'Jackson',
                'Jillian', 'Julie', 'Devin','John', 'Joel', 'Jimmy', 'Jackson',
                'Jillian', 'Julie', 'Devin','John', 'Joel', 'Jimmy', 'Jackson',
                'Jillian', 'Julie', 'Devin','John', 'Joel', 'Jimmy', 'Jackson',
                'Jillian', 'Julie', 'Devin','John', 'Joel', 'Jimmy', 'Jackson',
                'Jillian', 'Julie', 'Devin'])
        };
    }*!/
    constructor(props){
        super(props);
        const ds=new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={   //初始的时候是没有数值的，
            dataSource:null,
        }
    }

    render(){
        if(!this.state.dataSource){
           return  this.useLoadingView();
        }
            let movies=ds.cloneWithRows(movies);
            return this.hasDataView(movies);
    }
    //render渲染完视图后，自动调用这个方法会去加载数据
    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        fetch(REQUEST_URL,{
            method:'GET'
        })
            .then((response)=>(response.json()))
            .then((responseData)=>{
            this.setState({        //重新设置获取数据后的movies的数据。
                movies:responseData.movies
            });
            });
    }

    useLoadingView(){
        return(
            <View style={styles.container}>
                <Text > 正在加载中,请稍后......</Text>
            </View>
        );
    }
    hasDataView(movies){
        return(
           /!* <View style={styles.container}>
                <Image source={{uri:movies.posters.thumbnail}} style={styles.thumbnail}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movies.title}</Text>
                    <Text style={styles.year}>{movies.year}</Text>
                </View>
            </View>*!/
            <View style={styles.container}>
                <ListView>
                    dataSource={ds.cloneWithRows(movies)}  //数据
                    renderRow={(rowData)=>
                    <View>
                        <Image source={{uri:movies.posters.thumbnail}} style={styles.thumbnail}/>
                        <View>
                            <Text style={styles.title}>{movies.title}</Text>
                            <Text style={styles.year}>{movies.year}</Text>
                            <Text style={styles.mpaa_rating}>{movies.mpaa_rating}</Text>
                        </View>

                    </View>}
                </ListView>
            </View>
        );
    }
}*/

import React,{Component} from 'react';
import {

    AppRegistry,

} from 'react-native';
/*import Main from './DemoOne/main';*/
import Navigator from './app/navigator';
/*import Splash from './app/ui/Splash';*/




AppRegistry.registerComponent('MyProject',()=>Navigator);


