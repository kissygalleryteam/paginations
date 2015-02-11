KISSY.add(function(S,require,exports,module){
/*compiled by xtemplate#3.3.3*/
var ret = module.exports = function contentBox(undefined){
var t;
var t0;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var tpl = this;
var root = tpl.root;
var buffer = tpl.buffer;
var scope = tpl.scope;
var runtime = tpl.runtime;
var name = tpl.name;
var pos = tpl.pos;
var data = scope.data;
var affix = scope.affix;
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];
function func0(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\' \'+ boxCls';
return buffer;
}
function func3(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n              ';
pos.line = 6;
var id4 = ((t=(affix.mPartHtml)) !== undefined ? t:((t = data.mPartHtml) !== undefined ? t :scope.resolveLooseUp(["mPartHtml"])));
buffer = buffer.write(id4);
buffer.data += '\n            ';
return buffer;
}
function func6(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n              <div class="image-wrap"><img class="vc-img" src="';
pos.line = 10;
var id7 = ((t=(affix.mPartImg)) !== undefined ? t:((t = data.mPartImg) !== undefined ? t :scope.resolveLooseUp(["mPartImg"])));
buffer = buffer.writeEscaped(id7);
buffer.data += '"/></div>\n              ';
return buffer;
}
function func9(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n                  <span class="title">';
pos.line = 14;
var id10 = ((t=(affix.mPartTitle)) !== undefined ? t:((t = data.mPartTitle) !== undefined ? t :scope.resolveLooseUp(["mPartTitle"])));
buffer = buffer.writeEscaped(id10);
buffer.data += '</span>\n                  ';
return buffer;
}
function func5(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n              <i class="close"></i>\n              ';
pos.line = 9;
pos.line = 9;
var id8 = ((t=(affix.mPartImg)) !== undefined ? t:((t = data.mPartImg) !== undefined ? t :scope.resolveLooseUp(["mPartImg"])));
buffer = ifCommand.call(tpl, scope, {params:[id8],fn: func6}, buffer);
buffer.data += '\n              <div class="content">\n                  ';
pos.line = 13;
pos.line = 13;
var id11 = ((t=(affix.mPartTitle)) !== undefined ? t:((t = data.mPartTitle) !== undefined ? t :scope.resolveLooseUp(["mPartTitle"])));
buffer = ifCommand.call(tpl, scope, {params:[id11],fn: func9}, buffer);
buffer.data += '\n                  <p class="msg">';
pos.line = 16;
var id12 = ((t=(affix.mPartMsg)) !== undefined ? t:((t = data.mPartMsg) !== undefined ? t :scope.resolveLooseUp(["mPartMsg"])));
buffer = buffer.writeEscaped(id12);
buffer.data += '</p>\n              </div>\n            ';
return buffer;
}


buffer.data += '<div class="vc-notify-box';
var id1 = ((t=(affix.boxCls)) !== undefined ? t:((t = data.boxCls) !== undefined ? t :scope.resolveLooseUp(["boxCls"])));
buffer = ifCommand.call(tpl, scope, {params:[id1],fn: func0}, buffer);
buffer.data += '">\n    <div class="box-wrap">\n        <div class="top-part">';
pos.line = 3;
var id2 = ((t=(affix.tPartHtml)) !== undefined ? t:((t = data.tPartHtml) !== undefined ? t :scope.resolveLooseUp(["tPartHtml"])));
buffer = buffer.write(id2);
buffer.data += '</div>\n        <div class="main-part">\n            ';
pos.line = 5;
pos.line = 5;
var id13 = ((t=(affix.mPartHtml)) !== undefined ? t:((t = data.mPartHtml) !== undefined ? t :scope.resolveLooseUp(["mPartHtml"])));
buffer = ifCommand.call(tpl, scope, {params:[id13],fn: func3,inverse: func5}, buffer);
buffer.data += '\n        </div>\n        <div class="bottom-part">';
pos.line = 20;
var id14 = ((t=(affix.bPartHtml)) !== undefined ? t:((t = data.bPartHtml) !== undefined ? t :scope.resolveLooseUp(["bPartHtml"])));
buffer = buffer.write(id14);
buffer.data += '</div>\n    </div>\n</div>\n';
return buffer;
};
ret.TPL_NAME = module.id || module.name;
});