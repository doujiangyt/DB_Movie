/**
 * Created by admin on 2017/6/6.
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
export default class MovieDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            movies:'',

            isLoaded:false
        }

    }
    componentDidMount(){
        var REQUEST_URL=`https://api.douban.com/v2/movie/subject/${this.props.rowData.id}`

        fetch(REQUEST_URL)
            .then(response=>response.json())
            .then(responseData=>{
                // this.state.movies=responseData.subjects;
                this.setState({
                    movies:responseData,
                    isLoaded:true
                });
            })
            .catch((error)=>{
                console.error(error)
                alert(error);
            })
            .done();
    }
    render(){
        if(!this.state.isLoaded){
            return(
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color='#6535c9' />
                </View>
            );

        }
        let movie=this.state.movies;
        let summary=movie.summary.split(/\n/).map(p=>{
            return(
                <View style={{marginBottom:15,paddingLeft:6,paddingRight:6}}>
                    <Text style={styles.item_text}>{p}</Text>
                </View>
            );
        });
            return(
                <View style={styles.container}>
                    <View style={[styles.item,{flexDirection:'column'}]}>
                            {summary}
                    </View>
                </View>
            );
        }

}