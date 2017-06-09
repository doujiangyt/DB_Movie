/**
 * Created by ${豆浆} on 2017/6/3.
 */
import React,{Component} from 'react';
import {
    ListView,
    Text,
    View,
    Image,
    ActivityIndicator,
    TouchableHighlight,
} from 'react-native';
import styles from '../Styles/Main';
import MovieDetails from './MovieDetails'

export default class MovieList extends Component{
    constructor(props){
        super(props);
        this.state={
            movies:[],
            loaded:false,
            count:100,
            start:0,
            total:250,
        }
        this.dataSource=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.REQUEST_URL='https://api.douban.com/v2/movie/top250';
    }
    requestURL(
        url=this.REQUEST_URL,
        count=this.state.count,
        start=this.state.start,
    ){
        return(
            `${url}?count=${count}&start=${start}`
        );
    }
    //渲染listView组件
    render(){
        //在listview获取数据之前，我们先要给一个加载中的视图。
        //let state=this.state.movies;
        if(!this.state.loaded){
            return(
                <View style={styles.loading}>
                   <ActivityIndicator size='large' color='#6535c9' />
                </View>
            );
        }
        return(
                <ListView
                    renderFooter={this.renderFooter.bind(this)}
                    pageSize={this.state.count}
                    initialListSize={this.state.count}       //listview初始显示的数量
                    onEndReached={this.endReached.bind(this)}
                    style={{marginTop:56}}
                    dataSource= {this.dataSource.cloneWithRows(this.state.movies)}
                    renderRow={(rowData)=>this.renderRow(rowData) }
                />
        );
    }
    renderFooter(){
        if(this.state.total>this.state.start){
            return(
                <View style={{
                    marginVertical:10,
                    alignSelf:'center'
                }}>
                    <ActivityIndicator  color='#6535c9'/>
                    <Text style={{color:'#6535c9', fontSize:12,}}>加载中...</Text>
                </View>
            );
        }else{
            return(
                <View style={{
                    marginVertical:10,
                    alignSelf:'center'
                }}>
                    <Text style={{
                        fontSize:12,
                        color:'#6535c9'
                    }}>没有更多可以显示的了:)</Text>
                </View>
            );
        }
    }
    loadMore(){
         fetch(this.requestURL())
                     .then(response=>response.json())
                     .then(responseData=>{
                         let newStart=this.state.start+responseData.count;
                         this.setState({
                             movies:[...this.state.movies,...responseData.subjects],
                             start:newStart
                         });
                     })
                     .catch((error)=>{
                         console.error(error)
                         //alert(error);
                     })
                     .done();

    }
    endReached(){
        //如果有还有数据就重新再次请求一次
        if(this.state.total>this.state.start){
            this.loadMore();
        }
    }

    showMovieDetails(rowData){
        this.props.navigator.push({
            name:rowData.title,
            component:MovieDetails,
            passProps:{
                rowData,
            }
        });
    }
    renderRow(rowData){
        return(
            <TouchableHighlight
                underlayColor='rgba(34,26,38,0.1)'
                onPress={()=>this.showMovieDetails(rowData)}
                >

                <View style={styles.item}>
                    <Image source={{uri:rowData.images.large}} style={styles.image}/>
                    <View style={styles.textContent}>
                        <Text style={styles.title}>{rowData.title}</Text>
                        <Text style={styles.description}>{rowData.original_title}({rowData.year})</Text>
                        <Text style={styles.rating}>{rowData.rating.average}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    componentDidMount() {
        this.fetchData();
    }
    fetchData(){
        //请求数据
        fetch(this.requestURL())
            .then(response=>response.json())
            .then(responseData=>{
                // this.state.movies=responseData.subjects;
                let newStart=responseData.start + responseData.count;
                this.setState({
                    loaded:true,
                    movies:responseData.subjects,
                    total:responseData.total,
                    start:newStart
                });
            })
            .catch((error)=>{
                console.error(error)
                alert(error);
            })
            .done();

    }


}