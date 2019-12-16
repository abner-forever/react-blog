import { observable, action } from 'mobx';

class Demo {
   @observable sourceData = [];
   @action initData = () => {
      fetch('http://localhost:3001/api/users/userinfo').then(res =>res.json()).then((res) => {
         console.log('res',res.data)
         this.sourceData = res.data
      }).catch((err)=>{
         console.warn('fetch error: 请求失败 error message :',err)
      })
   }
}
export default new Demo();