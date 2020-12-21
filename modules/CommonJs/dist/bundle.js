(function () {
  function r(e, n, t) {//执行 r
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c)
            return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        var p = n[i] = { exports: {} };
        e[i][0].call(p.exports,
          function (r) {//require函数 p为module 
            var n = e[i][1][r];//n 为模块指针
            return o(n || r)
          }, p, p.exports, r, e, n, t)
      } return n[i].exports
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)
      o(t[i]);//o(1)
    return o

  } return r
})()({
  1: [function (require, module, exports) {
    let moduleA = require('./moduleA')
    let { moduleName, setModuleName } = require('./moduleB')
    //
    moduleA.setModuleName('setA')
    console.log('originModuleName', moduleA.moduleName)
    setModuleName('setB')
    console.log('originModuleName', moduleName)
  }, { "./moduleA": 2, "./moduleB": 3 }],
  2: [function (require, module, exports) {
    let moduleName = 'A'
    function setModuleName(val) {
      moduleName = val
      console.group('module', moduleName)
    }
    module.exports = {
      moduleName,
      setModuleName
    }
  }, {}],
  3: [function (require, module, exports) {
    let moduleName = 'B'
    function setModuleName(val) {
      moduleName = val
      console.group('module', moduleName)
    }
    module.exports = {
      moduleName,
      setModuleName
    }
  }, {}]
}, {}, [1]);



//解释
// 1、创建模块字典，当参数传入
// 2、创建 require module exports 
// 3、module是对象：{ exports: {} }
// 4、require是函数，通过传入的路劲获取模块对应的字典指针找到模块体，返回 exports对象
