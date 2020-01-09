import React from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import { Button } from 'antd'
const axios = require('axios');
class EditorDemo extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState(null),
        success:''
    }

    async componentDidMount() {
        const htmlContent = await this.props.editText
        this.setState({
            editorState: BraftEditor.createEditorState(htmlContent)
        })
    }

    submitContent = (editArticle) => {
        const htmlContent = this.state.editorState.toRAW(true)
        console.log(editArticle,'qw',htmlContent);
        
        if(editArticle){
            this.saveEditorContent(editArticle,htmlContent)
        }
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }
    saveEditorContent = (editArticle, htmlContent) => {
        let url = 'http://localhost:3000/api/article/updateArticle'
        let data = {
            articleId: editArticle.articleId,
            title:editArticle.title,
            contents: htmlContent
        }
        axios.post(url, data).then((res) => {
            alert('保存成功')
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
                <Button onClick={() => this.clear(this.props.editArticle)}>清空</Button>
                <Button style={{marginLeft:25}} type='primary' onClick={() => this.submitContent(this.props.editArticle)}>保存</Button>
            </div>
        )

    }

}
export default EditorDemo