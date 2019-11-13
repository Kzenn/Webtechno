// Import a module
const http = require('http')

// Declare an http server
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'         <p>Hello World !</p>' +
'    </body>' +
'</html>'

// Import Node url module
const url = require('url')
const qs = require('querystring')

const serverHandle = function (req, res) {
  const route = url.parse(req.url)
  const path = route.pathname 
  const params = qs.parse(route.query)
  console.log(params)

  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (path === '/hello' && 'name' in params) 
  {
     if(path === '/hello' && params['name'] === 'clement'){
        res.write('Hello my name is clement and I am 21 years old and I am an engineer')
    }else {
        console.log("No request handler found for " + path);
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not found");
        res.end();
    }
  }else {
      res.write('In order to display your name you need to write the path /hello? + your name and lets see if youre welcome')
  } 

  res.end();
}
  
  const server = http.createServer(serverHandle);
  server.listen(8080)

// curl localhost:8080 or go to http://localhost:8080
