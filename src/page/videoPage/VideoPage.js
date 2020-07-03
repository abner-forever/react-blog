import React, { useState } from 'react'
import { Button } from 'antd'

const VideoPage = () => {
    let [plate, setPlate] = useState('')
    function _onCopy() {
        //判断剪贴板input框是否存在
        let oInputa = document.getElementsByClassName('oInput')
        if(Array.from(oInputa).length>0){
            console.log('a',oInputa);
            
        }else{
        var oInput = document.createElement('input');
        oInput.value = "copy"+plate;

        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        alert('复制成功');
            }
        return
       
    }
    function _change(e) {
        console.log(e.target.value);
        setPlate(e.target.value)
    }
    return (
        <div>
            <ul>
                <li>视频列表</li>
            </ul>
            <input name='cutbord' value={plate} onChange={_change} />
            <Button onClick={_onCopy} type="primary">复制</Button>
            <textarea defaultValue='a'>
            </textarea>
        </div>
    )
}

export default VideoPage