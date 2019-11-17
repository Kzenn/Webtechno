// ./handles.js
// Necessary imports
const url = require('url')
const qs = require('querystring')
module.exports = {
    serverHandle: function (req, res) {
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
  }