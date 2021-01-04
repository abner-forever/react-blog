import { observable, action,runInAction } from 'mobx'
import ApiBlog from  '@/api/apiBlog'
class Article {
   @observable articleList = []
   @observable editText = ''
   @observable editArticle = null
   @observable isModalVisible = false

   @action onGetEditText = async (id) => {
      console.log('ok?');
      let res = await ApiBlog.apiArticleOne({
         id:id
      })
      runInAction(()=>{
         this.editArticle = res
      })
   }
   @action
   onGetArticle = async() => {
      let res = await ApiBlog.apiArticleList()
      runInAction(()=>{
         this.articleList = res.list
      })
   }
}
export default new Article()