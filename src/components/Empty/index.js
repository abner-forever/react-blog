import React from 'react'
import './style.scss'
const Empty = (props) => {
    const { title = '暂无数据' } = props || {}
    return (
        <div className='empty-cont'>
            <p>{title}</p>
        </div>
    )
}
export default Empty