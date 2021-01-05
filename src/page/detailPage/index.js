import React from 'react'
import ArticleDetail from '@/components/ArticleDetail'
import { observer, inject } from 'mobx-react'
import Loading from '@/components/Loading'
@inject('storeArticle')
@observer
class DetailPage extends React.Component {
    constructor(props) {
        super(props)
        this.store = this.props.storeArticle
    }
    componentDidMount() {
        let articleId = this.props.history.location.pathname.split('/')[2] || ''
        if (!this.store.editArticle && articleId) {
            this.store.onGetEditText(articleId)
        }
    }
    componentWillUnmount() {
        this.store.editText = ''
    }
    render() {
        return (
            <>
                {
                    this.store.editArticle ? <ArticleDetail
                        editArticle={this.store.editArticle}
                    /> : <Loading />
                }
            </>
        )

    }
}
export default DetailPage
