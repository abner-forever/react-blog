import { observable, action } from 'mobx'
const axios = require('axios')
const { host } = require('../utils')
class Article {
   @observable articleList = []
   @observable editText = ''
   @observable editArticle = null
   @observable isModalVisible = false

   @action onGetEditText = (id) => {
      let url = host+'/api/article/getArticle'
      return new Promise((resolve, reject) => {
         axios.get(url, {
            params: {
               id: id
            }
         }).then((res) => {
            this.editArticle = res.data.data
            resolve(res)
         }).catch((err) => {
            console.warn('fetch error: 请求失败 error message :', err)
            reject(err)
         })
      })
   }
   @action onGetArticle = () => {
      let url = host+'/api/article/articleList'
      fetch(url,{
         mode: 'cors',
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
      }).then(res => res.json()).then((res) => {
         this.articleList = res.data.list||[]
      }).catch((err) => {
         console.warn('fetch error: 请求失败 error message :', err)
         this.articleList = []
      })
   }
}
export default new Article()