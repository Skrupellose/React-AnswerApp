import axios from 'axios'
let asyncFnObj = {
  getList: async () => {
    let page = parseInt(Math.random()*160)
    let httpUrl = `http://localhost:8080/api/rtimu/?page=${page}`
    let res = await axios.get(httpUrl)
    return res.data
  }
}
export default asyncFnObj