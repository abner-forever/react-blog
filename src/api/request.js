import Common from '../utils/Common'

export default class Fetch{
    static get(url,params){
        const requestUrl = Common.buildRequestUrl(url,params)
        return new Promise((resolve,reject)=>{
            fetch(requestUrl).then(response=>response.json())
                .then((res)=>{
                    if(res.code === 'A0000'){
                        resolve(res.data)
                    }else{
                        reject(res.msg)
                    }
                }).catch((err)=>{
                    reject(err)
                })
        })
    }
}