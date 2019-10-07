import { observable, action } from 'mobx';

class Demo {
   @observable articleList = [];
   @observable editText = ''
   // @action initData = () => {
   //    fetch('http://localhost:3001/api/users/userinfo').then(res =>res.json()).then((res) => {
   //       console.log('res',res.data)
   //       this.sourceData = res.data
   //    }).catch((err)=>{
   //       console.warn('fetch error: 请求失败 error message :',err)
   //    })
   // }
   @action onGetEditText = () => {
      fetch('http://localhost:3001/api/users/userinfo').then(res => res.json()).then((res) => {
         console.log('res', res.data)
         this.editText = res.data[0].contents
      }).catch((err) => {
         console.warn('fetch error: 请求失败 error message :', err)
      })
   }
   
   @action onGetArticle = () => {
      fetch('http://localhost:3001/api/article/articleList').then(res => res.json()).then((res) => {
         console.log('文章', res.data)
         this.articleList = res.data
      }).catch((err) => {
         console.warn('fetch error: 请求失败 error message :', err)
      })
   }
}
export default new Demo();