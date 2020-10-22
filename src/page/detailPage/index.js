import React from 'react'
import ArticleDetail from '../../components/ArticleDetail'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import { observer, inject } from 'mobx-react'
import Loading from '../../components/Loading'
@inject('storeArticle')
@observer
class DetailPage extends React.Component {
    constructor(props) {
        super(props)
        this.store = this.props.storeArticle
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
        this.store.editText = ''
    }
    render() {
        return (
            <div>
                {
                    this.store.editArticle ?  <ArticleDetail
                    editArticle={this.store.editArticle}
                />:<Loading/>
                }
            </div>
        )

    }
}
export default DetailPage
