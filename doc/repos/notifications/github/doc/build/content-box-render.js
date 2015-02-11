KISSY.add('kg/vc-notifications/1.0.2/content-box-render',["./content-box","kg/xtemplate/3.3.3/runtime"],function(S ,require, exports, module) {


var tpl = require("./content-box");
var XTemplateRuntime = require("kg/xtemplate/3.3.3/runtime");
var instance = new XTemplateRuntime(tpl);
module.exports = function(){
return instance.render.apply(instance,arguments);
};
});