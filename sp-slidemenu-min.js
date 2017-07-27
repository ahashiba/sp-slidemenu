!function(e,t,n){"use strict";function o(e){return this instanceof o?this.init(e):new o(e)}function r(e){return s(e,function(e){return Y.style[e]!==n})}function i(e){return e.charAt(0).toUpperCase()+e.substr(1)}function s(e,t){var n,o;for(n=0,o=e.length;o>n;n++)if(t(e[n],n))return!0;return!1}function l(e,t,o){var r=e.style;return l.cache||(l.cache={}),l.cache[t]!==n?void(r[l.cache[t]]=o):r[t]!==n?(l.cache[t]=t,void(r[t]=o)):void s(M,function(e){var s=i(e)+i(t);return r[s]!==n?(r[s]=o,!0):void 0})}function a(e,t){var n;for(n in t)t.hasOwnProperty(n)&&l(e,n,t[n])}function u(e,t){var o;return e[t]!==n?e[t]:(s(M,function(r){var s=i(r)+i(t);return e[s]!==n?(o=e[s],!0):void 0}),o)}function c(e){var t;return c.cache||(c.cache={}),c.cache[e]!==n?c.cache[e]:Y.style[e]!==n?(c.cache[e]=e,e):(s(M,function(o){var r=i(o)+i(e);return Y.style[r]!==n?(t="-"+o+"-"+e,!0):void 0}),c.cache[e]=t,t)}function d(e,t){var n,o,r;return n=Function.prototype.bind,o=Array.prototype.slice,e.bind===n&&n?n.apply(e,o.call(arguments,1)):(r=o.call(arguments,2),function(){return e.apply(t,r.concat(o.call(arguments)))})}function m(e){e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function p(e){var t,n,o,r;t={},o={position:"absolute",visibility:"hidden",display:"block"};for(n in o)t[n]=e.style[n],e.style[n]=o[n];r={width:e.offsetWidth,height:e.offsetHeight};for(n in o)e.style[n]=t[n];return r}function h(e,t){return e.changedTouches?e.changedTouches[0][t]:e[t]}function v(e,t,n,o){o=o||!1,w.touch?t.addEventListener(x[e].touch,n,o):w.addEventListener?t.addEventListener(x[e].mouse,n,o):w.attachEvent&&t.attachEvent("on"+x[e].mouse,n)}function f(e,t,n,o){o=o||!1,w.touch?t.removeEventListener(x[e].touch,n,o):w.addEventListener?t.removeEventListener(x[e].mouse,n,o):w.attachEvent&&t.detachEvent("on"+x[e].mouse,n)}function y(e){var n;e+="-spSlidermenu";try{n=new CustomEvent(e)}catch(o){n=t.createEvent("CustomEvent"),n.initCustomEvent(e,!1,!1,null)}t.dispatchEvent(n)}function g(e,t){return t=" "+t+" ",1===e.nodeType&&(" "+e.className+" ").replace(B," ").indexOf(t)>=0}function b(e,t,n,o){var r,i,s,l,a;return r=+new Date,i=parseInt(e.style[t],10),n=parseInt(n,10),s=parseInt(o,10),l=function(e,t){return-(e/=t)*(e-2)},a=setInterval(function(){var o,u,c;o=new Date-r,o>s?(clearInterval(a),c=n):(u=l(o,s),c=u*(n-i)+i),e.style[t]=c+"px"},10)}function C(){return e.innerHeight?e.innerHeight:t.documentElement&&0!==t.documentElement.clientHeight?t.documentElement.clientHeight:t.body?t.body.clientHeight:0}function S(e,t,n){var o,r;return function(){var i=this,s=arguments,l=function(){o=null,n||(r=e.apply(i,s))},a=n&&!o;return clearTimeout(o),o=setTimeout(l,t),a&&(r=e.apply(i,s)),r}}function T(e){var t=navigator.userAgent;return t.indexOf("Android")>-1&&parseFloat(t.slice(t.indexOf("Android")+8))<=e}function E(t){return"fixed"===e.getComputedStyle(t,"").position}var Y,M,w,P,x,A,O,D,k,B,X,z;Y=t.createElement("div"),M=["webkit","moz","o","ms"],w=o.support={},w.transform3d=r(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]),w.transform=r(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"]),w.transition=r(["transitionProperty","WebkitTransitionProperty","MozTransitionProperty","OTransitionProperty","msTransitionProperty"]),w.addEventListener="addEventListener"in e,w.attachEvent="attachEvent"in e,w.cssAnimation=(w.transform3d||w.transform)&&w.transition,w.touch="ontouchend"in e,w.touchAction=r(["touchAction"]),x={start:{touch:"touchstart",mouse:"mousedown"},move:{touch:"touchmove",mouse:"mousemove"},end:{touch:"touchend",mouse:"mouseup"},wheel:{touch:"MouseScrollEvent"in e?"MozMousePixelScroll":"onwheel"in t||t.documentMode>=9?"wheel":"mousewheel",mouse:"MouseScrollEvent"in e?"MozMousePixelScroll":"onwheel"in t||t.documentMode>=9?"wheel":"mousewheel"}},z={main:"#main",button:".menu-button",slidemenu:".slidemenu",slidemenu_header:".slidemenu-header",slidemenu_body:".slidemenu-body",slidemenu_content:".slidemenu-content",disableCssAnimation:!1,disable3d:!1,direction:"left"},P=!1,w.addEventListener&&(t.addEventListener("gesturestart",function(){P=!0}),t.addEventListener("gestureend",function(){P=!1})),A={slider:200,scrollOverBack:400},O={close:0,open:1,progress:2},D=10,k=50,B=/[\t\r\n\f]/g,X="menu-item",o.prototype.init=function(t){var o=this;for(var r in z)t.hasOwnProperty(r)||(t[r]=z[r]);if(o.setElement({main:t.main,slidemenu:t.slidemenu,button:t.button,slidemenu_body:t.slidemenu_body,slidemenu_content:t.slidemenu_content,slidemenu_header:t.slidemenu_header}),!(o.main&&o.slidemenu&&o.button&&o.slidemenuBody&&o.slidemenuContent))throw new Error("Element not found. Please set correctly.");o.disableCssAnimation=t.disableCssAnimation===n?!1:t.disableCssAnimation,o.disable3d=T(2.3)?!0:t.disable3d===n?!1:t.disable3d,o.direction="left","right"===t.direction&&(o.direction="right"),o.useCssAnimation=w.cssAnimation,o.disableCssAnimation===!0&&(o.useCssAnimation=!1),o.use3d=w.transform3d,o.disable3d===!0&&(o.use3d=!1),o.slideWidth=p(o.slidemenu).width;for(var i=o.main.length;i--;)o.main[i].SpSlidemenuStatus=O.close;for(o.htmlOverflowX="",o.bodyOverflowX="",o.scrollCurrentY=0,o.scrollAnimationTimer=!1,o.scrollOverTimer=!1,o.setDefaultStyle(),o.bindMethods(),i=o.button.length;i--;)v("start",o.button[i],o.buttonTouchStart,!1),v("move",o.button[i],m,!1),v("end",o.button[i],o.buttonTouchEnd,!1);return v("start",o.slidemenuContent,o.scrollTouchStart,!1),v("move",o.slidemenuContent,o.scrollTouchMove,!1),v("end",o.slidemenuContent,o.scrollTouchEnd,!1),v("wheel",o.slidemenuContent,o.scrollWheel,!1),w.addEventListener?(o.slidemenuContent.addEventListener("click",o.itemClick,!1),e.addEventListener("resize",S(o.setSize,100),!1)):w.attachEvent&&(o.slidemenuContent.attachEvent("onclick",o.itemClick),e.attachEvent("onresize",S(o.setSize,100))),o},o.prototype.bindMethods=function(){var e,t;e=this,t=["setSize","slideOpen","slideOpenEnd","slideClose","slideCloseEnd","buttonTouchStart","buttonTouchEnd","mainTouchStart","scrollTouchStart","scrollTouchMove","scrollTouchEnd","scrollInertiaMove","scrollOverBack","scrollOver","scrollWheel","itemClick"],t.forEach(function(t){e[t]=d(e[t],e)})},o.prototype.setElement=function(e){var n,o;n=this,o=e.main.split(",");for(var r in e)if("string"!=typeof e[r])return!1;n.main=t.querySelectorAll(e.main),n._mainBody=t.querySelector(o[0]),n.slidemenu=t.querySelector(e.slidemenu),n.button=t.querySelectorAll(e.button),n.slidemenuBody=n.slidemenu.querySelector(e.slidemenu_body),n.slidemenuContent=n.slidemenu.querySelector(e.slidemenu_content),n.slidemenuHeader=n.slidemenu.querySelector(e.slidemenu_header)},o.prototype.setDefaultStyle=function(){var e=this;if(e.slidemenuContent.style.touchAction="none",e.setSize(),e.useCssAnimation){for(var t=e.main.length;t--;)T(2.3)&&E(e.main[t])?a(e.main[t],{left:"0px"}):a(e.main[t],{transitionProperty:c("transform"),transitionTimingFunction:"ease-in-out",transitionDuration:A.slider+"ms",transitionDelay:"0ms",transform:""});a(e.slidemenu,{transitionProperty:"visibility",transitionTimingFunction:"linear",transitionDuration:"0ms",transitionDelay:A.slider+"ms",transform:"translateZ(0)"}),a(e.slidemenuContent,{transitionProperty:c("transform"),transitionTimingFunction:"ease-in-out",transitionDuration:"0ms",transitionDelay:"0ms",transform:e.getTranslateY(0)})}else{for(var t=e.main.length;t--;)a(e.main[t],{left:"0px"});a(e.slidemenuContent,{top:"0px"})}},o.prototype.setSize=function(){var e,t;e=this,t=C(),a(e._mainBody,{minHeight:t+"px"}),a(e.slidemenu,{height:t+"px"}),w.touchAction||w.touch||(a(e.slidemenuBody,{width:""}),a(e.slidemenuContent,{width:""}),a(e.slidemenuBody,{width:e.slidemenuBody.clientWidth+16+"px",overflow:"hidden"}),a(e.slidemenuContent,{width:e.slidemenuBody.clientWidth+"px",overflowY:"scroll"}))},o.prototype.buttonTouchStart=function(e){var t=this;e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,y("buttonTouchStart");for(var n=t.main.length;n--;)switch(t.main[n].SpSlidemenuStatus){case O.progress:break;case O.open:case O.close:t.buttonStartPageX=h(e,"pageX"),t.buttonStartPageY=h(e,"pageY")}},o.prototype.buttonTouchEnd=function(e){var t=this;e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,y("buttonTouchEnd"),t.setSize(),t.scrollCurrentY=t.getScrollCurrentY(),t.shouldTrigerNext(e)&&setTimeout(function(){for(var n=t.main.length;n--;)switch(t.main[n].SpSlidemenuStatus){case O.progress:break;case O.open:t.slideClose(e);break;case O.close:t.slideOpen(e)}},100)},o.prototype.mainTouchStart=function(e){var t=this;e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,t.slideClose(e)},o.prototype.shouldTrigerNext=function(e){var t=this,n=h(e,"pageX"),o=h(e,"pageY"),r=Math.abs(n-t.buttonStartPageX),i=Math.abs(o-t.buttonStartPageY);return 20>r&&20>i},o.prototype.slideOpen=function(){var e,n=this;y("slideOpen"),e="left"===n.direction?n.slideWidth:-n.slideWidth;for(var o=n.main.length;o--;)n.main[o].SpSlidemenuStatus=O.progress;if(v("move",t,m,!1),n.htmlOverflowX=t.documentElement.style.overflowX,n.bodyOverflowX=t.body.style.overflowX,t.documentElement.style.overflowX=t.body.style.overflowX="hidden",n.useCssAnimation){for(var o=n.main.length;o--;)T(2.3)&&E(n.main[o])?(n.main[o].style.left="",n.main[o].style.right="",b(n.main[o],n.direction,Math.abs(e),A.slider)):a(n.main[o],{transform:n.getTranslateX(e)});a(n.slidemenu,{transitionProperty:"z-index",visibility:"visible",zIndex:"1"})}else{for(var o=n.main.length;o--;)n.main[o].style.left="",n.main[o].style.right="",b(n.main[o],n.direction,Math.abs(e),A.slider);a(n.slidemenu,{visibility:"visible"})}setTimeout(n.slideOpenEnd,A.slider+k)},o.prototype.slideOpenEnd=function(){var e=this;y("slideOpenEnd");for(var t=e.main.length;t--;)e.main[t].SpSlidemenuStatus=O.open;e.useCssAnimation||a(e.slidemenu,{zIndex:"1"});for(var t=e.main.length;t--;)v("start",e.main[t],e.mainTouchStart,!1)},o.prototype.slideClose=function(){var e=this;y("slideClose");for(var t=e.main.length;t--;)e.main[t].SpSlidemenuStatus=O.progress;for(var t=e.main.length;t--;)f("start",e.main[t],e.mainTouchStart,!1);if(e.useCssAnimation)a(e.slidemenu,{transitionProperty:"visibility",visibility:"hidden",zIndex:"-1"}),setTimeout(function(){for(var t=e.main.length;t--;)T(2.3)&&E(e.main[t])?b(e.main[t],e.direction,0,A.slider):a(e.main[t],{transform:""})},50);else{for(var t=e.main.length;t--;)b(e.main[t],e.direction,0,A.slider);a(e.slidemenu,{zIndex:"-1"})}setTimeout(e.slideCloseEnd,A.slider+k)},o.prototype.slideCloseEnd=function(){var e=this;y("slideCloseEnd");for(var n=e.main.length;n--;)e.main[n].SpSlidemenuStatus=O.close;t.documentElement.style.overflowX=e.htmlOverflowX,t.body.style.overflowX=e.bodyOverflowX,e.useCssAnimation||a(e.slidemenu,{visibility:"hidden"}),f("move",t,m,!1)},o.prototype.scrollTouchStart=function(e){var t=this;P||(y("scrollTouchStart"),t.scrollOverTimer!==!1&&clearTimeout(t.scrollOverTimer),t.scrollCurrentY=t.getScrollCurrentY(),t.useCssAnimation?a(t.slidemenuContent,{transitionTimingFunction:"ease-in-out",transitionDuration:"0ms",transform:t.getTranslateY(t.scrollCurrentY)}):(t.stopScrollAnimate(),a(t.slidemenuContent,{top:t.scrollCurrentY+"px"})),t.scrollOverTimer=!1,t.scrollAnimationTimer=!1,t.scrollTouchStarted=!0,t.scrollMoveReady=!1,t.scrollMoveEventCnt=0,t.scrollMaxY=t.calcMaxY(),t.scrollStartPageX=h(e,"pageX"),t.scrollStartPageY=h(e,"pageY"),t.scrollBasePageY=t.scrollStartPageY,t.scrollTimeForVelocity=e.timeStamp,t.scrollPageYForVelocity=t.scrollStartPageY,w.addEventListener?t.slidemenuContent.removeEventListener("click",m,!0):w.attachEvent&&t.slidemenuContent.detachEvent("onclick",m))},o.prototype.scrollTouchMove=function(e){var t,n,o,r,i,s,l;t=this,t.scrollTouchStarted&&!P&&(y("scrollTouchMove"),n=h(e,"pageX"),o=h(e,"pageY"),t.scrollMoveReady?(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,r=o-t.scrollBasePageY,i=t.scrollCurrentY+r,(i>0||i<t.scrollMaxY)&&(i=Math.round(t.scrollCurrentY+r/3)),t.scrollSetY(i),t.scrollMoveEventCnt%D===0&&(t.scrollPageYForVelocity=o,t.scrollTimeForVelocity=e.timeStamp),t.scrollMoveEventCnt++):(s=Math.abs(n-t.scrollStartPageX),l=Math.abs(o-t.scrollStartPageY),(s>5||l>5)&&(t.scrollMoveReady=!0,w.addEventListener?t.slidemenuContent.addEventListener("click",m,!0):w.attachEvent&&t.slidemenuContent.attachEvent("onclick",m))),t.scrollBasePageY=o)},o.prototype.scrollWheel=function(e){var t,n,o;t=this,e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,y("scrollWheel"),t.scrollMaxY||(t.scrollMaxY=t.calcMaxY()),n=e.deltaY?-e.deltaY:e.wheelDelta?e.wheelDelta/2:-e.detail,n&&(o=Math.round(t.scrollCurrentY+n),o=o>0?0:o<t.scrollMaxY?t.scrollMaxY:o,t.scrollSetY(o))},o.prototype.scrollTouchEnd=function(e){var t,n,o,r;if(t=this,t.scrollTouchStarted){if(y("scrollTouchEnd"),t.scrollTouchStarted=!1,t.scrollMaxY=t.calcMaxY(),t.scrollCurrentY>0||t.scrollCurrentY<t.scrollMaxY)return void t.scrollOverBack();o=h(e,"pageY")-t.scrollPageYForVelocity,r=e.timeStamp-t.scrollTimeForVelocity,n=o/r,Math.abs(n)>=.01&&t.scrollInertia(n)}},o.prototype.scrollInertia=function(e){var t,n,o,r,i,s,l,a,u;t=this,e>0?(n=!0,o=0):(n=!1,o=t.scrollMaxY),r=Math.abs(t.scrollCurrentY-o),e=Math.abs(750*e),e>1e3&&(e=1e3),i=e/500,s=e*i-500*Math.pow(i,2)/2,r>=s?(l=n?t.scrollCurrentY+s:t.scrollCurrentY-s,a=1e3*i,t.scrollInertiaMove(l,a,!1)):(l=o,u=Math.sqrt(1e3*r+Math.pow(e,2)),a=(u-e)/500*1e3,t.scrollInertiaMove(l,a,!0,u,n))},o.prototype.scrollInertiaMove=function(e,t,n,o,r){var i,s,l=this;l.scrollCurrentY=e,l.useCssAnimation?a(l.slidemenuContent,{transitionTimingFunction:"cubic-bezier(0.33, 0.66, 0.66, 1)",transitionDuration:t+"ms",transform:l.getTranslateY(e)}):l.scrollAnimate(e,t),n&&(i=o/7500,s=o*i-7500*Math.pow(i,2)/2,e=r?l.scrollCurrentY+s:l.scrollCurrentY-s,t=1e3*i,l.scrollOver(e,t))},o.prototype.scrollOver=function(e,t){var n;n=this,n.scrollCurrentY=e,n.useCssAnimation?a(n.slidemenuContent,{transitionTimingFunction:"cubic-bezier(0.33, 0.66, 0.66, 1)",transitionDuration:t+"ms",transform:n.getTranslateY(e)}):n.scrollAnimate(e,t),n.scrollOverTimer=setTimeout(n.scrollOverBack,t)},o.prototype.scrollOverBack=function(){var e,t;e=this,t=e.scrollCurrentY>=0?0:e.scrollMaxY,e.scrollCurrentY=t,e.useCssAnimation?a(e.slidemenuContent,{transitionTimingFunction:"ease-out",transitionDuration:A.scrollOverBack+"ms",transform:e.getTranslateY(t)}):e.scrollAnimate(t,A.scrollOverBack)},o.prototype.scrollSetY=function(e){var t=this;t.scrollCurrentY=e,t.useCssAnimation?a(t.slidemenuContent,{transitionTimingFunction:"ease-in-out",transitionDuration:"0ms",transform:t.getTranslateY(e)}):t.slidemenuContent.style.top=e+"px"},o.prototype.scrollAnimate=function(e,t){var n=this;n.stopScrollAnimate(),n.scrollAnimationTimer=b(n.slidemenuContent,"top",e,t)},o.prototype.stopScrollAnimate=function(){var e=this;e.scrollAnimationTimer!==!1&&clearInterval(e.scrollAnimationTimer)},o.prototype.itemClick=function(e){var t=e.target||e.srcElement;g(t,X)&&this.slideClose()},o.prototype.calcMaxY=function(){var e,t,n,o;return e=this,t=e.slidemenuContent.offsetHeight,n=e.slidemenuBody.offsetHeight,o=0,e.slidemenuHeader&&(o=e.slidemenuHeader.offsetHeight),t>n?-(t-n+o):0},o.prototype.getScrollCurrentY=function(){var t=0;if(this.useCssAnimation)u(e.getComputedStyle(this.slidemenuContent,""),"transform").split(",").forEach(function(e){var n=parseInt(e,10);isNaN(n)||0===n||1===n||(t=n)});else{var n=parseInt(u(e.getComputedStyle(this.slidemenuContent,""),"top"),10);isNaN(n)||0===n||1===n||(t=n)}return t},o.prototype.getTranslateX=function(e){var t=this;return t.use3d?"translate3d("+e+"px, 0px, 0px)":"translate("+e+"px, 0px)"},o.prototype.getTranslateY=function(e){var t=this;return t.use3d?"translate3d(0px, "+e+"px, 0px)":"translate(0px, "+e+"px)"},e.SpSlidemenu=o}(window,window.document);