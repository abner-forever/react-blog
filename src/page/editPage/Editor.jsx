import React from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'
import './edit.scss'

import CodeHighlighter from 'braft-extensions/dist/code-highlighter'
import { message, Button, Input } from 'antd'
import ApiBlog from  '../../api/apiBlog'

const options = {
    includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
    excludeEditors: ['editor-id-2']  // 指定该模块对哪些BraftEditor无效
}

BraftEditor.use(CodeHighlighter(options))
class Editor extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState(null),
        success: '',
        articleTitle: this.props.editArticle.title||'默认文章标题',
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
        console.log(htmlContent);
        return
        this.saveEditorContent(editArticle, htmlContent)
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
        this.submitContent()
    }
    //提交保存
    saveEditorContent = async (editArticle, htmlContent) => {
        let params = {
            articleId: editArticle.articleId,
            title: this.state.articleTitle,
            description:'as',
            contents:htmlContent
        }
        let res = await ApiBlog.updateArticle(params,'save')
        console.log('res',res);
        if(res){
            message.success('保存成功');
        }
    }
    onInputChange = (e) => {
        this.setState({
            articleTitle: e.target.value
        })
    }
    _clearText =()=>{
        this.setState({
            editorState: BraftEditor.createEditorState(null),
        })
    }
    render() {
        const { editorState } = this.state
        return (
            <div className="my-component">
                <div className='title-container'>
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
                        placeholder='请输入正文内容'
                    />
                </div>
                <div className='save-footer'>
                    <Button onClick={() => this._clearText(this.props.editArticle)}>清空</Button>
                    <Button style={{ marginLeft: 25 }} type='primary' onClick={() => this.submitContent(this.props.editArticle)}>保存</Button>
                </div>
            </div>
        )

    }

}
export default Editor