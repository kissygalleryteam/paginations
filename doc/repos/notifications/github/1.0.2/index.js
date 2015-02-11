KISSY.add('kg/vc-notifications/1.0.0/index',["./index.css","node","base","event","ua","kg/xtemplate/3.3.3/runtime","./content-box"],function(S ,require, exports, module) {



require('./index.css');

var Node = require('node')
    ,Base = require('base')
    ,Event = require('event')
    ,UA = require('ua')
    ,XTemplateRuntime = require("kg/xtemplate/3.3.3/runtime")

    ,$ = Node.all
    ,noticeXtpl = require('./content-box')


    ,containerHtml = '<div class="vc-notifications $1"></div>'

    ,$body = $('body')
  ;


var transition = (function () {
  var thisBody = document.body || document.documentElement
    ,thisStyle = thisBody.style
    ,support = thisStyle.transition !== undefined
        || thisStyle.WebkitTransition !== undefined
        || thisStyle.MozTransition !== undefined
        || thisStyle.MsTransition !== undefined
        || thisStyle.OTransition !== undefined;

  return support && {
      end: (function () {
        var transitionEnd = "TransitionEnd"
        if ( UA.webkit ) {
          transitionEnd = "webkitTransitionEnd"
        } else if ( UA.gecko ) {
          transitionEnd = "transitionend"
        } else if ( UA.opera ) {
          transitionEnd = "oTransitionEnd"
        }
        return transitionEnd
      }())
    }
})();

/**
 * DOM是否存在
 * @param element
 * @returns {boolean}
 */
function isDOMExist(element) {
  while (element = element.parentNode) {
    if (element == document) {
      return true;
    }
  }
  return false;
}


function autoHide($box){
  var box = $box && $box.getDOMNode();
  if(!box || $box.hasClass('xclose') || !isDOMExist(box))return;

  if(transition && box.addEventListener) {
    $box.css({'height': 0, 'opacity': 0});
    box.addEventListener(transition.end, function(){
      $box.remove();
    }, false);
  }else{
    $box.addClass('remove-transtion');
    $box.animate({height : 0, opacity: 0},
      {
        duration : 0.3,
        easing : 'easeNone',
        complete : function(){
          $box.remove();
        }
      });
  }
}


function autoRightHide($box){
  var box = $box && $box.getDOMNode();
  if(!box || $box.hasClass('xclose') || !isDOMExist(box))return;

  $box.removeClass('show');
  box.addEventListener(transition.end, function(){
    if($box.height() == 0){$box.remove();return;}
    $box.css({'height': 0});
  }, false);

}


function autoLeftHide($box){
  var box = $box && $box.getDOMNode();
  if(!box || $box.hasClass('xclose') || !isDOMExist(box))return;

  $box.removeClass('show');
  box.addEventListener(transition.end, function(){
    if($box.height() == 0){$box.remove();return;}
    $box.css({'height': 0});
  }, false);

}

function createNoticeDOM(data){
  var renderData = {
    boxCls: data['boxCls'],
    tPartHtml: data['tPartHtml'],
    mPartHtml: data['mPartHtml'],
    bPartHtml: data['bPartHtml'],
    mPartImg: data['mPartImg'],
    mPartTitle: data['mPartTitle'],
    mPartMsg: data['mPartMsg']
  }

  var instance = new XTemplateRuntime(noticeXtpl);
  return Node.one(instance.render(renderData));
}


var VcNotifications = Base.extend({
    initializer:function(){
      var self = this
        ,$target = self.get('$target')
        ,cls = this.get('cls')
        ;

      cls || (cls = "");
      var $container = Node.one(containerHtml.replace('$1', cls));
      $body.append($container);

      this.$container = $container;
      this.stayTime= S.isNumber(this.get('stayTime'))?  this.get('stayTime') : 3000;
      this.gapTime = S.isNumber(this.get('gapTime'))?  this.get('gapTime') : 1000;
      this.boxEffect = this.get('boxEffect');
      this.boxs = [];


      var renderData = {
        boxCls: this.get('boxCls') || '',
        tPartHtml: this.get('tPartHtml') || '',
        mPartHtml: this.get('mPartHtml') || '',
        bPartHtml: this.get('bPartHtml') || '',
        mPartImg: this.get('mPartImg'),
        mPartTitle: this.get('mPartTitle'),
        mPartMsg: this.get('mPartMsg') || ''
      }
      this.createNoticeDom(renderData);


      /**
       * 点击box上关闭按钮
       */
      Event.delegate($container, 'click', '.close', function(event){
        var $target = Node.one(event.target)
          ,$box = $target.parent('.vc-notify-box')
          ,box = $box.getDOMNode()
          ;

        if(transition && box.addEventListener){

          $box.addClass('xclose');
          $box.css({'opacity': 0, 'height': $box.height()});
          document.body.offsetWidth;

          $box.css('height', 0);
          box.addEventListener(transition.end, function(){
            $box.remove();
          }, false);
        }else{
          $box.css({'opacity': 0});
          $box.animate({height : 0},
            {
              duration : 0.3,
              easing : 'easeNone',
              complete : function(){
                $box.remove();
              }
            });
        }
      });


      /**
       * 点击box container的空白处，可以删除box；
       */
      var container = $container.getDOMNode(), removeBgTimeId, i = 0;
      $container.on('click', function(event){
        if(event.target === container){
          $container.addClass('bg');

          if($container.hasClass('bg')){
            clearTimeout(removeBgTimeId);
            if(i>=1){
              var $box = self.boxs.shift();
              $box && $box.remove();
            }
          }

          removeBgTimeId = setTimeout(function(){
            $container.removeClass('bg');
            i =0;
          },500);

          i++;

        }
      });

    },

    createNoticeDom: function(data, key){
      var renderData = {
        boxCls: data['boxCls'],
        tPartHtml: data['tPartHtml'],
        mPartHtml: data['mPartHtml'],
        bPartHtml: data['bPartHtml'],
        mPartImg: data['mPartImg'],
        mPartTitle: data['mPartTitle'],
        mPartMsg: data['mPartMsg']
      }

    },


    notify: function(param, key){
      var $noticeClone, self = this;

      if(key){
        $noticeClone = Node.one(param);
      }else{
        if(param){
          if(S.isString(param)){
            $noticeClone = createNoticeDOM({mPartMsg: param});
          }else if(S.isObject(param)){
            $noticeClone = createNoticeDOM(param);
            if('mPartImg' in param){
              $noticeClone.one('.vc-img') && $noticeClone.one('.vc-img').attr("src", param['mPartImg']);
            }
            if('mPartTitle' in param){
              $noticeClone.one('.title') && $noticeClone.one('.title').text(param['mPartTitle']);
            }
            if('mPartMsg' in param){
              $noticeClone.one('.msg') && $noticeClone.one('.msg').text(param['mPartMsg']);
            }

            if('boxCls' in param){
              $noticeClone.attr('class', 'vc-notify-box '+ param['boxCls']);
            }

          }
        }
      }




      this.boxs.push($noticeClone);

      if(this.boxs.length === 1 ){
        this.$container.css('display', 'block');

        this.taskId = setInterval(function(){
          if(self.$container.all('.vc-notify-box').length === 0){
            clearInterval(self.taskId);
            self.$container.removeAttr('style');
          }

          var $box = self.boxs.shift();
          setTimeout(function(){
            if(self.boxEffect === 'rs'){
              autoRightHide($box);
            }else if(self.boxEffect === 'ls'){
              autoLeftHide($box);
            }else{
              autoHide($box);
            }

          }, self.stayTime);

        }, self.gapTime);
      }

      if(this.boxEffect === 'rs'){
        $noticeClone.addClass('right');
        this.$container.append($noticeClone);
        document.body.offsetWidth;
        $noticeClone.addClass('show');
        $noticeClone.css('height', $noticeClone.height() + "px");
      }else if(this.boxEffect === 'ls'){
        $noticeClone.addClass('left');
        this.$container.append($noticeClone);
        document.body.offsetWidth;
        $noticeClone.addClass('show');
        $noticeClone.css('height', $noticeClone.height() + "px");
      }else{
        this.$container.append($noticeClone);

        //for safari(8.0.2)  操蛋呀
        $noticeClone.addClass('remove-transtion');

        $noticeClone.css('height', $noticeClone.height() + "px");//for animate

        //for safari(8.0.2)  操蛋呀
        document.body.offsetWidth;
        $noticeClone.removeClass('remove-transtion');
      }




    }







},{
    ATTRS:{
        $target:{
            value:'',
            getter:function(v){
                return $(v);
            }
        }
    }
});

module.exports = VcNotifications;






});
