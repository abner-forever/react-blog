import React, { useState, useEffect } from 'react'
import './style.scss'
import ApiBlog from '@/api/apiBlog'
import Cookies from "js-cookie"
import { Button, message, Upload, } from 'antd';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop'
const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false)
    const [checkPassword, setCheckPassword] = useState('')
    const [buttonDisable, setButtonDisable] = useState(true)
    const [fileList, setFileList] = useState([])

    const login = async () => {
        let res = await ApiBlog.login({
            userName: userName,
            password: password
        })
        console.log(res);
        if (res && res.token) {
            let currentCookieSetting = {
                expires: 1
            }
            Object.assign(currentCookieSetting, {})
            Cookies.set('token', res.token, currentCookieSetting)
            Cookies.set('userId', res.userId, currentCookieSetting)
            Cookies.set('userName', res.userName, currentCookieSetting)
            message.success("登录成功")
            props.history.replace('/mine')

        }
    }
    const register = async () => {
        if (!userName || !password) {
            message.info("用户名或密码不能为空")
            return
        }
        let url = await uploadImg();
        await ApiBlog.register({
            userName: userName,
            password: password,
            avator: url
        })
        message.success('注册成功')
        props.history.push(`/mine`)
    }
    useEffect(() => {
        let token = Cookies.get('token')
        if (token) {
            props.history.replace('/mine')
        }
    })
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        console.log('beforeUpload', isLt2M, isJpgOrPng, file, [...fileList, file]);
        setFileList([...fileList, file])
        getImgBase64Data(file, (url) => {
            setImageUrl(url)
        })
        return false;
    }
    const getImgBase64Data = (file, callback) => {
        var reader = new FileReader();
        reader.onload = function (e) {
            callback(e.target.result);
        };
        reader.readAsDataURL(file); // 读取完后会调用onload方法
    }
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const removeImg = (e) => {
        console.log('remove', e);
    }
    const uploadImg = () => {
        const formData = new FormData();
        fileList.forEach(file => {
            console.log('file', file);
            formData.append('avator', file);
        });
        console.log('formData', formData);
        setLoading(true)
        return new Promise((resolve)=>{
            fetch('/api/users/head', {
                method: "POST",
                body: formData //自动修改请求头,formdata的默认请求头的格式是 multipart/form-data
            }).then((res) => res.json()).then((res) => {
                setFileList([])
                setLoading(false)
                resolve(res.url)
            }).catch((err) => {
                message.error(`上传失败：${err}`)
            })
        })
    }

    //检查密码两次输入的密码是否一致
    const checkPasswords = () => {
        if (password !== checkPassword) {
            message.warn('密码不一致')
        } else {
            if (userName !== '') {
                setButtonDisable(false)
            }
        }
    }


    const loginForm = () => {
        return (
            <div >
                <p>用户登录</p>
                <label htmlFor="head">
                </label>
                <div className='form-input'>
                    <input onChange={(e) => { setUserName(e.target.value) }} type="text" name='userName' value={userName} />
                    <input onChange={(e) => { setPassword(e.target.value) }} type="password" name='passWord' value={password} />
                </div>
                <div className='form-submit'>
                    <Button type={'primary'} onClick={login}>登录</Button>
                </div>
            </div>
        )
    }
    const registerForm = () => {
        return (
            <div >
                <p>注册</p>
                <label htmlFor="head" title='头像'>
                    <span> 头像</span>
                    <ImgCrop rotate>
                        <Upload
                            name="avator"
                            listType="picture-card"
                            className="avator-uploader"
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                            fileList={fileList}
                            onRemove={removeImg}
                            title='头像'
                        >
                            {imageUrl ? <div className='head-image'>
                                <img src={imageUrl} alt="avator" style={{ width: '100%' }} />
                            </div> : uploadButton}
                        </Upload>
                    </ImgCrop>
                    <UploadOutlined />
                </label>
                <div className='form-input'>
                    <input placeholder='请输入账号' onChange={(e) => { setUserName(e.target.value) }} type="text" name='userName' value={userName} />
                    <input placeholder='请输入密码' onChange={(e) => { setPassword(e.target.value) }} type="password" name='passWord' value={password} />
                    <input placeholder='再次确认密码' onBlur={checkPasswords} onChange={(e) => { setCheckPassword(e.target.value) }} type="password" name='checkPassWord' value={checkPassword} />
                </div>
                <div className='form-submit'>
                    <Button disabled={buttonDisable} type={'primary'} onClick={register}>注册</Button>
                </div>
            </div>
        )
    }
    return (
        <div className='content-item'>
            <p onClick={() => {
                setIsLogin(!isLogin);
            }}>{isLogin ? '注册' : '登录'}</p>
            <div className='form-item'>
                {
                    isLogin ? loginForm() : registerForm()
                }
            </div>
        </div>
    )
}
export default Login