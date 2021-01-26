import Common from './Common'
class Http {
    constructor(config) {
        this.baseUrl = config.baseUrl || ''
        this.headers = config.headers || {}
        if (config.interceptors && typeof config.interceptors.response === 'function') {
            this.interceptorsResponse = config.interceptors.response
        }
        if (config.interceptors && typeof config.interceptors.requset === 'function') {
            this.interceptorsRequest = config.interceptors.requset
        }
    }
    interceptorsResponse(res) {
        return new Promise((resolve) => {
            resolve(res)
        })
    }
    interceptorsRequest(res) {
        return res
    }
    commonFetch(url, headers, body, method = 'GET') {
        let initParams = {}
        if (method === 'GET') {
            url = Common.buildRequestUrl(url, body)
            initParams = {
                method
            }
        } else {
            initParams = {
                method,
                headers: { ...headers },
                body: JSON.stringify(body)
            }
        }
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + url, initParams).then(response => response.json()).then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })

    }
    async post(url, body, options) {
        let { headers = {} } = options || {}
        headers = { ...this.headers, ...headers }
        let res = await this.commonFetch(url, headers, this.interceptorsRequest(body), 'POST')
        return new Promise((resolve, reject) => {
            try {
                this.interceptorsResponse(res).then((result) => {
                    resolve(result)
                }).catch((err) => {
                    reject(err)
                })
            } catch (error) {
                reject(error)
            }
        })
    }
    async get(url, body, options) {
        let { headers = {} } = options || {}
        headers = { ...this.headers, headers }
        let res = await this.commonFetch(url, headers, body, options)
        return new Promise((resolve, reject) => {
            try {
                this.interceptorsResponse(res).then((result) => {
                    resolve(result)
                }).catch((err) => {
                    reject(err)
                })
            } catch (error) {
                reject(error)
            }
        })
    }
}
export default Http