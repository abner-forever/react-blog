export default class Commutils{
    static  buildRequestUrl(url,params) {
        let param = ''
        for(let key in params){
            param = param+'&'+key+'='+params[key]
        }
        return url+'?'+param
    }
    //判断两个对象的内容是否相等
    static isObjectValueEqual(a, b) {
        // 判断两个对象是否指向同一内存，指向同一内存返回true
        if (a === b) return true
        // 获取两个对象键值数组
        let aProps = Object.getOwnPropertyNames(a)
        let bProps = Object.getOwnPropertyNames(b)
        // 判断两个对象键值数组长度是否一致，不一致返回false
        if (aProps.length !== bProps.length) return false
        // 遍历对象的键值
        for (let prop in a) {
          // 判断a的键值，在b中是否存在，不存在，返回false
          if (b.hasOwnProperty(prop)) {
            // 判断a的键值是否为对象，是则递归，不是对象直接判断键值是否相等，不相等返回false
            if (typeof a[prop] === 'object') {
              if (!isObjectValueEqual(a[prop], b[prop])) return false
            } else if (a[prop] !== b[prop]) {
              return false
            }
          } else {
            return false
          }
        }
        return true
      }
}