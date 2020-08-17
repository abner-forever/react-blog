import HomePage from '../page/homePage'
import EditPage from '../page/editPage'
import DetailPage from '../page/detailPage'
import MinePage from '../page/minePage'

// 路由表配置
const routes = [
    {
        path: '/index',
        component: HomePage,
        title: '首页',
        isShowHeader:true
    }, {
        path: '/edit',
        component: EditPage,
        title: '编辑',
        isShowHeader:false
    }, {
        path: '/articledetail',
        component: DetailPage,
        title: '文章详情',
        isShowHeader:false
    },{
        path: '/mine',
        component: MinePage,
        title: '关于我',
        isShowHeader:true
    }
]
export default routes