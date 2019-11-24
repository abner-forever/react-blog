export default class Commutils{
    static  buildRequestUrl(url,params) {
        let param = ''
        for(let key in params){
            param = param+'&'+key+'='+params[key]
        }
        return url+'?'+param
    }
}