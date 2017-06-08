/**
 * Created by admin on 2017/6/1.
 */
let NetUtil={
    postJson(url,data,callback){
        var fetchOptions={
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'multipart/from-data;boudary=6ff46e0b6b5148d984f148b6542e5a5d'
            },
            body:data
        };
        fetch(url,fetchOptions)
            .then((response)=>response.text())
            .then((responseText)=>{
            callback(responseText);
            })
            .catch((error)=>{
            console.error(error);
            })
            .done();
    }
}

export default NetUtil;