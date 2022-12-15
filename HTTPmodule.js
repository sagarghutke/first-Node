//const { rmSync } = require('fs');
const http=require('http')
//console.log(server)
const server = http.createServer((req,res)=>{
    //console.log(req);
    if(req.url==='/')
    {
        res.end('Welcome to front page')
    }
// res.write('Welcome to our page')//giving response for the request to our server 
// res.end();/**we can also put everything in the end */
else if(req.url==='/about')
{
    res.end('I dont know what you heard about me...')
}
//if user request something which we dont have then
else
res.end(`<h1>Oppsey-Daisy!!!</h1>
<p><h2>You sure you know what you are looking for mother-fucker</h2></p>`)


})
/**
 * createServer method in http module will create a server
 * it has a callback function which takes two parameters
 * 1.req-in request object information about request to our server
 * is stored
 * 2.res-what we are sending back for req
 */
server.listen(8000);//sepecifies the port from which our server is listening for requests 