## 综述

Paginations分页

![http://gtms02.alicdn.com/tps/i2/TB1DApgHXXXXXbOXXXXFvIM3VXX-434-180.png](http://gtms02.alicdn.com/tps/i2/TB1DApgHXXXXXbOXXXXFvIM3VXX-434-180.png)

## 初始化组件
	//皮肤文件建议直接拿源码的less文件根据自己业务定制化使用	
    S.use('kg/paginations/1.0.1/index,kg/paginations/1.0.1/index.css', function (S, Pagination) {
        var pagination = new Pagination({
        	$container: '#page',
        	totalPage: 15
        });
    });

## API说明

### 属性

|名称|类型|默认值|描述|
|:---------------|:--------|:----|:----------|
|$container|String/NodeList|'#J_Pagination'|容器|
|currentPage|Number|1|当前页|
|totalPage|Number|10|总页数|
|showPrevAndNext|Boolean|true|显示上下页|
|showNumbers|Boolean|true|显示中间页码，如果要设置页码连续性，请参考**continuity**属性|
|showSkip|Boolean|true|显示跳转到xx页区域|
|prevAndNextText|Array|['<','>']|上下页按钮文案|
|tpl|Function||渲染模板，基于XTepmlate的预编译后文件，可以自定义模块，详情查看源码tpl.xtpl，满足文案修改|
|continuity|Array|[2, 2, 2, 0]|中间页码连续性，请看下方页码连续性详解|
|autoRender|Boolean|true|自动渲染，如果是后端直接输出结构，设置false|
|freeze|Boolean|false|冻结组件，即使各按钮无效(用于加载中处理)，详情查看demo|

#### continuity详解

中间页面显示的连续性 [开始连续页码 , 当期页前面的连续页码 , 当期页后面的连续页码 , 结束的连续页码] or []代表全部连续。如果当前页码处于开始和结束连续页码中，会特殊处理。

demo(共20页，当前为10)，[1,2,3,4]代表下方

[1]...[8][9]**[10]**[11][12][13]...[17][18][19][20]


### 方法

|名称|参数|返回值|描述|
|:---------------|:--------|:----|:----------|
|**skip**|page :Number/String|/|跳转到page页|
|show|/|/|显示组件|
|hide|/|/|隐藏组件|
|destroy|/|/|析构|
|getXXX和setXXX|/|/|各属性通过getter和setter来获取,如getCurrentPage|

### 事件

|名称|参数|描述|
|:---------------|:--------|:----------|
|before:skip|ev.page 需要跳转的页码|跳转到指定页码前触发，**通过return false来阻止渲染**|
|skip|ev.page 需要跳转的页码|跳转到指定页码后触发|

