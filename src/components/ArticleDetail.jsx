import React from 'react'
import './styles/articleDetails.scss'
import 'braft-editor/dist/output.css'
import BraftEditor from 'braft-editor'

import 'braft-extensions/dist/code-highlighter.css'

import CodeHighlighter from 'braft-extensions/dist/code-highlighter'


BraftEditor.use(CodeHighlighter({
    includeEditors: ['editor-with-code-highlighter'],
}))


//文章详细信息
class ArticleDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        const { title, contents,userName,updateTime,createTime } = this.props.editArticle

        return (
            <div className='content'>
                <p className="detail-title">{title}</p>
                <div style={{margin:10}}>
                    <span>作者：{userName}</span>
                    <span style={{marginLeft:8}}> 时间：{updateTime||createTime}</span>
                   
                </div>
                {/* 文章内容 */}
                <div className='articae-content braft-output-content'
                    dangerouslySetInnerHTML={{ __html: BraftEditor.createEditorState(contents).toHTML() }} />
            </div>
        )
    }
}
export default ArticleDetail