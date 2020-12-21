define(function () {
  let moduleName = 'moduleB'
  function setModuleName(val) {
    moduleName = val
    console.log('originModuleName', moduleName)
  }
  return {
    moduleName,
    setModuleName
  }
})