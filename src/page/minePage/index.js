import React, {
    useEffect,
    useObserver
} from 'react'
import ArticleDetail from '../../components/ArticleDetail'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
// import { useLocalStore, useObserver } from 'mobx-react';
// @inject('storeArticle')
// @observer
const MinePage = (props) => {
    let storeArticle = props.storeArticle
    useEffect(() => {
        if (props.storeArticle) {
            this.store.onGetEditText('100023')
        }
    })
    return(
        <p>mine</p>
    )
    // return useObserver(() => (
    //     <div>
    //         {props.storeArticle && < ArticleDetail
    //             editArticle={props.editArticle}
    //         />
    //         }
    //     </div>
    // ))
}
export default MinePage