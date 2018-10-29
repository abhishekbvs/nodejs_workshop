const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server =
http.createServer((req,res)=>{
  if(req.url === '/home'){
    fs.readFile('./views/home.html',null,function(err,content){
      if(err){
        console.log('err');
      }
      else{
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(content);
        res.end();
      }
      console.log(req.url);
    });
  }
  else{
    res.writeHead(400);
    res.write('Oops! invlaid URl');
    res.end();
  }
});

server.listen(port,hostname,()=>{
  console.log(`server running at http://${hostname}:${port}/`);
});
