(function () {
  require.config({//配置模块对应路径
    baseUrl: '',
    paths: {
      moduleA: './moduleA',
      moduleB: './moduleB',
    }
  })
  //执行
  require(['moduleA', 'moduleB'], (A, B) => {
    A.setModuleName('A')
    console.log('origin', A.moduleName)
    const { setModuleName, moduleName } = B
    setModuleName('B')
    console.log('origin', moduleName)
  })
})()