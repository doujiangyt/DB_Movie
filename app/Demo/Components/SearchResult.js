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
            movies:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}).cloneWithRows(this.props.results),

        }

    }

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


}
