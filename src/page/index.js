import React, { Component } from 'react';
import './index.scss'
import RouteView from '../routes'
class Index extends Component {

    render() {
        return (
            <div className='app-container'>
                <RouteView />
            </div>
        )
    }
}
export default Index