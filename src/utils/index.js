import { useState } from 'react'
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

export const useFetch = (config, deps) => {
    const abortController = new AbortController()
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState()
  
    useEffect(() => {
      setLoading(true)
      fetch({
        ...config,
        signal: abortController.signal
      })
        .then((res) => setResult(res))
        .finally(() => setLoading(false))
    }, deps)
  
    useEffect(() => {
      return () => abortController.abort()
    }, [])
  
    return { result, loading }
  }