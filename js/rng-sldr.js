!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.rngSldr=e():t.rngSldr=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(1),e.default=function(){function t(t,e,n,r,o,i,u){return i&&(t>i&&(t=i,u.value=i),t<e&&(t=e,u.value=e)),(t-e)/n*(r-o-o)+o}function e(t,e,n,r,o,i,u){if(i){var a=n+e;t>a&&(t=a,u.value=a),t<i&&(t=i,u.value=i)}return r-o-(t-e)*(r-o-o)/n}function n(t,e){"INPUT"===t.tagName?t.value=e:t.innerText=e}function r(t){return"INPUT"===t.tagName?t.value:t.textContent}function o(t,e,r,o,i,u,a,s,d){return function(l){var c=l.clientX-t,v=e+c;o.style.width=v>=r?v+i<=u?v+"px":u-i+"px":r+"px";var p=Math.round((parseFloat(o.style.width)-r)/(u-r-r)*a)+s;n(d,p)}}function i(t,e,r,o,i,u,a,s,d){return function(l){var c=l.clientX-t,v=e-c;o.style.width=v>=r?v+i<=u?v+"px":u-i+"px":r+"px";var p=Math.round((u-parseFloat(o.style.width)-r)/(u-r-r)*a)+s;n(d,p)}}function u(t,e,r,o,i,u,a,s,d){return function(l){var c=Math.floor(l.touches[0].clientX-t),v=e+c;o.style.width=v>=r?v+i<=u?v+"px":u-i+"px":r+"px";var p=Math.round((parseFloat(o.style.width)-r)/(u-r-r)*a)+s;n(d,p)}}function a(t,e,r,o,i,u,a,s,d){return function(l){var c=Math.floor(l.touches[0].clientX-t),v=e-c;o.style.width=v>=r?v+i<=u?v+"px":u-i+"px":r+"px";var p=Math.round((u-parseFloat(o.style.width)-r)/(u-r-r)*a)+s;n(d,p)}}function s(s,l){var c=l.min,v=void 0===c?0:c,p=l.max,f=l.start,h=l.end,y=document.querySelector("."+s);y.innerHTML=d;var m=document.querySelector("."+s+"-start"),x=document.querySelector("."+s+"-end"),w=p-v,g=y.querySelector(".rng-sldr-quantity-first"),E=y.querySelector(".rng-sldr-quantity-second"),L=g.querySelector(".rng-sldr-quantity-lever"),q=E.querySelector(".rng-sldr-quantity-lever"),F=parseInt(getComputedStyle(L).width),S=parseInt(getComputedStyle(y).width);n(m,f||v),n(x,h||p),g.style.width=f?t(f,v,w,S,F)+"px":F+"px",E.style.width=h?e(h,v,w,S,F)+"px":F+"px","INPUT"===m.tagName&&m.addEventListener("change",function(e){g.style.width=t(e.target.value,v,w,S,F,parseInt(x.value),e.target)+"px"}),"INPUT"===x.tagName&&x.addEventListener("change",function(t){E.style.width=e(t.target.value,v,w,S,F,parseInt(m.value),t.target)+"px"}),window.addEventListener("resize",function(n){S=parseInt(getComputedStyle(y).width),g.style.width=t(r(m),v,w,S,F)+"px",E.style.width=e(r(x),v,w,S,F)+"px"}),L.addEventListener("mousedown",function(t){t.preventDefault();var e=this.parentElement,n=t.clientX,r=parseFloat(e.style.width)||0,i=parseFloat(E.style.width),u=o(n,r,F,e,i,S,w,v,m);document.addEventListener("mousemove",u),document.addEventListener("mouseup",function(t){this.removeEventListener("mousemove",u)})}),q.addEventListener("mousedown",function(t){t.preventDefault();var e=this.parentElement,n=t.clientX,r=parseFloat(e.style.width)||0,o=parseFloat(g.style.width),u=i(n,r,F,e,o,S,w,v,x);document.addEventListener("mousemove",u),document.addEventListener("mouseup",function(t){this.removeEventListener("mousemove",u)})}),L.addEventListener("touchstart",function(t){t.preventDefault();var e=this.parentElement,n=t.touches[0].clientX,r=parseFloat(e.style.width)||0,o=parseFloat(E.style.width),i=u(n,r,F,e,o,S,w,v,m);document.addEventListener("touchmove",i),document.addEventListener("touchend",function(t){this.removeEventListener("touchmove",i)})}),q.addEventListener("touchstart",function(t){t.preventDefault();var e=this.parentElement,n=t.touches[0].clientX,r=parseFloat(e.style.width)||0,o=parseFloat(g.style.width),i=a(n,r,F,e,o,S,w,v,x);document.addEventListener("touchmove",i),document.addEventListener("touchend",function(t){this.removeEventListener("touchmove",i)})})}var d='\n        <div class="rng-sldr-quantity rng-sldr-quantity-first">\n            <div class="line"></div>\n            <div class="rng-sldr-quantity-lever"></div>\n        </div>\n        <div class="rng-sldr-quantity-line"></div>\n        <div class="rng-sldr-quantity rng-sldr-quantity-second">\n            <div class="line"></div>\n            <div class="rng-sldr-quantity-lever"></div>                    \n        </div>\n    ';return s}()},function(t,e){}]).default});