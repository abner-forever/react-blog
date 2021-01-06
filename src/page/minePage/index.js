import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie"
import ApiBlog from '@/api/apiBlog'
import './style.scss'

const MinePage = (props) => {
    const [userInfo, setUserInfo] = useState({})
    //eslint-disable-next-line
    useEffect(() => {
        let userId = Cookies.get('userId')
        if (!userId) {
            props.history.replace('/login')
            return
        }
        getuserInfo(userId)
    }, [props.history])
    const getuserInfo = async (userId) => {
        let res = await ApiBlog.userInfo({
            userId
        })
        if (res) {
            console.log('res',res);
            setUserInfo(res)
        }

    }
    const loginout = () => {
        let currentCookieSetting = {
            expires: -1
        }
        Object.assign(currentCookieSetting, {})
        Cookies.set('token', '', currentCookieSetting)
        Cookies.set('userId', '', currentCookieSetting)
        Cookies.set('userName', '', currentCookieSetting)
        props.history.replace('/login')
    }
    return (
        <div className='content'>
            <div>
                <img className='head' src={userInfo.avatar} alt="" />
                <p>用户信息:{userInfo.userName}</p>
            </div>
            <div className='write-article'>
                <p onClick={() => { props.history.push('/addArticle') }}>去写文章</p>
                <p onClick={() => { props.history.push('/myArticle') }}>我的文章</p>
            </div>
            <button onClick={loginout}>退出登录</button>
        </div>
    )
}
export default MinePage