import React, { useState, useEffect } from 'react'
import { Table, Modal, Button, Divider } from 'antd'
import { InputCron } from 'react-crons'
// const taskList = require('../../../mock/tasks-list.json')
const ListPage = () => {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '定时配置cron',
            dataIndex: 'cron',
            key: 'cron',
        },
        {
            title: '任务状态',
            dataIndex: 'taskStatus',
            key: 'taskStatus',
        },
        {
            title: '执行方式',
            dataIndex: 'sendWay',
            key: 'sendWay',
        },
        {
            title: '创建时间',
            dataIndex: 'createDate',
            key: 'createDate',
        },
        {
            title: '更新时间',
            dataIndex: 'updateDate',
            key: 'updateDate',
        }, {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (id) => (
                <div>
                    <Button onClick={(e) => clickItem(e)} type="primary">修改</Button>
                    <Divider type="vertical" />
                    <Button type="danger">删除</Button>
                    <span>id</span>
                </div>
            ),
        }

    ];

    // const [count, setCount] = useState(0);
    const [data, setData] = useState([]);   //列表数据
    const [column] = useState(columns);     //表头
    const [cronText, setCronText] = useState('');     //cron表达式
    const [visible, setVisible] = useState(false);

    //获取列表数据
    // function getData() {
    //     let url = 'http://106.12.200.41:3000/mock/11/quartz/tasks/list'
    //     let postData = {
    //         page: 1,
    //         rows: 20
    //     }
    //     return new Promise((resolve, reject) => {

    //         fetch(url, {
    //             method: 'POST',
    //             // mode: 'cors',
    //             // credentials: 'include',
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded'
    //             },
    //             body: JSON.stringify(postData)
    //         }).then(response => response.json())
    //             .then(res => {
    //                 let resMock = taskList
    //                 console.log('res:===>', res.data);
    //                 if (res.data && res.data.records) {
    //                     let re = resMock.data.records
    //                     resolve(re)
    //                 } else {
    //                     reject(res)
    //                 }
    //                 console.log('data', data);
    //             }).catch((err) => {
    //                 reject(err)
    //             })
    //     })
    // }
    // if (data.length === 0) {
    //     getData().then((res) => {
    //         let newRes = handeldata(res)
    //         setData(newRes)
    //         console.log('newData', res);
    //     }).catch((err) => {
    //         console.log('err', err);
    //     })
    // }
    function handeldata(data) {
        let newArray = []
        data.map((item) => {
            let formatData = {}
            formatData.key = item.id
            formatData.name = item.taskName
            formatData.cron = item.cron
            formatData.taskStatus = item.taskStatus
            formatData.createDate = item.createDate
            formatData.updateDate = item.updateDate
            formatData.sendWay = item.sendWay
            newArray.push(formatData)
            return 0
        })
        return newArray
    }
    useEffect(() => {
        // if (count < 20) {
        //     let timer = setInterval(() => {
        //         let time = Common.formatTime()
        //         setTime(time)
        //         setCount(count + 1);
        //     }, 1000)
        //     return function cleanup() {
        //         window.clearInterval(timer)
        //     };
        // }


    });
    function handleOk() {
        console.log('ok');
        setVisible(!visible)
    }
    function handleCancel() {
        console.log('取消');
        setCronText('')
        setVisible(!visible)
    }
    function clickItem(e) {
        console.log('e', e.target);

        // console.log('item', e.target.innerText);
        // setVisible(!visible)
        // setCronText(e.target.innerText)
    }
    function changeCron(e) {
        setCronText(e)
    }
    function getDataOne() {
        let url = 'http://106.12.200.41:3000/mock/11/quartz/tasks/-3183662.506440535'
        fetch(url).then(response => response.json()).then((res) => {
            console.log('res', res);
        })
    }
    getDataOne()
    return (
        <p>listPage</p>
        // <div>
        //     <Table dataSource={data} columns={column}
        //         onRow={record => {
        //             return {
        //                 // onClick: event => { clickItem(event); }, // 点击行

        //             };
        //         }}
        //     />
        //     <div>
        //         <Button onClick={() => setVisible(!visible)}>点击</Button>
        //     </div>
        //     <Modal
        //         title="修改数据"
        //         visible={visible}
        //         onOk={handleOk}
        //         onCancel={handleCancel}
        //     >
        //         <InputCron
        //             onChange={(e) => changeCron(e)}
        //             value={cronText}
        //             style={{ width: 576 }}
        //             lang='zh_CN'
        //             type={['second', 'minute', 'hour', 'day', 'month', 'week']}
        //         />

        //     </Modal>
        // </div>
    )
}

export default ListPage