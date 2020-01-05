import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import HomePage from '../page/homePage/homePage'
import routes from './routers'
import '../page/index.scss'
class Index extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="container">
                <Router >
                    <ul className='banner'>
                        {
                            routes.map((item, index) => (

                                item.title && <li key={index}><Link to={item.path}>{item.title}</Link></li>
                            ))
                        }
                    </ul>
                    {
                        routes.map((item, index) => (
                            <Route key={index} path={item.path} component={item.component} />
                        ))
                    }
                    <Route exact path="/" component={HomePage} />
                </Router>
            </div>
        )
    }
}
export default Index