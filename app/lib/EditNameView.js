/**
 * Created by admin on 2017/6/1.
 */
import React,{Component} from 'react';
import {

    StyleSheet,

    View,

    TextInput,

} from 'react-native';

export default class EditNameView extends Component{
    constructor(props){
        super(props);
        this.state={text:''};

    }
    render(){
        return(
            <View style={LoginStyles.TextInputView}>
                <TextInput style={LoginStyles.TextInput}

                           underlineColorAndroid={'transparent'}
                           placeholder={this.props.name}
                           onChangeText={
                    (text)=>{
                        this.setState({text});
                        this.props.onChangeText(text);//通过TextInput的onChangeText方法获取到用户输入的内容。
                    }
                }/>
            </View>
        );
    }
}

const  LoginStyles=StyleSheet.create({
    TextInputView:{
        marginTop:10,
        height:50,
        backgroundColor:'#ffffff',
        borderRadius:5,
        borderWidth:0.5,
        borderColor:'#000000',
        flexDirection:'column',
        justifyContent:'center',

    },

    TextInput:{
        backgroundColor:'#ffffff',
        height:45,
        margin:18,
    },
})
//利用TextInput的onChangeText 方法获取到输入框中输入的数据，在利用EditView 传入的onChangeText回调方法，
// 把数据回调出封装的EditView，在外部获取到TextInput输入的数据。