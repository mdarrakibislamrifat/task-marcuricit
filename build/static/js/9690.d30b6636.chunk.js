(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[9690],{75184:function(e,r,a){"use strict";a(72791);var s=a(89743),l=a(2677),t=a(2461),o=a(80184);r.Z=function(e){return(0,o.jsx)(s.Z,{children:(0,o.jsx)(l.Z,{children:(0,o.jsxs)("div",{className:"page-title-box",children:[(0,o.jsx)("h4",{className:"page-title",children:e.title}),(0,o.jsx)("div",{className:"page-title-right",children:(0,o.jsxs)(t.Z,{listProps:{className:"m-0"},children:[(0,o.jsx)(t.Z.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,r){return e.active?(0,o.jsx)(t.Z.Item,{active:!0,children:e.label},r):(0,o.jsx)(t.Z.Item,{href:e.path,children:e.label},r)}))]})})]})})})}},38459:function(e,r,a){"use strict";a.d(r,{y:function(){return v},J:function(){return n}});var s=a(1413),l=a(72791),t=a(75810),o=a(80184),n=function(e){var r=e.defaultValues,a=e.resolver,n=e.children,i=e.onSubmit,c=e.formClass,d=(0,t.cI)({defaultValues:r,resolver:a}),m=d.handleSubmit,p=d.register,u=d.control,h=d.formState.errors;return(0,o.jsx)("form",{onSubmit:m(i),className:c,noValidate:!0,children:Array.isArray(n)?n.map((function(e){return e.props&&e.props.name?l.createElement(e.type,(0,s.Z)({},(0,s.Z)((0,s.Z)({},e.props),{},{register:p,key:e.props.name,errors:h,control:u}))):e})):n})},i=a(45987),c=a(3350),d=a(99410),m=["type","name","placeholder","register","errors","comp","rows","className","refCallback"],p=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],u=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],h=["startIcon","type","name","placeholder","comp","register","errors","rows","className","textClassName","refCallback"],x=["startIcon","label","type","name","placeholder","register","errors","control","className","labelClassName","containerClass","textClassName","refCallback","action","rows"],Z=function(e){var r=e.type,a=e.name,l=e.placeholder,t=e.register,n=e.errors,d=e.comp,p=e.rows,u=e.className,h=e.refCallback,x=(0,i.Z)(e,m);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z.Control,(0,s.Z)((0,s.Z)({type:r,placeholder:l,name:a,as:d,id:a,ref:function(e){h&&h(e)},className:u,isInvalid:!(!n||!n[a])},t?t(a):{}),{},{rows:p},x)),n&&n[a]?(0,o.jsx)(c.Z.Control.Feedback,{type:"invalid",className:"d-block",children:n[a].message}):null]})},b=function(e){var r=e.type,a=e.label,l=e.name,t=(e.placeholder,e.register),n=e.errors,d=(e.comp,e.rows,e.className),m=e.refCallback,u=(0,i.Z)(e,p);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z.Check,(0,s.Z)((0,s.Z)({type:r,label:a,name:l,id:l,ref:function(e){m&&m(e)},className:d,isInvalid:!(!n||!n[l])},t?t(l):{}),u)),n&&n[l]?(0,o.jsx)(c.Z.Control.Feedback,{type:"invalid",children:n[l].message}):null]})},j=function(e){var r=e.type,a=e.label,l=e.name,t=(e.placeholder,e.register),n=e.errors,d=(e.comp,e.rows,e.className),m=e.refCallback,p=(0,i.Z)(e,u);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z.Select,(0,s.Z)((0,s.Z)({type:r,label:a,name:l,id:l,ref:function(e){m&&m(e)},className:d,isInvalid:!(!n||!n[l])},t?t(l):{}),p)),n&&n[l]?(0,o.jsx)(c.Z.Control.Feedback,{type:"invalid",children:n[l].message}):null]})},f=function(e){var r=e.startIcon,a=e.type,l=e.name,t=e.placeholder,n=e.comp,c=e.register,m=e.errors,p=e.rows,u=e.className,x=e.textClassName,b=e.refCallback,f=(0,i.Z)(e,h);return(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(d.Z.Text,{className:x,children:r}),"select"===a?(0,o.jsx)(j,(0,s.Z)({type:a,name:l,placeholder:t,refCallback:b,comp:n,errors:m,register:c,className:u,rows:p},f)):(0,o.jsx)(Z,(0,s.Z)({type:a,name:l,placeholder:t,refCallback:b,comp:n,errors:m,register:c,className:u,rows:p},f))]})},v=function(e){var r=e.startIcon,a=e.label,l=e.type,t=e.name,n=e.placeholder,d=e.register,m=e.errors,p=(e.control,e.className),u=e.labelClassName,h=e.containerClass,v=e.textClassName,y=e.refCallback,C=e.action,N=e.rows,g=(0,i.Z)(e,x),k="textarea"===l?"textarea":"select"===l?"select":"input";return(0,o.jsx)(o.Fragment,{children:"hidden"===l?(0,o.jsx)("input",(0,s.Z)((0,s.Z)({type:l,name:t},d?d(t):{}),g)):(0,o.jsx)(o.Fragment,{children:"checkbox"===l||"radio"===l?(0,o.jsx)(c.Z.Group,{className:h,children:(0,o.jsx)(b,(0,s.Z)({type:l,label:a,name:t,placeholder:n,refCallback:y,errors:m,register:d,comp:k,className:p,rows:N},g))}):"select"===l?(0,o.jsxs)(c.Z.Group,{className:h,children:[a?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z.Label,{className:u,children:a}),C&&C]}):null,r?(0,o.jsx)(f,(0,s.Z)({type:l,startIcon:r,name:t,comp:k,textClassName:v,placeholder:n,refCallback:y,errors:m,register:d,className:p,rows:N},g)):(0,o.jsx)(j,(0,s.Z)({type:l,name:t,placeholder:n,refCallback:y,errors:m,register:d,comp:k,className:p,rows:N},g))]}):(0,o.jsxs)(c.Z.Group,{className:h,children:[a?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z.Label,{className:u,children:a}),C&&C]}):null,r?(0,o.jsx)(f,(0,s.Z)({type:l,startIcon:r,name:t,comp:k,textClassName:v,placeholder:n,refCallback:y,errors:m,register:d,className:p,rows:N},g)):(0,o.jsx)(Z,(0,s.Z)({type:l,name:t,placeholder:n,refCallback:y,errors:m,register:d,comp:k,className:p,rows:N},g))]})})})}},84070:function(e,r,a){"use strict";a.r(r);var s=a(29439),l=a(72791),t=a(75810),o=a(9140),n=a(3350),i=a(99410),c=a(43360),d=a(89743),m=a(2677),p=a(81724),u=a(61265),h=a(75184),x=a(38459),Z=a(80184),b=function(){var e=(0,l.useState)(!1),r=(0,s.Z)(e,2),a=r[0],t=r[1];return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(o.Z,{children:(0,Z.jsxs)(o.Z.Body,{children:[(0,Z.jsx)("h4",{className:"header-title",children:"Bootstrap Validation - Normal"}),(0,Z.jsx)("p",{className:"sub-header",children:"Provide valuable, actionable feedback to your users with HTML5 form validation\u2013available in all our supported browsers."}),(0,Z.jsxs)(n.Z,{noValidate:!0,validated:a,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),t(!0)},children:[(0,Z.jsxs)(n.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,Z.jsx)(n.Z.Label,{children:"First name"}),(0,Z.jsx)(n.Z.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),(0,Z.jsx)(n.Z.Control.Feedback,{children:"Looks good!"})]}),(0,Z.jsxs)(n.Z.Group,{className:"mb-3",controlId:"validationCustom02",children:[(0,Z.jsx)(n.Z.Label,{children:"Last name"}),(0,Z.jsx)(n.Z.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),(0,Z.jsx)(n.Z.Control.Feedback,{children:"Looks good!"})]}),(0,Z.jsxs)(n.Z.Group,{className:"mb-3",controlId:"validationCustomUsername",children:[(0,Z.jsx)(n.Z.Label,{children:"Username"}),(0,Z.jsxs)(i.Z,{hasValidation:!0,children:[(0,Z.jsx)(i.Z.Text,{id:"inputGroupPrepend",children:"@"}),(0,Z.jsx)(n.Z.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",required:!0}),(0,Z.jsx)(n.Z.Control.Feedback,{type:"invalid",children:"Please choose a username."})]})]}),(0,Z.jsxs)(n.Z.Group,{className:"mb-3",controlId:"validationCustom03",children:[(0,Z.jsx)(n.Z.Label,{children:"City"}),(0,Z.jsx)(n.Z.Control,{type:"text",placeholder:"City",required:!0}),(0,Z.jsx)(n.Z.Control.Feedback,{type:"invalid",children:"Please provide a valid city."})]}),(0,Z.jsxs)(n.Z.Group,{className:"mb-3",controlId:"validationCustom04",children:[(0,Z.jsx)(n.Z.Label,{children:"State"}),(0,Z.jsx)(n.Z.Control,{type:"text",placeholder:"State",required:!0}),(0,Z.jsx)(n.Z.Control.Feedback,{type:"invalid",children:"Please provide a valid state."})]}),(0,Z.jsxs)(n.Z.Group,{className:"mb-3",controlId:"validationCustom05",children:[(0,Z.jsx)(n.Z.Label,{children:"Zip"}),(0,Z.jsx)(n.Z.Control,{type:"text",placeholder:"Zip",required:!0}),(0,Z.jsx)(n.Z.Control.Feedback,{type:"invalid",children:"Please provide a valid zip."})]}),(0,Z.jsx)(n.Z.Group,{className:"mb-3",children:(0,Z.jsx)(n.Z.Check,{id:"validation-check",required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting."})}),(0,Z.jsx)(c.Z,{type:"submit",children:"Submit form"})]})]})})})},j=function(){var e=(0,l.useState)(!1),r=(0,s.Z)(e,2),a=r[0],t=r[1];return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(o.Z,{children:(0,Z.jsxs)(o.Z.Body,{children:[(0,Z.jsx)("h4",{className:"header-title",children:"Bootstrap Validation (Tooltips)"}),(0,Z.jsxs)("p",{className:"sub-header",children:["If your form layout allows it, you can swap the"," ",(0,Z.jsx)("code",{children:".valid | invalid-feedback"})," classes for"," ",(0,Z.jsx)("code",{children:".valid | invalid-tooltip"})," classes to display validation feedback in a styled tooltip."]}),(0,Z.jsxs)(n.Z,{noValidate:!0,validated:a,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),t(!0)},children:[(0,Z.jsxs)(n.Z.Group,{className:"position-relative mb-3",controlId:"validationTooltip01",children:[(0,Z.jsx)(n.Z.Label,{children:"First name"}),(0,Z.jsx)(n.Z.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),(0,Z.jsx)(n.Z.Control.Feedback,{tooltip:!0,children:"Looks good!"})]}),(0,Z.jsxs)(n.Z.Group,{className:"position-relative mb-3",controlId:"validationTooltip02",children:[(0,Z.jsx)(n.Z.Label,{children:"Last name"}),(0,Z.jsx)(n.Z.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),(0,Z.jsx)(n.Z.Control.Feedback,{tooltip:!0,children:"Looks good!"})]}),(0,Z.jsxs)(n.Z.Group,{className:"position-relative mb-3",controlId:"validationCustonTooltipme",children:[(0,Z.jsx)(n.Z.Label,{children:"Username"}),(0,Z.jsxs)(i.Z,{hasValidation:!0,children:[(0,Z.jsx)(i.Z.Text,{id:"inputGroupPrepend",children:"@"}),(0,Z.jsx)(n.Z.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",required:!0}),(0,Z.jsx)(n.Z.Control.Feedback,{type:"invalid",tooltip:!0,children:"Please choose a username."})]})]}),(0,Z.jsxs)(n.Z.Group,{className:"position-relative mb-3",controlId:"validationTooltip03",children:[(0,Z.jsx)(n.Z.Label,{children:"City"}),(0,Z.jsx)(n.Z.Control,{type:"text",placeholder:"City",required:!0}),(0,Z.jsx)(n.Z.Control.Feedback,{type:"invalid",tooltip:!0,children:"Please provide a valid city."})]}),(0,Z.jsxs)(n.Z.Group,{className:"position-relative mb-3",controlId:"validationTooltip04",children:[(0,Z.jsx)(n.Z.Label,{children:"State"}),(0,Z.jsx)(n.Z.Control,{type:"text",placeholder:"State",required:!0}),(0,Z.jsx)(n.Z.Control.Feedback,{type:"invalid",tooltip:!0,children:"Please provide a valid state."})]}),(0,Z.jsxs)(n.Z.Group,{className:"position-relative mb-3",controlId:"validationTooltip05",children:[(0,Z.jsx)(n.Z.Label,{children:"Zip"}),(0,Z.jsx)(n.Z.Control,{type:"text",placeholder:"Zip",required:!0}),(0,Z.jsx)(n.Z.Control.Feedback,{type:"invalid",tooltip:!0,children:"Please provide a valid zip."})]}),(0,Z.jsx)(c.Z,{type:"submit",children:"Submit form"})]})]})})})},f=function(){var e=(0,u.X)(p.Ry().shape({username:p.Z_().required("Please enter Username"),email:p.Z_().required("Please enter Email address"),password:p.Z_().required("Please enter Password"),confirmpassword:p.Z_().oneOf([p.iH("password"),null],"Passwords don't match").required("This value is required."),checkbox:p.Xg().oneOf([!0])}));return(0,Z.jsx)(o.Z,{children:(0,Z.jsxs)(o.Z.Body,{children:[(0,Z.jsx)("h4",{className:"header-title mt-0 mb-1",children:"Basic Form"}),(0,Z.jsx)("p",{className:"sub-header",children:"React validation with react-hook-form library."}),(0,Z.jsxs)(x.J,{onSubmit:function(){},resolver:e,defaultValues:{username:"test"},children:[(0,Z.jsx)(x.y,{label:"Username",type:"text",name:"username",placeholder:"Enter your name",containerClass:"mb-3"}),(0,Z.jsx)(x.y,{label:"Email address",type:"email",name:"email",placeholder:"Enter email",containerClass:"mb-3"}),(0,Z.jsx)(x.y,{label:"Password",type:"password",name:"password",placeholder:"Password",containerClass:"mb-3"}),(0,Z.jsx)(x.y,{label:"Confirm Password",type:"password",name:"confirmpassword",placeholder:"Password",containerClass:"mb-3"}),(0,Z.jsx)(x.y,{label:"Remember me",type:"checkbox",name:"checkbox",containerClass:"mb-3"}),(0,Z.jsxs)("div",{className:"text-md-end mb-0",children:[(0,Z.jsx)(c.Z,{variant:"primary",className:"me-1",type:"submit",children:"Submit"}),(0,Z.jsx)(c.Z,{variant:"secondary",type:"reset",children:"Cancel"})]})]})]})})},v=function(){var e=(0,u.X)(p.Ry().shape({email2:p.Z_().required("Please enter Email address"),password2:p.Z_().required("Please enter Password"),confirmPassword2:p.Z_().oneOf([p.iH("password"),null],"Passwords don't match").required("This value is required."),webSite:p.Z_().required("Please enter URL"),horizontalCheck:p.Xg().oneOf([!0])})),r=(0,t.cI)({defaultValues:{email2:"shreyu@coderthemes.com"},resolver:e}),a=r.handleSubmit,s=r.register,l=r.control,i=r.formState.errors;return(0,Z.jsx)(o.Z,{children:(0,Z.jsxs)(o.Z.Body,{children:[(0,Z.jsx)("h4",{className:"header-title mt-0 mb-1",children:"Horizontal Form"}),(0,Z.jsx)("p",{className:"sub-header",children:"React validation with react-hook-form library."}),(0,Z.jsxs)("form",{name:"chat-form",id:"chat-form",onSubmit:a((function(){})),children:[(0,Z.jsxs)(n.Z.Group,{as:d.Z,className:"mb-3",children:[(0,Z.jsxs)(n.Z.Label,{column:!0,md:4,children:["Email",(0,Z.jsx)("span",{className:"text-danger",children:"*"})]}),(0,Z.jsx)(m.Z,{md:7,children:(0,Z.jsx)(x.y,{type:"email",name:"email2",placeholder:"Email",register:s,errors:i,control:l},"email2")})]}),(0,Z.jsxs)(n.Z.Group,{as:d.Z,className:"mb-3",children:[(0,Z.jsxs)(n.Z.Label,{column:!0,md:4,children:["Password",(0,Z.jsx)("span",{className:"text-danger",children:"*"})]}),(0,Z.jsx)(m.Z,{md:7,children:(0,Z.jsx)(x.y,{type:"password",name:"password2",placeholder:"Password",register:s,errors:i,control:l},"password2")})]}),(0,Z.jsxs)(n.Z.Group,{as:d.Z,className:"mb-3",children:[(0,Z.jsxs)(n.Z.Label,{column:!0,md:4,children:["Confirm Password",(0,Z.jsx)("span",{className:"text-danger",children:"*"})]}),(0,Z.jsx)(m.Z,{md:7,children:(0,Z.jsx)(x.y,{type:"password",name:"confirmPassword2",placeholder:"Password",register:s,errors:i,control:l},"confirmPassword2")})]}),(0,Z.jsxs)(n.Z.Group,{as:d.Z,className:"mb-3",children:[(0,Z.jsxs)(n.Z.Label,{column:!0,md:4,children:["Web Site",(0,Z.jsx)("span",{className:"text-danger",children:"*"})]}),(0,Z.jsx)(m.Z,{md:7,children:(0,Z.jsx)(x.y,{type:"url",name:"webSite",placeholder:"URL",register:s,errors:i,control:l},"webSite")})]}),(0,Z.jsx)(n.Z.Group,{as:d.Z,className:"mb-3",controlId:"horizontalCheck",children:(0,Z.jsx)(m.Z,{md:{span:8,offset:4},children:(0,Z.jsx)(x.y,{label:"Remember me",type:"checkbox",name:"horizontalCheck",register:s,errors:i,control:l},"horizontalCheck")})}),(0,Z.jsx)(n.Z.Group,{as:d.Z,className:"mb-3",children:(0,Z.jsxs)(m.Z,{sm:{span:8,offset:4},children:[(0,Z.jsx)(c.Z,{variant:"primary",className:"me-1",type:"submit",children:"Submit"}),(0,Z.jsx)(c.Z,{variant:"secondary",type:"reset",children:"Cancel"})]})})]})]})})};r.default=function(){return(0,Z.jsxs)(l.Fragment,{children:[(0,Z.jsx)(h.Z,{breadCrumbItems:[{label:"Forms",path:"/forms/validation"},{label:"Validation",path:"/forms/validation",active:!0}],title:"Validation"}),(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(m.Z,{lg:6,children:(0,Z.jsx)(b,{})}),(0,Z.jsx)(m.Z,{lg:6,children:(0,Z.jsx)(j,{})})]}),(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(m.Z,{lg:6,children:(0,Z.jsx)(f,{})}),(0,Z.jsx)(m.Z,{lg:6,children:(0,Z.jsx)(v,{})})]})]})}},80888:function(e,r,a){"use strict";var s=a(79047);function l(){}function t(){}t.resetWarningCache=l,e.exports=function(){function e(e,r,a,l,t,o){if(o!==s){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function r(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:t,resetWarningCache:l};return a.PropTypes=a,a}},52007:function(e,r,a){e.exports=a(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},43360:function(e,r,a){"use strict";var s=a(1413),l=a(29439),t=a(45987),o=a(81694),n=a.n(o),i=a(72791),c=a(15341),d=a(10162),m=a(80184),p=["as","bsPrefix","variant","size","active","className"],u=i.forwardRef((function(e,r){var a=e.as,o=e.bsPrefix,i=e.variant,u=e.size,h=e.active,x=e.className,Z=(0,t.Z)(e,p),b=(0,d.vE)(o,"btn"),j=(0,c.FT)((0,s.Z)({tagName:a},Z)),f=(0,l.Z)(j,2),v=f[0],y=f[1].tagName;return(0,m.jsx)(y,(0,s.Z)((0,s.Z)((0,s.Z)({},Z),v),{},{ref:r,className:n()(x,b,h&&"active",i&&"".concat(b,"-").concat(i),u&&"".concat(b,"-").concat(u),Z.href&&Z.disabled&&"disabled")}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},r.Z=u},9140:function(e,r,a){"use strict";a.d(r,{Z:function(){return L}});var s=a(1413),l=a(45987),t=a(81694),o=a.n(t),n=a(72791),i=a(10162),c=a(66543),d=a(27472),m=a(80184),p=["bsPrefix","className","variant","as"],u=n.forwardRef((function(e,r){var a=e.bsPrefix,t=e.className,n=e.variant,c=e.as,d=void 0===c?"img":c,u=(0,l.Z)(e,p),h=(0,i.vE)(a,"card-img");return(0,m.jsx)(d,(0,s.Z)({ref:r,className:o()(n?"".concat(h,"-").concat(n):h,t)},u))}));u.displayName="CardImg";var h=u,x=a(96040),Z=["bsPrefix","className","as"],b=n.forwardRef((function(e,r){var a=e.bsPrefix,t=e.className,c=e.as,d=void 0===c?"div":c,p=(0,l.Z)(e,Z),u=(0,i.vE)(a,"card-header"),h=(0,n.useMemo)((function(){return{cardHeaderBsPrefix:u}}),[u]);return(0,m.jsx)(x.Z.Provider,{value:h,children:(0,m.jsx)(d,(0,s.Z)((0,s.Z)({ref:r},p),{},{className:o()(t,u)}))})}));b.displayName="CardHeader";var j=b,f=["bsPrefix","className","bg","text","border","body","children","as"],v=(0,d.Z)("h5"),y=(0,d.Z)("h6"),C=(0,c.Z)("card-body"),N=(0,c.Z)("card-title",{Component:v}),g=(0,c.Z)("card-subtitle",{Component:y}),k=(0,c.Z)("card-link",{Component:"a"}),w=(0,c.Z)("card-text",{Component:"p"}),P=(0,c.Z)("card-footer"),I=(0,c.Z)("card-img-overlay"),F=n.forwardRef((function(e,r){var a=e.bsPrefix,t=e.className,n=e.bg,c=e.text,d=e.border,p=e.body,u=e.children,h=e.as,x=void 0===h?"div":h,Z=(0,l.Z)(e,f),b=(0,i.vE)(a,"card");return(0,m.jsx)(x,(0,s.Z)((0,s.Z)({ref:r},Z),{},{className:o()(t,b,n&&"bg-".concat(n),c&&"text-".concat(c),d&&"border-".concat(d)),children:p?(0,m.jsx)(C,{children:u}):u}))}));F.displayName="Card",F.defaultProps={body:!1};var L=Object.assign(F,{Img:h,Title:N,Subtitle:g,Body:C,Link:k,Text:w,Header:j,Footer:P,ImgOverlay:I})},96040:function(e,r,a){"use strict";var s=a(72791).createContext(null);s.displayName="CardHeaderContext",r.Z=s},91991:function(e,r,a){"use strict";var s=a(72791).createContext(null);s.displayName="InputGroupContext",r.Z=s},66543:function(e,r,a){"use strict";a.d(r,{Z:function(){return u}});var s=a(1413),l=a(45987),t=a(81694),o=a.n(t),n=/-(.)/g;var i=a(72791),c=a(10162),d=a(80184),m=["className","bsPrefix","as"],p=function(e){return e[0].toUpperCase()+(r=e,r.replace(n,(function(e,r){return r.toUpperCase()}))).slice(1);var r};function u(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.displayName,t=void 0===a?p(e):a,n=r.Component,u=r.defaultProps,h=i.forwardRef((function(r,a){var t=r.className,i=r.bsPrefix,p=r.as,u=void 0===p?n||"div":p,h=(0,l.Z)(r,m),x=(0,c.vE)(i,e);return(0,d.jsx)(u,(0,s.Z)({ref:a,className:o()(t,x)},h))}));return h.defaultProps=u,h.displayName=t,h}},27472:function(e,r,a){"use strict";var s=a(1413),l=a(72791),t=a(81694),o=a.n(t),n=a(80184);r.Z=function(e){return l.forwardRef((function(r,a){return(0,n.jsx)("div",(0,s.Z)((0,s.Z)({},r),{},{ref:a,className:o()(r.className,e)}))}))}},42391:function(e){"use strict";var r=function(){};e.exports=r}}]);
//# sourceMappingURL=9690.d30b6636.chunk.js.map