let http = require('http')
let users = [
  {id: 1, name: 'zifeng1'},
  {id: 2, name: 'zifeng2'},
  {id: 3, name: 'zifeng3'}
]
let server = http.createServer(function(req, res){
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.url === '/api/users') {
    res.end(JSON.stringify(users))
  }else{
    res.end('Not Found')
  }
})
server.listen(3000, () => {
  console.log('后端API接口服务器已经启动在 3000 端口!')
})