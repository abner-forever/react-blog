import React from 'react'

// 路由表配置
const routes = [
    {
        path: '/',
        component: React.lazy(()=>import('../page/homePage')),
        exact: true,
        title: '首页',
        isShowHeader:false
    },
    {
        path: '/index',
        component: React.lazy(()=>import('../page/homePage')),
        exact: true,
        title: '首页',
        isShowHeader:true
    }, {
        path: '/edit',
        component: React.lazy(()=>import('../page/editPage')),
        title: '编辑',
        isShowHeader:false
    }, {
        path: '/articledetail',
        component: React.lazy(()=>import('../page/detailPage')),
        title: '文章详情',
        isShowHeader:false
    },{
        path: '/mine',
        component: React.lazy(()=>import('../page/minePage')),
        title: '关于我',
        exact: true,
        isShowHeader:true
    }
    ,{
        path: '/login',
        component: React.lazy(()=>import('../page/Login')),
        title: '登录',
        isShowHeader:false
    }
]
export default routes