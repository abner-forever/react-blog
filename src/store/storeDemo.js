import React,{ReactDOM} from "react";
import { observable, action } from 'mobx';
import { Alert } from 'antd';
const axios = require('axios');
class Demo {
   @observable articleList = [];
   @observable editText = ''
   @observable editArticle = null
   @action onGetEditText = (id) => {
      let url = 'http://foreverheart.top/api/article/getArticle'
      return new Promise((resolve, reject) => {
         axios.get(url, {
            params: {
               id: id
            }
         }).then((res) => {
            this.editArticle = res.data.data[0]
            this.editText = JSON.parse(res.data.data[0].contents)
            resolve(res)
         }).catch((err) => {
            console.warn('fetch error: 请求失败 error message :', err)
            reject(err)
         })
      })
   }
   @action showAlert = (message, type) => {
      console.log('message,type', message, type);
      return(
         <Alert message={message} type={type} />
      )
   }
   @action onGetArticle = () => {
      fetch('/api/article/articleList',{
         mode: 'cors',
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
      }).then(res => res.json()).then((res) => {
         console.log('文章', res.data)
         this.articleList = res.data
      }).catch((err) => {
         console.warn('fetch error: 请求失败 error message :', err)
         this.articleList = []
      })
   }
}
export default new Demo();