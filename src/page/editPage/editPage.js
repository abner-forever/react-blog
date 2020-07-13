import React from 'react'
import Editor from './Editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import { observer, inject } from 'mobx-react'
@inject('storeArticle')
@observer
class EditorPage extends React.Component {
    constructor(props) {
        super(props)
        this.store = this.props.storeArticle
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        console.log('componentDidMount');
        
        if (!this.store.editArticle) {
            let articleId = this.props.location.pathname.replace('/edit/', '')
            this.store.onGetEditText(articleId)
        }
    }
    shouldComponentUpdate(nextProps, nextState){

        console.log('shouldComponentUpdate', nextState.count,this.state.count);
        if(nextState.count>5){
            return false
        }
        return true
    }
    _add = ()=>{
        // this.setState((preState,props)=>{
        //    return {
        //        count:preState.count+1
        //    }
        // })
        
        // this.setState((preState,props)=>{
        //     return {
        //         count:preState.count+1
        //     }
        //  })
        this.setState({
            count:this.state.count+1
        })
    }
    componentDidUpdate(prevProps, prevState,a){
        console.log('componentDidUpdate----',this.state.count,prevState,a);
    }
    render() {
        return (
            <>
                <p>{this.state.count}</p>
                <div onClick={() => this._add()}>++</div>
                {
                    this.store.editArticle && <Editor
                        editArticle={this.store.editArticle}
                        count={this.state.count}
                    />
                }
            </>
        )

    }
}
export default EditorPage
