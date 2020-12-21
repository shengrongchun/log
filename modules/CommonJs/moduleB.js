let moduleName = 'B'
function setModuleName(val) {
  moduleName = val
  console.group('module', moduleName)
}
module.exports = {
  moduleName,
  setModuleName
}