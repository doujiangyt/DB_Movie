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
import MovieDetails from './MovieDetails';
import styles from '../Styles/Main';
//let REQUEST_URL=`https://api.douban.com/v2/movie/search?q=${this.state.query}`
export default class SearchResult extends Component{
    constructor(props){
        super(props);
        this.state={
           // movies:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}).cloneWithRows(this.props.results),
            movies:this.props.results,
            loaded:false,
            count:this.props.responseDataTotal.count,
            start:this.props.responseDataTotal.start,
            total:this.props.responseDataTotal.total,
        }
        this.dataSource=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.REQUEST_URL=`https://api.douban.com/v2/movie/search?q=${this.props.queryWords}`


    }
    requestURL(
        url=this.REQUEST_URL,
        count=this.state.count,
        start=this.state.start,
    ){
        return(
            `${url}&count=${count}&start=${start}`
        );
    }

    componentDidMount(){   //因为数据是从上个界面传过来的，所以想要给用户一个加载数据的过程就自己定义一个延时1.5s的加载视图
        setTimeout(()=>{
           this.setState({
               loaded:true
           });
        },1500)

    }

    render() {
        //在listview获取数据之前，我们先要给一个加载中的视图。
        //let state=this.state.movies;

        if (!this.state.loaded) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color='#6535c9'/>
                </View>
            );
        }
            return (
                <ListView
                    renderFooter={this.renderFooter.bind(this)}
                    onEndReached={this.endReached.bind(this)}
                    pageSize={this.state.count}
                    initialListSize={this.state.count}
                    style={{marginTop: 56}}
                    dataSource={this.dataSource.cloneWithRows(this.state.movies)}
                    renderRow={(rowData) => this.renderRow(rowData) }
                />

            );

    }
    endReached(){
        if(this.state.total>this.state.start){
            this.loadMore();
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
                        color:'rgba(255,255,255,0.8)'
                    }}>没有更多可以显示的了:)</Text>
                </View>
            );
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


}
