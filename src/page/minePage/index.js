import React, { useEffect, useState } from 'react'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import Cookies from "js-cookie"
import ApiBlog from  '@/api/apiBlog'
const MinePage = (props) => {
    const [userInfo,setUserInfo] = useState({})
    useEffect(() => {
        getuserInfo()
    },[])
    const getuserInfo = async()=>{
        let userId = Cookies.get('userId')
        let res = await ApiBlog.userInfo({
            userId
        })
        if(res){
        setUserInfo(res)
        }
       
    }
    const loginout = ()=>{
        let currentCookieSetting = {
            expires: 1
          }
        Object.assign(currentCookieSetting, {})
        Cookies.set('token','',currentCookieSetting)
        props.history.replace('/login')
    }
    return (
       <div>
           <p>用户信息:{userInfo.userName}</p>
           <button onClick={loginout}>退出登录</button>
       </div>
    )
}
export default MinePage