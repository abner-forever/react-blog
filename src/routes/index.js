import React, { Component, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from "react-router-dom";
import routes from './routers'
import '../page/index.scss'
import Loading from '../components/Loading'
// import Catalog from '../components/Catalog'
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0
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
                    </ul>
                </header>
                {/* <Switch> */}
                    <Suspense fallback={<div><Loading /></div>} >
                        <div className='content-box'>
                            <Redirect exact from='/' to="/index" />
                            {
                                routes.map((item, ind) => (
                                    <Route exact={item.exact} key={ind} path={item.path} component={item.component} />
                                ))
                            }
                        </div>
                    </Suspense>
                {/* </Switch> */}
            </Router>
        )
    }
}
export default Index