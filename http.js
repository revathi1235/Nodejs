const http= require("http");
const port=3000;
const server=http.createServer((req,res)=>{
//   res.statuscode=200;
//   res.setHeader('content-Type' , 'text/plain');
res.writeHead(200,{'content-Type' : 'text/plain'})
    // res.end('welcome gooys');
    res.end('welcome all \n how are you');

})
server.listen(port ,()=>{
    console.log("server is running" +port)
})