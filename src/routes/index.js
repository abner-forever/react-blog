import React, { Component, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import routes from './routers'
import '@/index.scss'
import Loading from '@/components/Loading'
import Cookies from "js-cookie"

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            isLogin:false
        }
    }
    _setTabChange = (index) => {
        this.setState({
            currentIndex: index
        })
        localStorage.setItem('currentIndex', index)
    }
    componentDidMount() {
        const current = Number(localStorage.getItem('currentIndex'))
        this.setState({
            currentIndex: current
        })
        let token = Cookies.get('token')
        console.log('token',token);
        if(token){
            this.setState({
                isLogin:true
            })
        }
    }
    render() {
        return (
            <Router >
                <header className='header-container'>
                    <ul className='banner'>
                        {
                            routes.map((item, index) => (
                                item.isShowHeader && <li
                                    onClick={() => this._setTabChange(index)}
                                    key={index}
                                    className={this.state.currentIndex === index ? 'active-tab' : 'tab-item'}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            ))
                        }
                        <li className='tab-item-login'>
                            { !this.state.isLogin ?<a href="/login">登录</a> :<a href="/mine">我的</a> }
                        </li>
                    </ul>
                </header>
                    <Suspense fallback={<div><Loading /></div>} >
                        <div>
                            
                        </div>
                        <div className='content-box'>
                            {
                                routes.map((item, ind) => (
                                    <Route exact={item.exact} key={ind} path={item.path} component={item.component} />
                                ))
                            }
                        </div>
                    </Suspense>
            </Router>
        )
    }
}
export default Index