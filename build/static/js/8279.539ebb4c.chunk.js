"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[8279],{56236:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(29439),a=t(72791),o=(t(66068),t(79096),t(22519));t(36656),t(92444);t(9084),t(37215);var c="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product;"undefined"!==typeof document||c?a.useLayoutEffect:a.useEffect,new WeakMap;var u=t(15341),f=t(80184),i=["onKeyDown"];var s=a.forwardRef((function(n,e){var t,a=n.onKeyDown,c=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,i),s=(0,u.FT)(Object.assign({tagName:"a"},c)),l=(0,r.Z)(s,1)[0],v=(0,o.Z)((function(n){l.onKeyDown(n),null==a||a(n)}));return((t=c.href)&&"#"!==t.trim()||c.role)&&"button"!==c.role?(0,f.jsx)("a",Object.assign({ref:e},c,{onKeyDown:a})):(0,f.jsx)("a",Object.assign({ref:e},c,l,{onKeyDown:v}))}));s.displayName="Anchor";var l=s},15341:function(n,e,t){t.d(e,{FT:function(){return u}});var r=t(29439),a=t(72791),o=t(80184),c=["as","disabled"];function u(n){var e=n.tagName,t=n.disabled,r=n.href,a=n.target,o=n.rel,c=n.onClick,u=n.tabIndex,f=void 0===u?0:u,i=n.type;e||(e=null!=r||null!=a||null!=o?"a":"button");var s={tagName:e};if("button"===e)return[{type:i||"button",disabled:t},s];var l=function(n){(t||"a"===e&&function(n){return!n||"#"===n.trim()}(r))&&n.preventDefault(),t?n.stopPropagation():null==c||c(n)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:f,href:"a"===e&&t?void 0:r,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?o:void 0,onClick:l,onKeyDown:function(n){" "===n.key&&(n.preventDefault(),l(n))}},s]}var f=a.forwardRef((function(n,e){var t=n.as,a=n.disabled,f=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,c),i=u(Object.assign({tagName:t,disabled:a},f)),s=(0,r.Z)(i,2),l=s[0],v=s[1].tagName;return(0,o.jsx)(v,Object.assign({},f,l,{ref:e}))}));f.displayName="Button",e.ZP=f},66068:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(72791);function a(){return(0,r.useState)(null)}},79096:function(n,e,t){var r=t(72791);e.Z=function(n){var e=(0,r.useRef)(n);return(0,r.useEffect)((function(){e.current=n}),[n]),e}},22519:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(72791),a=t(79096);function o(n){var e=(0,a.Z)(n);return(0,r.useCallback)((function(){return e.current&&e.current.apply(e,arguments)}),[e])}},36656:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(72791),a=t(22519);function o(n,e,t,o){void 0===o&&(o=!1);var c=(0,a.Z)(t);(0,r.useEffect)((function(){var t="function"===typeof n?n():n;return t.addEventListener(e,c,o),function(){return t.removeEventListener(e,c,o)}}),[n])}},92444:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(36656),a=t(72791);function o(n,e,t){void 0===t&&(t=!1);var o=(0,a.useCallback)((function(){return document}),[]);return(0,r.Z)(o,n,e,t)}},9084:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(72791);function a(){var n=(0,r.useRef)(!0),e=(0,r.useRef)((function(){return n.current}));return(0,r.useEffect)((function(){return function(){n.current=!1}}),[]),e.current}},37215:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(72791);function a(n){var e=(0,r.useRef)(null);return(0,r.useEffect)((function(){e.current=n})),e.current}},56144:function(n,e,t){var r=t(1413),a=t(45987),o=t(81694),c=t.n(o),u=t(72791),f=t(10162),i=t(80184),s=["bsPrefix","size","vertical","className","as"],l=u.forwardRef((function(n,e){var t=n.bsPrefix,o=n.size,u=n.vertical,l=n.className,v=n.as,d=void 0===v?"div":v,p=(0,a.Z)(n,s),b=(0,f.vE)(t,"btn-group"),m=b;return u&&(m="".concat(b,"-vertical")),(0,i.jsx)(d,(0,r.Z)((0,r.Z)({},p),{},{ref:e,className:c()(l,m,o&&"".concat(b,"-").concat(o))}))}));l.displayName="ButtonGroup",l.defaultProps={vertical:!1,role:"group"},e.Z=l},2677:function(n,e,t){var r=t(29439),a=t(1413),o=t(45987),c=t(81694),u=t.n(c),f=t(72791),i=t(10162),s=t(80184),l=["as","bsPrefix","className"],v=["className"],d=["xxl","xl","lg","md","sm","xs"];var p=f.forwardRef((function(n,e){var t=function(n){var e=n.as,t=n.bsPrefix,r=n.className,c=(0,o.Z)(n,l);t=(0,i.vE)(t,"col");var f=[],s=[];return d.forEach((function(n){var e,r,a,o=c[n];delete c[n],"object"===typeof o&&null!=o?(e=o.span,r=o.offset,a=o.order):e=o;var u="xs"!==n?"-".concat(n):"";e&&f.push(!0===e?"".concat(t).concat(u):"".concat(t).concat(u,"-").concat(e)),null!=a&&s.push("order".concat(u,"-").concat(a)),null!=r&&s.push("offset".concat(u,"-").concat(r))})),[(0,a.Z)((0,a.Z)({},c),{},{className:u().apply(void 0,[r].concat(f,s))}),{as:e,bsPrefix:t,spans:f}]}(n),c=(0,r.Z)(t,2),f=c[0],p=f.className,b=(0,o.Z)(f,v),m=c[1],Z=m.as,x=void 0===Z?"div":Z,y=m.bsPrefix,g=m.spans;return(0,s.jsx)(x,(0,a.Z)((0,a.Z)({},b),{},{ref:e,className:u()(p,!g.length&&y)}))}));p.displayName="Col",e.Z=p},89743:function(n,e,t){var r=t(1413),a=t(45987),o=t(81694),c=t.n(o),u=t(72791),f=t(10162),i=t(80184),s=["bsPrefix","className","as"],l=["xxl","xl","lg","md","sm","xs"],v=u.forwardRef((function(n,e){var t=n.bsPrefix,o=n.className,u=n.as,v=void 0===u?"div":u,d=(0,a.Z)(n,s),p=(0,f.vE)(t,"row"),b="".concat(p,"-cols"),m=[];return l.forEach((function(n){var e,t=d[n];delete d[n],e=null!=t&&"object"===typeof t?t.cols:t;var r="xs"!==n?"-".concat(n):"";null!=e&&m.push("".concat(b).concat(r,"-").concat(e))})),(0,i.jsx)(v,(0,r.Z)((0,r.Z)({ref:e},d),{},{className:c().apply(void 0,[o,p].concat(m))}))}));v.displayName="Row",e.Z=v}}]);
//# sourceMappingURL=8279.539ebb4c.chunk.js.map