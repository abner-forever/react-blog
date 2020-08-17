import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './homePage.scss'
import Itemcard from '../../components/home/ItemCard'

@inject('storeArticle')
@observer
class Home extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.storeArticle
  }

  componentDidMount() {
    console.log(' this.store', this.store);
    this.store.onGetArticle() //初始化数据
  }
  onGetArticle = (articleId) => {
    this.store.onGetEditText(articleId).then((res) => {
      this.props.history.push(`/articledetail/${articleId}`)
    })
  }
  editArticle = (articleId) => {
    this.store.onGetEditText(articleId).then((res) => {
      this.props.history.push(`/edit/${articleId}`)
    })
  }
  render() {
    return (
      <div className='home-content'>
        {
          this.store.articleList && this.store.articleList.map((item, index) => (
            <Itemcard
              key={index}
              item={item}
              onGetArticle={this.onGetArticle}
              editArticle={this.editArticle}
            />
          ))
        }
        {
          !this.store.articleList && <div>暂无数据</div>
        }
      </div>
    );
  }
}

export default Home