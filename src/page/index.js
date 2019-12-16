import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from './homePage/homePage'
import EditPage from './editPage/editPage'
import CornPage from './cornPage/cornPage'
import './index.scss'
class Index extends Component {

    render() {
        return (
            <div className='app-container'>
                <div className='header-container'>
                    <div>欢迎来到我的博客</div>
                </div>
                <Router >
                    <ul className='banner'>
                        <li><Link to='/'>主页</Link></li>
                        <li><Link to='/edit'>发表</Link></li>
                        <li><Link to='/corn'>定时器</Link></li>
                    </ul>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/edit" component={EditPage} />
                    <Route path="/corn" component={CornPage} />
                </Router>
            </div>
        )
    }
}
export default Index