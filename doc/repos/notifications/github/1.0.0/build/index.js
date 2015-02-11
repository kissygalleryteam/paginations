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
  if(box && $box.hasClass('xclose') && !isDOMExist(box))return;

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
  if($box.hasClass('xclose'))return;
  var box = $box.getDOMNode();

  $box.removeClass('show');
  box.addEventListener(transition.end, function(){
    if($box.height() == 0){$box.remove();return;}
    $box.css({'height': 0});
  }, false);

}


function autoLeftHide($box){
  if($box.hasClass('xclose'))return;
  var box = $box.getDOMNode();

  $box.removeClass('show');
  box.addEventListener(transition.end, function(){
    if($box.height() == 0){$box.remove();return;}
    $box.css({'height': 0});
  }, false);

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

      var instance = new XTemplateRuntime(noticeXtpl);
      if(key){
        this[key] = Node.one(instance.render(renderData));
      }else{
        this.$notice = Node.one(instance.render(renderData));
      }

    },


    notify: function(param, key){
      var $noticeClone, self = this;

      if(key){
        $noticeClone = this[key].clone(true);
      }else{
        $noticeClone = this.$notice.clone(true);
      }


      if(param){
        if(S.isString(param)){
          $noticeClone.one('.msg').text(param);
        }else if(S.isObject(param)){
          if('boxCls' in param){
            $noticeClone.attr('class', 'vc-notify-box '+ param['boxCls']);
          }
          if('mPartImg' in param){
            $noticeClone.one('.vc-img') && $noticeClone.one('.vc-img').attr("src", param['mPartImg']);
          }
          if('mPartTitle' in param){
            $noticeClone.one('.title') && $noticeClone.one('.title').text(param['mPartTitle']);
          }
          if('mPartMsg' in param){
            $noticeClone.one('.msg') && $noticeClone.one('.msg').text(param['mPartMsg']);
          }

        }

      }

      if(this.boxs.length === 0 ){
        this.$container.css('display', 'block');

        this.taskId = setInterval(function(){
          if(self.boxs.length !== 0){
            setTimeout(function(){
              if(self.boxs.length === 0)return;
              var $box = self.boxs.shift();
              if(self.boxEffect === 'rs'){
                autoRightHide($box)
              }else if(self.boxEffect === 'ls'){
                autoLeftHide($box)
              }else{
                autoHide($box);
              }

            }, self.stayTime);
          }

          if(self.$container.all('.vc-notify-box').length === 0){
            clearInterval(self.taskId);
            self.$container.removeAttr('style');
          }

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

        
        $noticeClone.addClass('remove-transtion');

        $noticeClone.css('height', $noticeClone.height() + "px");

        
        document.body.offsetWidth;
        $noticeClone.removeClass('remove-transtion');
      }



      this.boxs.push($noticeClone);
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