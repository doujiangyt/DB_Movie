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
var REQUEST_URL='https://api.douban.com/v2/movie/top250';
export default class MovieList extends Component{
    constructor(props){
        super(props);
        this.state={
            movies:null,
        }
    }

    //渲染listView组件
    render(){
        //在listview获取数据之前，我们先要给一个加载中的视图。
        let state=this.state.movies;
        if(!state){
            return(
                <View style={styles.loading}>
                   <ActivityIndicator size='large' color='#6535c9' />
                </View>
            );
        }
        return(
                <ListView
                    style={{marginTop:56}}
                    dataSource= {this.state.movies}
                    renderRow={(rowData)=>this.renderRow(rowData) }
                />
        );
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
    //{uri:rowData.images.large}
//`${rowData.original_title}(${rowData.year})`
    componentDidMount() {
        this.fetchData();
    }
    fetchData(){
        //请求数据
        fetch(REQUEST_URL)
            .then(response=>response.json())
            .then(responseData=>{
                // this.state.movies=responseData.subjects;
                this.setState({
                    movies:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}).cloneWithRows(responseData.subjects)
                });
            })
            .catch((error)=>{
                console.error(error)
                alert(error);
            })
            .done();

    }


}