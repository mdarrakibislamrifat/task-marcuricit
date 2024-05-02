"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[831],{75184:function(e,a,n){n(72791);var o=n(89743),i=n(2677),s=n(2461),r=n(80184);a.Z=function(e){return(0,r.jsx)(o.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsxs)("div",{className:"page-title-box",children:[(0,r.jsx)("h4",{className:"page-title",children:e.title}),(0,r.jsx)("div",{className:"page-title-right",children:(0,r.jsxs)(s.Z,{listProps:{className:"m-0"},children:[(0,r.jsx)(s.Z.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,a){return e.active?(0,r.jsx)(s.Z.Item,{active:!0,children:e.label},a):(0,r.jsx)(s.Z.Item,{href:e.path,children:e.label},a)}))]})})]})})})}},9189:function(e,a,n){n.d(a,{Z:function(){return x}});var o=n(93433),i=n(1413),s=n(45987),r=n(29439),t=n(72791),c=n(71358),m=n(81694),l=n.n(m),d=n(11087),p=n(80184),g=function(e){var a=e.tableProps,n=e.sizePerPageList,o=(0,t.useState)(a.pageCount),i=(0,r.Z)(o,2),s=i[0],c=i[1],m=(0,t.useState)(a.state.pageIndex),g=(0,r.Z)(m,2),u=g[0],h=g[1];(0,t.useEffect)((function(){c(a.pageCount),h(a.state.pageIndex)}),[a.pageCount,a.state.pageIndex]);var y=(0,t.useCallback)((function(e,a){return e.filter((function(e){return e<=s}))}),[s]),x=(0,t.useCallback)((function(e,a){return a<7?y([1,2,3,4,5,6],a):e%5>=0&&e>4&&e+2<a?[1,e-1,e,e+1,a]:e%5>=0&&e>4&&e+2>=a?[1,a-3,a-2,a-1,a]:[1,2,3,4,5,a]}),[y]),b=function(e){if(e!==u+1){var n=x(e,s);Z(y(n,s)),a.gotoPage(e-1)}};(0,t.useEffect)((function(){var e=x(null,s);Z(e)}),[s,x]);var f=(0,t.useState)(x(null,s)),j=(0,r.Z)(f,2),v=j[0],Z=j[1],w=u+1;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[n.length>0&&(0,p.jsxs)("div",{className:"d-inline-block me-3",children:[(0,p.jsx)("label",{className:"me-1",children:"Display :"}),(0,p.jsx)("select",{value:a.state.pageSize,onChange:function(e){a.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(n||[]).map((function(e,a){return(0,p.jsx)("option",{value:e.value,children:e.text},a)}))})]}),(0,p.jsxs)("span",{className:"me-3",children:["Page"," ",(0,p.jsxs)("strong",{children:[u+1," of ",a.pageOptions.length]})," "]}),(0,p.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,p.jsx)("label",{children:"Go to page : "}),(0,p.jsx)("input",{type:"number",value:u+1,min:"1",onChange:function(e){var n=e.target.value?Number(e.target.value)-1:0;a.gotoPage(n),h(a.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),(0,p.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto",children:[(0,p.jsx)("li",{className:l()("page-item","paginate_button","previous",{disabled:1===w}),onClick:function(){1!==w&&b(w-1)},children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:(0,p.jsx)("i",{className:"uil uil-angle-left"})})},"prevpage"),(v||[]).map((function(e,a,n){return n[a-1]+1<e?(0,p.jsxs)(t.Fragment,{children:[(0,p.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:"..."})}),(0,p.jsx)("li",{className:l()("page-item","d-none","d-xl-inline-block",{active:w===e}),onClick:function(a){return b(e)},children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:e})})]},e):(0,p.jsx)("li",{className:l()("page-item","d-none","d-xl-inline-block",{active:w===e}),onClick:function(a){return b(e)},children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:e})},e)})),(0,p.jsx)("li",{className:l()("page-item","paginate_button","next",{disabled:w===a.pageCount}),onClick:function(){w!==a.pageCount&&b(w+1)},children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:(0,p.jsx)("i",{className:"uil uil-angle-right"})})},"nextpage")]})]})})},u=["indeterminate"],h=function(e){var a=e.preGlobalFilteredRows,n=e.globalFilter,o=e.setGlobalFilter,i=e.searchBoxClass,s=a.length,m=(0,t.useState)(n),d=(0,r.Z)(m,2),g=d[0],u=d[1],h=(0,c.useAsyncDebounce)((function(e){o(e||void 0)}),200);return(0,p.jsx)("div",{className:l()(i),children:(0,p.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",(0,p.jsx)("input",{type:"search",value:g||"",onChange:function(e){u(e.target.value),h(e.target.value)},placeholder:"".concat(s," records..."),className:"form-control w-auto ms-1"})]})})},y=(0,t.forwardRef)((function(e,a){var n=e.indeterminate,o=(0,s.Z)(e,u),r=(0,t.useRef)(),c=a||r;return(0,t.useEffect)((function(){c.current.indeterminate=n}),[c,n]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"form-check",children:[(0,p.jsx)("input",(0,i.Z)({type:"checkbox",className:"form-check-input",ref:c},o)),(0,p.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),x=function(e){var a=e.isSearchable||!1,n=e.isSortable||!1,s=e.pagination||!1,r=e.isSelectable||!1,t=e.isExpandable||!1,m=e.sizePerPageList||[],d={};a&&(d.useGlobalFilter=c.useGlobalFilter),n&&(d.useSortBy=c.useSortBy),t&&(d.useExpanded=c.useExpanded),s&&(d.usePagination=c.usePagination),r&&(d.useRowSelect=c.useRowSelect);var u=(0,c.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},d.hasOwnProperty("useGlobalFilter")&&d.useGlobalFilter,d.hasOwnProperty("useSortBy")&&d.useSortBy,d.hasOwnProperty("useExpanded")&&d.useExpanded,d.hasOwnProperty("usePagination")&&d.usePagination,d.hasOwnProperty("useRowSelect")&&d.useRowSelect,(function(e){r&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var a=e.getToggleAllPageRowsSelectedProps;return(0,p.jsx)("div",{children:(0,p.jsx)(y,(0,i.Z)({},a()))})},Cell:function(e){var a=e.row;return(0,p.jsx)("div",{children:(0,p.jsx)(y,(0,i.Z)({},a.getToggleRowSelectedProps()))})}}].concat((0,o.Z)(e))})),t&&e.visibleColumns.push((function(e){return[{id:"expander",Header:function(e){var a=e.getToggleAllRowsExpandedProps,n=e.isAllRowsExpanded;return(0,p.jsx)("span",(0,i.Z)((0,i.Z)({},a()),{},{children:n?"-":"+"}))},Cell:function(e){var a=e.row;return a.canExpand?(0,p.jsx)("span",(0,i.Z)((0,i.Z)({},a.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*a.depth,"rem")}})),{},{children:a.isExpanded?"-":"+"})):null}}].concat((0,o.Z)(e))}))})),x=s?u.page:u.rows;return(0,p.jsxs)(p.Fragment,{children:[a&&(0,p.jsx)(h,{preGlobalFilteredRows:u.preGlobalFilteredRows,globalFilter:u.state.globalFilter,setGlobalFilter:u.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,p.jsx)("div",{className:"table-responsive",children:(0,p.jsxs)("table",(0,i.Z)((0,i.Z)({},u.getTableProps()),{},{className:l()("table table-centered react-table",e.tableClass),children:[(0,p.jsx)("thead",{className:e.theadClass,children:(u.headerGroups||[]).map((function(e){return(0,p.jsx)("tr",(0,i.Z)((0,i.Z)({},e.getHeaderGroupProps()),{},{children:(e.headers||[]).map((function(e){return(0,p.jsx)("th",(0,i.Z)((0,i.Z)({},e.getHeaderProps(e.sort&&e.getSortByToggleProps())),{},{className:l()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")}))}))}))}))}),(0,p.jsx)("tbody",(0,i.Z)((0,i.Z)({},u.getTableBodyProps()),{},{children:(x||[]).map((function(e,a){return u.prepareRow(e),(0,p.jsx)("tr",(0,i.Z)((0,i.Z)({},e.getRowProps()),{},{children:(e.cells||[]).map((function(e){return(0,p.jsx)("td",(0,i.Z)((0,i.Z)({},e.getCellProps([{className:e.column.className}])),{},{children:e.render("Cell")}))}))}))}))}))]}))}),s&&(0,p.jsx)(g,{tableProps:u,sizePerPageList:m})]})}},10831:function(e,a,n){n.r(a),n.d(a,{default:function(){return g}});n(72791);var o=n(89743),i=n(2677),s=n(9140),r=n(75184),t=n(9189),c=[{id:1,age:32,name:"Burt",company:"Kaggle",phone:"+1 (823) 532-2427"},{id:2,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"},{id:3,age:31,name:"Alvarado",company:"Translink",phone:"+1 (975) 468-3875"},{id:4,age:24,name:"Lilia",company:"Digitalus",phone:"+1 (891) 537-3461"},{id:5,age:25,name:"Amanda",company:"Bunga",phone:"+1 (916) 522-3747"},{id:6,age:20,name:"Alexandra",company:"Conjurica",phone:"+1 (876) 492-3181"},{id:7,age:27,name:"Diana",company:"Extragen",phone:"+1 (977) 417-3038"},{id:8,age:26,name:"Goodman",company:"Aquamate",phone:"+1 (930) 545-2289"},{id:9,age:26,name:"Edith",company:"Pyrami",phone:"+1 (854) 506-3468"},{id:10,age:29,name:"Juana",company:"Singavera",phone:"+1 (872) 560-2324"},{id:11,age:21,name:"Fitzgerald",company:"Dancerity",phone:"+1 (813) 573-2507"},{id:12,age:38,name:"Madden",company:"Corpulse",phone:"+1 (935) 534-3876"},{id:13,age:40,name:"Jewell",company:"Frenex",phone:"+1 (886) 516-3262"},{id:14,age:32,name:"Kerr",company:"Artiq",phone:"+1 (807) 561-3077"},{id:15,age:20,name:"Washington",company:"Organica",phone:"+1 (948) 458-3517"},{id:16,age:20,name:"Audrey",company:"Softmicro",phone:"+1 (900) 592-3841"},{id:17,age:39,name:"Allison",company:"Playce",phone:"+1 (998) 478-3810"},{id:18,age:25,name:"Holder",company:"Paragonia",phone:"+1 (850) 536-2708"},{id:19,age:26,name:"Atkinson",company:"Scentric",phone:"+1 (850) 467-2761"},{id:20,age:35,name:"Delaney",company:"Telpod",phone:"+1 (934) 468-2218"},{id:21,age:20,name:"Myrna",company:"Zanity",phone:"+1 (953) 565-3836"},{id:22,age:30,name:"Erna",company:"Techade",phone:"+1 (872) 574-3879"},{id:23,age:36,name:"Fannie",company:"Cubix",phone:"+1 (843) 576-2904"},{id:24,age:38,name:"Melody",company:"Talae",phone:"+1 (817) 424-3500"},{id:25,age:27,name:"Letitia",company:"Enjola",phone:"+1 (857) 441-2917"},{id:26,age:33,name:"Nina",company:"Eventex",phone:"+1 (917) 599-2793"},{id:27,age:40,name:"Byrd",company:"Obones",phone:"+1 (846) 422-2064"},{id:28,age:34,name:"Chen",company:"Dadabase",phone:"+1 (956) 474-3409"},{id:29,age:25,name:"Alexandria",company:"Turnabout",phone:"+1 (964) 415-2278"},{id:30,age:37,name:"Page",company:"Metroz",phone:"+1 (897) 541-2460"},{id:31,age:24,name:"Clare",company:"Zilch",phone:"+1 (832) 591-3814"},{id:32,age:38,name:"Lindsey",company:"Roughies",phone:"+1 (942) 579-2920"},{id:33,age:32,name:"Oconnor",company:"Kinetica",phone:"+1 (899) 599-3206"},{id:34,age:35,name:"Maldonado",company:"Zentime",phone:"+1 (955) 419-2815"},{id:35,age:25,name:"Day",company:"Eargo",phone:"+1 (895) 555-2916"},{id:36,age:20,name:"Collier",company:"Phuel",phone:"+1 (998) 468-2079"},{id:37,age:40,name:"Jeannette",company:"Entogrok",phone:"+1 (904) 567-2078"},{id:38,age:33,name:"Wallace",company:"Nurali",phone:"+1 (877) 566-3957"},{id:39,age:39,name:"Mcfadden",company:"Cincyr",phone:"+1 (949) 405-3992"},{id:40,age:21,name:"Chrystal",company:"Futurize",phone:"+1 (988) 458-3032"},{id:41,age:31,name:"Leila",company:"Zensure",phone:"+1 (902) 447-2419"},{id:42,age:24,name:"Madelyn",company:"Egypto",phone:"+1 (881) 538-3081"},{id:43,age:39,name:"Peck",company:"Tellifly",phone:"+1 (803) 452-3922"},{id:44,age:32,name:"Garrett",company:"Aquasure",phone:"+1 (876) 475-2185"},{id:45,age:21,name:"Kramer",company:"Terrago",phone:"+1 (912) 404-2597"},{id:46,age:35,name:"Lane",company:"Anivet",phone:"+1 (911) 495-3587"},{id:47,age:21,name:"Merritt",company:"Inear",phone:"+1 (856) 519-3838"},{id:48,age:25,name:"Margarita",company:"Unq",phone:"+1 (931) 558-3156"},{id:49,age:28,name:"Leigh",company:"Marqet",phone:"+1 (918) 526-2007"},{id:50,age:31,name:"Coleman",company:"Insuresys",phone:"+1 (827) 449-3786"},{id:51,age:31,name:"Alexander",company:"Portico",phone:"+1 (854) 576-2455"},{id:52,age:38,name:"Tanisha",company:"Earthwax",phone:"+1 (994) 494-3496"},{id:53,age:23,name:"Crane",company:"Pushcart",phone:"+1 (924) 497-3347"},{id:54,age:26,name:"Carmella",company:"Acusage",phone:"+1 (898) 575-2585"},{id:55,age:27,name:"Rosalind",company:"Isologica",phone:"+1 (838) 572-2994"},{id:56,age:37,name:"Duran",company:"Gazak",phone:"+1 (991) 446-3820"},{id:57,age:27,name:"Bernard",company:"Zoinage",phone:"+1 (824) 585-2197"},{id:58,age:29,name:"Tate",company:"Endipine",phone:"+1 (896) 448-2084"},{id:59,age:39,name:"Pearlie",company:"Progenex",phone:"+1 (805) 545-2585"},{id:60,age:20,name:"Manning",company:"Handshake",phone:"+1 (917) 405-3406"}],m=[{id:1,age:32,name:"Burt",company:"Kaggle",phone:"+1 (823) 532-2427",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:2,age:23,name:"Long",company:"Magmina",phone:"+1 (813) 583-2089",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:3,age:31,name:"Alvarado",company:"Translink",phone:"+1 (975) 468-3875",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:4,age:24,name:"Lilia",company:"Digitalus",phone:"+1 (891) 537-3461",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:5,age:25,name:"Amanda",company:"Bunga",phone:"+1 (916) 522-3747",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:6,age:20,name:"Alexandra",company:"Conjurica",phone:"+1 (876) 492-3181",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:7,age:27,name:"Diana",company:"Extragen",phone:"+1 (977) 417-3038",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:8,age:26,name:"Goodman",company:"Aquamate",phone:"+1 (930) 545-2289",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:9,age:26,name:"Edith",company:"Pyrami",phone:"+1 (854) 506-3468",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:10,age:29,name:"Juana",company:"Singavera",phone:"+1 (872) 560-2324",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:11,age:21,name:"Fitzgerald",company:"Dancerity",phone:"+1 (813) 573-2507",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:12,age:38,name:"Madden",company:"Corpulse",phone:"+1 (935) 534-3876",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:13,age:40,name:"Jewell",company:"Frenex",phone:"+1 (886) 516-3262",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:14,age:32,name:"Kerr",company:"Artiq",phone:"+1 (807) 561-3077",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:15,age:20,name:"Washington",company:"Organica",phone:"+1 (948) 458-3517",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:16,age:20,name:"Audrey",company:"Softmicro",phone:"+1 (900) 592-3841",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:17,age:39,name:"Allison",company:"Playce",phone:"+1 (998) 478-3810",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:18,age:25,name:"Holder",company:"Paragonia",phone:"+1 (850) 536-2708",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:19,age:26,name:"Atkinson",company:"Scentric",phone:"+1 (850) 467-2761",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:20,age:35,name:"Delaney",company:"Telpod",phone:"+1 (934) 468-2218",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:21,age:20,name:"Myrna",company:"Zanity",phone:"+1 (953) 565-3836",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:22,age:30,name:"Erna",company:"Techade",phone:"+1 (872) 574-3879",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:23,age:36,name:"Fannie",company:"Cubix",phone:"+1 (843) 576-2904",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:24,age:38,name:"Melody",company:"Talae",phone:"+1 (817) 424-3500",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:25,age:27,name:"Letitia",company:"Enjola",phone:"+1 (857) 441-2917",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:26,age:33,name:"Nina",company:"Eventex",phone:"+1 (917) 599-2793",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:27,age:40,name:"Byrd",company:"Obones",phone:"+1 (846) 422-2064",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:28,age:34,name:"Chen",company:"Dadabase",phone:"+1 (956) 474-3409",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:29,age:25,name:"Alexandria",company:"Turnabout",phone:"+1 (964) 415-2278",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:30,age:37,name:"Page",company:"Metroz",phone:"+1 (897) 541-2460",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:31,age:24,name:"Clare",company:"Zilch",phone:"+1 (832) 591-3814",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:32,age:38,name:"Lindsey",company:"Roughies",phone:"+1 (942) 579-2920",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:33,age:32,name:"Oconnor",company:"Kinetica",phone:"+1 (899) 599-3206",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:34,age:35,name:"Maldonado",company:"Zentime",phone:"+1 (955) 419-2815",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:35,age:25,name:"Day",company:"Eargo",phone:"+1 (895) 555-2916",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:36,age:20,name:"Collier",company:"Phuel",phone:"+1 (998) 468-2079",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:37,age:40,name:"Jeannette",company:"Entogrok",phone:"+1 (904) 567-2078",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:38,age:33,name:"Wallace",company:"Nurali",phone:"+1 (877) 566-3957",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:39,age:39,name:"Mcfadden",company:"Cincyr",phone:"+1 (949) 405-3992",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:40,age:21,name:"Chrystal",company:"Futurize",phone:"+1 (988) 458-3032",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]}],l=n(80184),d=[{Header:"ID",accessor:"id",sort:!0},{Header:"Name",accessor:"name",sort:!0},{Header:"Phone Number",accessor:"phone",sort:!1},{Header:"Age",accessor:"age",sort:!0},{Header:"Company",accessor:"company",sort:!1}],p=[{text:"5",value:5},{text:"10",value:10},{text:"25",value:25},{text:"All",value:c.length}],g=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{breadCrumbItems:[{label:"Tables",path:"/features/tables/advanced"},{label:"Advanced Tables",path:"/features/tables/advanced",active:!0}],title:"Advanced Tables"}),(0,l.jsx)(o.Z,{children:(0,l.jsx)(i.Z,{children:(0,l.jsx)(s.Z,{children:(0,l.jsxs)(s.Z.Body,{children:[(0,l.jsx)("h4",{className:"header-title",children:"Pagination & Sort"}),(0,l.jsx)("p",{className:"text-muted fs-14 mb-4",children:"A simple example of table with pagination and column sorting"}),(0,l.jsx)(t.Z,{columns:d,data:c,pageSize:5,sizePerPageList:p,isSortable:!0,pagination:!0})]})})})}),(0,l.jsx)(o.Z,{children:(0,l.jsx)(i.Z,{children:(0,l.jsx)(s.Z,{children:(0,l.jsxs)(s.Z.Body,{children:[(0,l.jsx)("h4",{className:"header-title",children:"Search"}),(0,l.jsx)("p",{className:"text-muted fs-14 mb-4",children:"A Table allowing search"}),(0,l.jsx)(t.Z,{columns:d,data:c,pageSize:5,sizePerPageList:p,isSortable:!0,pagination:!0,isSearchable:!0})]})})})}),(0,l.jsx)(o.Z,{children:(0,l.jsx)(i.Z,{children:(0,l.jsx)(s.Z,{children:(0,l.jsxs)(s.Z.Body,{children:[(0,l.jsx)("h4",{className:"header-title",children:"Multiple Row Selection"}),(0,l.jsx)("p",{className:"text-muted fs-14 mb-4",children:"This table allowing selection of multiple rows"}),(0,l.jsx)(t.Z,{columns:d,data:c,pageSize:5,sizePerPageList:p,isSortable:!0,pagination:!0,isSelectable:!0})]})})})}),(0,l.jsx)(o.Z,{children:(0,l.jsx)(i.Z,{children:(0,l.jsx)(s.Z,{children:(0,l.jsxs)(s.Z.Body,{children:[(0,l.jsx)("h4",{className:"header-title",children:"Expand Row"}),(0,l.jsx)("p",{className:"text-muted fs-14 mb-4",children:"Expand row to see more additional details"}),(0,l.jsx)(t.Z,{columns:d,data:m,pageSize:5,sizePerPageList:p,isSortable:!0,pagination:!0,isExpandable:!0})]})})})})]})}},9140:function(e,a,n){n.d(a,{Z:function(){return S}});var o=n(1413),i=n(45987),s=n(81694),r=n.n(s),t=n(72791),c=n(10162),m=n(66543),l=n(27472),d=n(80184),p=["bsPrefix","className","variant","as"],g=t.forwardRef((function(e,a){var n=e.bsPrefix,s=e.className,t=e.variant,m=e.as,l=void 0===m?"img":m,g=(0,i.Z)(e,p),u=(0,c.vE)(n,"card-img");return(0,d.jsx)(l,(0,o.Z)({ref:a,className:r()(t?"".concat(u,"-").concat(t):u,s)},g))}));g.displayName="CardImg";var u=g,h=n(96040),y=["bsPrefix","className","as"],x=t.forwardRef((function(e,a){var n=e.bsPrefix,s=e.className,m=e.as,l=void 0===m?"div":m,p=(0,i.Z)(e,y),g=(0,c.vE)(n,"card-header"),u=(0,t.useMemo)((function(){return{cardHeaderBsPrefix:g}}),[g]);return(0,d.jsx)(h.Z.Provider,{value:u,children:(0,d.jsx)(l,(0,o.Z)((0,o.Z)({ref:a},p),{},{className:r()(s,g)}))})}));x.displayName="CardHeader";var b=x,f=["bsPrefix","className","bg","text","border","body","children","as"],j=(0,l.Z)("h5"),v=(0,l.Z)("h6"),Z=(0,m.Z)("card-body"),w=(0,m.Z)("card-title",{Component:j}),N=(0,m.Z)("card-subtitle",{Component:v}),P=(0,m.Z)("card-link",{Component:"a"}),R=(0,m.Z)("card-text",{Component:"p"}),B=(0,m.Z)("card-footer"),C=(0,m.Z)("card-img-overlay"),M=t.forwardRef((function(e,a){var n=e.bsPrefix,s=e.className,t=e.bg,m=e.text,l=e.border,p=e.body,g=e.children,u=e.as,h=void 0===u?"div":u,y=(0,i.Z)(e,f),x=(0,c.vE)(n,"card");return(0,d.jsx)(h,(0,o.Z)((0,o.Z)({ref:a},y),{},{className:r()(s,x,t&&"bg-".concat(t),m&&"text-".concat(m),l&&"border-".concat(l)),children:p?(0,d.jsx)(Z,{children:g}):g}))}));M.displayName="Card",M.defaultProps={body:!1};var S=Object.assign(M,{Img:u,Title:w,Subtitle:N,Body:Z,Link:P,Text:R,Header:b,Footer:B,ImgOverlay:C})},96040:function(e,a,n){var o=n(72791).createContext(null);o.displayName="CardHeaderContext",a.Z=o},66543:function(e,a,n){n.d(a,{Z:function(){return g}});var o=n(1413),i=n(45987),s=n(81694),r=n.n(s),t=/-(.)/g;var c=n(72791),m=n(10162),l=n(80184),d=["className","bsPrefix","as"],p=function(e){return e[0].toUpperCase()+(a=e,a.replace(t,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function g(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.displayName,s=void 0===n?p(e):n,t=a.Component,g=a.defaultProps,u=c.forwardRef((function(a,n){var s=a.className,c=a.bsPrefix,p=a.as,g=void 0===p?t||"div":p,u=(0,i.Z)(a,d),h=(0,m.vE)(c,e);return(0,l.jsx)(g,(0,o.Z)({ref:n,className:r()(s,h)},u))}));return u.defaultProps=g,u.displayName=s,u}},27472:function(e,a,n){var o=n(1413),i=n(72791),s=n(81694),r=n.n(s),t=n(80184);a.Z=function(e){return i.forwardRef((function(a,n){return(0,t.jsx)("div",(0,o.Z)((0,o.Z)({},a),{},{ref:n,className:r()(a.className,e)}))}))}}}]);
//# sourceMappingURL=831.4bb62905.chunk.js.map