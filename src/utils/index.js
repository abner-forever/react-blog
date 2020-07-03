export default class Commutils{
    static  buildRequestUrl(url,params) {
        let param = ''
        for(let key in params){
            param = param+'&'+key+'='+params[key]
        }
        return url+'?'+param
    }
}
export const host = 'http://localhost:3000'
// export const host = 'http://foreverheart.top'