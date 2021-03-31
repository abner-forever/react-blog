import Fetch from './request'
import upLoad from './upload'
class ApiBlog {
    /**
     * 博客列表数据
     */
    apiArticleList = (params) => {
        return upLoad.get('/api/article/articleList', params)
    }
    getMyArticleList = (params) => {
        return Fetch.get('/api/article/myarticleList', params)
    }
    /**
     * 博客详情页
     */
    apiArticleOne = (params) => {
        return Fetch.get('/api/article/getArticle', params)
    }
    /**
     * 添加文章评论
     */
    addComment = (params)=>{
        return Fetch.post('/api/article/addComment', params)
    }
      /**
     * 删除文章评论
     */
    removeComment = (params)=>{
        return Fetch.post('/api/article/removeComment', params)
    }
    /**
     * 获得文章评论
     */
    getCommentList = (params)=>{
        return Fetch.get('/api/article/getArticleComments', params)
    }
    
    /**
     * 更新文章
     * /api/article/updateArticle
     */
    updateArticle = (params) => {
        return Fetch.post('/api/article/updateArticle', params)
    }
    /**
     * 更新文章
     * /api/article/updateArticle
     */
    addArticle = (params) => {
        return Fetch.post('/api/article/addArticle', params)
    }
    
    removeArticle = (params)=>{
        return Fetch.post('/api/article/removeArticle', params)
    }
    //登录
    login = (params) => {
        return Fetch.post('/api/users/login', params)
    }
    //注册
    register = (params) => {
        return Fetch.post('/api/users/register', params)
    }
    uploadHead = (params) => {
        return upLoad.post('/api/users/head', params)
    }
    //用户信息
    userInfo = (params, type) => {
        return Fetch.get('/api/users/userinfo', params)
    }
}

export default new ApiBlog()