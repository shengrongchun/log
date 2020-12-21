let moduleName = '模块B'
function setModuleName(val) {
  moduleName = val
  console.log('origin', moduleName)
}
export {
  moduleName,
  setModuleName
}