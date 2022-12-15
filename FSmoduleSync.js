const file =require('fs');//importing filesystem module
/**
 * we have some synchronus method defined inside the file
 * system module
 */
//synchronized readfile
console.log(file.readFileSync('./content/subcontent/test.txt','utf8'))
/**
 * read filesync taking parameters
 * path of file
 * way to read as utf8 i.e Encoding
 */
console.log(file.readFileSync('./content/subcontent/2test.txt','utf8'))

//syncronized writefile
 file.writeFileSync('./content/written.txt','HEllO');
 /**
  * takes two arguments 
  * 1.path where is file
  * 2.data to write
  * if file not there creates he file then write the content
  * if file is there and have something written in it 
  * it will overwrite the content
  */
 /**
  * to append to the content in file we go as below
  * 
 file.writeFileSync('./content/written.txt',
 'HEllO',{flag:'a'});//flag :'a' will append 
  */
