KISSY.add("kg/paginations/1.0.1/index",["base","kg/xtemplate/3.3.3/runtime","node"],function(e,a,t,n){var r,s,i=a("base"),l=a("kg/xtemplate/3.3.3/runtime"),p=a("node");r=function(e){var a=e=function t(e){function a(e,a,t){var n=e.data,r=e.affix;a.data+=" ";var s=(g=r.cls)!==t?r.cls.DISABLED:(g=n.cls)!==t?g.DISABLED:e.resolveLooseUp(["cls","DISABLED"]);return a=a.writeEscaped(s),a.data+="",a}function n(e,n,r){var s=e.data,i=e.affix;n.data+='\n    <a href="#" class="item ',I.line=4;var l=(g=i.sel)!==r?i.sel.ITEM:(g=s.sel)!==r?g.ITEM:e.resolveLooseUp(["sel","ITEM"]);n=n.writeEscaped(l),n.data+=" ";var p=(g=i.cls)!==r?i.cls.PREV:(g=s.cls)!==r?g.PREV:e.resolveLooseUp(["cls","PREV"]);n=n.writeEscaped(p),n.data+="";var o=(g=i.disabled)!==r?g:s.disabled;n=S.call(t,e,{params:[o],fn:a},n),n.data+='" aria-label="上一页">';var u=(g=i.prevAndNextText)!==r?i.prevAndNextText[0]:(g=s.prevAndNextText)!==r?g[0]:e.resolveLooseUp(["prevAndNextText",0]);return n=n.writeEscaped(u),n.data+="</a>\n    ",n}function r(e,a,t){var n=e.data,r=e.affix;a.data+='\n    <a href="#" class="item ',I.line=18;var s=(g=r.sel)!==t?r.sel.ITEM:(g=n.sel)!==t?g.ITEM:e.resolveLooseUp(["sel","ITEM"]);a=a.writeEscaped(s),a.data+='" data-page="';var i=(g=r.value)!==t?g:n.value;a=a.writeEscaped(i),a.data+='">';var l=(g=r.value)!==t?g:n.value;return a=a.writeEscaped(l),a.data+="</a>\n    ",a}function s(e,a,t){var n=e.data,r=e.affix;I.line=5;var s=(g=r.type)!==t?g:n.type,i=s,l=(g=r.itemType)!==t?r.itemType.NEXT:(g=n.itemType)!==t?g.NEXT:e.resolveLooseUp(["itemType","NEXT"]);return i=s===l}function i(e,a,t){var n=e.data,r=e.affix;a.data+=" ";var s=(g=r.cls)!==t?r.cls.DISABLED:(g=n.cls)!==t?g.DISABLED:e.resolveLooseUp(["cls","DISABLED"]);return a=a.writeEscaped(s),a.data+="",a}function l(e,a,n){var r=e.data,s=e.affix;a.data+='\n    <a href="#" class="item ',I.line=6;var l=(g=s.sel)!==n?s.sel.ITEM:(g=r.sel)!==n?g.ITEM:e.resolveLooseUp(["sel","ITEM"]);a=a.writeEscaped(l),a.data+=" ";var p=(g=s.cls)!==n?s.cls.NEXT:(g=r.cls)!==n?g.NEXT:e.resolveLooseUp(["cls","NEXT"]);a=a.writeEscaped(p),a.data+="";var o=(g=s.disabled)!==n?g:r.disabled;a=S.call(t,e,{params:[o],fn:i},a),a.data+='" aria-label="下一页">';var u=(g=s.prevAndNextText)!==n?s.prevAndNextText[1]:(g=r.prevAndNextText)!==n?g[1]:e.resolveLooseUp(["prevAndNextText",1]);return a=a.writeEscaped(u),a.data+="</a>\n    ",a}function p(e,a,t){var n=e.data,r=e.affix;I.line=7;var s=(g=r.type)!==t?g:n.type,i=s,l=(g=r.itemType)!==t?r.itemType.SKIP:(g=n.itemType)!==t?g.SKIP:e.resolveLooseUp(["itemType","SKIP"]);return i=s===l}function o(e,a,t){var n=e.data,r=e.affix;a.data+='\n    <span class="skip-wrap">\n        共 <em>',I.line=9;var s=(g=r.totalPage)!==t?g:(g=n.totalPage)!==t?g:e.resolveLooseUp(["totalPage"]);a=a.writeEscaped(s),a.data+='</em> 页\n        到第 <input type="text" class="input ',I.line=10;var i=(g=r.sel)!==t?r.sel.SKIP_INPUT:(g=n.sel)!==t?g.SKIP_INPUT:e.resolveLooseUp(["sel","SKIP_INPUT"]);a=a.writeEscaped(i),a.data+='" value="';var l=(g=r.value)!==t?g:n.value;a=a.writeEscaped(l),a.data+='" aria-label="页码输入框"/> 页\n        <button class="',I.line=11;var p=(g=r.sel)!==t?r.sel.ITEM:(g=n.sel)!==t?g.ITEM:e.resolveLooseUp(["sel","ITEM"]);a=a.writeEscaped(p),a.data+=" ";var o=(g=r.cls)!==t?r.cls.SKIP:(g=n.cls)!==t?g.SKIP:e.resolveLooseUp(["cls","SKIP"]);return a=a.writeEscaped(o),a.data+='" aria-label="确定跳转">确定</button>\n    </span>\n    ',a}function u(e,a,t){var n=e.data,r=e.affix;I.line=13;var s=(g=r.type)!==t?g:n.type,i=s,l=(g=r.itemType)!==t?r.itemType.DOT:(g=n.itemType)!==t?g.DOT:e.resolveLooseUp(["itemType","DOT"]);return i=s===l}function d(e,a){e.data,e.affix;return a.data+='\n    <span class="item dot">...</span>\n    ',a}function v(e,a,t){var n=e.data,r=e.affix;I.line=15;var s=(g=r.current)!==t?g:n.current;return s}function c(e,a,t){var n=e.data,r=e.affix;a.data+='\n    <span class="item current">',I.line=16;var s=(g=r.value)!==t?g:n.value;return a=a.writeEscaped(s),a.data+="</span>\n    ",a}function f(e,a,i){var f=e.data,T=e.affix;a.data+="\n    ",I.line=3,I.line=3;var m=(g=T.type)!==i?g:f.type,E=m,h=(g=T.itemType)!==i?T.itemType.PREV:(g=f.itemType)!==i?g.PREV:e.resolveLooseUp(["itemType","PREV"]);return E=m===h,a=S.call(t,e,{params:[E],fn:n,inverse:r,elseIfs:[{test:s,fn:l},{test:p,fn:o},{test:u,fn:d},{test:v,fn:c}]},a),a.data+="\n    ",a}{var g,t=this,T=t.root,m=t.buffer,E=t.scope,I=(t.runtime,t.name,t.pos),h=E.data,P=E.affix,x=T.nativeCommands,y=T.utils,N=(y.callFn,y.callCommand,x.range,x.foreach,x.forin,x.each),S=(x["with"],x["if"]);x.set,x.include,x.parse,x.extend,x.block,x.macro,x["debugger"]}m.data+='<div class="paginations">\n    ',I.line=2;var w=(g=P.items)!==e?g:(g=h.items)!==e?g:E.resolveLooseUp(["items"]);return m=N.call(t,E,{params:[w],fn:f},m),m.data+="\n</div>",m};return a.TPL_NAME=n.id||n.name,e}(),s=function(e){var a=p.all,t=i,n=l,s=r,o={DISABLED:"disabled",NEXT:"next",PREV:"prev",ITEM:"item",SKIP:"skip"},u={ITEM:"J_Item",SKIP_INPUT:"J_SkipInput"},d={PREV:"prev",NEXT:"next",DOT:"dot",SKIP:"skip",PAGE:"page"},v={sum:function(e){for(var a=0,t=0,n=e.length;n>t;t++)a+=parseInt(e[t]);return a}},c=t.extend({initializer:function(){var e=this;return e.set("$container",a(e.get("$container"))),e._render(),e._bind(),e},_pushItemByRange:function(e,a,t,n){for(var r=e;a>=r;r++)t.push({value:r,current:n===r,type:d.PAGE})},_render:function(){var e=this;if(e.get("autoRender")){var a=e.get("totalPage"),t=e.get("currentPage"),r=e.get("continuity"),s=e.get("showPrevAndNext"),i=e.get("showNumbers"),l=e.get("showSkip"),p=[];if(i)if(0===r.length||v.sum(r)+2>a)e._pushItemByRange(1,a,p,t);else{var c,f=r[0],g=r[1],T=r[2],m=r[3];if(f+g+1>=t)e._pushItemByRange(1,t,p,t);else if(f>0&&e._pushItemByRange(1,f,p,t),p.push({type:d.DOT}),g>0){var E=t-g;c=a-T-m-t,0>c&&(E+=c),e._pushItemByRange(1>E?1:E,t,p,t)}if(T+m>=a-t)e._pushItemByRange(t+1,a,p,t);else{if(T>0){var I=t+T;c=t-1-f-g,0>c&&(I-=c),e._pushItemByRange(t+1,I>a?a:I,p,t)}p.push({type:d.DOT}),m>0&&e._pushItemByRange(a-m+1,a,p,t)}}s&&(p.push({type:d.NEXT,disabled:t===a}),p.unshift({type:d.PREV,disabled:1===t})),l&&p.push({type:d.SKIP,value:t}),e.get("$container").html(new n(e.get("tpl")).render({totalPage:a,items:p,itemType:d,cls:o,sel:u,prevAndNextText:e.get("prevAndNextText")}))}},_bind:function(){var e=this,t=e.get("$container");t.delegate("click tap","."+u.ITEM,function(t){t.halt(),e._eventHandle(a(t.currentTarget))})},_eventHandle:function(e){var a=this;e.hasClass(o.DISABLED)||a.get("freeze")||(e.hasClass(o.SKIP)&&a.get("$skipNumInput")[0].focus(),a.skip(a._getPageByTarget(e)))},_getPageByTarget:function(e){var a=this,t=1;return t=e.hasClass(o.NEXT)?a.get("currentPage")+1:e.hasClass(o.PREV)?a.get("currentPage")-1:e.hasClass(o.SKIP)?a.get("$skipNumInput").val():parseInt(e.attr("data-page"))},_validate:function(e){var a=this,t=a.get("totalPage"),n=parseInt(e),r=!0;return(isNaN(n)||n>t||1>n)&&(a.fire("skip:error",{page:e}),r=!1),r},skip:function(e){{var a=this,t=parseInt(e);a.get("totalPage")}if(a._validate(e)){var n=a.fire("before:skip",{page:t});n!==!1&&(a.set("currentPage",t),a._render(),a.fire("skip",{page:t}))}},show:function(){this.get("$container").show()},hide:function(){this.get("$container").hide()},destroy:function(){var e=this,a=e.get("$container");a.detach("click"),a.remove()}},{ATTRS:{$container:{value:"#J_Pagination"},$skipNumInput:{value:"",getter:function(){return a("."+u.SKIP_INPUT,this.get("$container"))}},currentPage:{value:1},totalPage:{value:10},tpl:{value:s},showPrevAndNext:{value:!0},showNumbers:{value:!0},showSkip:{value:!0},prevAndNextText:{value:["<",">"]},continuity:{value:[2,2,2,0]},autoRender:{value:!0},freeze:{value:!1}}});return e=c}(),n.exports=s});