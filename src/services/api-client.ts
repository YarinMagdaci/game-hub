import axios from "axios";


export default axios.create({
   baseURL: 'https://api.rawg.io/api',
   params: {
      key: 'c41f1136454d411f8ab316f134ea4d7d'
   }
})