// Node Built in MODULES 
// Os module 

const os = require('os');


// info about current user 
const user = os.userInfo();
  //console.log(user);


 // method returns the system uptime in seconds 
 //console.log(`the system Uptime is ${os.uptime()} seconds`);


 // more OS methods 
 const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
 }

//console.log(currentOS);