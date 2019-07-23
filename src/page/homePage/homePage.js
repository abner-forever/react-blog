import React, { Component } from 'react';

import { observer, inject } from 'mobx-react'

@inject('homePage')
@observer
class MobxDemo extends Component {
  constructor(props) {
    super(props)

    this.store = this.props.homePage
  }
  componentDidMount(){
    this.store.initData() //初始化数据
  }

  render() {
    let {sourceData } = this.store
    return (
      <div>
        {/* <ul>
          {
            sourceData && sourceData.map((item,index)=>(
              <li key={index}>
                <p>用户名：{item.userName}</p>
                <p>{item.contents}</p>
              </li>
            ))
          }
        </ul> */}
        <p>home</p>
      </div>
    );
  }
}
export default MobxDemo