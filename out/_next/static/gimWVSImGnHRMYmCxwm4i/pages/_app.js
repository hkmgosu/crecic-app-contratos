(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+oT+":function(e,t,n){var a=n("eVuF");function r(e,t,n,r,u,o,i){try{var l=e[o](i),f=l.value}catch(c){return void n(c)}l.done?t(f):a.resolve(f).then(r,u)}e.exports=function(e){return function(){var t=this,n=arguments;return new a(function(a,u){var o=e.apply(t,n);function i(e){r(o,a,u,i,l,"next",e)}function l(e){r(o,a,u,i,l,"throw",e)}i(void 0)})}}},"1TCz":function(e,t,n){"use strict";n.r(t);var a=n("0iUn"),r=n("sLSF"),u=n("MI3g"),o=n("a7VT"),i=n("Tit0"),l=n("q1tI"),f=n.n(l),c=n("8Bbg"),d=n.n(c),s=n("m/Pd"),p=n.n(s),h=n("pVnL"),v=n.n(h),m=(n("17x9"),n("2W6z"),n("OKji")),y=n("aXM8"),b=n("hfi/");var g=function(e){var t=e.children,n=e.theme,a=Object(y.a)(),r=f.a.useMemo(function(){var e=null===a?n:function(e,t){return"function"==typeof t?t(e):v()({},e,t)}(a,n);return null!==a&&e&&(e[b.a]=!0),e},[n,a]);return f.a.createElement(m.a.Provider,{value:r},t)},w=n("5CWz"),C=n("viY9"),_=n("vqLa"),k=n.n(_),A=n("V/ii"),x=n.n(A),I=n("fWIC"),M=n.n(I),T=Object(C.a)({palette:{primary:{light:k.a[200],main:k.a[500],dark:k.a[800]},secondary:{light:x.a[300],main:x.a[500],dark:x.a[700]},error:{light:M.a[300],main:M.a[500],dark:M.a[700]}},typography:{useNextVariants:!0}}),P=function(e){function t(){return Object(a.default)(this,t),Object(u.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(i.default)(t,e),Object(r.default)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode.removeChild(e)}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return f.a.createElement(c.Container,null,f.a.createElement(p.a,null,f.a.createElement("title",null,"My page")),f.a.createElement(g,{theme:T},f.a.createElement(w.a,null),f.a.createElement(t,n)))}}]),t}(d.a);t.default=P},"4hZ1":function(e,t,n){"use strict";var a=n("KI45"),r=a(n("0iUn")),u=a(n("MI3g")),o=a(n("a7VT")),i=a(n("AT/M")),l=a(n("sLSF")),f=a(n("Tit0")),c=a(n("dfwq")),d=a(n("ttDY"));(0,a(n("hfKm")).default)(t,"__esModule",{value:!0});var s=n("q1tI"),p="undefined"==typeof window;t.default=function(){var e,t=new d.default;function n(n){e=n.props.reduceComponentsToState((0,c.default)(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(a){function c(e){var a;return(0,r.default)(this,c),a=(0,u.default)(this,(0,o.default)(c).call(this,e)),p&&(t.add((0,i.default)(a)),n((0,i.default)(a))),a}return(0,f.default)(c,a),(0,l.default)(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),(0,l.default)(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(s.Component)}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var a=n("KI45"),r=a(n("0iUn")),u=a(n("sLSF")),o=a(n("MI3g")),i=a(n("a7VT")),l=a(n("Tit0")),f=a(n("ln6h")),c=n("5Uuq"),d=n("KI45");t.__esModule=!0,t.createUrl=A,t.Container=t.default=void 0;var s=d(n("htGi")),p=d(n("+oT+")),h=d(n("q1tI")),v=d(n("17x9")),m=n("Bu4q");t.AppInitialProps=m.AppInitialProps;var y=c(n("nOHt")),b=n("s4NR");function g(e){return w.apply(this,arguments)}function w(){return(w=(0,p.default)(f.default.mark(function e(t){var n,a,r;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,a=t.ctx,e.next=3,(0,m.loadGetInitialProps)(n,a);case 3:return r=e.sent,e.abrupt("return",{pageProps:r});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var C=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,u.default)(t,[{key:"getChildContext",value:function(){return{router:(0,y.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,a=e.pageProps,r=A(t);return h.default.createElement(_,null,h.default.createElement(n,(0,s.default)({},a,{url:r})))}}]),t}(h.default.Component);t.default=C,C.childContextTypes={router:v.default.object},C.origGetInitialProps=g,C.getInitialProps=g;var _=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){if(this.scrollToHash(),__NEXT_DATA__.nextExport){var e="?"+(0,b.stringify)(y.default.query),t=location.search&&e!==location.search;if(y.default.pathname.includes("/$")||t){var n=(0,b.parse)(location.search.startsWith("?")?location.search.substr(1):location.search),a=(0,b.stringify)((0,s.default)({},y.default.query,n));a=a?"?"+a:a,y.default.replace(y.default.pathname+a,location.pathname+a)}}}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.default.Component);t.Container=_;var k=(0,m.execOnce)(function(){0});function A(e){var t=e.pathname,n=e.asPath,a=e.query;return{get query(){return k(),a},get pathname(){return k(),t},get asPath(){return k(),n},back:function(){k(),e.back()},push:function(t,n){return k(),e.push(t,n)},pushTo:function(t,n){k();var a=n?t:"",r=n||t;return e.push(a,r)},replace:function(t,n){return k(),e.replace(t,n)},replaceTo:function(t,n){k();var a=n?t:"",r=n||t;return e.replace(a,r)}}}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])},"V/ii":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"};t.default=a},Wziy:function(e,t,n){"use strict";var a=function(e){return e&&e.__esModule?e:{default:e}};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var r=a(n("q1tI")),u=n("imt6");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.enabled,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,u=e.hasQuery;return n&&(!r||r&&(void 0!==u&&u))}t.isAmp=o,t.useAmp=function(){return o(r.default.useContext(u.AmpModeContext))},t.withAmp=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).hybrid,n=void 0!==t&&t;function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=r.default.useContext(u.AmpModeContext);return a.enabled=!0,a.hybrid=n,r.default.createElement(e,t)}return a.__nextAmpOnly=!n,a.getInitialProps=e.getInitialProps,a}},fWIC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};t.default=a},imt6:function(e,t,n){"use strict";var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var r=a(n("q1tI"));t.AmpModeContext=r.createContext({})},"m/Pd":function(e,t,n){"use strict";var a=n("KI45"),r=a(n("ttDY")),u=function(e){return e&&e.__esModule?e:{default:e}};(0,a(n("hfKm")).default)(t,"__esModule",{value:!0});var o=u(n("q1tI")),i=u(n("4hZ1")),l=n("imt6"),f=n("IClC"),c=n("Wziy");function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next-head",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[o.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})];return t||n.push(o.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1",className:e})),n}function s(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=d;var p=["name","httpEquiv","charSet","viewport","itemProp"];function h(e,t){return e.reduce(function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(s,[]).reverse().concat(d("",t.isAmp)).filter((n=new r.default,a=new r.default,u=new r.default,i={},function(e){if(e.key&&"number"!=typeof e.key&&0===e.key.indexOf(".$"))return!n.has(e.key)&&(n.add(e.key),!0);switch(e.type){case"title":case"base":if(a.has(e.type))return!1;a.add(e.type);break;case"meta":for(var t=0,o=p.length;t<o;t++){var l=p[t];if(e.props.hasOwnProperty(l))if("charSet"===l||"viewport"===l){if(u.has(l))return!1;u.add(l)}else{var f=e.props[l],c=i[l]||new r.default;if(c.has(f))return!1;c.add(f),i[l]=c}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+"next-head";"title"!==e.type||e.props.className||(n=void 0);var a=e.key||t;return o.default.cloneElement(e,{key:a,className:n})});var n,a,u,i}var v=i.default();function m(e){var t=e.children;return o.default.createElement(l.AmpModeContext.Consumer,null,function(e){return o.default.createElement(f.HeadManagerContext.Consumer,null,function(n){return o.default.createElement(v,{reduceComponentsToState:h,handleStateChange:n,isAmp:c.isAmp(e)},t)})})}m.rewind=v.rewind,t.default=m},vqLa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};t.default=a}},[["GcxT",1,0]]]);