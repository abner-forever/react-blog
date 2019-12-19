import React from 'react'
import Editor from '../../components/Editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import { observer, inject } from 'mobx-react'
@inject('homePage')
@observer
class EditorPage extends React.Component {
    constructor(props) {
        super(props)
        this.store = this.props.homePage
    }
    componentDidMount(){
        if(!this.store.editText){
           let articleId = this.props.location.pathname.replace('/edit/','')
            this.store.onGetEditText(articleId)
        }
    }
    render() {
        console.log('this.store.editArticle',this.store.editArticle);
        
        return (
            <div>
                {
                    this.store.editText&&this.store.editArticle && <Editor
                        editText={this.store.editText}
                        editArticle= {this.store.editArticle}
                        showAlert= {this.store.showAlert}
                    />
                }
                {
                    ! this.store.editText && <Editor
                    editText={''}
                />
                }
            </div>
        )

    }
}
export default EditorPage
