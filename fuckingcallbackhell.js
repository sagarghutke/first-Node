const http =require('http');

const server =http.createServer((req,res)=>
{
if(req.url=='/')
{
    res.end('Home page');
}
else if(req.url==='/about')
{
    //suppose there is blocking code like below
    ///it will be a fucking call back hell do not fucking do this ever
    // for(let i=1;i<10000000;i++)
    // {
    //     for(let j=1;j<10000;j++)
    //     {
    //         console.log(`${i} ${j}`)
    //     }
    // }
    res.end('about page');
}
else
{
    res.end('error page');
}

})
server.listen(5000,()=>{
    console.log('server is listening on port 5000....')
});
