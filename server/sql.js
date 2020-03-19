const mysql = require('mysql')
const connect = {
  host:'localhost',
  post:'3306',
  user:'root',
  password:'root',
  database:'timu'
}


function queryFn(sqlStr,arr){
  let con = mysql.createConnection(connect)
  return new Promise((resolve,reject)=>{
    con.query(sqlStr,arr,(err,result)=>{
      if(err){
        reject(err)
      }else{
        resolve(result)
        con.end()
      }
    })
  })
}
module.exports = queryFn