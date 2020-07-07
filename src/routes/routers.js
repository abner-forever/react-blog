import HomePage from '../page/homePage/homePage'
import EditPage from '../page/editPage/editPage'
import CornPage from '../page/cornPage/CornPage'
import Todo from '../page/todo/App'
const routes = [
    {
        path: '/index',
        component: HomePage,
        title:'主页'
    },{
        path: '/edit',
        component: EditPage,
        title:'编辑'
    },{
        path: '/cron',
        component: CornPage,
        title:'关于'
    },
    {
        path: '/',
        redirect: '/index'
    },{
        path:'/todo',
        component:Todo,
        title:'待办'
    }
]
export default routes