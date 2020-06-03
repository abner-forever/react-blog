import React, { Component } from 'react';
import './index.scss'
import RouteView from '../routes'
class Index extends Component {
    render() {
        return (
            <div className='app-container'>
                {/* <div className='header-container'>
                    <div>欢迎来到我的博客</div>
                </div> */}
                <div className="container">
                    <RouteView/>
                </div>
            </div>
        )
    }
}
export default Index