import React from 'react'
import './itemCard.scss'
function ItemCard(props) {
    let item = props.item
    return (
        <div className='item-card' key={item.articleId} >
            <div onClick={() => props.onGetArticle(item.articleId)}>
                <p className='title'>{item.title}</p>
                <p className='contents'>{item.description}</p>
            </div>
            <div className='meta'>
                <span>{item.userName}</span>
                <span className='update-time'>{item.updateTime||item.createTime}</span>
                {/* <div onClick={() => props.editArticle(item.articleId)} className='edit-icon' >编辑</div> */}
            </div>
        </div>
    )
}
export default ItemCard