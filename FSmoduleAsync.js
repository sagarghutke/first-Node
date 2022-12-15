const file=require('fs');
//asynchronized readfile
file.readFile('./content/written.txt','utf8',(err,result)=>
{
    if(err){
        console.log(err)
        return
    }
    console.log(result);
})
/**
 * three parameters
 * 1.path of file to read from
 * 2.callback function
 * 3.encoding
 */
//if you dont give encoding it will generate random buffer number
//as=><Buffer 48 45 6c 6c 4f>
console.log("ASYNC WRITING IN FILE")//might get executed first as readFile is async
//writing in file after reading from two text file and appending it in two file
//below is simple example of callback hell
file.readFile('./content/subcontent/test.txt','utf8',(err,result)=>
{
    if(err){
        console.log(err)
        return
    }
    const first =result;
    file.readFile('./content/subcontent/2test.txt','utf8',(err,result)=>
{
    if(err){
        console.log(err)
        return
    }
    const second =result;
    file.writeFile('./content/result-async.txt',`written in async mode: ${first},${second}`,(err,result)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        console.log('Done:'+result);//here result will be undefined because we are not expecting anything back
    })
})

})