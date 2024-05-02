"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[9386],{56236:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(29439),o=t(72791),u=(t(66068),t(79096),t(22519));t(36656),t(92444);t(9084),t(37215);var i="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product;"undefined"!==typeof document||i?o.useLayoutEffect:o.useEffect,new WeakMap;var a=t(15341),c=t(80184),f=["onKeyDown"];var l=o.forwardRef((function(n,e){var t,o=n.onKeyDown,i=function(n,e){if(null==n)return{};var t,r,o={},u=Object.keys(n);for(r=0;r<u.length;r++)t=u[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,f),l=(0,a.FT)(Object.assign({tagName:"a"},i)),s=(0,r.Z)(l,1)[0],d=(0,u.Z)((function(n){s.onKeyDown(n),null==o||o(n)}));return((t=i.href)&&"#"!==t.trim()||i.role)&&"button"!==i.role?(0,c.jsx)("a",Object.assign({ref:e},i,{onKeyDown:o})):(0,c.jsx)("a",Object.assign({ref:e},i,s,{onKeyDown:d}))}));l.displayName="Anchor";var s=l},15341:function(n,e,t){t.d(e,{FT:function(){return a}});var r=t(29439),o=t(72791),u=t(80184),i=["as","disabled"];function a(n){var e=n.tagName,t=n.disabled,r=n.href,o=n.target,u=n.rel,i=n.onClick,a=n.tabIndex,c=void 0===a?0:a,f=n.type;e||(e=null!=r||null!=o||null!=u?"a":"button");var l={tagName:e};if("button"===e)return[{type:f||"button",disabled:t},l];var s=function(n){(t||"a"===e&&function(n){return!n||"#"===n.trim()}(r))&&n.preventDefault(),t?n.stopPropagation():null==i||i(n)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:c,href:"a"===e&&t?void 0:r,target:"a"===e?o:void 0,"aria-disabled":t||void 0,rel:"a"===e?u:void 0,onClick:s,onKeyDown:function(n){" "===n.key&&(n.preventDefault(),s(n))}},l]}var c=o.forwardRef((function(n,e){var t=n.as,o=n.disabled,c=function(n,e){if(null==n)return{};var t,r,o={},u=Object.keys(n);for(r=0;r<u.length;r++)t=u[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,i),f=a(Object.assign({tagName:t,disabled:o},c)),l=(0,r.Z)(f,2),s=l[0],d=l[1].tagName;return(0,u.jsx)(d,Object.assign({},c,s,{ref:e}))}));c.displayName="Button",e.ZP=c},66068:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(72791);function o(){return(0,r.useState)(null)}},79096:function(n,e,t){var r=t(72791);e.Z=function(n){var e=(0,r.useRef)(n);return(0,r.useEffect)((function(){e.current=n}),[n]),e}},22519:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(72791),o=t(79096);function u(n){var e=(0,o.Z)(n);return(0,r.useCallback)((function(){return e.current&&e.current.apply(e,arguments)}),[e])}},36656:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(72791),o=t(22519);function u(n,e,t,u){void 0===u&&(u=!1);var i=(0,o.Z)(t);(0,r.useEffect)((function(){var t="function"===typeof n?n():n;return t.addEventListener(e,i,u),function(){return t.removeEventListener(e,i,u)}}),[n])}},92444:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(36656),o=t(72791);function u(n,e,t){void 0===t&&(t=!1);var u=(0,o.useCallback)((function(){return document}),[]);return(0,r.Z)(u,n,e,t)}},9084:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(72791);function o(){var n=(0,r.useRef)(!0),e=(0,r.useRef)((function(){return n.current}));return(0,r.useEffect)((function(){return function(){n.current=!1}}),[]),e.current}},37215:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(72791);function o(n){var e=(0,r.useRef)(null);return(0,r.useEffect)((function(){e.current=n})),e.current}},17858:function(n,e,t){t.d(e,{Z:function(){return x}});var r=t(1413),o=t(45987),u=t(4942),i=t(81694),a=t.n(i),c=t(75427),f=t(72791),l=t(27726),s=t(71380);var d,v=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.filter((function(n){return null!=n})).reduce((function(n,e){if("function"!==typeof e)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===n?e:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];n.apply(this,r),e.apply(this,r)}}),null)},p=t(67202),g=t(85007),m=t(80184),y=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],Z={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function h(n,e){var t=e["offset".concat(n[0].toUpperCase()).concat(n.slice(1))],r=Z[n];return t+parseInt((0,c.Z)(e,r[0]),10)+parseInt((0,c.Z)(e,r[1]),10)}var E=(d={},(0,u.Z)(d,l.Wj,"collapse"),(0,u.Z)(d,l.Ix,"collapsing"),(0,u.Z)(d,l.d0,"collapsing"),(0,u.Z)(d,l.cn,"collapse show"),d),b={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:h},w=f.forwardRef((function(n,e){var t=n.onEnter,u=n.onEntering,i=n.onEntered,c=n.onExit,l=n.onExiting,d=n.className,Z=n.children,b=n.dimension,w=void 0===b?"height":b,x=n.getDimensionValue,j=void 0===x?h:x,k=(0,o.Z)(n,y),N="function"===typeof w?w():w,D=(0,f.useMemo)((function(){return v((function(n){n.style[N]="0"}),t)}),[N,t]),O=(0,f.useMemo)((function(){return v((function(n){var e="scroll".concat(N[0].toUpperCase()).concat(N.slice(1));n.style[N]="".concat(n[e],"px")}),u)}),[N,u]),R=(0,f.useMemo)((function(){return v((function(n){n.style[N]=null}),i)}),[N,i]),C=(0,f.useMemo)((function(){return v((function(n){n.style[N]="".concat(j(N,n),"px"),(0,p.Z)(n)}),c)}),[c,j,N]),I=(0,f.useMemo)((function(){return v((function(n){n.style[N]=null}),l)}),[N,l]);return(0,m.jsx)(g.Z,(0,r.Z)((0,r.Z)({ref:e,addEndListener:s.Z},k),{},{"aria-expanded":k.role?k.in:null,onEnter:D,onEntering:O,onEntered:R,onExit:C,onExiting:I,childRef:Z.ref,children:function(n,e){return f.cloneElement(Z,(0,r.Z)((0,r.Z)({},e),{},{className:a()(d,Z.props.className,E[n],"width"===N&&"collapse-horizontal")}))}}))}));w.defaultProps=b;var x=w}}]);
//# sourceMappingURL=9386.7b07a637.chunk.js.map