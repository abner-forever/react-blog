import React, { Component } from 'react'
import './style.scss'
import { message, Button, Input } from 'antd'
import ApiBlog from '@/api/apiBlog'
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'
import Cookies from "js-cookie"

import BraftEditor from 'braft-editor'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'
const options = {
    them: "dark",
    includeEditors: ['editor-with-code-highlighter']
}
BraftEditor.use(CodeHighlighter(options))

export default class Editor extends Component {
    state = {
        editorState: BraftEditor.createEditorState(null),
        articleTitle: this.props?.editArticle?.title || '',
    }

    componentDidMount() {
        const htmlContent = this.props?.editArticle?.contents
        this.setState({
            editorState: BraftEditor.createEditorState(htmlContent)
        })
    }
    //点击保存
    submitContent = (editArticle) => {
        const htmlContent = this.state.editorState.toHTML()
        let pathName = this.props.location.pathname
        if (pathName.indexOf('addArticle') === -1) {
            this.updateEditorContent(editArticle, htmlContent)

        }else{
            this.addEditorContent(htmlContent)
        }
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }
    //更新文章
    updateEditorContent = async (editArticle, htmlContent) => {
        let desc = this.state.editorState.toRAW(true).blocks[0].text
        let params = {
            id: editArticle.id,
            title: this.state.articleTitle,
            description: desc,
            contents: htmlContent
        }
        await ApiBlog.updateArticle(params, 'save')
        message.success("修改成功")
    }
    //添加文章
    addEditorContent = async ( htmlContent) => {
        const desc = this.state.editorState.toRAW(true).blocks[0].text
        let params = {
            userId:Cookies.get('userId'),
            user:Cookies.get('userName'),
            title: this.state.articleTitle||'未命名文章',
            description: desc,
            contents: htmlContent
        }
        await ApiBlog.addArticle(params)
        message.success("保存成功")
    }
    onInputChange = (e) => {
        this.setState({
            articleTitle: e.target.value
        })
    }
    _clearText = () => {
        this.setState({
            editorState: BraftEditor.createEditorState(null),
        })
    }
    componentWillUnmount(){
        this._clearText()
    }

    render() {
        const { editorState } = this.state
        const { editArticle } = this.props
        return (
            <div className="content">
                <div className='title-container'>
                    <Input
                        className='title-input'
                        onChange={this.onInputChange}
                        defaultValue={this.state.articleTitle}
                        placeholder="文章标题" />
                </div>
                <div className=''>
                    <BraftEditor
                        id="editor-with-code-highlighter"
                        value={editorState}
                        onChange={this.handleEditorChange}
                        onSave={() => this.submitContent(editArticle)}
                        placeholder='请输入正文内容'
                    />
                </div>
                <div className='save-footer'>
                    <Button onClick={() => this._clearText(editArticle)}>清空</Button>
                    <Button style={{ marginLeft: 25 }} type='primary' onClick={() => this.submitContent(editArticle)}>保存</Button>
                </div>
            </div>
        )

    }

}