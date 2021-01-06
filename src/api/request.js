
import Http from '@/utils/http'
import { message } from 'antd'

const HOST = 'http://foreverheart.top'
const upLoad = new Http({
    // baseUrl: HOST,
    headers: { 'Content-Type': 'application/json' },
    interceptors: {
        request(body) {
            let adapterData = () => {
                let data = {
                    ...body
                }
                return JSON.stringify(data)
            }

            return adapterData(body)
        },
        response(res) {
            return new Promise((resolve, reject) => {
                let code = res.code
                if (code == 200) {
                    resolve(res.data)
                } else if (code == 500) {
                    message.warn(res.msg)
                    reject(res.msg)
                }
            })
        }
    }
})
export default upLoad