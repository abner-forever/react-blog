import React from 'react'
import './itemCard.scss'
function ItemCard(props) {
    let item = props.item
    let desc = item.contents ? (JSON.parse(item.contents).blocks[1] && JSON.parse(item.contents).blocks[1].text) : ''
    return (
        <div className='item-card' key={item.articleId} onClick={() => props._onGetArticle(item)}>
            <p className='title'>{item.title}</p>
            <p className='contents'>{desc}</p>
            <div className='meta'>
                <span>{item.userName}</span>
                <span className='update-time'>{item.updateTime}</span>
            </div>
        </div>
    )
}
export default ItemCard