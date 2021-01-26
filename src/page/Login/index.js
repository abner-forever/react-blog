import React, { useState, useEffect, useRef } from 'react'
import './style.scss'
import ApiBlog from '@/api/apiBlog'
import Cookies from "js-cookie"
import { Button, message } from 'antd';
import { LoadingOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const headRef = useRef()
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
            password: password,
            avatar: imageUrl
        })
    }
    useEffect(() => {
        let token = Cookies.get('token')
        if (token) {
            props.history.replace('/mine')
        }
    })
    const handlePhoto = (e) => {
        if (e.file.status === 'uploading') {
            setLoading(true)
            return;
        }
        if (e.file.status === 'done') {
            let url = e?.file?.response?.url
            setImageUrl(url)
            setLoading(false)
        }
    }
    const handleChange = (e) => {
        let file = e.target.files[0];
        if (file) {
            uploadImg(file)
        }
    }
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
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
    const uploadImg = (file) => {
        console.log('file', file);
        const formData = new FormData();
        formData.append('avatar', file);
        ApiBlog.uploadHead(formData).then((res)=>{
            console.log('res',res);
        })
        // fetch('/api/users/head', {
        //     method: "POST",
        //     body: formData //自动修改请求头,formdata的默认请求头的格式是 multipart/form-data
        // }).then((res) => res.json())
    }
    const registerItem = () => {
        return (
            <div>
                <p>用户登录</p>
                <label htmlFor="head">
                    {/* <ImgCrop rotate>

                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="/api/users/head"
                            beforeUpload={beforeUpload}
                            onChange={handlePhoto}
                            onRemove={removeImg}
                        >
                            {imageUrl ? <div className='head-image'>
                                <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
                                < DeleteOutlined className='delete-icon' />
                            </div> : uploadButton}
                        </Upload>
                    </ImgCrop> */}

                    {/* <input
                        name='head'
                        type="file"
                        ref={headRef}
                        accept=".jpg,.jpeg,.png"	//限制文件类型
                        hidden	//隐藏input
                        onChange={(event) => handleChange(event)} />
                    <span onClick={() => { headRef.current.click() }}>添加头像</span> */}
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
    return (
        <div className='content'>
            <div className='form-item'>
                {
                    registerItem()
                }
            </div>
        </div>
    )
}
export default Login