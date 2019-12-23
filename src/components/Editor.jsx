import React from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
const axios = require('axios');
class EditorDemo extends React.Component {

    state = {
        // 创建一个空的editorState作为初始值
        editorState: BraftEditor.createEditorState(null)
    }

    async componentDidMount() {
        // 假设此处从服务端获取html格式的编辑器内容
        const htmlContent = await this.props.editText
        console.log('this.props.editArticle', this.props.editArticle);

        // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
        this.setState({
            editorState: BraftEditor.createEditorState(htmlContent)
        })
    }

    submitContent = async (editArticle) => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toRAW(true)
        console.log('editArticle',editArticle);
        
        await this.saveEditorContent(editArticle,htmlContent)
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }
    saveEditorContent = (editArticle, htmlContent) => {
        let url = 'http://foreverheart.top/api/article/updateArticle'
        let data = {
            articleId: editArticle.articleId,
            title:editArticle.title,
            contents: htmlContent
        }
        axios.post(url, data).then((res) => {
            this.props.showAlert('保存成功','success')
        }).catch((err) => {
            console.warn('保存失败 :', err)
        })
    }
    render() {
        const { editorState } = this.state
        return (
            <div className="my-component">
                <BraftEditor
                    value={editorState}
                    onChange={this.handleEditorChange}
                    onSave={this.submitContent}
                />
                <button onClick={() => this.submitContent(this.props.editArticle)}>保存</button>
            </div>
        )

    }

}
export default EditorDemo