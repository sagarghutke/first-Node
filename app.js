/**
 * we can install npm packages as local dependecy as:
 * npm i <packagename>
 * we can also install as global dependecy as:
 * npm install -g <packagename>
 * -g for global
 * 
 * local dependency is used most often as arrival of 
 * npx lead to requirement of local dependency
 */

/**
 * package.json -it is a manifest file(stores important info about project/package)
 * we need to create it/install it
 * create manually as:
 * create package.json in the root ,create properties etc
 * create automatically as:
 * npm init(step by step press enter)
 * in one go
 * npm init -y (everything)
 */ 
const load =require('lodash')//module in npm we need to install it before using
const items=[1,2,[3,[4],5,],6,7]
const newitems =load.flattenDeep(items)//method in loadash which will flatten the array of array 
console.log(newitems)