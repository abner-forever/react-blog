import React from 'react'
import Editor from './Editor'
import { observer, inject } from 'mobx-react'
import { runInAction } from 'mobx'
@inject('storeArticle')
@observer
class EditorPage extends React.Component {
    constructor(props) {
        super(props)
        this.store = this.props.storeArticle
        this.state = {
            count: 0,
            isAdd: false
        }
    }
    componentDidMount() {
        let pathName = this.props.location.pathname
        if (pathName.indexOf('addArticle') === -1) {
            let articleId = this.props.location.pathname.replace('/edit/', '')
            console.log('articleId', articleId);
            this.store.onGetEditText(articleId)

        } else {
            runInAction(() => {
                this.store.editArticle = ''
            })
            this.setState({
                isAdd: true
            })
        }

    }
    render() {
        return (
            <>
                {(this.store.editArticle || this.state.isAdd) && <Editor
                    editArticle={this.store.editArticle}
                    count={this.state.count}
                    location={this.props.location}
                />}
            </>
        )

    }
}
export default EditorPage
