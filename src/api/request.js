import Common from '@/utils/Common'
import { message } from 'antd'


export default class Fetch{
    static get(url,params){
        const requestUrl = Common.buildRequestUrl(url,params)
        return new Promise((resolve,reject)=>{
            fetch(requestUrl).then(response=>response.json())
                .then((res)=>{
                    if(res.code === 200){
                        resolve(res.data)
                    }else{
                        message.warn(res.msg)
                    }
                }).catch((err)=>{
                    message.warn(err.msg)
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
                    if(res.code === 200){
                        resolve(res.data)
                    }else{
                        message.warn(res.msg)
                    }
                }).catch((err)=>{
                    message.warn(err.msg)
                })
        })
    }
}