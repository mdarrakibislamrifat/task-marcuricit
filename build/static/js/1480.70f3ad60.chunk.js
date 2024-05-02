"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[1480],{75184:function(e,n,t){t(72791);var i=t(89743),a=t(2677),r=t(2461),l=t(80184);n.Z=function(e){return(0,l.jsx)(i.Z,{children:(0,l.jsx)(a.Z,{children:(0,l.jsxs)("div",{className:"page-title-box",children:[(0,l.jsx)("h4",{className:"page-title",children:e.title}),(0,l.jsx)("div",{className:"page-title-right",children:(0,l.jsxs)(r.Z,{listProps:{className:"m-0"},children:[(0,l.jsx)(r.Z.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,n){return e.active?(0,l.jsx)(r.Z.Item,{active:!0,children:e.label},n):(0,l.jsx)(r.Z.Item,{href:e.path,children:e.label},n)}))]})})]})})})}},9189:function(e,n,t){t.d(n,{Z:function(){return x}});var i=t(93433),a=t(1413),r=t(45987),l=t(29439),s=t(72791),o=t(71358),d=t(81694),c=t.n(d),p=t(11087),u=t(80184),g=function(e){var n=e.tableProps,t=e.sizePerPageList,i=(0,s.useState)(n.pageCount),a=(0,l.Z)(i,2),r=a[0],o=a[1],d=(0,s.useState)(n.state.pageIndex),g=(0,l.Z)(d,2),m=g[0],v=g[1];(0,s.useEffect)((function(){o(n.pageCount),v(n.state.pageIndex)}),[n.pageCount,n.state.pageIndex]);var h=(0,s.useCallback)((function(e,n){return e.filter((function(e){return e<=r}))}),[r]),x=(0,s.useCallback)((function(e,n){return n<7?h([1,2,3,4,5,6],n):e%5>=0&&e>4&&e+2<n?[1,e-1,e,e+1,n]:e%5>=0&&e>4&&e+2>=n?[1,n-3,n-2,n-1,n]:[1,2,3,4,5,n]}),[h]),b=function(e){if(e!==m+1){var t=x(e,r);A(h(t,r)),n.gotoPage(e-1)}};(0,s.useEffect)((function(){var e=x(null,r);A(e)}),[r,x]);var D=(0,s.useState)(x(null,r)),f=(0,l.Z)(D,2),j=f[0],A=f[1],Z=m+1;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[t.length>0&&(0,u.jsxs)("div",{className:"d-inline-block me-3",children:[(0,u.jsx)("label",{className:"me-1",children:"Display :"}),(0,u.jsx)("select",{value:n.state.pageSize,onChange:function(e){n.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(t||[]).map((function(e,n){return(0,u.jsx)("option",{value:e.value,children:e.text},n)}))})]}),(0,u.jsxs)("span",{className:"me-3",children:["Page"," ",(0,u.jsxs)("strong",{children:[m+1," of ",n.pageOptions.length]})," "]}),(0,u.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,u.jsx)("label",{children:"Go to page : "}),(0,u.jsx)("input",{type:"number",value:m+1,min:"1",onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;n.gotoPage(t),v(n.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),(0,u.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto",children:[(0,u.jsx)("li",{className:c()("page-item","paginate_button","previous",{disabled:1===Z}),onClick:function(){1!==Z&&b(Z-1)},children:(0,u.jsx)(p.rU,{to:"#",className:"page-link",children:(0,u.jsx)("i",{className:"uil uil-angle-left"})})},"prevpage"),(j||[]).map((function(e,n,t){return t[n-1]+1<e?(0,u.jsxs)(s.Fragment,{children:[(0,u.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,u.jsx)(p.rU,{to:"#",className:"page-link",children:"..."})}),(0,u.jsx)("li",{className:c()("page-item","d-none","d-xl-inline-block",{active:Z===e}),onClick:function(n){return b(e)},children:(0,u.jsx)(p.rU,{to:"#",className:"page-link",children:e})})]},e):(0,u.jsx)("li",{className:c()("page-item","d-none","d-xl-inline-block",{active:Z===e}),onClick:function(n){return b(e)},children:(0,u.jsx)(p.rU,{to:"#",className:"page-link",children:e})},e)})),(0,u.jsx)("li",{className:c()("page-item","paginate_button","next",{disabled:Z===n.pageCount}),onClick:function(){Z!==n.pageCount&&b(Z+1)},children:(0,u.jsx)(p.rU,{to:"#",className:"page-link",children:(0,u.jsx)("i",{className:"uil uil-angle-right"})})},"nextpage")]})]})})},m=["indeterminate"],v=function(e){var n=e.preGlobalFilteredRows,t=e.globalFilter,i=e.setGlobalFilter,a=e.searchBoxClass,r=n.length,d=(0,s.useState)(t),p=(0,l.Z)(d,2),g=p[0],m=p[1],v=(0,o.useAsyncDebounce)((function(e){i(e||void 0)}),200);return(0,u.jsx)("div",{className:c()(a),children:(0,u.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",(0,u.jsx)("input",{type:"search",value:g||"",onChange:function(e){m(e.target.value),v(e.target.value)},placeholder:"".concat(r," records..."),className:"form-control w-auto ms-1"})]})})},h=(0,s.forwardRef)((function(e,n){var t=e.indeterminate,i=(0,r.Z)(e,m),l=(0,s.useRef)(),o=n||l;return(0,s.useEffect)((function(){o.current.indeterminate=t}),[o,t]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"form-check",children:[(0,u.jsx)("input",(0,a.Z)({type:"checkbox",className:"form-check-input",ref:o},i)),(0,u.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),x=function(e){var n=e.isSearchable||!1,t=e.isSortable||!1,r=e.pagination||!1,l=e.isSelectable||!1,s=e.isExpandable||!1,d=e.sizePerPageList||[],p={};n&&(p.useGlobalFilter=o.useGlobalFilter),t&&(p.useSortBy=o.useSortBy),s&&(p.useExpanded=o.useExpanded),r&&(p.usePagination=o.usePagination),l&&(p.useRowSelect=o.useRowSelect);var m=(0,o.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},p.hasOwnProperty("useGlobalFilter")&&p.useGlobalFilter,p.hasOwnProperty("useSortBy")&&p.useSortBy,p.hasOwnProperty("useExpanded")&&p.useExpanded,p.hasOwnProperty("usePagination")&&p.usePagination,p.hasOwnProperty("useRowSelect")&&p.useRowSelect,(function(e){l&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var n=e.getToggleAllPageRowsSelectedProps;return(0,u.jsx)("div",{children:(0,u.jsx)(h,(0,a.Z)({},n()))})},Cell:function(e){var n=e.row;return(0,u.jsx)("div",{children:(0,u.jsx)(h,(0,a.Z)({},n.getToggleRowSelectedProps()))})}}].concat((0,i.Z)(e))})),s&&e.visibleColumns.push((function(e){return[{id:"expander",Header:function(e){var n=e.getToggleAllRowsExpandedProps,t=e.isAllRowsExpanded;return(0,u.jsx)("span",(0,a.Z)((0,a.Z)({},n()),{},{children:t?"-":"+"}))},Cell:function(e){var n=e.row;return n.canExpand?(0,u.jsx)("span",(0,a.Z)((0,a.Z)({},n.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*n.depth,"rem")}})),{},{children:n.isExpanded?"-":"+"})):null}}].concat((0,i.Z)(e))}))})),x=r?m.page:m.rows;return(0,u.jsxs)(u.Fragment,{children:[n&&(0,u.jsx)(v,{preGlobalFilteredRows:m.preGlobalFilteredRows,globalFilter:m.state.globalFilter,setGlobalFilter:m.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,u.jsx)("div",{className:"table-responsive",children:(0,u.jsxs)("table",(0,a.Z)((0,a.Z)({},m.getTableProps()),{},{className:c()("table table-centered react-table",e.tableClass),children:[(0,u.jsx)("thead",{className:e.theadClass,children:(m.headerGroups||[]).map((function(e){return(0,u.jsx)("tr",(0,a.Z)((0,a.Z)({},e.getHeaderGroupProps()),{},{children:(e.headers||[]).map((function(e){return(0,u.jsx)("th",(0,a.Z)((0,a.Z)({},e.getHeaderProps(e.sort&&e.getSortByToggleProps())),{},{className:c()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")}))}))}))}))}),(0,u.jsx)("tbody",(0,a.Z)((0,a.Z)({},m.getTableBodyProps()),{},{children:(x||[]).map((function(e,n){return m.prepareRow(e),(0,u.jsx)("tr",(0,a.Z)((0,a.Z)({},e.getRowProps()),{},{children:(e.cells||[]).map((function(e){return(0,u.jsx)("td",(0,a.Z)((0,a.Z)({},e.getCellProps([{className:e.column.className}])),{},{children:e.render("Cell")}))}))}))}))}))]}))}),r&&(0,u.jsx)(g,{tableProps:m,sizePerPageList:d})]})}},68501:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(29439),a=t(72791),r=t(43360),l=t(7238);var s=t.p+"static/media/more-vertical.4cad70953b302c2ee888bebb7b319618.svg",o=t(80184),d=function(e){var n=e.row,t=(0,a.useState)(!1),d=(0,i.Z)(t,2),c=d[0],p=d[1];return(0,o.jsxs)("div",{children:[(0,o.jsx)(r.Z,{className:"bg-white",variant:"info",onClick:function(){p(!c)},"aria-expanded":c?"true":"false",children:(0,o.jsx)("img",{src:s,alt:""})}),c&&(0,o.jsx)(l.Z,{show:c,onClick:function(){return p(!1)},children:(0,o.jsxs)(l.Z.Menu,{children:[(0,o.jsx)(l.Z.Item,{onClick:function(){console.log("Edit clicked for row:",n)},children:"Edit"}),(0,o.jsx)(l.Z.Item,{onClick:function(){console.log("Delete clicked for row:",n)},children:"Delete"})]})})]})}},14781:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var i=t(29439),a=t(72791),r=t(89743),l=t(2677),s=t(9140),o=t(43360),d=t(3350),c=t(84158),p=t(75184),u=t(9189),g=[{id:1,department:"Web Designer",designation:"Web Developer"},{id:2,department:"Web Developer",designation:"Web Development"},{id:3,department:"Android Developer",designation:"Application Development"},{id:4,department:"IOS Developer",designation:"Application Development"},{id:5,department:"UI Designer",designation:"Application Development"},{id:6,department:"UX Designer",designation:"Application Developer"},{id:7,department:"IT Technician",designation:"Application Developer"},{id:8,department:"Product Manager",designation:"Application Developer"},{id:9,department:"SEO Analyst",designation:"Application Developer"},{id:10,department:"Front End Designer",designation:"Application Developer"},{id:11,department:"Web Designer",designation:"Web Developer"},{id:12,department:"Web Developer",designation:"Web Development"},{id:13,department:"Android Developer",designation:"Application Development"},{id:14,department:"IOS Developer",designation:"Application Development"},{id:15,department:"UI Designer",designation:"Application Development"},{id:16,department:"UX Designer",designation:"Application Developer"},{id:17,department:"IT Technician",designation:"Application Developer"},{id:18,department:"Product Manager",designation:"Application Developer"},{id:19,department:"SEO Analyst",designation:"Application Developer"},{id:20,department:"Front End Designer",designation:"Application Developer"},{id:11,department:"Web Designer",designation:"Web Developer"},{id:12,department:"Web Developer",designation:"Web Development"},{id:13,department:"Android Developer",designation:"Application Development"},{id:14,department:"IOS Developer",designation:"Application Development"},{id:15,department:"UI Designer",designation:"Application Development"},{id:16,department:"UX Designer",designation:"Application Developer"},{id:17,department:"IT Technician",designation:"Application Developer"},{id:18,department:"Product Manager",designation:"Application Developer"},{id:19,department:"SEO Analyst",designation:"Application Developer"},{id:20,department:"Front End Designer",designation:"Application Developer"},{id:21,department:"Web Designer",designation:"Web Developer"},{id:22,department:"Web Developer",designation:"Web Development"},{id:23,department:"Android Developer",designation:"Application Development"},{id:24,department:"IOS Developer",designation:"Application Development"},{id:25,department:"UI Designer",designation:"Application Development"},{id:26,department:"UX Designer",designation:"Application Developer"},{id:27,department:"IT Technician",designation:"Application Developer"},{id:28,department:"Product Manager",designation:"Application Developer"},{id:29,department:"SEO Analyst",designation:"Application Developer"},{id:30,department:"Front End Designer",designation:"Application Developer"},{id:31,department:"Web Designer",designation:"Web Developer"},{id:32,department:"Web Developer",designation:"Web Development"},{id:33,department:"Android Developer",designation:"Application Development"},{id:34,department:"IOS Developer",designation:"Application Development"},{id:35,department:"UI Designer",designation:"Application Development"},{id:36,department:"UX Designer",designation:"Application Developer"},{id:37,department:"IT Technician",designation:"Application Developer"},{id:38,department:"Product Manager",designation:"Application Developer"},{id:39,department:"SEO Analyst",designation:"Application Developer"},{id:40,department:"Front End Designer",designation:"Application Developer"},{id:41,department:"Web Designer",designation:"Web Developer"},{id:42,department:"Web Developer",designation:"Web Development"},{id:43,department:"Android Developer",designation:"Application Development"},{id:44,department:"IOS Developer",designation:"Application Development"},{id:45,department:"UI Designer",designation:"Application Development"},{id:46,department:"UX Designer",designation:"Application Developer"},{id:47,department:"IT Technician",designation:"Application Developer"},{id:48,department:"Product Manager",designation:"Application Developer"},{id:49,department:"SEO Analyst",designation:"Application Developer"},{id:50,department:"Front End Designer",designation:"Application Developer"}],m=t(68501),v=t(80184),h=[{Header:"#",accessor:"id",sort:!0},{Header:"Department Name",accessor:"department",sort:!0},{Header:"Designation",accessor:"designation",sort:!0},{Header:"Action",accessor:"action",Cell:function(e){var n=e.row;return(0,v.jsx)(m.Z,{row:n})}}],x=[{text:"5",value:5},{text:"10",value:10},{text:"25",value:25},{text:"All",value:g.length}],b=function(){var e=(0,a.useState)(!1),n=(0,i.Z)(e,2),t=n[0],m=n[1],b=function(){return m(!1)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.Z,{breadCrumbItems:[{label:"Tables",path:"/features/tables/advanced"},{label:"Advanced Tables",path:"/features/tables/advanced",active:!0}],title:"Designation Table"}),(0,v.jsx)(r.Z,{children:(0,v.jsx)(l.Z,{children:(0,v.jsx)(s.Z,{children:(0,v.jsxs)(s.Z.Body,{children:[(0,v.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("h4",{className:"header-title",children:"Search"}),(0,v.jsx)("p",{className:"text-muted fs-14 mb-0",children:"A Table allowing search"})]}),(0,v.jsx)(o.Z,{variant:"primary",onClick:function(){return m(!0)},children:"Add Designation"}),(0,v.jsxs)(c.Z,{show:t,onHide:b,children:[(0,v.jsx)(c.Z.Header,{closeButton:!0,children:(0,v.jsx)(c.Z.Title,{children:"Add Designation"})}),(0,v.jsxs)(c.Z.Body,{children:[(0,v.jsx)(d.Z,{children:(0,v.jsxs)(d.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,v.jsx)(d.Z.Label,{children:"Designation Name*"}),(0,v.jsx)(d.Z.Control,{type:"text",autoFocus:!0})]})}),(0,v.jsx)(d.Z,{children:(0,v.jsxs)(d.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlSelect1",children:[(0,v.jsx)(d.Z.Label,{children:"Select Department"}),(0,v.jsxs)(d.Z.Select,{defaultValue:"",children:[(0,v.jsx)("option",{value:"",disabled:!0,children:"Select Department"}),(0,v.jsx)("option",{value:"1",children:"Web Development"}),(0,v.jsx)("option",{value:"2",children:"IT Management"}),(0,v.jsx)("option",{value:"3",children:"Marketing"})]})]})})]}),(0,v.jsx)(c.Z.Footer,{className:"justify-content-center",children:(0,v.jsx)(o.Z,{variant:"primary",onClick:b,children:"Submit"})})]})]}),(0,v.jsx)(u.Z,{columns:h,data:g,pageSize:5,sizePerPageList:x,isSortable:!0,pagination:!0,isSearchable:!0})]})})})})]})}},11752:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(61120);function a(){return a="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var a=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=(0,i.Z)(e)););return e}(e,n);if(a){var r=Object.getOwnPropertyDescriptor(a,n);return r.get?r.get.call(arguments.length<3?e:t):r.value}},a.apply(this,arguments)}}}]);
//# sourceMappingURL=1480.70f3ad60.chunk.js.map