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

  render() {

    return (
      <div>
        {
          this.store.editText && <Editor
            editText={this.store.editText}
          />
        }

      </div>
    )

  }
}
export default EditorPage
