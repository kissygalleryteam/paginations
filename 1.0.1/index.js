var $ = require('node').all;
var Base = require('base');
var XTR = require("kg/xtemplate/3.3.3/runtime");
var tpl = require('./tpl');
//样式 有用于逻辑判断
var CLS = {
    DISABLED: 'disabled',
    NEXT: 'next',
    PREV: 'prev',
    ITEM: 'item',
    SKIP: 'skip'
};
//JS钩子
var SEL = {
    ITEM: 'J_Item',
    SKIP_INPUT: 'J_SkipInput'
};
//分页项类型
var ITEM_TYPE = {
    PREV: 'prev',
    NEXT: 'next',
    DOT: 'dot',
    SKIP: 'skip',
    PAGE: 'page'
};
//工具类
var Util = {
    sum: function (arr) {
        var sum = 0;
        for (var i = 0, l = arr.length; i < l; i++) {
            sum += parseInt(arr[i]);
        }
        return sum
    }
};

var Paginations = Base.extend({
    initializer: function () {
        var self = this;
        self.set('$container', $(self.get('$container')));
        self._render();
        self._bind();

        return self;
    },
    /**
     * 根据起始页码往items来push页码项
     * @param start 开始页码
     * @param end 结束页码
     * @param items 供tpl渲染用的数组
     * @param currentPage
     * @private
     */
    _pushItemByRange: function (start, end, items, currentPage) {
        for (var i = start; i <= end; i++) {
            items.push({
                value: i,
                current: currentPage === i,
                type: ITEM_TYPE.PAGE
            });
        }
    },
    _render: function () {
        var self = this;
        if (!self.get('autoRender')) {
            return;
        }
        var totalPage = self.get('totalPage'),
            currentPage = self.get('currentPage'),
            continuity = self.get('continuity'),
            showPrevAndNext = self.get('showPrevAndNext'),
            showNumbers = self.get('showNumbers'),
            showSkip = self.get('showSkip'),
            items = [];

        //显示页码
        if (showNumbers) {
            //全部连续，中间无省略
            if (continuity.length === 0 || Util.sum(continuity) + 2 > totalPage) {
                self._pushItemByRange(1, totalPage, items, currentPage);
            } else {
                var startContinuity = continuity[0],
                    currentLeftContinuity = continuity[1],
                    currentRightContinuity = continuity[2],
                    endContinuity = continuity[3],
                    count;

                //当前页前面（包括当前页）部分
                if (startContinuity + currentLeftContinuity + 1 >= currentPage) {
                    self._pushItemByRange(1, currentPage, items, currentPage);
                } else {
                    startContinuity > 0 && self._pushItemByRange(1, startContinuity, items, currentPage);
                    items.push({
                        type: ITEM_TYPE.DOT
                    });
                    if (currentLeftContinuity > 0) {
                        var start = currentPage - currentLeftContinuity;
                        count = totalPage - currentRightContinuity - endContinuity - currentPage;
                        if (count < 0) {
                            start = start + count;
                        }
                        self._pushItemByRange(start < 1 ? 1 : start, currentPage, items, currentPage);
                    }
                }
                //当前页后面部分
                if (currentRightContinuity + endContinuity >= totalPage - currentPage) {
                    self._pushItemByRange(currentPage + 1, totalPage, items, currentPage);
                } else {
                    if (currentRightContinuity > 0) {
                        var end = currentPage + currentRightContinuity;
                        count = currentPage - 1 - startContinuity - currentLeftContinuity;
                        if (count < 0) {
                            end = end - count;
                        }
                        self._pushItemByRange(currentPage + 1, end > totalPage ? totalPage : end, items, currentPage);
                    }
                    items.push({
                        type: ITEM_TYPE.DOT
                    });
                    endContinuity > 0 && self._pushItemByRange(totalPage - endContinuity + 1, totalPage, items, currentPage);
                }
            }
        }
        //上下页
        if (showPrevAndNext) {
            //下一页
            items.push({
                type: ITEM_TYPE.NEXT,
                disabled: currentPage === totalPage
            });
            //上一页
            items.unshift({
                type: ITEM_TYPE.PREV,
                disabled: currentPage === 1
            });
        }
        //显示跳转到第几页
        if (showSkip) {
            items.push({
                type: ITEM_TYPE.SKIP,
                value: currentPage
            });
        }

        self.get('$container').html(new XTR(self.get('tpl')).render({
            totalPage: totalPage,
            items: items,
            itemType: ITEM_TYPE,
            cls: CLS,
            sel: SEL,
            prevAndNextText: self.get('prevAndNextText')
        }));
    },
    _bind: function () {
        var self = this,
            $container = self.get('$container');

        $container.delegate('click tap', '.' + SEL.ITEM, function (ev) {
            ev.halt();
            self._eventHandle($(ev.currentTarget));
        });
    },
    _eventHandle: function ($target) {
        var self = this;
        if (!$target.hasClass(CLS.DISABLED) && !self.get('freeze')) {
            if ($target.hasClass(CLS.SKIP)) {
                self.get('$skipNumInput')[0].focus();
            }
            self.skip(self._getPageByTarget($target));
        }
    },
    /**
     * 根据对应页码项来获取页码
     * @param $target
     * @returns {number}
     * @private
     */
    _getPageByTarget: function ($target) {
        var self = this,
            page = 1;
        if ($target.hasClass(CLS.NEXT)) {
            page = self.get('currentPage') + 1;
        } else if ($target.hasClass(CLS.PREV)) {
            page = self.get('currentPage') - 1;
        } else if ($target.hasClass(CLS.SKIP)) {
            page = self.get('$skipNumInput').val();
        } else {
            page = parseInt($target.attr('data-page'));
        }
        return page;
    },
    /**
     * 校验页码是否通过验证，如果不通过并触发skip:error事件
     * @param page
     * @returns {boolean}
     * @private
     */
    _validate: function (page) {
        var self = this,
            totalPage = self.get('totalPage'),
            parsePage = parseInt(page),
            flag = true;

        if (isNaN(parsePage) || parsePage > totalPage || parsePage < 1) {
            self.fire('skip:error', {page: page});
            flag = false;
        }
        return flag;
    },
    /**
     * 跳转到page页
     * @param page 页码
     */
    skip: function (page) {
        var self = this,
            parsePage = parseInt(page),
            totalPage = self.get('totalPage');

        if (self._validate(page)) {

            //before:skip可以返回false来阻止切换
            var flag = self.fire('before:skip', {page: parsePage});
            if (flag !== false) {
                self.set('currentPage', parsePage);
                self._render();
                self.fire('skip', {page: parsePage});
            }
        }
    },
    show: function () {
        this.get('$container').show();
    },
    hide: function () {
        this.get('$container').hide();
    },
    destroy: function () {
        var self = this,
            $container = self.get('$container');
        $container.detach('click');
        $container.remove();
    }
}, {
    ATTRS: {
        //包裹容器
        $container: {
            value: '#J_VCPagination'
        },
        //跳转输入框
        $skipNumInput: {
            value: '',
            getter: function () {
                return $('.' + SEL.SKIP_INPUT, this.get('$container'));
            }
        },
        //当前页
        currentPage: {
            value: 1
        },
        //总页数
        totalPage: {
            value: 10
        },
        //模块-基于xtemplate
        tpl: {
            value: tpl
        },
        //显示上下页
        showPrevAndNext: {
            value: true
        },
        //显示中间页码
        showNumbers: {
            value: true
        },
        //显示跳转输入框
        showSkip: {
            value: true
        },
        //上下页文案内容
        prevAndNextText: {
            value: ['<','>']
        },
        //中间页面显示的连续性 数组[上一页后面的连续页码、当期页前面的连续页码、当期页后面的连续页码、下一页前面的连续页码] or []代表全部连续
        continuity: {
            value: [2, 2, 2, 0]
        },
        //渲染是否有组件控制
        autoRender: {
            value: true
        },
        //冻结组件，即使各按钮无效(用于加载中处理)
        freeze: {
            value: false
        }
    }
});

module.exports = Paginations;