/**
 * Created by admin on 2017/6/7.
 * 这是一个搜索界面，包括从服务器搜索电影，并展示搜索记录等
 */

import React,{Component} from 'react';
import {
    Image,
    TextInput,
    ListView,
    Text,
    View,
    Keyboard,
    AsyncStorage,
    TouchableOpacity,
    ActivityIndicator,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import SearchResult from './SearchResult';
import styles from '../Styles/Main';
export default class SearchFrom extends Component{
    constructor(props){
        super(props);
        this.state={
            query:'',
            loaded:false,
            searchHistory:[]
        }

        //在初始化的时候，得到AsyncStorage里面的数据
        AsyncStorage.getItem('searchHistoryItem')
            .then((searchHistory)=>{
                if(searchHistory){
                    this.setState({
                        searchHistory:JSON.parse(searchHistory)    //将字符串变成数组。
                    });
                }
            });
    }
    searchHistory(item){
            let newSearchHistory = [...new Set([item, ...this.state.searchHistory])];//使用spred操作符
            this.setState({
                searchHistory: newSearchHistory
            });
            //在这里把数据存储进asyncStoryage
            AsyncStorage.setItem('searchHistoryItem', JSON.stringify(newSearchHistory));//接收两个参数，一个是key，另一个是值，但是值只能接收string类型的，所以要将数组变成字符串。

    }
//https://api.douban.com/v2/movie/search?q=${this.state.query}
    fetchData(){
        if(!this.state.query){      //如果查询时，内容为空，就返回
            return;
        }

        let REQUEST_URL=`https://api.douban.com/v2/movie/search?q=${this.state.query}`
        this.searchHistory(this.state.query);
         fetch(REQUEST_URL)
                     .then(response=>response.json())
                     .then(responseData=>{
                         this.setState({loaded:true})
                         this.props.navigator.push({
                             name:`${this.state.query}相关电影`,
                             component:SearchResult,
                             passProps:{
                                 results:responseData.subjects,
                                 queryWords:this.state.query,
                                 responseDataTotal:responseData,
                             }
                         });
                     })
                     .catch((error)=>{
                         console.error(error)
                         alert(error);
                     })
                     .done();

    }
    render(){
        return(
            <View style={[SearchFromStyles.container,{paddingTop:60}]}>
               <View style={SearchFromStyles.search}>
                   <TextInput
                       //secureTextEntry={true} 设置文本的安全输入
                       value={this.state.query}
                       autoFocus={true}        //自动获取焦点
                       placeholder='搜索...' //占位符
                       //clearButtonMode='always'  //清除按钮出现在文本视图右侧的时机
                       returnKeyType='search'
                       underlineColorAndroid='transparent'
                       onChangeText={(query)=>{        //当输入框中的文字发生改变时，将改变后的值赋值给初始的query
                            this.setState({
                                query
                            })
                       }}
                       onSubmitEditing={               //这个方法是用来点击软键盘上的搜索或者enter时，将数据进行提交，到服务器上去查询
                              this.fetchData.bind(this)
                               // this.submitEditing.bind(this)
                       }


                      // onBlur={Keyboard.dismiss()}
                   />
                   <ActivityIndicator
                       size='small'
                       color='#6535c9'
                       animating={this.state.loaded}
                       style={{
                       position:'absolute',
                       right:10,
                       top:20,

                   }}/>
               </View>
                <Text style={SearchFromStyles.searchHeader}>搜索历史</Text>
                    <ListView
                        dataSource={ new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}).cloneWithRows(
                            this.state.searchHistory
                        )}
                        renderRow={this.renderRow.bind(this)}
                    />

            </View>
        );
    }
    //点击提交按钮时的相关操作
    submitEditing(){
        //隐藏键盘
        Keyboard.dismiss();
        //返回一个加载中的视图
       /* if(!this.state.loaded){

                return(
                    <View style={styles.loading}>
                        <ActivityIndicator size='large' color='#6535c9' />
                    </View>
                );

        }*/
        //下载数据
        this.fetchData.bind(this);
    }


    //跳转到搜索结果界面
   async  JumpToSearchResult(item){           //当使用这个方法的时候，在给query赋值时，这时候搜索，可能搜索结果为空，因为他直接去执行了fetchData方法，这时候需要使用es7中的async以及await
       // alert(item)
       try {
         await  this.setState({             //表示执行完这个方法后，再去执行下面的方法
               query:item
           });
           this.fetchData();
       }catch (error){
           alert(error)
       }

    }
    //点击删除图标
    deleteSearchHistoryItem(item){
        let newSearchHistorySet=new Set(this.state.searchHistory);
        newSearchHistorySet.delete(item);
        let newSearchHistory=[...newSearchHistorySet];
        this.setState({
            searchHistory: newSearchHistory
    });
        AsyncStorage.setItem('searchHistoryItem',JSON.stringify(newSearchHistory));
    }

    renderRow(item){
        return(
            <TouchableHighlight

                underlayColor='rgba(34,26,38,0.1)'
                onPress={()=>{this.JumpToSearchResult(item)}}//点击的搜索历史条目的时候，直接根据这个条目跳转到SearResult界面。
            >
                <View style={SearchFromStyles.searchContainer}>
                    <TouchableOpacity onPress={()=>this.deleteSearchHistoryItem(item)}>
                        <Image source={require('../image/ios7-close-outline.png')} style={SearchFromStyles.image}/>
                    </TouchableOpacity>
                    <Text style={SearchFromStyles.text}>{item}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const SearchFromStyles=StyleSheet.create({
    text:{
        marginLeft:6,
    },
    image:{
        width:20,
        height:20,
        paddingRight:6,
    },
    searchContainer:{
        borderBottomWidth:1,
        borderBottomColor:'rgba(100,53,201,0.2)',
        paddingLeft:6,
        alignItems:'center',
        height:50,
        flexDirection:'row',
    },
    searchHeader:{
        color:'rgba(0,0,0,0.3)',
        marginTop:60,
        marginLeft:10,
        fontSize:14,
        marginBottom:20,
    },
    container:{
        flex:1,
    },
    search: {

        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 6,
        borderColor:'rgba(100,53,201,0.2)',
        borderBottomWidth:1,

    }
});