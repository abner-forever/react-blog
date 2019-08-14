import React from 'react'
import { Table, Button } from 'antd';

class AppList extends React.Component {
    constructor(props) {
        super(props)

        this.store = this.props.homePage
        this.state = {
            data: [
                { id: 1001, text: '天气不错哦!!!', price: 121312, complete: 'good' },
                { id: 1002, text: '天气不错哦!!!', price: 123123, complete: 'good' },
                { id: 1003, text: '出去玩啊!!!', price: 555, complete: 'good' },
            ],
            selectedRowKeys: [],
            selectedRowKeys1: [],
            needComit: [],
            columns: [
                {
                    title: '标题',
                    dataIndex: 'text',
                },
                {
                    title: '价格',
                    dataIndex: 'price',
                },
                {
                    title: '情况',
                    dataIndex: 'complete',
                },
            ]
        }

    }
    onCommits = (rowSelection) => {
        let newData = []
        rowSelection.selectedRowKeys.map((item) => {
            newData.push(this.state.data[item])
        })
        this.setState({
            needComit: newData
        })

    }
    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };

    render() {
        let { data, columns, selectedRowKeys, selectedRowKeys1, needComit } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const rowSelection1 = {
            selectedRowKeys1,
            onChange: this.onSelectChange1,
        };
        return (
            <div>
                <Button onClick={() => this.onCommits(rowSelection)}>提交</Button>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                />
                <Table
                    rowSelection={rowSelection1}
                    columns={columns}
                    dataSource={needComit}
                />
            </div>
        )
    }
}

export default AppList;