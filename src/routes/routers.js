import React from 'react'
import HomePage from '../page/homePage'
// 路由表配置
const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true,
        title: '首页',
        isShowHeader:true
    },
   {
        path: '/edit',
        component: React.lazy(()=>import('../page/editPage')),
        title: '编辑',
        isShowHeader:false
    },
    {
        path: '/addArticle',
        component: React.lazy(()=>import('../page/editPage')),
        title: '新增文章',
        isShowHeader:false
    },
     {
        path: '/articledetail',
        component: React.lazy(()=>import('../page/detailPage')),
        title: '文章详情',
        isShowHeader:false
    },{
        path: '/mine',
        component: React.lazy(()=>import('../page/minePage')),
        title: '关于我',
        exact: true,
        isShowHeader:false
    },
    {
        path: '/myArticle',
        component: React.lazy(()=>import('../page/MyArticle')),
        title: '我的文章',
        exact: true,
        isShowHeader:false
    }
    ,{
        path: '/login',
        component: React.lazy(()=>import('../page/Login')),
        title: '登录',
        isShowHeader:false
    }
]
export default routes
