const path=require('path')//importing path module
//platform  specific sepearator
console.log(path.sep);//o/p:=>'/'

//join method that jon sequence of paths using separator
//returns normalizing resulting path 
const filepath=path.join('/content','subcontent','test.txt')
console.log(filepath)//o/p=>noramalize path of text.txt  '\content\subcontent\test.txt'

//if e want base name of above filepath i.e only test.txt
const base=path.basename(filepath)
console.log(base);


//for absolute path of any file
const absolute =path.resolve(__dirname,'content','subcontent','test.txt');
/*
gives absolute path of 
the specified file 
__dirname give directory included
 */
console.log(absolute);