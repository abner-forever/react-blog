import React, { Component } from 'react';

import { observer, inject } from 'mobx-react'

import Editor from '../../components/Editor'

@inject('homePage')
@observer
class MobxDemo extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.homePage
  }
  componentWillMount(){
    
  }
  componentDidMount() {
    this.store.onGetEditText() //初始化数据
    console.log('this.store.editText',this.store.editText);
    
  }

  render() {
    // let { sourceData } = this.store
    return (
      <div>
        <div className=''>
          {this.store.editText && <Editor editText = {this.store.editText} />
}
        </div>
      </div>
    );
  }
}
export default MobxDemo