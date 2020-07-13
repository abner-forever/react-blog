import HomePage from '../page/homePage/HomePage'
import EditPage from '../page/editPage/EditPage'
import DetailPage from '../page/detailPage/DetailPage'
import MinePage from '../page/minePage/MinePage'

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