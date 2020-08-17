import React from 'react'
import ArticleDetail from '../../components/ArticleDetail'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import { observer, inject } from 'mobx-react'
@inject('storeArticle')
@observer
class MinePage extends React.Component {
    constructor(props) {
        super(props)
        this.store = this.props.storeArticle
    }
    componentDidMount() {
        if (!this.store.editText) {
            this.store.onGetEditText('100023')
        }
    }
    render() {
        return (
            <div>
                {
                    this.store.editArticle &&  <ArticleDetail
                    editArticle={this.store.editArticle}
                />
                }
               
            </div>
        )

    }
}
export default MinePage
