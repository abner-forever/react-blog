import React, { useEffect, useState } from 'react'
import './style.scss'
import { ItemCard } from '@/components'
import ApiBlog from  '@/api/apiBlog'
import Cookies from "js-cookie"

const MyArticle = (props) => {
    const [articleList, setArticleList] = useState([]);
    useEffect(() => {
        init()
    },[])
    const init = async () => {
        let userId = Cookies.get('userId')
        let res = await ApiBlog.getMyArticleList({
            userId
        })
        setArticleList(res)
        
    }
    const onGetArticle = (articleId) => {
        props.history.push(`/articledetail/${articleId}`)
    }
    const editArticle = (articleId) => {
        props.history.push(`/edit/${articleId}`)
    }
    return (
        <div className='content'>
            {
                articleList.length>0 && articleList.map((item, index) => (
                    <ItemCard
                        key={index}
                        item={item}
                        isEdit={true}
                        onGetArticle={onGetArticle}
                        editArticle={editArticle}
                    />
                ))
            }
        </div>
    )
}
export default MyArticle