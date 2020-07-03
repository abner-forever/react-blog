import React from 'react'
import Editor from './Editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import { observer, inject } from 'mobx-react'
@inject('storeArticle')
@observer
class EditorPage extends React.Component {
    constructor(props) {
        super(props)
        this.store = this.props.storeArticle
    }
    componentDidMount() {
        if (!this.store.editArticle) {
            let articleId = this.props.location.pathname.replace('/edit/', '')
            this.store.onGetEditText(articleId)
        }
    }
    render() {
        return (
            <>
                {
                    this.store.editArticle && <Editor
                        editArticle={this.store.editArticle}
                    />
                }
            </>
        )

    }
}
export default EditorPage
