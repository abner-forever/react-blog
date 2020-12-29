import Common from '@/utils/Common'
import { message } from 'antd'


export default class Fetch{
    static get(url,params){
        const requestUrl = Common.buildRequestUrl(url,params)
        return new Promise((resolve,reject)=>{
            fetch(requestUrl).then(response=>response.json())
                .then((res)=>{
                    if(res.code === 'A0000'){
                        resolve(res.data)
                    }else{
                        message.warn(res.msg)
                    }
                }).catch((err)=>{
                    reject(err)
                })
        })
    }
    static post(url,params){
        let req = new Request(url,{
            method:'POST',
            headers:{'Content-Type': 'application/json;charset=UTF-8'},
            body:JSON.stringify(params)
        })
        return new Promise((resolve,reject)=>{
            fetch(req).then(response=>response.json())
                .then((res)=>{
                    console.log('request',res);
                    if(res.code === 'A0000'){
                        resolve(res.msg)
                    }else{
                        reject(res.msg)
                    }
                }).catch((err)=>{
                    reject(err)
                })
        })
    }
}