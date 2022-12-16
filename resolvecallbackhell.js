const {readFile,writeFile}= require('fs').promises
const { reject } = require('lodash')
const { resolve } = require('path')
const util=require('util')

// readFile('./content/subcontent/test.txt','utf8',(err,data)=>{
//     if(err)
//     {
//         return
//     }
//     else{
//         console.log(data)
//     }

// })
//will be a type of callback hell if we read two file and and then perform  write
//to resolve we can convert it into promise 

/**
 * converting above code to promise as below
 */

/**
 * 
 * @param {path of the file you want to read from} path 
 * @returns a promise hence noo callback hell will occur our code will simply
 * go on to execute next line when our request is resolved then
 */
// const text =(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err)
//             {
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
        
//         })

//     })
// }
/**
 * above function can made to return promise automatically by using function of 'util' module 
 * called 'promisify' which takes function name as an argument
 * below is shown the example
 */
const readFilePromise =util.promisify(readFile);//will make the readFile return a promise automatically
//same can be done for the write file
const writeFilePromise =util.promisify(writeFile);

/**
 * below is example of async await
 * await is 'always' in a 'async' function
 */
 const start = async()=>{
    //always put async await in a try catch block to avoid error
    try{
        const first = await readFile('./content/subcontent/test.txt','utf-8')//this will wait here until the text function resolves then it will go to teh next function
        const second = await readFile('./content/subcontent/2test.txt','utf8')
        await writeFile('./content/result-mind-fucked.txt',`This is fucking good:${first} ${second}`,{flag:'a'})
        console.log(first)
        console.log(second)
        //console.log('mazzaaaaaaaa')
    }
    catch(error){
        console.log(error);
    }
 }
 start();









// /**
//  * below is example of .then
//  */
// text('./content/subcontent/test.txt').then(result=>console.log(result)).catch(err=>console.log(err))
// /**
//  * if call to function resolves '.then' will get executed result will be printed else we will be waiting for promise
//  * in case of error we catch it
//  */

