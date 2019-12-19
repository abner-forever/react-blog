import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import './homePage.scss'

import Itemcard from '../../components/ItemCard'

@inject('homePage')
@observer
class MobxDemo extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.homePage
    this.state = {
    }
  }

  componentDidMount() {
    this.store.onGetArticle() //初始化数据
  }
  _onGetArticle = (item) => {
    this.store.onGetEditText(item.articleId).then((res) => {
      this.props.history.push(`/edit/${item.articleId}`)
    })
  }
  render() {
    return (
      <div>
        {
          this.store.articleList.list && this.store.articleList.list.map((item,index) => (
            <Itemcard
              key={index}
              item={item}
              _onGetArticle= {this._onGetArticle}
            />
          ))
        }
        {
          !this.store.articleList.list && <div>暂无数据</div>
        }
      </div>
    );
  }
}

export default MobxDemo