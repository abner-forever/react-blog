import React, { useState, useEffect } from 'react'
import './style.scss'
import ApiBlog from '@/api/apiBlog'
import Cookies from "js-cookie"
import { message } from 'antd'
const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const login = async () => {
        let res = await ApiBlog.login({
            userName: userName,
            password: password
        })
        if (res.token) {
            let currentCookieSetting = {
                expires: 1
            }
            Object.assign(currentCookieSetting, {})
            Cookies.set('token', res.token, currentCookieSetting)
            Cookies.set('userId', res.userId, currentCookieSetting)
            Cookies.set('userName', res.userName, currentCookieSetting)
            props.history.replace('/mine')
            message.success("登录成功")
        }
    }
    const register = async () => {
        if (!userName || !password) {
            message.info("用户名或密码不能为空")
            return
        }
        await ApiBlog.register({
            userName: userName,
            password: password
        })
    }
    useEffect(() => {
        let token = Cookies.get('token')
        if (token) {
            props.history.replace('/mine')
        }
    })
    return (
        <div className='content'>
            <div className='form-item'>
                <div className='form-input'>
                    <input onChange={(e) => { setUserName(e.target.value) }} type="text" name='userName' value={userName} />
                    <input onChange={(e) => { setPassword(e.target.value) }} type="password" name='passWord' value={password} />
                </div>
                <div className='form-submit'>
                    <button onClick={login}>登录</button>
                    <button onClick={register}>注册</button>
                </div>
            </div>
        </div>
    )
}
export default Login