// CommonJS, every file is a module by default 
// Modules = Encapsulated Code (onnly share minimum)

const names = require('./3-firstmodule');
const sayHi = require('./4-utils');
const data = require('./5-alternative-module-flex')
require('./6-mind-grenade');

   sayHi("werey");
   sayHi(names.girl);
   sayHi(names.boy);
