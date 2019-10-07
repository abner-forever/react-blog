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
      data: [
        { id: 0, text: '天气不错哦!!!', isCheck: false, complete: false },
        { id: 1, text: '天气不错哦!!!', isCheck: false, complete: false },
        { id: 2, text: '出去玩啊!!!', isCheck: false, complete: true },
      ]
    }
  }

  componentDidMount() {
    this.store.onGetArticle() //初始化数据
  }

  render() {
    return (
      <div>
        {
          this.store.articleList &&  this.store.articleList.map((item)=>(
            <div key={item.articleId}>
              <p>{item.title}</p>
              <p className = 'contents'>{item.contents}</p>
            </div>
          ))  
        }
      </div>
    );
  }
}
export default MobxDemo