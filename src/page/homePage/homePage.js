import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import './homePage.scss'
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
  _onGetArticle=(item)=>{
    let that = this
    this.store.onGetEditText(item.articleId).then((res)=>{
      console.log('that',that,res);
      this.props.history.push(`/edit/${item.articleId}`)
    })
  }
  render() {
    return (
      <div>
        {
          this.store.articleList.list && this.store.articleList.list.map((item) => (
            <div key={item.articleId} onClick={() => this._onGetArticle(item)}>
              <div>作者: {item.userName}</div>
              <p>标题: {item.title}</p>
              <p className='contents'>{item.contents}</p>
            </div>
          ))
        }
        {
           !this.store.articleList.list &&<div>暂无数据</div>
        }
      </div>
    );
  }
}

export default MobxDemo