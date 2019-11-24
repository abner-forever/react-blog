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

  render() {
    console.log('this.store.articleList', this.store.articleList.list);

    return (
      <div>
        {
          this.store.articleList.list && this.store.articleList.list.map((item) => (
            <div key={item.articleId} onClick={() => this.store.onGetEditText(item.title)}>
              <div>作者: {item.userName}</div>
              <p>标题: {item.title}</p>
              <p className='contents'>{item.contents}</p>
            </div>
          ))
        }
      </div>
    );
  }
}
export default MobxDemo