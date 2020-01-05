import React from 'react'

function ItemCard(props) {
    let item = props.item
    let desc = item.contents ? (JSON.parse(item.contents).blocks[1] && JSON.parse(item.contents).blocks[1].text) : ''
    return (
        <div key={item.articleId} onClick={() => props._onGetArticle(item)}>
            <div>作者: {item.userName}</div>
            <p>标题: {item.title}</p>
            <p className='contents'>{desc}</p>
        </div>
    )
}
export default ItemCard