let moduleA = require('./moduleA')
let { moduleName, setModuleName } = require('./moduleB')
//
moduleA.setModuleName('setA')
console.log('originModuleName', moduleA.moduleName)
setModuleName('setB')
console.log('originModuleName', moduleName)
//result
// module setA
//   originModuleName A  
//   module setB
//     originModuleName B
//commonjs 模块输出值是会被缓存的