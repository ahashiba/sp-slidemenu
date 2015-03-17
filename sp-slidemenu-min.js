!function(e,t,n){"use strict";function r(e){return this instanceof r?this.init(e):new r(e)}function o(e){return s(e,function(e){return Y.style[e]!==n})}function i(e){return e.charAt(0).toUpperCase()+e.substr(1)}function s(e,t){var n,r;for(n=0,r=e.length;r>n;n++)if(t(e[n],n))return!0;return!1}function a(e,t,r){var o=e.style;return a.cache||(a.cache={}),a.cache[t]!==n?void(o[a.cache[t]]=r):o[t]!==n?(a.cache[t]=t,void(o[t]=r)):void s(E,function(e){var s=i(e)+i(t);return o[s]!==n?(o[s]=r,!0):void 0})}function l(e,t){var n;for(n in t)t.hasOwnProperty(n)&&a(e,n,t[n])}function u(e,t){var r;return e[t]!==n?e[t]:(s(E,function(o){var s=i(o)+i(t);return e[s]!==n?(r=e[s],!0):void 0}),r)}function c(e){var t;return c.cache||(c.cache={}),c.cache[e]!==n?c.cache[e]:Y.style[e]!==n?(c.cache[e]=e,e):(s(E,function(r){var o=i(r)+i(e);return Y.style[o]!==n?(t="-"+r+"-"+e,!0):void 0}),c.cache[e]=t,t)}function m(e,t){var n,r,o;return n=Function.prototype.bind,r=Array.prototype.slice,e.bind===n&&n?n.apply(e,r.call(arguments,1)):(o=r.call(arguments,2),function(){return e.apply(t,o.concat(r.call(arguments)))})}function d(e){e.preventDefault(),e.stopPropagation()}function p(e){var t,n,r,o;t={},r={position:"absolute",visibility:"hidden",display:"block"};for(n in r)t[n]=e.style[n],e.style[n]=r[n];o={width:e.offsetWidth,height:e.offsetHeight};for(n in r)e.style[n]=t[n];return o}function h(e,t){return e.changedTouches?e.changedTouches[0][t]:e[t]}function f(e,t,n,r){r=r||!1,P.touch?t.addEventListener(M[e].touch,n,r):t.addEventListener(M[e].mouse,n,r)}function v(e,t,n,r){r=r||!1,P.touch?t.removeEventListener(M[e].touch,n,r):t.removeEventListener(M[e].mouse,n,r)}function y(e,t){return t=" "+t+" ",1===e.nodeType&&(" "+e.className+" ").replace(k," ").indexOf(t)>=0?!0:!1}function g(e,t,n,r){var o,i,s,a,l;return o=+new Date,i=parseInt(e.style[t],10),n=parseInt(n,10),s=parseInt(r,10),a=function(e,t){return-(e/=t)*(e-2)},l=setInterval(function(){var r,u,c;r=new Date-o,r>s?(clearInterval(l),c=n):(u=a(r,s),c=u*(n-i)+i),e.style[t]=c+"px"},10)}function b(){return e.innerHeight?e.innerHeight:t.documentElement&&0!==t.documentElement.clientHeight?t.documentElement.clientHeight:t.body?t.body.clientHeight:0}function C(e,t,n){var r,o;return function(){var i=this,s=arguments,a=function(){r=null,n||(o=e.apply(i,s))},l=n&&!r;return clearTimeout(r),r=setTimeout(a,t),l&&(o=e.apply(i,s)),o}}function T(e){var t=navigator.userAgent;return t.indexOf("Android")>-1&&parseFloat(t.slice(t.indexOf("Android")+8))<=e}function S(t){return"fixed"===e.getComputedStyle(t,"").position}var Y,E,P,A,M,x,O,w,X,k,D,H;Y=t.createElement("div"),E=["webkit","moz","o","ms"],P=r.support={},P.transform3d=o(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]),P.transform=o(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"]),P.transition=o(["transitionProperty","WebkitTransitionProperty","MozTransitionProperty","OTransitionProperty","msTransitionProperty"]),P.addEventListener="addEventListener"in e,P.msPointer=e.navigator.msPointerEnabled,P.cssAnimation=(P.transform3d||P.transform)&&P.transition,P.touch="ontouchend"in e,M={start:{touch:"touchstart",mouse:"mousedown"},move:{touch:"touchmove",mouse:"mousemove"},end:{touch:"touchend",mouse:"mouseup"}},H={main:"#main",button:".menu-button",slidemenu:".slidemenu",slidemenu_header:".slidemenu-header",slidemenu_body:".slidemenu-body",slidemenu_content:".slidemenu-content",disableCssAnimation:!1,disable3d:!1,direction:"left"},A=!1,P.addEventListener&&(t.addEventListener("gesturestart",function(){A=!0}),t.addEventListener("gestureend",function(){A=!1})),x={slider:200,scrollOverBack:400},O={close:0,open:1,progress:2},w=10,X=50,k=/[\t\r\n\f]/g,D="menu-item",r.prototype.init=function(t){var r=this;for(var o in H)t.hasOwnProperty(o)||(t[o]=H[o]);if(r.setElement({main:t.main,slidemenu:t.slidemenu,button:t.button,slidemenu_body:t.slidemenu_body,slidemenu_content:t.slidemenu_content,slidemenu_header:t.slidemenu_header}),!(r.main&&r.slidemenu&&r.button&&r.slidemenuBody&&r.slidemenuContent))throw new Error("Element not found. Please set correctly.");r.disableCssAnimation=t.disableCssAnimation===n?!1:t.disableCssAnimation,r.disable3d=T(2.3)?!0:t.disable3d===n?!1:t.disable3d,r.direction="left","right"===t.direction&&(r.direction="right"),r.useCssAnimation=P.cssAnimation,r.disableCssAnimation===!0&&(r.useCssAnimation=!1),r.use3d=P.transform3d,r.disable3d===!0&&(r.use3d=!1),r.slideWidth=p(r.slidemenu).width;for(var i=r.main.length;i--;)r.main[i].SpSlidemenuStatus=O.close;return r.htmlOverflowX="",r.bodyOverflowX="",r.scrollCurrentY=0,r.scrollAnimationTimer=!1,r.scrollOverTimer=!1,r.setDefaultStyle(),r.bindMethods(),f("start",r.button,r.buttonTouchStart,!1),f("move",r.button,d,!1),f("end",r.button,r.buttonTouchEnd,!1),f("start",r.slidemenuContent,r.scrollTouchStart,!1),f("move",r.slidemenuContent,r.scrollTouchMove,!1),f("end",r.slidemenuContent,r.scrollTouchEnd,!1),r.slidemenuContent.addEventListener("click",r.itemClick,!1),e.addEventListener("resize",C(r.setHeight,100),!1),r},r.prototype.bindMethods=function(){var e,t;e=this,t=["setHeight","slideOpen","slideOpenEnd","slideClose","slideCloseEnd","buttonTouchStart","buttonTouchEnd","mainTouchStart","scrollTouchStart","scrollTouchMove","scrollTouchEnd","scrollInertiaMove","scrollOverBack","scrollOver","itemClick"],t.forEach(function(t){e[t]=m(e[t],e)})},r.prototype.setElement=function(e){var n,r;n=this,r=e.main.split(",");for(var o in e)if("string"!=typeof e[o])return!1;n.main=t.querySelectorAll(e.main),n._mainBody=t.querySelector(r[0]),n.slidemenu=t.querySelector(e.slidemenu),n.button=t.querySelector(e.button),n.slidemenuBody=n.slidemenu.querySelector(e.slidemenu_body),n.slidemenuContent=n.slidemenu.querySelector(e.slidemenu_content),n.slidemenuHeader=n.slidemenu.querySelector(e.slidemenu_header)},r.prototype.setDefaultStyle=function(){var e=this;if(P.msPointer&&(e.slidemenuContent.style.msTouchAction="none"),e.setHeight(),e.useCssAnimation){for(var t=e.main.length;t--;)T(2.3)&&S(e.main[t])?l(e.main[t],{left:"0px"}):l(e.main[t],{transitionProperty:c("transform"),transitionTimingFunction:"ease-in-out",transitionDuration:x.slider+"ms",transitionDelay:"0ms",transform:e.getTranslateX(0)});l(e.slidemenu,{transitionProperty:"visibility",transitionTimingFunction:"linear",transitionDuration:"0ms",transitionDelay:x.slider+"ms",transform:"translateZ(0)"}),l(e.slidemenuContent,{transitionProperty:c("transform"),transitionTimingFunction:"ease-in-out",transitionDuration:"0ms",transitionDelay:"0ms",transform:e.getTranslateY(0)})}else{for(var t=e.main.length;t--;)l(e.main[t],{left:"0px"});l(e.slidemenuContent,{top:"0px"})}},r.prototype.setHeight=function(){var e,t;e=this,t=b(),l(e._mainBody,{minHeight:t+"px"}),l(e.slidemenu,{height:t+"px"})},r.prototype.buttonTouchStart=function(e){var t=this;e.preventDefault(),e.stopPropagation();for(var n=t.main.length;n--;)switch(t.main[n].SpSlidemenuStatus){case O.progress:break;case O.open:case O.close:t.buttonStartPageX=h(e,"pageX"),t.buttonStartPageY=h(e,"pageY")}},r.prototype.buttonTouchEnd=function(e){var t=this;e.preventDefault(),e.stopPropagation(),t.setHeight(),t.shouldTrigerNext(e)&&setTimeout(function(){for(var n=t.main.length;n--;)switch(t.main[n].SpSlidemenuStatus){case O.progress:break;case O.open:t.slideClose(e);break;case O.close:t.slideOpen(e)}},100)},r.prototype.mainTouchStart=function(e){var t=this;e.preventDefault(),e.stopPropagation(),t.slideClose(e)},r.prototype.shouldTrigerNext=function(e){var t=this,n=h(e,"pageX"),r=h(e,"pageY"),o=Math.abs(n-t.buttonStartPageX),i=Math.abs(r-t.buttonStartPageY);return 20>o&&20>i},r.prototype.slideOpen=function(){var e,n=this;e="left"===n.direction?n.slideWidth:-n.slideWidth;for(var r=n.main.length;r--;)n.main[r].SpSlidemenuStatus=O.progress;if(f("move",t,d,!1),n.htmlOverflowX=t.documentElement.style.overflowX,n.bodyOverflowX=t.body.style.overflowX,t.documentElement.style.overflowX=t.body.style.overflowX="hidden",n.useCssAnimation){for(var r=n.main.length;r--;)T(2.3)&&S(n.main[r])?g(n.main[r],n.direction,e,x.slider):l(n.main[r],{transform:n.getTranslateX(e)});l(n.slidemenu,{transitionProperty:"z-index",visibility:"visible",zIndex:"1"})}else{for(var r=n.main.length;r--;)g(n.main[r],n.direction,e,x.slider);l(n.slidemenu,{visibility:"visible"})}setTimeout(n.slideOpenEnd,x.slider+X)},r.prototype.slideOpenEnd=function(){for(var e=this,t=e.main.length;t--;)e.main[t].SpSlidemenuStatus=O.open;e.useCssAnimation||l(e.slidemenu,{zIndex:"1"});for(var t=e.main.length;t--;)f("start",e.main[t],e.mainTouchStart,!1)},r.prototype.slideClose=function(){for(var e=this,t=e.main.length;t--;)e.main[t].SpSlidemenuStatus=O.progress;for(var t=e.main.length;t--;)v("start",e.main[t],e.mainTouchStart,!1);if(e.useCssAnimation)l(e.slidemenu,{transitionProperty:"visibility",visibility:"hidden",zIndex:"-1"}),setTimeout(function(){for(var t=e.main.length;t--;)T(2.3)&&S(e.main[t])?g(e.main[t],e.direction,0,x.slider):l(e.main[t],{transform:e.getTranslateX(0)})},50);else{for(var t=e.main.length;t--;)g(e.main[t],e.direction,0,x.slider);l(e.slidemenu,{zIndex:"-1"})}setTimeout(e.slideCloseEnd,x.slider+X)},r.prototype.slideCloseEnd=function(){for(var e=this,n=e.main.length;n--;)e.main[n].SpSlidemenuStatus=O.close;t.documentElement.style.overflowX=e.htmlOverflowX,t.body.style.overflowX=e.bodyOverflowX,e.useCssAnimation||l(e.slidemenu,{visibility:"hidden"}),v("move",t,d,!1)},r.prototype.scrollTouchStart=function(e){var t=this;A||(t.scrollOverTimer!==!1&&clearTimeout(t.scrollOverTimer),t.scrollCurrentY=t.getScrollCurrentY(),t.useCssAnimation?l(t.slidemenuContent,{transitionTimingFunction:"ease-in-out",transitionDuration:"0ms",transform:t.getTranslateY(t.scrollCurrentY)}):(t.stopScrollAnimate(),l(t.slidemenuContent,{top:t.scrollCurrentY+"px"})),t.scrollOverTimer=!1,t.scrollAnimationTimer=!1,t.scrollTouchStarted=!0,t.scrollMoveReady=!1,t.scrollMoveEventCnt=0,t.scrollMaxY=t.calcMaxY(),t.scrollStartPageX=h(e,"pageX"),t.scrollStartPageY=h(e,"pageY"),t.scrollBasePageY=t.scrollStartPageY,t.scrollTimeForVelocity=e.timeStamp,t.scrollPageYForVelocity=t.scrollStartPageY,t.slidemenuContent.removeEventListener("click",d,!0))},r.prototype.scrollTouchMove=function(e){var t,n,r,o,i,s,a;t=this,t.scrollTouchStarted&&!A&&(n=h(e,"pageX"),r=h(e,"pageY"),t.scrollMoveReady?(e.preventDefault(),e.stopPropagation(),o=r-t.scrollBasePageY,i=t.scrollCurrentY+o,(i>0||i<t.scrollMaxY)&&(i=Math.round(t.scrollCurrentY+o/3)),t.scrollSetY(i),t.scrollMoveEventCnt%w===0&&(t.scrollPageYForVelocity=r,t.scrollTimeForVelocity=e.timeStamp),t.scrollMoveEventCnt++):(s=Math.abs(n-t.scrollStartPageX),a=Math.abs(r-t.scrollStartPageY),(s>5||a>5)&&(t.scrollMoveReady=!0,t.slidemenuContent.addEventListener("click",d,!0))),t.scrollBasePageY=r)},r.prototype.scrollTouchEnd=function(e){var t,n,r,o;if(t=this,t.scrollTouchStarted){if(t.scrollTouchStarted=!1,t.scrollMaxY=t.calcMaxY(),t.scrollCurrentY>0||t.scrollCurrentY<t.scrollMaxY)return void t.scrollOverBack();r=h(e,"pageY")-t.scrollPageYForVelocity,o=e.timeStamp-t.scrollTimeForVelocity,n=r/o,Math.abs(n)>=.01&&t.scrollInertia(n)}},r.prototype.scrollInertia=function(e){var t,n,r,o,i,s,a,l,u;t=this,e>0?(n=!0,r=0):(n=!1,r=t.scrollMaxY),o=Math.abs(t.scrollCurrentY-r),e=Math.abs(750*e),e>1e3&&(e=1e3),i=e/500,s=e*i-500*Math.pow(i,2)/2,o>=s?(a=n?t.scrollCurrentY+s:t.scrollCurrentY-s,l=1e3*i,t.scrollInertiaMove(a,l,!1)):(a=r,u=Math.sqrt(1e3*o+Math.pow(e,2)),l=(u-e)/500*1e3,t.scrollInertiaMove(a,l,!0,u,n))},r.prototype.scrollInertiaMove=function(e,t,n,r,o){var i,s,a=this;a.scrollCurrentY=e,a.useCssAnimation?l(a.slidemenuContent,{transitionTimingFunction:"cubic-bezier(0.33, 0.66, 0.66, 1)",transitionDuration:t+"ms",transform:a.getTranslateY(e)}):a.scrollAnimate(e,t),n&&(i=r/7500,s=r*i-7500*Math.pow(i,2)/2,e=o?a.scrollCurrentY+s:a.scrollCurrentY-s,t=1e3*i,a.scrollOver(e,t))},r.prototype.scrollOver=function(e,t){var n;n=this,n.scrollCurrentY=e,n.useCssAnimation?l(n.slidemenuContent,{transitionTimingFunction:"cubic-bezier(0.33, 0.66, 0.66, 1)",transitionDuration:t+"ms",transform:n.getTranslateY(e)}):n.scrollAnimate(e,t),n.scrollOverTimer=setTimeout(n.scrollOverBack,t)},r.prototype.scrollOverBack=function(){var e,t;e=this,t=e.scrollCurrentY>=0?0:e.scrollMaxY,e.scrollCurrentY=t,e.useCssAnimation?l(e.slidemenuContent,{transitionTimingFunction:"ease-out",transitionDuration:x.scrollOverBack+"ms",transform:e.getTranslateY(t)}):e.scrollAnimate(t,x.scrollOverBack)},r.prototype.scrollSetY=function(e){var t=this;t.scrollCurrentY=e,t.useCssAnimation?l(t.slidemenuContent,{transitionTimingFunction:"ease-in-out",transitionDuration:"0ms",transform:t.getTranslateY(e)}):t.slidemenuContent.style.top=e+"px"},r.prototype.scrollAnimate=function(e,t){var n=this;n.stopScrollAnimate(),n.scrollAnimationTimer=g(n.slidemenuContent,"top",e,t)},r.prototype.stopScrollAnimate=function(){var e=this;e.scrollAnimationTimer!==!1&&clearInterval(e.scrollAnimationTimer)},r.prototype.itemClick=function(e){var t=e.target||e.srcElement;y(t,D)&&this.slideClose()},r.prototype.calcMaxY=function(){var e,t,n,r;return e=this,t=e.slidemenuContent.offsetHeight,n=e.slidemenuBody.offsetHeight,r=0,e.slidemenuHeader&&(r=e.slidemenuHeader.offsetHeight),t>n?-(t-n+r):0},r.prototype.getScrollCurrentY=function(){var t=0;if(this.useCssAnimation)u(e.getComputedStyle(this.slidemenuContent,""),"transform").split(",").forEach(function(e){var n=parseInt(e,10);isNaN(n)||0===n||1===n||(t=n)});else{var n=parseInt(u(e.getComputedStyle(this.slidemenuContent,""),"top"),10);isNaN(n)||0===n||1===n||(t=n)}return t},r.prototype.getTranslateX=function(e){var t=this;return t.use3d?"translate3d("+e+"px, 0px, 0px)":"translate("+e+"px, 0px)"},r.prototype.getTranslateY=function(e){var t=this;return t.use3d?"translate3d(0px, "+e+"px, 0px)":"translate(0px, "+e+"px)"},e.SpSlidemenu=r}(window,window.document);