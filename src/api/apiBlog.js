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
}

export default new ApiBlog()