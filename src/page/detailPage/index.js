import React from 'react'
import ArticleDetail from '@/components/ArticleDetail'
import { observer, inject } from 'mobx-react'
import { Loading, Comments } from '@/components'
@inject('storeArticle')
@observer
class DetailPage extends React.Component {
    constructor(props) {
        super(props)
        this.store = this.props.storeArticle
        this.state = {
            articleId: this.props.history.location.pathname.split('/')[2] || ''
        }
    }
    componentDidMount() {
        if (!this.store.editArticle && this.state.articleId) {
            this.store.onGetEditText(this.state.articleId)
        }
    }
    componentWillUnmount() {
        this.store.editText = ''
    }
    render() {
        return (
            <div>
                {
                    this.store.editArticle ? <ArticleDetail
                        editArticle={this.store.editArticle}
                    /> : <Loading />
                }
                {this.store.editArticle && <Comments id={this.state.articleId} />}
            </div>
        )

    }
}
export default DetailPage
