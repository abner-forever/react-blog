import React from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'
import './edit.scss'

import CodeHighlighter from 'braft-extensions/dist/code-highlighter'
import { message, Button, Input } from 'antd'
const axios = require('axios');

const options = {
    includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
    excludeEditors: ['editor-id-2']  // 指定该模块对哪些BraftEditor无效
}

BraftEditor.use(CodeHighlighter(options))
class Editor extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState(null),
        success: '',
        articleTitle: this.props.editArticle.title
    }

    async componentDidMount() {
        const htmlContent = await this.props.editArticle.contents
        this.setState({
            editorState: BraftEditor.createEditorState(htmlContent)
        })
    }
    //点击保存
    submitContent = (editArticle) => {
        const htmlContent = this.state.editorState.toRAW()
        this.saveEditorContent(editArticle, htmlContent)
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }
    //提交保存
    saveEditorContent = (editArticle, htmlContent) => {
        let htmlJSON = JSON.parse(htmlContent)
        let description = htmlJSON.blocks.find((item) => item.type === 'unstyled').text || ''
        let url = '/api/article/updateArticle'
        let data = {
            articleId: editArticle.articleId,
            title: this.state.articleTitle,
            description,
            contents: htmlContent
        }
        axios.post(url, data).then((res) => {
            message.success('保存成功', res);
        }).catch((err) => {
            message.error('保存失败 :', err)
        })
    }
    onInputChange = (e) => {
        this.setState({
            articleTitle: e.target.value
        })
    }
    render() {
        const { editorState } = this.state
        return (
            <div className="my-component">
                <div className='title-container'>
                    <p className='title'>文章标题</p>
                    <Input
                        className='title-input'
                        onChange={this.onInputChange}
                        defaultValue={this.state.articleTitle}
                        placeholder="文章标题" />
                </div>
                <div className='editor-container'>
                    <BraftEditor
                        id="editor-with-code-highlighter"
                        value={editorState}
                        onChange={this.handleEditorChange}
                        onSave={this.submitContent}
                    />
                </div>
                <div className='save-footer'>
                    <Button onClick={() => this.clear(this.props.editArticle)}>清空</Button>
                    <Button style={{ marginLeft: 25 }} type='primary' onClick={() => this.submitContent(this.props.editArticle)}>保存</Button>
                </div>
            </div>
        )

    }

}
export default Editor