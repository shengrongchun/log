import moduleA from './moduleA'
import { moduleName, setModuleName } from './moduleB'
//
moduleA()
//
setModuleName('B')
console.log('moduleName', moduleName)