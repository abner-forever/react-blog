import React, { Component } from 'react'
import { InputCron } from 'react-crons'
import { Button } from 'antd'
export default class CornPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cronText: ''
        }
    }
    componentDidMount() {
    }
    changeCron = (e) => {
        this.setState({
            cronText: e
        })
    }
    sendCron=()=>{
        console.log('cron',this.state.cronText);
    }
    render() {
        return (
            <div style={{ width: 500 }}>
                <InputCron
                    onChange={(e) => this.changeCron(e)}
                    // value='请选择'
                    style={{ width: 576 }}
                    lang='zh_CN'
                    type={['second', 'minute', 'hour', 'day', 'month', 'week']}
                />
                <div style={{marginTop:45}}>
                    <Button onClick={this.sendCron} type="primary">发送</Button>
                </div>
            </div>
        )

    }
}