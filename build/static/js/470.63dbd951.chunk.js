(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[470],{75184:function(e,a,r){"use strict";r(72791);var t=r(89743),i=r(2677),n=r(2461),s=r(80184);a.Z=function(e){return(0,s.jsx)(t.Z,{children:(0,s.jsx)(i.Z,{children:(0,s.jsxs)("div",{className:"page-title-box",children:[(0,s.jsx)("h4",{className:"page-title",children:e.title}),(0,s.jsx)("div",{className:"page-title-right",children:(0,s.jsxs)(n.Z,{listProps:{className:"m-0"},children:[(0,s.jsx)(n.Z.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,a){return e.active?(0,s.jsx)(n.Z.Item,{active:!0,children:e.label},a):(0,s.jsx)(n.Z.Item,{href:e.path,children:e.label},a)}))]})})]})})})}},48141:function(e,a,r){"use strict";r.r(a);var t=r(72791),i=r(89743),n=r(2677),s=r(9140),c=r(43360),o=r(74330),l=r(75184),d=r(24506),u=r(80184),m=function(e){var a=e.pricingPlans;return(0,u.jsx)(i.Z,{children:(a||[]).map((function(e,a){return(0,u.jsx)(n.Z,{lg:4,children:(0,u.jsx)(s.Z,{className:"card-pricing",children:(0,u.jsxs)(s.Z.Body,{className:"p-4",children:[(0,u.jsxs)("div",{className:"d-flex",children:[(0,u.jsxs)("div",{className:"flex-grow-1",children:[(0,u.jsx)("h5",{className:"mt-0 mb-2 fs-16",children:e.name}),(0,u.jsxs)("h2",{className:"mt-0 mb-2",children:["$",e.price," ",(0,u.jsxs)("span",{className:"fs-14",children:["/ ",e.duration]})]})]}),(0,u.jsx)("div",{className:"align-self-center flex-shrink-0",children:(0,u.jsx)(o.Z,{icon:e.icon,className:"icon-dual icon-lg"})})]}),(0,u.jsx)("ul",{className:"card-pricing-features text-muted border-top pt-2 mt-2 ps-0 list-unstyled",children:(e.features||[]).map((function(e,a){return(0,u.jsxs)("li",{children:[(0,u.jsx)("i",{className:"uil uil-check text-success fs-15 me-1"}),e]},a)}))}),(0,u.jsx)("div",{className:"mt-5 text-center",children:(0,u.jsxs)(c.Z,{variant:e.isRecommended?"primary":"soft-primary",className:"px-sm-4",children:[(0,u.jsx)("i",{className:"uil uil-arrow-right me-1"}),"Buy Now for $",e.price]})})]})})},a)}))})};a.default=function(){return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsx)(l.Z,{breadCrumbItems:[{label:"Pages",path:"/pages/pricing"},{label:"Pricing",path:"/pages/pricing",active:!0}],title:"Pricing"}),(0,u.jsx)(i.Z,{className:"justify-content-center",children:(0,u.jsxs)(n.Z,{xl:10,children:[(0,u.jsxs)("div",{className:"text-center my-4",children:[(0,u.jsx)("h3",{children:"Simple pricing for Everyone"}),(0,u.jsx)("p",{className:"text-muted",children:"Fully functional accounts are starting from $19/month only"})]}),(0,u.jsx)(m,{pricingPlans:d.dh})]})})]})}},24506:function(e,a,r){"use strict";r.d(a,{NF:function(){return t},ZF:function(){return n},dh:function(){return i}});var t={invoice_id:"000028",customer:" Greeva Navadiya",notes:"All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above",invoice_date:"Jul 17, 2019",due_date:"Jul 27,2019",address:{owner:"Greeva Navadiya",line_1:"795 Folsom Ave, Suite 600",city:"San Francisco",state:"CA",zip:94107,phone:"(123) 456-7890"},items:[{id:1,name:"Web Design",description:"2 Pages static website - my website",hours:22,hour_rate:30,total:660},{id:2,name:"Software Development",description:"Invoice editor software - AB'c Software",hours:112.5,hour_rate:35,total:3937.5}],sub_total:4597.5,discount:459.75,total:4137.75},i=[{id:1,name:"Professional Pack",icon:"users",price:19,duration:"Month",features:["10 GB Storage","500 GB Bandwidth","No Domain","Email Support","24x7 Support"],isRecommended:!1},{id:2,name:"Business Pack",icon:"briefcase",price:29,duration:"Month",features:["50 GB Storage","900 GB Bandwidth","2 Domain","Email Support","24x7 Support"],isRecommended:!0},{id:3,name:"Enterprise Pack",icon:"shopping-bag",price:49,duration:"Month",features:["100 GB Storage","Unlimited Bandwidth","Unlimited Domain","Email Support","24x7 Support"],isRecommended:!1}],n=[{icon:"uil-presentation-lines-alt",title:"Why is the Site Down?",desc:"If several languages coalesce, the grammar of the resulting language is more simple."},{icon:"uil-clock-eight",title:"What is the Downtime?",desc:"Everyone realizes why a new common language would be desirable one could refuse."},{icon:"uil-envelope",title:"Do you need Support?",desc:"You need to be sure there isn't anything embar.. Please contact us via email no-reply@domain.com"}]},80888:function(e,a,r){"use strict";var t=r(79047);function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,a,r,i,n,s){if(s!==t){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function a(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:i};return r.PropTypes=r,r}},52007:function(e,a,r){e.exports=r(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},43360:function(e,a,r){"use strict";var t=r(1413),i=r(29439),n=r(45987),s=r(81694),c=r.n(s),o=r(72791),l=r(15341),d=r(10162),u=r(80184),m=["as","bsPrefix","variant","size","active","className"],p=o.forwardRef((function(e,a){var r=e.as,s=e.bsPrefix,o=e.variant,p=e.size,f=e.active,h=e.className,v=(0,n.Z)(e,m),x=(0,d.vE)(s,"btn"),b=(0,l.FT)((0,t.Z)({tagName:r},v)),g=(0,i.Z)(b,2),y=g[0],N=g[1].tagName;return(0,u.jsx)(N,(0,t.Z)((0,t.Z)((0,t.Z)({},v),y),{},{ref:a,className:c()(h,x,f&&"active",o&&"".concat(x,"-").concat(o),p&&"".concat(x,"-").concat(p),v.href&&v.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=p},9140:function(e,a,r){"use strict";r.d(a,{Z:function(){return B}});var t=r(1413),i=r(45987),n=r(81694),s=r.n(n),c=r(72791),o=r(10162),l=r(66543),d=r(27472),u=r(80184),m=["bsPrefix","className","variant","as"],p=c.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,c=e.variant,l=e.as,d=void 0===l?"img":l,p=(0,i.Z)(e,m),f=(0,o.vE)(r,"card-img");return(0,u.jsx)(d,(0,t.Z)({ref:a,className:s()(c?"".concat(f,"-").concat(c):f,n)},p))}));p.displayName="CardImg";var f=p,h=r(96040),v=["bsPrefix","className","as"],x=c.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,l=e.as,d=void 0===l?"div":l,m=(0,i.Z)(e,v),p=(0,o.vE)(r,"card-header"),f=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:p}}),[p]);return(0,u.jsx)(h.Z.Provider,{value:f,children:(0,u.jsx)(d,(0,t.Z)((0,t.Z)({ref:a},m),{},{className:s()(n,p)}))})}));x.displayName="CardHeader";var b=x,g=["bsPrefix","className","bg","text","border","body","children","as"],y=(0,d.Z)("h5"),N=(0,d.Z)("h6"),Z=(0,l.Z)("card-body"),j=(0,l.Z)("card-title",{Component:y}),P=(0,l.Z)("card-subtitle",{Component:N}),w=(0,l.Z)("card-link",{Component:"a"}),C=(0,l.Z)("card-text",{Component:"p"}),S=(0,l.Z)("card-footer"),_=(0,l.Z)("card-img-overlay"),k=c.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,c=e.bg,l=e.text,d=e.border,m=e.body,p=e.children,f=e.as,h=void 0===f?"div":f,v=(0,i.Z)(e,g),x=(0,o.vE)(r,"card");return(0,u.jsx)(h,(0,t.Z)((0,t.Z)({ref:a},v),{},{className:s()(n,x,c&&"bg-".concat(c),l&&"text-".concat(l),d&&"border-".concat(d)),children:m?(0,u.jsx)(Z,{children:p}):p}))}));k.displayName="Card",k.defaultProps={body:!1};var B=Object.assign(k,{Img:f,Title:j,Subtitle:P,Body:Z,Link:w,Text:C,Header:b,Footer:S,ImgOverlay:_})},96040:function(e,a,r){"use strict";var t=r(72791).createContext(null);t.displayName="CardHeaderContext",a.Z=t},66543:function(e,a,r){"use strict";r.d(a,{Z:function(){return p}});var t=r(1413),i=r(45987),n=r(81694),s=r.n(n),c=/-(.)/g;var o=r(72791),l=r(10162),d=r(80184),u=["className","bsPrefix","as"],m=function(e){return e[0].toUpperCase()+(a=e,a.replace(c,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function p(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,n=void 0===r?m(e):r,c=a.Component,p=a.defaultProps,f=o.forwardRef((function(a,r){var n=a.className,o=a.bsPrefix,m=a.as,p=void 0===m?c||"div":m,f=(0,i.Z)(a,u),h=(0,l.vE)(o,e);return(0,d.jsx)(p,(0,t.Z)({ref:r,className:s()(n,h)},f))}));return f.defaultProps=p,f.displayName=n,f}},27472:function(e,a,r){"use strict";var t=r(1413),i=r(72791),n=r(81694),s=r.n(n),c=r(80184);a.Z=function(e){return i.forwardRef((function(a,r){return(0,c.jsx)("div",(0,t.Z)((0,t.Z)({},a),{},{ref:r,className:s()(a.className,e)}))}))}}}]);
//# sourceMappingURL=470.63dbd951.chunk.js.map