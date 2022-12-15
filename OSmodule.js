const os=require('os')//node knows that we are looing for built in modules
//if we go as ('./asasa') then node knows we are looking for user created modules
//require('ashdahsdka');there is no built in module like this hence give error




//Info about current user
const user=os.userInfo();
console.log(user);

//uptime of system in seconds
console.log(`the system uptime ${os.uptime()}`)

const currentOs={
    name:os.type(),//for type of OS
    release:os.release(),//for release date of OS
    totalMem:os.totalmem(),//gives total memory of your system
    FreeMem:os.freemem(),//gives free memory of your system
}
console.log(currentOs);//loggng in console to see o/p