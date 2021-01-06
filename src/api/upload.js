import Http from '@/utils/http'
import { message } from 'antd'

const HOST = 'http://foreverheart.top'
export const upLoad = new Http({
    // baseUrl: HOST,
    // headers: { 'Content-Type': 'application/json' },
    interceptors:{
        request(body){
            let adapterData = {
                ...body
            }
            return adapterData
        },
        response(res){
            return new Promise((resolve,reject)=>{
                let code = res.code
                if(code == 200){
                    resolve(res.data)
                }else if(code == 500){
                    message.warn(res.msg)
                    reject(res.msg)
                }
            })
        }
    }
})