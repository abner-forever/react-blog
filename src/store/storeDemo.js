import { observable, action } from 'mobx';
const axios = require('axios');
class Demo {
   @observable articleList = [];
   @observable editText = ''

   @action onGetEditText = (title) => {
      let url = 'http://localhost:3000/api/article/getArticle'
      axios.get(url, {
         params: {
            title: title
         }
      }).then((res) => {
         this.editText = res.data.data[0].contents
      }).catch((err) => {
         console.warn('fetch error: 请求失败 error message :', err)
      })
   }

   @action onGetArticle = () => {
      fetch('http://localhost:3000/api/article/articleList').then(res => res.json()).then((res) => {
         console.log('文章', res.data)
         this.articleList = res.data
      }).catch((err) => {
         console.warn('fetch error: 请求失败 error message :', err)
      })
   }
}
export default new Demo();