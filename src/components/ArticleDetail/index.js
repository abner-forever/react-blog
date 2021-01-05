import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/output.css'
import 'braft-extensions/dist/code-highlighter.css'
import './style.scss'

import CodeHighlighter from 'braft-extensions/dist/code-highlighter'
let options = {
    them: "dark",
    includeEditors: ['editor-with-code-highlighter'],
}
BraftEditor.use(CodeHighlighter(options))

//文章详细信息
class ArticleDetail extends React.Component {

    render() {
        const { title, contents, userName, updateTime, createTime } = this.props.editArticle
        const htmlContent = contents
        return (
            <div className='content'>
                <p className="detail-title">{title}</p>
                <div className='title-desc'>
                    <span>作者：{userName}</span>
                    <span style={{ marginLeft: 8 }}> 发布于：{updateTime || createTime}</span>
                </div>
                {/* 文章内容 */}
                <div
                    id='editor-with-code-highlighter'
                    className='articae-content braft-output-content '
                    dangerouslySetInnerHTML={{ __html: BraftEditor.createEditorState(htmlContent,options).toHTML() }} />
            </div>
        )
    }
}
export default ArticleDetail 