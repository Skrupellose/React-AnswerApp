var express = require('express')
var app = express()
var sqlQuery = require('./sql')

app.get('/', (req, res) => {
  res.send('答题api服务器')
})

app.get('/api/rtimu', async (req, res) => {
  res.append('Access-Control-Allow-Origin','*')
  res.append('Access-Control-Allow-Content-Type','*')
  let query = req.query.page ? req.query.page : 1
  let strSql = `select * from quizzes limit ${query*10},10`
  let result = await sqlQuery(strSql)
  res.send(result)
})

app.listen(8080, () => {
  console.log('server start..')
})