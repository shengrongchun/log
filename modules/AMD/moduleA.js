define(function () {
  let moduleName = 'moduleA'
  function setModuleName(val) {
    moduleName = val
    console.log('originModuleName', moduleName)
  }
  return {
    moduleName,
    setModuleName
  }
})