import Fetch from './request'
class ApiBlog {
    /**
     * 博客列表数据
     */
    apiArticleList = (params) => {
        return Fetch.get('/api/article/articleList', params)
    }
    /**
     * 博客详情页
     */
    apiArticleOne = (params) => {
        return Fetch.get('/api/article/getArticle', params)
    }
    /**
     * 更新文章
     * /api/article/updateArticle
     */
    updateArticle = (params,type) => {
        return Fetch.post('/api/article/updateArticle', params,type)
    }
    //登录
    login = (params,type) => {
        return Fetch.post('/api/users/login', params,type)
    }
    //注册
    register = (params,type) => {
        return Fetch.post('/api/users/register', params,type)
    }
    //用户信息
    userInfo = (params,type)=>{
        return Fetch.get('/api/users/userinfo', params,type)
    }
}

export default new ApiBlog()