!function webpackUniversalModuleDefinition(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.nafe=n():t.nafe=n()}(this,function(){return function(t){function __webpack_require__(r){if(n[r])return n[r].exports;var e=n[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,__webpack_require__),e.l=!0,e.exports}var n={};return __webpack_require__.m=t,__webpack_require__.c=n,__webpack_require__.d=function(t,n,r){__webpack_require__.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(t){var n=t&&t.__esModule?function getDefault(){return t.default}:function getModuleExports(){return t};return __webpack_require__.d(n,"a",n),n},__webpack_require__.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=7)}([function(t,n){var r=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){t.exports=!r(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(25),o=r(27);t.exports=function(t){return e(o(t))}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){"use strict";var e=r(8),o=r(9),u=/\{\s*\[\s*native\s+code\s*\]\s*\}$/i,i=function nafe(t){if(e(t)||"function"!=typeof t)return!1;try{return u.test(o(t))}catch(t){return!1}};t.exports=i},function(t,n,r){"use strict";var e=function falzy(t){return"number"==typeof t?isNaN(t):void 0===t||null===t||""===t};t.exports=e},function(t,n,r){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var e=r(10),o=_interopRequireDefault(e),u=r(38),i=_interopRequireDefault(u),c=function stringe(t){if("string"==typeof t)return t;var n=[];try{if(void 0===t||null===t||"function"!=typeof t.toString)return""+t}catch(t){n.push(t.stack)}try{if(t.toString&&"function"==typeof t.toString)return t.toString()}catch(t){n.push(t.stack)}try{return(0,i.default)((0,o.default)(t).reduce(function(n,r){return n[r]=stringe(t[r]),n},{}))}catch(t){n.push(t.stack)}try{return""+t}catch(t){throw n.push(t.stack),new Error("fatal, cannot transform to string, "+n.join(","))}};t.exports=c},function(t,n,r){t.exports={default:r(11),__esModule:!0}},function(t,n,r){r(12);var e=r(0).Object;t.exports=function getOwnPropertyNames(t){return e.getOwnPropertyNames(t)}},function(t,n,r){r(13)("getOwnPropertyNames",function(){return r(24).f})},function(t,n,r){var e=r(14),o=r(0),u=r(4);t.exports=function(t,n){var r=(o.Object||{})[t]||Object[t],i={};i[t]=n(r),e(e.S+e.F*u(function(){r(1)}),"Object",i)}},function(t,n,r){var e=r(1),o=r(0),u=r(15),i=r(17),c=function(t,n,r){var f,a,p,s=t&c.F,l=t&c.G,_=t&c.S,y=t&c.P,v=t&c.B,d=t&c.W,w=l?o:o[n]||(o[n]={}),b=w.prototype,x=l?e:_?e[n]:(e[n]||{}).prototype;l&&(r=n);for(f in r)(a=!s&&x&&void 0!==x[f])&&f in w||(p=a?x[f]:r[f],w[f]=l&&"function"!=typeof x[f]?r[f]:v&&a?u(p,e):d&&x[f]==p?function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(p):y&&"function"==typeof p?u(Function.call,p):p,y&&((w.virtual||(w.virtual={}))[f]=p,t&c.R&&b&&!b[f]&&i(b,f,p)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,r){var e=r(16);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(18),o=r(23);t.exports=r(3)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(19),o=r(20),u=r(22),i=Object.defineProperty;n.f=r(3)?Object.defineProperty:function defineProperty(t,n,r){if(e(t),n=u(n,!0),e(r),o)try{return i(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(2);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n,r){t.exports=!r(3)&&!r(4)(function(){return 7!=Object.defineProperty(r(21)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(2),o=r(1).document,u=e(o)&&e(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,n,r){var e=r(2);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(5),o=r(28).f,u={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return i.slice()}};t.exports.f=function getOwnPropertyNames(t){return i&&"[object Window]"==u.call(t)?c(t):o(e(t))}},function(t,n,r){var e=r(26);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(29),o=r(37).concat("length","prototype");n.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return e(t,o)}},function(t,n,r){var e=r(30),o=r(5),u=r(31)(!1),i=r(34)("IE_PROTO");t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)r!=i&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~u(a,r)||a.push(r));return a}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(5),o=r(32),u=r(33);t.exports=function(t){return function(n,r,i){var c,f=e(n),a=o(f.length),p=u(i,a);if(t&&r!=r){for(;a>p;)if((c=f[p++])!=c)return!0}else for(;a>p;p++)if((t||p in f)&&f[p]===r)return t||p||0;return!t&&-1}}},function(t,n,r){var e=r(6),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(6),o=Math.max,u=Math.min;t.exports=function(t,n){return t=e(t),t<0?o(t+n,0):u(t,n)}},function(t,n,r){var e=r(35)("keys"),o=r(36);t.exports=function(t){return e[t]||(e[t]=o(t))}},function(t,n,r){var e=r(1),o=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){t.exports={default:r(39),__esModule:!0}},function(t,n,r){var e=r(0),o=e.JSON||(e.JSON={stringify:JSON.stringify});t.exports=function stringify(t){return o.stringify.apply(o,arguments)}}])});
//# sourceMappingURL=nafe.deploy.js.map