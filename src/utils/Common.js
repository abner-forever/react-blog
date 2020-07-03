class Common {
    static formatTime() {
        let time = new Date()
        let year = time.getFullYear()
        let month = time.getMonth() + 1
        let day = time.getDay()
        let hour = time.getHours()
        let minute = time.getMinutes()
        let second = time.getSeconds()
        let timeForat = `${year}-${month}-${day} ${hour}:${minute}:${second}`
        return timeForat
    }
    static buildRequestUrl(url,params) {
        let param = ''
        for(let key in params){
            param = param+'&'+key+'='+params[key]
        }
        return url+'?'+param
    }
}

export default Common