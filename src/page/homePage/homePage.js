import React, { Component } from 'react';
import '../../styles/index.scss'
// import { observer, inject } from 'mobx-react'
// @inject('homePage')
// @observer
class MobxDemo extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.homePage
    this.state = {
      data: [
         
      ]
    }
  }

  componentDidMount() {
    // this.store.initData() //初始化数据
  }

  render() {
    return (
      // <List />
      <div>
        <p></p>
      </div>
    );
  }
}

export default MobxDemo