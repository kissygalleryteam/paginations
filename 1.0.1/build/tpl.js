KISSY.add('kg/paginations/1.0.1/tpl',[],function(S ,require, exports, module) {


var ret = module.exports = function tpl(undefined){
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
function func4(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += ' ';
var id5 = ((t=(affix.cls)) !== undefined ? affix.cls.DISABLED:((t = data.cls) !== undefined ? (t.DISABLED) :scope.resolveLooseUp(["cls","DISABLED"])));
buffer = buffer.writeEscaped(id5);
buffer.data += '';
return buffer;
}
function func1(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <a href="#" class="item ';
pos.line = 4;
var id2 = ((t=(affix.sel)) !== undefined ? affix.sel.ITEM:((t = data.sel) !== undefined ? (t.ITEM) :scope.resolveLooseUp(["sel","ITEM"])));
buffer = buffer.writeEscaped(id2);
buffer.data += ' ';
var id3 = ((t=(affix.cls)) !== undefined ? affix.cls.PREV:((t = data.cls) !== undefined ? (t.PREV) :scope.resolveLooseUp(["cls","PREV"])));
buffer = buffer.writeEscaped(id3);
buffer.data += '';
var id6 = ((t=(affix.disabled)) !== undefined ? t:(data.disabled));
buffer = ifCommand.call(tpl, scope, {params:[id6],fn: func4}, buffer);
buffer.data += '" aria-label="上一页">';
var id7 = ((t=(affix.prevAndNextText)) !== undefined ? affix.prevAndNextText[0]:((t = data.prevAndNextText) !== undefined ? (t[0]) :scope.resolveLooseUp(["prevAndNextText",0])));
buffer = buffer.writeEscaped(id7);
buffer.data += '</a>\n    ';
return buffer;
}
function func8(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <a href="#" class="item ';
pos.line = 18;
var id9 = ((t=(affix.sel)) !== undefined ? affix.sel.ITEM:((t = data.sel) !== undefined ? (t.ITEM) :scope.resolveLooseUp(["sel","ITEM"])));
buffer = buffer.writeEscaped(id9);
buffer.data += '" data-page="';
var id10 = ((t=(affix.value)) !== undefined ? t:(data.value));
buffer = buffer.writeEscaped(id10);
buffer.data += '">';
var id11 = ((t=(affix.value)) !== undefined ? t:(data.value));
buffer = buffer.writeEscaped(id11);
buffer.data += '</a>\n    ';
return buffer;
}
function func12(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
pos.line = 5;
var id13 = ((t=(affix.type)) !== undefined ? t:(data.type));
var exp15 = id13;
var id14 = ((t=(affix.itemType)) !== undefined ? affix.itemType.NEXT:((t = data.itemType) !== undefined ? (t.NEXT) :scope.resolveLooseUp(["itemType","NEXT"])));
exp15 = (id13)===(id14);
return exp15;
}
function func19(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += ' ';
var id20 = ((t=(affix.cls)) !== undefined ? affix.cls.DISABLED:((t = data.cls) !== undefined ? (t.DISABLED) :scope.resolveLooseUp(["cls","DISABLED"])));
buffer = buffer.writeEscaped(id20);
buffer.data += '';
return buffer;
}
function func16(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <a href="#" class="item ';
pos.line = 6;
var id17 = ((t=(affix.sel)) !== undefined ? affix.sel.ITEM:((t = data.sel) !== undefined ? (t.ITEM) :scope.resolveLooseUp(["sel","ITEM"])));
buffer = buffer.writeEscaped(id17);
buffer.data += ' ';
var id18 = ((t=(affix.cls)) !== undefined ? affix.cls.NEXT:((t = data.cls) !== undefined ? (t.NEXT) :scope.resolveLooseUp(["cls","NEXT"])));
buffer = buffer.writeEscaped(id18);
buffer.data += '';
var id21 = ((t=(affix.disabled)) !== undefined ? t:(data.disabled));
buffer = ifCommand.call(tpl, scope, {params:[id21],fn: func19}, buffer);
buffer.data += '" aria-label="下一页">';
var id22 = ((t=(affix.prevAndNextText)) !== undefined ? affix.prevAndNextText[1]:((t = data.prevAndNextText) !== undefined ? (t[1]) :scope.resolveLooseUp(["prevAndNextText",1])));
buffer = buffer.writeEscaped(id22);
buffer.data += '</a>\n    ';
return buffer;
}
function func23(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
pos.line = 7;
var id24 = ((t=(affix.type)) !== undefined ? t:(data.type));
var exp26 = id24;
var id25 = ((t=(affix.itemType)) !== undefined ? affix.itemType.SKIP:((t = data.itemType) !== undefined ? (t.SKIP) :scope.resolveLooseUp(["itemType","SKIP"])));
exp26 = (id24)===(id25);
return exp26;
}
function func27(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <span class="skip-wrap">\n        共 <em>';
pos.line = 9;
var id28 = ((t=(affix.totalPage)) !== undefined ? t:((t = data.totalPage) !== undefined ? t :scope.resolveLooseUp(["totalPage"])));
buffer = buffer.writeEscaped(id28);
buffer.data += '</em> 页\n        到第 <input type="text" class="input ';
pos.line = 10;
var id29 = ((t=(affix.sel)) !== undefined ? affix.sel.SKIP_INPUT:((t = data.sel) !== undefined ? (t.SKIP_INPUT) :scope.resolveLooseUp(["sel","SKIP_INPUT"])));
buffer = buffer.writeEscaped(id29);
buffer.data += '" value="';
var id30 = ((t=(affix.value)) !== undefined ? t:(data.value));
buffer = buffer.writeEscaped(id30);
buffer.data += '" aria-label="页码输入框"/> 页\n        <button class="';
pos.line = 11;
var id31 = ((t=(affix.sel)) !== undefined ? affix.sel.ITEM:((t = data.sel) !== undefined ? (t.ITEM) :scope.resolveLooseUp(["sel","ITEM"])));
buffer = buffer.writeEscaped(id31);
buffer.data += ' ';
var id32 = ((t=(affix.cls)) !== undefined ? affix.cls.SKIP:((t = data.cls) !== undefined ? (t.SKIP) :scope.resolveLooseUp(["cls","SKIP"])));
buffer = buffer.writeEscaped(id32);
buffer.data += '" aria-label="确定跳转">确定</button>\n    </span>\n    ';
return buffer;
}
function func33(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
pos.line = 13;
var id34 = ((t=(affix.type)) !== undefined ? t:(data.type));
var exp36 = id34;
var id35 = ((t=(affix.itemType)) !== undefined ? affix.itemType.DOT:((t = data.itemType) !== undefined ? (t.DOT) :scope.resolveLooseUp(["itemType","DOT"])));
exp36 = (id34)===(id35);
return exp36;
}
function func37(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <span class="item dot">...</span>\n    ';
return buffer;
}
function func38(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
pos.line = 15;
var id39 = ((t=(affix.current)) !== undefined ? t:(data.current));
return id39;
}
function func40(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <span class="item current">';
pos.line = 16;
var id41 = ((t=(affix.value)) !== undefined ? t:(data.value));
buffer = buffer.writeEscaped(id41);
buffer.data += '</span>\n    ';
return buffer;
}
function func0(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    ';
pos.line = 3;
pos.line = 3;
var id42 = ((t=(affix.type)) !== undefined ? t:(data.type));
var exp44 = id42;
var id43 = ((t=(affix.itemType)) !== undefined ? affix.itemType.PREV:((t = data.itemType) !== undefined ? (t.PREV) :scope.resolveLooseUp(["itemType","PREV"])));
exp44 = (id42)===(id43);
buffer = ifCommand.call(tpl, scope, {params:[exp44],fn: func1,inverse: func8,elseIfs: [{test: func12,fn : func16},{test: func23,fn : func27},{test: func33,fn : func37},{test: func38,fn : func40}]}, buffer);
buffer.data += '\n    ';
return buffer;
}


buffer.data += '<div class="paginations">\n    ';
pos.line = 2;
var id45 = ((t=(affix.items)) !== undefined ? t:((t = data.items) !== undefined ? t :scope.resolveLooseUp(["items"])));
buffer = eachCommand.call(tpl, scope, {params:[id45],fn: func0}, buffer);
buffer.data += '\n</div>';
return buffer;
};
ret.TPL_NAME = module.id || module.name;
});